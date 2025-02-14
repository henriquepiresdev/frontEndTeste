import { z } from "zod";

export const formHomeSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
});

export type UserFormData = z.infer<typeof formHomeSchema>;
