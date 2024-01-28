import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure, publicProcedure,
} from "@/server/api/trpc";

const leaveTypeRouter = createTRPCRouter({
    getAllLeaveTypes: protectedProcedure
    .query(({ctx})=>{
        return ctx.db.leaveType.findMany();
    }),
    createLeaveType: protectedProcedure
    .input(z.object({
        leaveType: z.object({
            name: z.string(),
            description: z.string(),
            allowedDays: z.number(),
        })
    }))
    .mutation(({ctx,input})=>{
        return ctx.db.leaveType.create({
            data: {
                name: input.leaveType.name,
                description: input.leaveType.description,
                allowDays: input.leaveType.allowedDays,
            }
        })
    }),
    updateLeaveType: protectedProcedure
    .input(z.object({
        leaveType: z.object({
            name: z.string(),
            description: z.string(),
            allowedDays: z.number(),
        })
    }))
    .mutation(({ctx,input})=>{
        return ctx.db.leaveType.update({
            where:{
                name: input.leaveType.name
            },
            data: input.leaveType
        })
    }),
    deleteLeaveType: protectedProcedure
    .input(z.object({
        name: z.string(),
    }))
    .mutation(({ctx,input})=>{
        return ctx.db.leaveType.delete({
            where:{
                name: input.name
            }
        })
    }),
    getLeaveTypeByName: protectedProcedure
    .input(z.object({
        name: z.string(),
    }))
    .query(({ctx,input})=>{
        return ctx.db.leaveType.findFirst({
            where:{
                name: input.name
            }
        })
    }),
});

export default leaveTypeRouter;