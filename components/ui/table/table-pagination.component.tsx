import {
  PaginationButtonStyle,
  PaginationInfoStyle,
  PaginationStyle,
} from "./styles";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  total: number;
  itemsPerPage: number;
}

export const TablePagination = ({
  currentPage,
  totalPages,
  onPageChange,
  total,
  itemsPerPage,
}: TablePaginationProps) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, total);

  return (
    <PaginationStyle>
      <PaginationInfoStyle>
        Mostrando {startItem} a {endItem} de {total} produtos
      </PaginationInfoStyle>

      <div className="pagination-controls">
        <PaginationButtonStyle
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </PaginationButtonStyle>

        <span className="page-info">
          Página {currentPage} de {totalPages}
        </span>

        <PaginationButtonStyle
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próxima
        </PaginationButtonStyle>
      </div>
    </PaginationStyle>
  );
};
