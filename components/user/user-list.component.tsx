"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { UsersListDataSchema } from "@/schemas";
import { getSearchUsers, getUsers } from "@/services";
import { useSearchStore } from "@/stores";
import { Table } from "../ui";

const itemsPerPage = 10 as const;

export const UserList = () => {
  const { searchQuery, clearSearch, skip, setSkip } = useSearchStore();
  const searchParams = useSearchParams();

  const errorParam = searchParams.get("error");

  const {
    data: usersData,
    isLoading: isLoadingUsers,
    error: usersError,
  } = useQuery<UsersListDataSchema>({
    queryKey: ["users", skip],
    queryFn: async () => {
      if (errorParam) {
        const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));
        await delay();
        throw new Error("Erro feito para testes ao buscar usuários");
      }

      const products = await getUsers({ skip });
      return products;
    },
    enabled: !searchQuery,
    retry: false,
  });

  const {
    data: searchData,
    isLoading: isLoadingSearch,
    error: searchError,
  } = useQuery<UsersListDataSchema>({
    queryKey: ["search_users", searchQuery, skip],
    queryFn: async () => {
      if (errorParam) {
        const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));
        await delay();
        throw new Error("Erro feito para testes ao buscar usuários pela busca");
      }

      const results = await getSearchUsers({ query: searchQuery, skip });
      return results;
    },
    enabled: !!searchQuery,
  });

  const handlePageChange = (newSkip: number) => {
    setSkip(newSkip);
  };

  const data = searchQuery ? searchData : usersData;
  const isLoading = searchQuery ? isLoadingSearch : isLoadingUsers;
  const error = searchQuery ? searchError : usersError;

  useEffect(() => {
    clearSearch();

    return () => setSkip(0);
  }, [clearSearch, setSkip]);

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
