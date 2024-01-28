import leaveRouter from "@/server/api/router/leave";
import { createTRPCRouter } from "@/server/api/trpc";
// import leaveTypeRouter from "@/server/api/routers/leave-type";
// import userRouter from "@/server/api/routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    leave: leaveRouter,
    // leaveType: leaveTypeRouter,
    // user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;