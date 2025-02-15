import { z } from "zod";

export const formUpdateClientSchema = z.object({
  name: z.string().optional(),
  wage: z.string().optional(),
  enterprise: z.string().optional(),
});

export type formUpdateClientSchemaData = z.infer<typeof formUpdateClientSchema>;
