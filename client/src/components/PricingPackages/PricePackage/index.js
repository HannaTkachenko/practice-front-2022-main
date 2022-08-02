import React from 'react';
import styles from '../PricingPackage.module.scss'

const PricePackage = (props) => {
  const {
    packagePrice: {
      title,
      description,
      price: { currency, amount },
      options,
      color,
    },
  } = props;
  const renderOption = (opt, i) => <li key={i}>{opt}</li>
  return (
    <article className={styles.package}>
      <div style={{borderColor:`${color}`}} className={styles.package__box}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{currency}{amount}</h3>
      </div>
      <ul>{
        options.map(renderOption)
        }</ul>
      <button style={{backgroundColor:`${color}`}}>start</button>
    </article>
  );
};

export default PricePackage;
