import { Trend } from "@/enums";
import { Icon } from "../icon";
import {
  CardDownStyle,
  CardStyle,
  CardTitleStyle,
  CardUpStyle,
  CardValueStyle,
} from "./styles";

interface CardProps {
  title: string;
  value: string | number;
  trend?: Trend;
  isMoney?: boolean;
}

const CardTrend = ({ trend }: Pick<CardProps, "trend">) => {
  const component = {
    [Trend.UP]: (
      <CardUpStyle>
        <Icon name="arrow-up" />
      </CardUpStyle>
    ),
    [Trend.DOWN]: (
      <CardDownStyle>
        <Icon name="arrow-down" />
      </CardDownStyle>
    ),
  };

  return component[trend as keyof typeof Trend];
};

export const Card = ({ title, value, trend, isMoney }: CardProps) => {
  const convertedValue = () => {
    if (isMoney) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }

    return value;
  };

  return (
    <CardStyle>
      <CardTitleStyle>{title}</CardTitleStyle>
      <CardValueStyle>{convertedValue()}</CardValueStyle>

      {trend && <CardTrend trend={trend} />}
    </CardStyle>
  );
};
