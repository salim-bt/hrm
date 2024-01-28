import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure, publicProcedure,
} from "@/server/api/trpc";

const employeeSchema =z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    role: z.array(z.string()),
    dob: z.date(),
    gender: z.enum(["MALE", "FEMALE"]),
    supervisorId: z.number().optional(),
    department: z.string().optional(),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
    cidOrPassport: z.string().optional(),
    citenzenship: z.string().optional(),
    nationality: z.string().optional(),
    religion: z.string().optional(),
    maritalStatus: z.enum(["SINGLE", "MARRIED"]),
    bloodGroup: z.string().optional(),
    emergencyContactName: z.string().optional(),
    emergencyContactNumber: z.string().optional(),
    emergencyContactEmail: z.string().optional(),
    emergencyContactRelation: z.string().optional(),
    emergencyContactAddress: z.string().optional(),
    joinedDate: z.date(),
  })

const employeeRouter = createTRPCRouter({
   getEmployees: protectedProcedure
    .query(({ctx})=>{
         return ctx.db.employee.findMany();
    }),
    getEmployeeById: protectedProcedure
    .input(z.object({
        id: z.string()
    }))
    .query(({ctx,input})=>{
        return ctx.db.employee.findFirst({
            where:{
                id: input.id
            }
        })
    }),
    createEmployee: protectedProcedure
    .input(z.object({
        employee: employeeSchema
    }))
    .mutation(({ctx,input})=>{
        const {employee} = input;

        return ctx.db.employee.create({
            data:employee
        })
    }),
    updateEmployee: protectedProcedure
    .input(z.object({
        employee: employeeSchema
    }))
    .mutation(({ctx,input})=>{
        const {employee} = input;

        return ctx.db.employee.update({
            where:{
                id: employee.id
            },
            data: employee
        })
    }),
    deleteEmployee: protectedProcedure
    .input(z.object({
        id: z.string()
    }))
    .mutation(({ctx,input})=>{
        return ctx.db.employee.delete({
            where:{
                id: input.id
            }
        })
    }),
    checkIfEmployeeExists: publicProcedure
    .input(z.object({
        email: z.string()
    }))
    .query(({ctx,input})=>{
        return ctx.db.employee.findFirst({
            where:{
                email: input.email
            }
        })
    }),
    getEmployeeLeaveTakenOfEachType: protectedProcedure
    .input(z.object({
        id: z.string()
    }))
    .query(async({ctx,input})=>{
        const leaves = await ctx.db.leave.findMany({
            where:{
                employeeId: input.id,
                status:{
                    in: ['APPROVED','COMPLETED']
                },
            },
            select:{
                leaveType: true,
                startDate: true,
                endDate: true,
            }
        })

        const leaveTypes = await ctx.db.leaveType.findMany();

        const leaveTypeMap = new Map<string,number>();

        leaveTypes.forEach(leaveType=>{
            leaveTypeMap.set(leaveType.name,leaveType.allowDays);
        })

        const leaveTakenMap = new Map<string,number>();

        leaves.forEach(leave=>{
            const startDate = new Date(leave.startDate);
            const endDate = new Date(leave.endDate);

            const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            const leaveTaken = leaveTakenMap.get(leave.leaveType.name) ?? 0;
            leaveTakenMap.set(leave.leaveType.name,leaveTaken+diffDays);
        })

        const leaveTakenOfEachType: any[] = [];

        leaveTakenMap.forEach((value,key)=>{
            leaveTakenOfEachType.push({
                leaveType: key,
                leaveTaken: value,
                leaveAllowed: leaveTypeMap.get(key),
            })
        })
    }),

});

export default employeeRouter;