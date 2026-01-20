import { z } from "zod";

export const searchSchema = z.object({
  search: z.string("Campo obrigatório!").min(3, "Campo muito curto!"),
});

export type SearchDataSchema = z.infer<typeof searchSchema>;
