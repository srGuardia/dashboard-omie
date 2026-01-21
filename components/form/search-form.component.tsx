"use client";

import { useForm } from "@/hooks";
import { SearchDataSchema, searchSchema } from "@/schemas";
import { useSearchStore } from "@/stores";
import { usePathname } from "next/navigation";
import { Input } from "../ui";

export const SearchForm = () => {
  const { setSearchQuery } = useSearchStore();
  const pathname = usePathname();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ schema: searchSchema });

  const onSubmit = handleSubmit((data: SearchDataSchema) => {
    setSearchQuery(data.search);
  });

  const message = pathname.includes("users")
    ? "Faça uma busca, ex: Maria"
    : "Faça uma busca, ex: macbook";

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder={message}
        error={errors?.search?.message as string}
        defaultValue=""
        {...register("search")}
      />
    </form>
  );
};
