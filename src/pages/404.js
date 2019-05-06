import React from 'react';
import Head from './Head';
import '../styles/404.scss';

const FourOhFour = () => (
  <main className="fourOhFourMain">
    <Head title="Page Not Found | Aura" />
    <h1 className="fourOhFourHeading">404 Error</h1>
    <h2 className="fourOhFourSubheading">Page Not Found</h2>
  </main>
);

export default FourOhFour;
