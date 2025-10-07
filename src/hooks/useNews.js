import { useEffect, useState } from "react";
import { getNews } from "../api/newsApi";

export const useNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getNews();
        const newsData = result.articles.map((item) => ({
          image: item.urlToImage,
          title: item.title,
        }));

        setData(newsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};
