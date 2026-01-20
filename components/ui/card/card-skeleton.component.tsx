import {
  CardSkeletonStyle,
  CardTitleSkeletonStyle,
  CardTrendSkeletonStyle,
  CardValueSkeletonStyle,
} from "./styles";

interface CardSkeletonProps {
  showTrend?: boolean;
}

export const CardSkeleton = ({ showTrend = false }: CardSkeletonProps) => {
  return (
    <CardSkeletonStyle>
      <CardTitleSkeletonStyle />
      <CardValueSkeletonStyle />
      {showTrend && <CardTrendSkeletonStyle />}
    </CardSkeletonStyle>
  );
};
