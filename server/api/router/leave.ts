import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure, publicProcedure,
} from "@/server/api/trpc";

const leaveRouter = createTRPCRouter({
   getLeavesById: protectedProcedure
   .input(z.object({
         id: z.string()
    }))
    .query(({ctx,input})=>{
        return ctx.db.leave.findMany({
            where:{
                employeeId: input.id
            }
        })
    }),
    getActiveLeavesById: protectedProcedure
    .input(z.object({
        id: z.string()
    }))
    .query(({ctx,input})=>{
        return ctx.db.leave.findMany({
            where:{
                employeeId: input.id,
                status: 'PENDING'
            }
        })
    }),
    getArchivedLeavesById: protectedProcedure
    .input(z.object({
        id: z.string()
    }))
    .query(({ctx,input})=>{
        return ctx.db.leave.findMany({
            where:{
                employeeId: input.id,
                status: {
                    notIn: ['PENDING']
                }
            }
        })
    }),
    createLeave: protectedProcedure
    .input(z.object({
        leave: z.object({
            employeeId: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            reason: z.string(),
            status: z.string(),
            attachments: z.array(z.string()),
            receivedBy: z.string(),
            leaveType: z.string(),
            approverId: z.string(),
        })
    }))
    .mutation(({ctx,input})=>{
        return ctx.db.leave.create({
            data:{
                employee:{
                    connect:{
                        id: input.leave.employeeId
                    }
                },
                startDate: input.leave.startDate,
                endDate: input.leave.endDate,
                reason: input.leave.reason,
                receivedBy: input.leave.receivedBy,
                leaveType:{
                    connect:{
                        name: input.leave.leaveType
                    }
                },
                attachments: input.leave.attachments,
                approver:{
                    connect:{
                        id: input.leave.approverId
                    }
                }
            }
        })
    }),
    updateLeave: protectedProcedure
    .input(z.object({
        leave: z.object({
            id: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            reason: z.string(),
            status: z.string(),
            attachments: z.array(z.string()),
            receivedBy: z.string(),
            leaveType: z.string(),
        })
    }))
    .mutation(({ctx,input})=>{
        return ctx.db.leave.update({
            where:{
                id: input.leave.id
            },
            data:{
                startDate: input.leave.startDate,
                endDate: input.leave.endDate,
                reason: input.leave.reason,
                receivedBy: input.leave.receivedBy,
                leaveType:{
                    connect:{
                        name: input.leave.leaveType
                    }
                },
                attachments: input.leave.attachments,
            }
        })
    }),
    deleteLeave: protectedProcedure
    .input(z.object({
        id: z.string()
    }))
    .mutation(({ctx,input})=>{
        return ctx.db.leave.delete({
            where:{
                id: input.id
            }
        })
    }),
    getLeaveById: protectedProcedure
    .input(z.object({
        id: z.string()
    }))
    .query(({ctx,input})=>{
        return ctx.db.leave.findUnique({
            where:{
                id: input.id
            }
        })
    }),
    getLeavesToApproveBySuperVisorId: protectedProcedure
    .input(z.object({
        id: z.string()
    }))
    .query(({ctx,input})=>{
        return ctx.db.leave.findMany({
            where:{
                approver:{
                    id: input.id
                },
                status: 'PENDING'
            }
        })
    }),
    getLeavesApprovedBySuperVisorId: protectedProcedure
    .input(z.object({
        id: z.string()
    }))
    .query(({ctx,input})=>{
        return ctx.db.leave.findMany({
            where:{
                approver:{
                    id: input.id
                },
                status: {
                    notIn: ['PENDING']
                }
            }
        })
    }),
});

export default leaveRouter;