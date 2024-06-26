import { db } from "./db"

import { auth, currentUser } from "@clerk/nextjs/server"
import { ACTION, ENTITY_TYPE } from "@prisma/client"


interface Props {
    entityId: string
    entityType: ENTITY_TYPE
    entityTitle: string
    action: ACTION
}

export const createAuditLog = async (props: Props) => {
    try {
        const { orgId } = auth()
        const user = await currentUser()

        if (!user || !orgId) {
            throw new Error('User not found')
        }

        const { action, entityId, entityTitle, entityType } = props

        await db.auditLog.create({
            data: {
                orgId,
                entityId,
                entityType,
                entityTitle,
                action,
                userId: user.id,
                userImage: user?.imageUrl,
                userName: user?.firstName + ' ' + user?.lastName
            }
        })
    } catch (error) {
        console.log('[AUDIT_LOG_ERROR]', error);

    }
}