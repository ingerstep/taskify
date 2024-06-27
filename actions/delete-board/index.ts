'use server'

import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { InputType, ReturnType } from "./types"
import { DeleteBoard } from "./schema"

import { db } from "@/lib/db"
import { createSafeAction } from "@/lib/create-save-action"
import { createAuditLog } from "@/lib/create-audit-log"
import { ACTION, ENTITY_TYPE } from "@prisma/client"
import { decreaseAvailableCount } from "@/lib/org-limit"
import { checkSubscription } from "@/lib/subscription"

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth()
    const isPro = checkSubscription()

    if (!userId || !orgId) {
        return {
            error: 'Unauthorized'
        }
    }

    const { id } = data

    let board

    try {
        board = await db.board.delete({
            where: {
                id,
                orgId
            },
        })

        if (!isPro) {
            await decreaseAvailableCount()
        }

        await createAuditLog({
            entityTitle: board.title,
            entityId: board.id,
            entityType: ENTITY_TYPE.BOARD,
            action: ACTION.DELETE
        })
    } catch (error) {
        return {
            error: 'Failed to delete.'
        }
    }

    revalidatePath(`/organization/${orgId}`)
    redirect(`/organization/${orgId}`)
}

export const deleteBoard = createSafeAction(DeleteBoard, handler)