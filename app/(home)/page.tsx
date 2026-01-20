import { Card } from "@/components";
import { Trend } from "@/enums";

export default async function HomePage() {
  return (
    <div className="mt-10 px-10">
      <Card title="Receita" value="R$ 120.000" trend={Trend.UP} />
      <Card title="Usuários Ativos" value={3200} trend={Trend.UP} />
      <Card title="Conversão" value="4,8%" trend={Trend.DOWN} />
      <Card title="Churn" value="1,2%" />
    </div>
  );
}
