import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SERVER_ONLY: z.string().min(5),
  },
  client: {
    NEXT_PUBLIC_CLIENT_ONLY: z.string().min(1),
  },
  runtimeEnv: {
    SERVER_ONLY: process.env.SERVER_ONLY,
    NEXT_PUBLIC_CLIENT_ONLY: process.env.NEXT_PUBLIC_CLIENT_ONLY,
  },
});
