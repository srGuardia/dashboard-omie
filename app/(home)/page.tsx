import { Kpi, ProductList } from "@/components";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Kpi />

      <div className="mt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList />
        </Suspense>
      </div>
    </>
  );
}
