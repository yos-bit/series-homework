//A1
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => {
  const season = show.seasons[seasonIndex];
  const episode = season.episodes[episodeIndex];
  return episode.title;
};
//A2
export const getLastSeasonNumber = (show) => {
  return show.seasons.length > 0
    ? show.seasons[show.seasons.length - 1].number
    : 0;
};
//A3
export const getNextSeasonYear = (show) => {
  return show.nextSeason ? show.nextSeason.year : "No announcement";
};
//B1
export const getById = (series, id) => {
  return series.find((episode) => episode.id === id);
};
//B2
export const getSeasonsCount = (series) => {
  return series.map((show) => ({
    title: show.title,
    seasons: show.seasons.length,
  }));
};
//B3
export const hasTopEpisode = (show, minRating) => {
  return show.seasons.some((season) =>
    season.episodes.some((episode) => episode.rating >= minRating),
  );
};
//B4
export const getCreatorsFrom = (series, country) => {
  const creators = [];
  series.forEach((show) => {
    if (show.creator.country === country) {
      creators.push(show.creator.name);
    }
  });
  return creators;
};
//B5
export const sortByStartYear = (series) => {
  return [...series].sort((a, b) => a.startYear - b.startYear);
};
//C1
export const renameSeries = (series, id, newTitle) => {
  return series.map((show) => {
    if (show.id === id) {
      return { ...show, title: newTitle };
    }
    return show;
  });
};
