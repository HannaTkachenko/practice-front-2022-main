import React from 'react';
import packages from './PricingData.json'
import PricePackage from './PricePackage';
import styles from './PricingPackage.module.scss'

const PricingPackages = () => {
  const renderPackages = (packagePrice, i) => <PricePackage key={i} packagePrice={packagePrice}/>
  return (
    <div className={styles.container}>
       <h1 className={styles.page_heading}>Select a Package for your Managed Branding Contest</h1>
       <section className={styles.page_section}>
{packages.map(renderPackages)}

       </section>
    </div>
  );
}

export default PricingPackages;
