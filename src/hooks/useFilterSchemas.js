import { useState, useEffect, useCallback } from "react";

export const useFilterSchemas = (schemaURI, sortKey, client) => {
  const [filterSchemas, setFilterSchemas] = useState({
    page: {},
    responses: [],
  });

  const [sortOptions, setSortOptions] = useState({
    pageSize: 12,
    order: "DESC",
  });
  const [previousPages, setPreviousPages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFilterSchemas = async (cursor) => {
    const filter = await client
      .filterByContentType(schemaURI)
      .page(~~sortOptions.pageSize, cursor);

    if (sortKey) {
      filter.sortBy(sortKey, sortOptions.order);
    }

    const filterSchemas = await filter.request({
      depth: "all",
      format: "inlined",
    });

    setFilterSchemas(filterSchemas);
    setLoading(false);
  };

  const nextPage = useCallback(async () => {
    if (!filterSchemas?.page?.nextCursor) return;

    setLoading(true);
    await fetchFilterSchemas(filterSchemas.page.nextCursor);
    setPreviousPages([...previousPages, filterSchemas]);
  }, [filterSchemas, previousPages]);

  const prevPage = useCallback(() => {
    if (!previousPages?.length) return;

    setFilterSchemas(previousPages[previousPages.length - 1]);
    setPreviousPages(previousPages.slice(0, previousPages.length - 1));
  }, [previousPages]);

  const sort = useCallback(
    (options) => {
      setLoading(true);
      setSortOptions(options);
      setPreviousPages([]);
    },
    [filterSchemas, sortOptions]
  );

  useEffect(() => {
    if (!schemaURI) return;

    fetchFilterSchemas();
  }, [schemaURI, sortOptions.pageSize, sortOptions.order]);

  return {
    loading,
    page: filterSchemas?.page,
    response: filterSchemas?.responses || [],
    pagination: {
      nextPage,
      prevPage,
      sortOptions,
      setSortOptions: sort,
      hasSortKey: Boolean(sortKey),
      hasNextPage: Boolean(filterSchemas?.page?.nextCursor),
      hasPrevPage: Boolean(previousPages?.length),
    },
  };
};
