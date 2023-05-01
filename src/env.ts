import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod"

export const env = createEnv({
   server: {
    DATABASE_URL: z.string().url()
   },
   client: {
    NEXT_PUBLIC_NAME: z.string().min(1).max(10),
   },
   runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_NAME: process.env.NEXT_PUBLIC_NAME
   }
})