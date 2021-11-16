import React from "react";
import "./style.css";

const MAX_ITENS = 5;
const MAX_LEFT = (MAX_ITENS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function pageOnChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <ul style={{ textAlign: "center" }} className="pagination">
      <li>
        <button onClick={() => pageOnChange(current - 1)} disabled={current === 1}>Anterior</button>
      </li>
      {Array.from({ length: Math.min(MAX_ITENS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => setOffset((page - 1) * limit)}
              className={page === current ? "pagination__item--active" : null}
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button onClick={() => pageOnChange(current + 1)} disabled={current === pages}>Próximo</button>
      </li>
    </ul>
  );
};

export default Pagination;
