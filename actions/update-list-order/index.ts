'use server'

import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

import { InputType, ReturnType } from "./types"
import { UpdateListOrder } from "./schema"

import { db } from "@/lib/db"
import { createSafeAction } from "@/lib/create-save-action"

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth()

    if (!userId || !orgId) {
        return {
            error: 'Unauthorized'
        }
    }

    const { items, boardId } = data

    let lists

    try {
        const transaction = items.map((list) => db.list.update({
            where: {
                id: list.id, board: { orgId }
            },
            data: { order: list.order }
        }))

        lists = await db.$transaction(transaction)
    } catch (error) {
        return {
            error: 'Failed to reorder.'
        }
    }

    revalidatePath(`/board/${boardId}`)

    return {
        data: lists
    }
}

export const updateListOrder = createSafeAction(UpdateListOrder, handler)