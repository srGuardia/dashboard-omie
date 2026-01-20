import { Kpi, ProductList } from "@/components";

export default function HomePage() {
  return (
    <>
      <Kpi />

      <div className="mt-10">
        <ProductList />
      </div>
    </>
  );
}
