import { useEffect, useState } from "react";
import { getNatureImages } from "../api/nature";

export const useNature = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNatureData = async () => {
      try {
        setLoading(true);
        const result = await getNatureImages();

        const natureData = result.hits.map((img) => ({
          image: img.previewURL,
          tags: img.tags[0],
        }));

        setData(natureData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNatureData();
  }, []);

  return { data, loading, error };
};
