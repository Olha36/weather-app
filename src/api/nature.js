const NATURE_API_KEY = "46665930-55167d099cef8da88e2934864";

export const getNatureImages = async () => {
  const res = await fetch(`https://pixabay.com/api/?key=${NATURE_API_KEY}`);
  if (!res.ok) throw new Error("Faoiled to fetch pictures");

  return res.json();
};
