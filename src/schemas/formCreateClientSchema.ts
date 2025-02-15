import { z } from "zod";

export const formCreateClientSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  wage: z.string().min(5),
  enterprise: z.string().min(5),
});
export type formCreateClientSchemaData = z.infer<typeof formCreateClientSchema>;
