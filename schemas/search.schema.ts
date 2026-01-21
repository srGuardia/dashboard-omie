import { z } from "zod";

export const searchSchema = z.object({
  search: z.string("Campo obrigatório!").default(""),
});

export type SearchDataSchema = z.infer<typeof searchSchema>;
