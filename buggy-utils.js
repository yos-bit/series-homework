//D1
export const getDramas = (series) =>
  series.filter((show) => show.genre === "Drama");
//D2
export const getEpisodeById = (season, idText) =>
  season.episodes.find((episode) => episode.id.toString() === idText);
//D3
export const addEpisodeToFirstSeason = (show, episode) => {
  const firstSeason = show.seasons[0];
  firstSeason.episodes.push(episode);
  return { ...show };
};
