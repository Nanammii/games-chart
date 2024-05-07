import React, {useState} from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./main-page.module.scss";
import classNames from "classnames";
import {SortingGames} from "../../const";
import Category from "../../components/category/category";
import {useSelector} from "react-redux";
import {sorting} from "../../utils/games";
import {getGames, getLanguagesSubtitles, getUniquePlatforms} from "../../store/selectors";
import Sorting from "../../components/sorting/sorting";

function MainPage() {
  const games = useSelector(getGames);
  const platforms = useSelector(getUniquePlatforms);
  const languages = useSelector(getLanguagesSubtitles);

  const [selectedSorting, setSelectedSorting] = useState(SortingGames.Popular);
  const [platformType, setPlatformType] = useState(platforms[0]);
  const [isOnline, setIsOnline] = useState(false);
  const [languagesType, setLanguagesType] = useState(languages[0]);

  const gamesByPlatforms = platformType === platforms[0]
    ? games
    : games.filter(item => item.platforms.includes(platformType));

  const gamesByPlatformsAndOnline = isOnline
    ? gamesByPlatforms.filter(item => item.multiplayer.online)
    : gamesByPlatforms;

  const gamesByAllFilters = languagesType === languages[0]
    ? gamesByPlatformsAndOnline
    : gamesByPlatformsAndOnline.filter(item => item.languageSupport.subtitles.includes(languagesType)
      || item.languageSupport.voiceOver.includes(languagesType));

  const gamesBySorting = sorting[selectedSorting](gamesByAllFilters);

  return (
    <div className={styles.page}>
      <Header />

      <main className={classNames(styles.page__index, 'container')}>

        <div className={styles.content__container}>
          <div className={styles.page__filters}>
            <Sorting selectedSorting={selectedSorting} onTypeClick={(sort) => setSelectedSorting(sort)} />
            <select className={styles.filters} value={platformType}
                    onChange={(e) => setPlatformType(e.target.value)}>
              {platforms.map(item => (
                <option className={styles.options} key={item} value={item}>{item}</option>
              ))}
            </select>

            <select className={styles.filters} value={languagesType}
                    onChange={(e) => setLanguagesType(e.target.value)}>
              {languages.map(item => (
                <option className={styles.options} key={item} value={item}>{item}</option>
              ))}
            </select>

            <label className={styles.label}>
              <input
                type={"checkbox"}
                checked={isOnline}
                onChange={(e) => setIsOnline(e.target.checked)}
              />
              <span>Многопользовательская</span>
            </label>

          </div>
          <Category items={gamesBySorting} />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default MainPage;
