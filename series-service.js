export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => {
  const season = show.seasons[seasonIndex];
  const episode = season.episodes[episodeIndex];
  return episode.title;
};
export const getLastSeasonNumber = (show) => {
  return show.seasons.length > 0
    ? show.seasons[show.seasons.length - 1].number
    : 0;
};
