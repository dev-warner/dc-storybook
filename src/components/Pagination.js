import React from "react";

export default function Pagination({ page }) {
  const {
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
    hasSortKey,
    setSortOptions,
    sortOptions,
  } = page;

  return (
    <div className="pagination">
      <div>
        {hasPrevPage && <button onClick={prevPage}>prev</button>}
        {hasNextPage && <button onClick={nextPage}>next</button>}
      </div>

      <div>
        {hasSortKey && (
          <div>
            <label>order</label>
            <select
              value={sortOptions.order}
              onChange={(e) => {
                setSortOptions({
                  ...sortOptions,
                  order: e.target.value,
                });
              }}
            >
              <option value={"DESC"}>DESC</option>
              <option value={"ASC"}>ASC</option>
            </select>
          </div>
        )}
        <label>page size</label>
        <select
          value={sortOptions.pageSize}
          onChange={(e) => {
            setSortOptions({
              ...sortOptions,
              pageSize: e.target.value,
            });
          }}
        >
          <option value={1}>1</option>
          <option value={6}>6</option>
          <option value={12}>12</option>
        </select>
      </div>
    </div>
  );
}
