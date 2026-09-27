import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { UsePaginationProps } from "./usePagination.types";

export const usePagination = ({
  totalItems,
  itemsPerPage,
  paramName = "page",
}: UsePaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get(paramName)) || 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const setPage = (next: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(paramName, String(next));
    router.push(`${pathname}?${params.toString()}`);
  };

  return { page, totalPages, setPage };
};
