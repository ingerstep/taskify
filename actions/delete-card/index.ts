'use server'

import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

import { InputType, ReturnType } from "./types"
import { DeleteCard } from "./schema"

import { db } from "@/lib/db"
import { createSafeAction } from "@/lib/create-save-action"
import { createAuditLog } from "@/lib/create-audit-log"
import { ACTION, ENTITY_TYPE } from "@prisma/client"

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth()

    if (!userId || !orgId) {
        return {
            error: 'Unauthorized'
        }
    }

    const { id, boardId } = data

    let card

    try {
        card = await db.card.delete({
            where: {
                id,
                list: {
                    board: {
                        orgId
                    }
                }
            }
        })

        await createAuditLog({
            entityTitle: card.title,
            entityId: card.id,
            entityType: ENTITY_TYPE.CARD,
            action: ACTION.DELETE
        })
    } catch (error) {
        return {
            error: 'Failed to delete.'
        }
    }

    revalidatePath(`/board/${boardId}`)

    return {
        data: card
    }
}

export const deleteCard = createSafeAction(DeleteCard, handler)