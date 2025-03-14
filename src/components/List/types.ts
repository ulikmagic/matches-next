import type { ReactNode } from "react";

export interface ListProps {
  isEmpty?: boolean;
  emptyTitle: string;
  isLoader?: boolean;
  isLoading?: boolean;
  children: ReactNode | ReactNode[];
}