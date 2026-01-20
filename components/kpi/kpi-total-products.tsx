import { getProductsStats } from "@/services";
import { Card } from "../ui";

export const KpiTotalProducts = async () => {
  const stats = await getProductsStats();

  return <Card title="Total Produtos" value={stats?.total || 0} />;
};
