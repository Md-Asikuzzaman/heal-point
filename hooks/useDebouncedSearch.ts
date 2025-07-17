import { useEffect, useState } from "react";
import { useSearchStore } from "@/store/searchStore";
import debounce from "lodash.debounce";

type Product = {
  id: string;
  title: string;
};

export const useDebouncedSearch = () => {
  const { query } = useSearchStore();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setData([]);
      return;
    }

    const fetchData = debounce(async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/products?q=${encodeURIComponent(query)}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setData([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    fetchData();

    return () => fetchData.cancel(); // cancel on cleanup
  }, [query]);

  return { data, loading };
};
