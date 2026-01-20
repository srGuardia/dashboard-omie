"use client";

import { ProductListDataSchema } from "@/schemas";
import { getProducts } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Table } from "../ui";

export const ProductList = () => {
  const [skip, setSkip] = useState(0);
  const itemsPerPage = 10;

  const { data, isLoading, error } = useQuery<ProductListDataSchema>({
    queryKey: ["products", skip],
    queryFn: async () => {
      const products = await getProducts({ skip });
      return products;
    },
  });

  const handlePageChange = (newSkip: number) => {
    setSkip(newSkip);
  };

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
