
const sortByRating = (a, b) => b.rating - a.rating;

export const sorting = {
  Popular: (games) => games.slice(),
  TopRatedFirst: (games) => games.slice().sort(sortByRating),
};
