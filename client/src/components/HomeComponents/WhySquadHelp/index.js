import React from 'react';
import CONSTANTS from '../../../constants';
import styles from './whySquadHelp.module.sass';
import articles from './whySquadHelp.json';

const WhySquadHelp = () => {
  const showArticles = ({ img, alt, heading, content }, i) => (
    <article className={styles.card} key ={i}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${img}`} alt={alt} />
      <h3>{heading}</h3>
      <p> {content}</p>
    </article>
  );

  return (
    <section className={styles.container__description}>
      <h2 className={styles.blueUnderline}>Why Squadhelp?</h2>
      <div className={styles.cardContainer}>{articles.map(showArticles)}</div>
    </section>
  );
};

export default WhySquadHelp;
