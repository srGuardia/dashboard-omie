import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--background);
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const TableHeaderStyle = styled.thead`
  background: var(--gradient);
`;

export const TableBodyStyle = styled.tbody`
  background: var(--background);
`;

export const TableRowStyle = styled.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }

  &.skeleton {
    &:hover {
      background-color: transparent;
    }
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;

    &:hover {
      background-color: #1f2937;
    }
  }
`;

export const TableHeaderCellStyle = styled.th`
  padding: 1.2rem 1.6rem;
  text-align: left;
  font-weight: 600;
  font-size: 1.4rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TableCellStyle = styled.td`
  padding: 1.2rem 1.6rem;
  font-size: 1.4rem;
  color: var(--foreground);

  .skeleton-item {
    height: 2rem;
    background: linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px);
    background-size: 200px;
    animation: ${shimmer} 1.5s infinite;
    border-radius: 0.4rem;
  }

  @media (prefers-color-scheme: dark) {
    .skeleton-item {
      background: linear-gradient(
        90deg,
        #374151 0px,
        #4b5563 40px,
        #374151 80px
      );
    }
  }
`;

export const PaginationButtonStyle = styled.button`
  padding: 0.8rem 1.6rem;
  background: var(--gradient);
  color: #ffffff;
  border: none;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const PaginationInfoStyle = styled.span`
  font-size: 1.2rem;
  color: var(--foreground);
  opacity: 0.8;
`;

export const PaginationStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 1.6rem;
  background: var(--background);
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  .pagination-controls {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .page-info {
    font-size: 1.4rem;
    color: var(--foreground);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;

    .page-info {
      font-size: 1rem;
    }

    .pagination-controls {
      gap: 1rem;
    }

    ${PaginationButtonStyle} {
      font-size: 1rem;
    }

    ${PaginationInfoStyle} {
      font-size: 1rem;
    }
  }
`;

export const EmptyStateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: var(--background);
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;

  .empty-icon {
    font-size: 4rem;
    margin-bottom: 1.6rem;
    opacity: 0.6;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--foreground);
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    color: var(--foreground);
    opacity: 0.7;
  }
`;

export const ErrorStateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: var(--background);
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;

  .error-icon {
    font-size: 4rem;
    margin-bottom: 1.6rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    color: #dc2626;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    color: var(--foreground);
    opacity: 0.7;
    margin-bottom: 2rem;
  }

  .retry-button {
    padding: 1rem 2rem;
    background: var(--gradient);
    color: #ffffff;
    border: none;
    border-radius: 0.6rem;
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;
