const NEWS_API_KEY = "1ae02c4bf69a4a1882b8019165404a8f";

export const getNews = async () => {
  const result = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`
  );

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};
