import React from 'react';
import './homePage.scss';
import MainSummery from '../../components/MainSummary/mainSummary';
import Page from '../Page/Page';

function HomePage({ }) {

    return (
      <>
    <Page>  
      <MainSummery/>
    </Page>
      </>
    );
};

export default HomePage;