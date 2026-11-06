This project is a homework assignment given in react course, to go over javascript language.
To run the tests open the terminal and input this command: "node check.js".

1.Because we are copying an object that has objects withen it using { ...show }, this would only copy the main object but with memory addresses of the nested not the objects so the solution is to also copy {...show, season: [...show.seasons]}.
2.Because we returned { ...show } without also copying the nested objects withen it we copied the main object and the memory addresses of the nested objects within it, when we used this command firstSeason.episodes.push(episode); it changed the original data.
