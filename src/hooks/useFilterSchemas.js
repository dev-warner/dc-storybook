import { useState, useEffect } from "react";

export const useFilterSchemas = (schemaURI, client) => {
  const [filterSchemas, setFilterSchemas] = useState({});
  const [previousPages, setPreviousPages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFilterSchemas = async (cursor) => {
    const filterSchemas = await client
      .filterByContentType(schemaURI)
      .page(cursor || 2)
      .request();

    setFilterSchemas(filterSchemas);
    setLoading(false);
  };

  useEffect(() => {
    if (!schemaURI) return;

    fetchFilterSchemas();
  }, [schemaURI]);

  return {
    loading,
    page: filterSchemas?.page || {},
    response: filterSchemas?.responses || [],
    refetch: () => setLoading(true),
    nextPage: () => {
      if (!filterSchemas?.page?.nextCursor) return;
      setLoading(true);

      setPreviousPages([...previousPages, filterSchemas]);

      fetchFilterSchemas(filterSchemas.page.nextCursor);
    },
    prevPage: () => {
      if (!previousPages?.length) return;

      setFilterSchemas(previousPages[previousPages.length - 1]);
      setPreviousPages(previousPages.slice(0, previousPages.length - 1));
    },
    hasNextPage: Boolean(filterSchemas?.page?.nextCursor),
    hasPrevPage: Boolean(previousPages?.length),
  };
};
