export const getGames = state => state.games.games;

export const getUniquePlatforms = (state) => {
  const platformsSet = new Set();

  platformsSet.add('all');

  state.games.games.forEach(game => {
    game.platforms.forEach(platform => platformsSet.add(platform));
  });

  return Array.from(platformsSet);
};

export const getLanguagesSubtitles = (state) => {
  const languageSet = new Set();

  languageSet.add('all');

  state.games.games.forEach(game => {
    game.languageSupport.subtitles.forEach(language => languageSet.add(language));
    game.languageSupport.voiceOver.forEach(language => languageSet.add(language));
  })

  return Array.from(languageSet)
}
