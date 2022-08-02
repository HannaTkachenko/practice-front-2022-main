import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PricingPackages from '../../components/PricingPackages/index';

const PricingPage = () => {
  return (
    <>
      <Header />
      <PricingPackages />
      <Footer />
    </>
  );
};

export default PricingPage;
