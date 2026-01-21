import { ProductList } from "@/components";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductList />;
    </Suspense>
  );
}
