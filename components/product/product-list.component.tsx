"use client";

import { ProductListDataSchema } from "@/schemas";
import { getProducts, getSearchProduct } from "@/services";
import { useSearchStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Table } from "../ui";

const itemsPerPage = 10 as const;

export const ProductList = () => {
  const [skip, setSkip] = useState(0);
  const { searchQuery, clearSearch } = useSearchStore();
  const searchParams = useSearchParams();

  const errorParam = searchParams.get("error");

  const {
    data: productsData,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useQuery<ProductListDataSchema>({
    queryKey: ["products", skip],
    queryFn: async () => {
      if (errorParam) {
        const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));
        await delay();
        throw new Error("Erro feito para testes ao buscar produtos");
      }

      const products = await getProducts({ skip });
      return products;
    },
    enabled: !searchQuery,
    retry: false,
  });

  const {
    data: searchData,
    isLoading: isLoadingSearch,
    error: searchError,
  } = useQuery<ProductListDataSchema>({
    queryKey: ["search", searchQuery, skip],
    queryFn: async () => {
      if (errorParam) {
        const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));
        await delay();
        throw new Error("Erro feito para testes ao buscar produtos pela busca");
      }

      const results = await getSearchProduct({ query: searchQuery, skip });
      return results;
    },
    enabled: !!searchQuery,
  });

  const data = searchQuery ? searchData : productsData;
  const isLoading = searchQuery ? isLoadingSearch : isLoadingProducts;
  const error = searchQuery ? searchError : productsError;

  const handlePageChange = (newSkip: number) => {
    setSkip(newSkip);
  };

  useEffect(() => {
    clearSearch();

    return () => setSkip(0);
  }, [clearSearch]);

  return (
    <Table
      columns={[
        { title: "ID", key: "id" },
        { title: "Produto", key: "title" },
        { title: "Preço", key: "price", isMoney: true },
        { title: "Categoria", key: "category" },
      ]}
      data={data?.products || []}
      total={data?.total || 0}
      skip={skip}
      itemsPerPage={itemsPerPage}
      onPageChange={handlePageChange}
      isLoading={isLoading}
      error={error?.message}
    />
  );
};
