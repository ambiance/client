import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Footer from './Footer';

class Home extends React.Component {
  render() {
    return (
      <body>
        <SearchForm />
        <SearchResults />
        <Footer />
      </body>
    );
  }
}

export default Home;
