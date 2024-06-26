'use server'

import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

import { InputType, ReturnType } from "./types"
import { UpdateCard } from "./schema"

import { db } from "@/lib/db"
import { createSafeAction } from "@/lib/create-save-action"

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth()

    if (!userId || !orgId) {
        return {
            error: 'Unauthorized'
        }
    }

    const { id, boardId, ...values } = data

    let card

    try {
        card = await db.card.update({
            where: {
                id,
                list:{
                    board: {
                        orgId
                    }
                }
            },
            data: {
                ...values
            }
        })
    } catch (error) {
        return {
            error: 'Failed to update.'
        }
    }

    revalidatePath(`/board/${boardId}`)

    return {
        data: card
    }
}

export const updateCard = createSafeAction(UpdateCard, handler)