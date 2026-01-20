import {
  TableBodyStyle,
  TableCellStyle,
  TableHeaderCellStyle,
  TableHeaderStyle,
  TableRowStyle,
  TableStyle,
} from "./styles";

interface TableSkeletonProps {
  rows?: number;
}

export const TableSkeleton = ({ rows = 5 }: TableSkeletonProps) => {
  return (
    <TableStyle>
      <TableHeaderStyle>
        <TableRowStyle>
          <TableHeaderCellStyle>ID</TableHeaderCellStyle>
          <TableHeaderCellStyle>Title</TableHeaderCellStyle>
          <TableHeaderCellStyle>Price</TableHeaderCellStyle>
          <TableHeaderCellStyle>Category</TableHeaderCellStyle>
        </TableRowStyle>
      </TableHeaderStyle>
      <TableBodyStyle>
        {Array.from({ length: rows }).map((_, index) => (
          <TableRowStyle key={index} className="skeleton">
            <TableCellStyle>
              <div className="skeleton-item" />
            </TableCellStyle>
            <TableCellStyle>
              <div className="skeleton-item" />
            </TableCellStyle>
            <TableCellStyle>
              <div className="skeleton-item" />
            </TableCellStyle>
            <TableCellStyle>
              <div className="skeleton-item" />
            </TableCellStyle>
          </TableRowStyle>
        ))}
      </TableBodyStyle>
    </TableStyle>
  );
};
