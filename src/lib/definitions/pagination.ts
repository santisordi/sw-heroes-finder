export interface PaginationProps {
    heroesPerPage: number;
    totalHeroes: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
  }