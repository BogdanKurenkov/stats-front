export interface TableColumn {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
  width?: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, string | number | boolean>[];
  className?: string;
}
