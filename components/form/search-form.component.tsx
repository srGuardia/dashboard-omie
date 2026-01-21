"use client";

import { useForm } from "@/hooks";
import { SearchDataSchema, searchSchema } from "@/schemas";
import { useSearchStore } from "@/stores";
import { Input } from "../ui";

export const SearchForm = () => {
  const { setSearchQuery } = useSearchStore();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ schema: searchSchema });

  const onSubmit = handleSubmit((data: SearchDataSchema) => {
    setSearchQuery(data.search);
  });

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Faça uma busca, ex: macbook"
        error={errors?.search?.message as string}
        defaultValue=""
        {...register("search")}
      />
    </form>
  );
};
