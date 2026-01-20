import type { ProductDataSchema } from "@/schemas";
import { getAllProducts } from "@/services";
import { Card } from "../ui";

export const KpiAveragePrice = async () => {
  const data = await getAllProducts();

  if (!data?.products || data.products.length === 0) {
    return <Card title="Média" value={0} isMoney />;
  }

  const totalPrice = data.products.reduce(
    (sum: number, product: ProductDataSchema) => sum + product.price,
    0,
  );
  const averagePrice = totalPrice / data.products.length;

  return (
    <Card title="Média" value={Math.round(averagePrice * 100) / 100} isMoney />
  );
};
