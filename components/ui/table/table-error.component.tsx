import { ErrorStateStyle } from "./styles";

interface TableErrorProps {
  message: string;
  onRetry?: () => void;
}

export const TableError = ({ message, onRetry }: TableErrorProps) => {
  return (
    <ErrorStateStyle>
      <div className="error-icon">⚠️</div>
      <h3>Erro ao carregar dados</h3>
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="retry-button">
          Tentar novamente
        </button>
      )}
    </ErrorStateStyle>
  );
};
