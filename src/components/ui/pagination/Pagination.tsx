import { PaginationProps } from "../../../lib/definitions/pagination";
import "./Pagination.css";

export function Pagination({
  heroesPerPage,
  totalHeroes,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalHeroes / heroesPerPage); i++) {
    pageNumber.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n: number) => {
    if (n >= 1 && n <= pageNumber.length) {
      setCurrentPage(n);
    }
  };

  return (
    <nav className="pagination">
      <button
        className={`pagination-previous ${
          currentPage === 1 ? "is-disable" : ""
        }`}
        onClick={onPreviusPage}
      >
        Previous
      </button>
      <ul className="pagination-list">
        {pageNumber.map((noPage) => (
          <li key={noPage}>
            <a
              onClick={() => onSpecificPage(noPage)}
              className={`pagination-link ${
                noPage === currentPage ? "is-current" : ""
              }`}
            >
              {noPage}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={`pagination-next ${
          currentPage >= pageNumber.length ? "is-disable" : ""
        }`}
        onClick={onNextPage}
      >
        Next page
      </button>
    </nav>
  );
}
