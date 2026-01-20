"use client";

import { UsersListDataSchema } from "@/schemas";
import { getUsers } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Table } from "../ui";

export const UserList = () => {
  const [skip, setSkip] = useState(0);
  const itemsPerPage = 10;

  const { data, isLoading, error } = useQuery<UsersListDataSchema>({
    queryKey: ["users", skip],
    queryFn: async () => {
      const products = await getUsers({ skip });
      return products;
    },
  });

  const handlePageChange = (newSkip: number) => {
    setSkip(newSkip);
  };

  return (
    <Table
      columns={[
        {
          title: "ID",
          key: "id",
        },
        {
          title: "Nome",
          key: "firstName",
        },
        {
          title: "E-mail",
          key: "email",
        },
      ]}
      data={data?.users || []}
      total={data?.total || 0}
      skip={skip}
      itemsPerPage={itemsPerPage}
      onPageChange={handlePageChange}
      isLoading={isLoading}
      error={error?.message}
      emptyMessage={"Nenhum usuário encontrado"}
    />
  );
};
