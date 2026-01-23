export const getFavorites = (): string[] => {
  try {
    const stored = localStorage.getItem('toon-bar-favs');
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
};

export const toggleFavorite = (id: string): boolean => {
  const favs = getFavorites();
  const isFav = favs.includes(id);
  let newFavs;
  
  if (isFav) {
    newFavs = favs.filter(favId => favId !== id);
  } else {
    newFavs = [...favs, id];
  }
  
  localStorage.setItem('toon-bar-favs', JSON.stringify(newFavs));
  return !isFav;
};

export const isFavorite = (id: string): boolean => {
  const favs = getFavorites();
  return favs.includes(id);
};