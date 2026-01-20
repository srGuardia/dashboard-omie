import type { ProductDataSchema } from "@/schemas";
import { getAllProducts } from "@/services";
import { Card } from "../ui";

export const KpiStock = async () => {
  const data = await getAllProducts();

  if (!data?.products || data.products.length === 0) {
    return <Card title="Estoque" value={0} />;
  }

  const totalStock = data.products.reduce(
    (sum: number, product: ProductDataSchema) => sum + product.stock,
    0,
  );

  return <Card title="Estoque" value={totalStock} />;
};
