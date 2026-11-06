export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => {
  const season = show.seasons[seasonIndex];
  const episode = season.episodes[episodeIndex];
  return episode.title;
};