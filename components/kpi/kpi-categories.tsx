import { getCategories } from "@/services";
import { Card } from "../ui";

export const KpiCategories = async () => {
  const categories = await getCategories();

  return <Card title="Categorias" value={categories?.length || 0} />;
};
