import { addSeason } from "./series-service.js";

const data = loadData();
const desertSignalSeason = {
  number: 1,
  episodes: [{ id: 801, title: "First Contact", rating: 8, duration: 44 }],
};
const updatedSeries = addSeason(data.series, 5, desertSignalSeason);
const updatedData = { ...data, series: updatedSeries };
import { writeFileSync } from "node:fs";
import { loadData } from "./load.js";
writeFileSync("series-updated.json", JSON.stringify(updatedData, null, 2));
