import { ProductList } from "@/components";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Omie - Produtos",
  description: "Tela de listagem dos produtos",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductList />;
    </Suspense>
  );
}
