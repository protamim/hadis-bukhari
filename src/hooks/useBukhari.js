const useBukhari = async () => {
  const res = await fetch("https://hadis-bukhari.vercel.app/bukhari/api");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const error = !res.ok && "No data found!";
  const bukhari = await res.json();

  return { bukhari, error };
};

export default useBukhari;
