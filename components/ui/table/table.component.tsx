import {
  TableBodyStyle,
  TableCellStyle,
  TableHeaderCellStyle,
  TableHeaderStyle,
  TableRowStyle,
  TableStyle,
} from "./styles";
import { TableEmpty } from "./table-empty.component";
import { TableError } from "./table-error.component";
import { TablePagination } from "./table-pagination.component";
import { TableSkeleton } from "./table-skeleton.component";

type BaseRecord = Record<string, unknown> & { id: number | string };

type Column<T extends BaseRecord> = {
  title: string;
  key: keyof T;
  isMoney?: boolean;
};

interface TableProps<T extends BaseRecord> {
  data: T[];
  columns: Column<T>[];
  total: number;
  skip: number;
  itemsPerPage: number;
  onPageChange: (skip: number) => void;
  isLoading?: boolean;
  error?: string | null;
  emptyMessage?: string;
}

export const Table = <T extends BaseRecord>({
  data,
  columns,
  total,
  skip,
  itemsPerPage,
  onPageChange,
  isLoading = false,
  error = null,
  emptyMessage,
}: TableProps<T>) => {
  const currentPage = Math.floor(skip / itemsPerPage) + 1;
  const totalPages = Math.ceil(total / itemsPerPage);

  if (isLoading) {
    return <TableSkeleton />;
  }

  if (error) {
    return <TableError message={error} />;
  }

  if (!data || data.length === 0) {
    return <TableEmpty message={emptyMessage} />;
  }

  const formatPrice = (price: number | string) => {
    const numericPrice = typeof price === "string" ? parseFloat(price) : price;
    return numericPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handlePageChange = (page: number) => {
    const newSkip = (page - 1) * itemsPerPage;
    onPageChange(newSkip);
  };

  return (
    <div>
      <TableStyle>
        <TableHeaderStyle>
          <TableRowStyle>
            {columns.map((column, index) => (
              <TableHeaderCellStyle key={String(column.key) || index}>
                {column.title}
              </TableHeaderCellStyle>
            ))}
          </TableRowStyle>
        </TableHeaderStyle>
        <TableBodyStyle>
          {data.map((item) => (
            <TableRowStyle key={item.id}>
              {columns.map((column, index) => {
                const value = item[column.key];
                return (
                  <TableCellStyle key={String(column.key) || index}>
                    {column.isMoney && typeof value === "number"
                      ? formatPrice(value)
                      : String(value ?? "")}
                  </TableCellStyle>
                );
              })}
            </TableRowStyle>
          ))}
        </TableBodyStyle>
      </TableStyle>

      {totalPages > 1 && (
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          total={total}
          itemsPerPage={itemsPerPage}
        />
      )}
    </div>
  );
};
