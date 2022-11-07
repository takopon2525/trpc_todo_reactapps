import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure
    .input(
      z.object({
        msg: z.string().optional(),
      })
    )
    .query(({ input }) => {
      return { greeting: `Hello ${input.msg ?? "World"}` };
    }),
});

export type AppRouter = typeof appRouter;
