import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure, publicProcedure,
} from "@/server/api/trpc";

const leaveRouter = createTRPCRouter({
   getLeave: publicProcedure
       .query(async ()=>{
              return {
                  data: "Hello World"
              }
           }
       )

});

export default leaveRouter;