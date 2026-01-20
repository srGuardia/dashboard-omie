import { Suspense } from "react";
import { KpiAveragePrice } from "./kpi-average-price";
import { KpiCategories } from "./kpi-categories";
import { KpiSkeleton } from "./kpi-skeleton.component";
import { KpiStock } from "./kpi-stock";
import { KpiTotalProducts } from "./kpi-total-products";
import { KpiContainerStyle } from "./styles";

export const Kpi = () => {
  return (
    <KpiContainerStyle>
      <Suspense fallback={<KpiSkeleton />}>
        <KpiTotalProducts />
      </Suspense>

      <Suspense fallback={<KpiSkeleton />}>
        <KpiAveragePrice />
      </Suspense>

      <Suspense fallback={<KpiSkeleton />}>
        <KpiCategories />
      </Suspense>

      <Suspense fallback={<KpiSkeleton />}>
        <KpiStock />
      </Suspense>
    </KpiContainerStyle>
  );
};
