import { CardSkeleton } from "../ui";

interface KpiSkeletonProps {
  showTrend?: boolean;
}

export const KpiSkeleton = ({ showTrend = false }: KpiSkeletonProps) => {
  return <CardSkeleton showTrend={showTrend} />;
};
