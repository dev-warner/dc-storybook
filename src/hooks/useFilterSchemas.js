import { useState, useEffect } from "react";

export const useFilterSchemas = (schemaURI, client) => {
  const [filterSchemas, setFilterSchemas] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!schemaURI) return;

    const fetchFilterSchemas = async () => {
      const filterSchemas = await client
        .filterByContentType(schemaURI)
        .request();

      setFilterSchemas(filterSchemas);
      setLoading(false);
    };

    fetchFilterSchemas();
  }, [schemaURI]);

  return {
    loading,
    page: filterSchemas?.page || {},
    response: filterSchemas?.responses || [],
    refetch: () => setLoading(true),
  };
};
