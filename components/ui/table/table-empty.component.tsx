import { EmptyStateStyle } from "./styles";

interface TableEmptyProps {
  message?: string;
}

export const TableEmpty = ({
  message = "Nenhum produto encontrado",
}: TableEmptyProps) => {
  return (
    <EmptyStateStyle>
      <div className="empty-icon">📦</div>
      <h3>Sem dados</h3>
      <p>{message}</p>
    </EmptyStateStyle>
  );
};
