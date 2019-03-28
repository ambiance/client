import React from 'react';

import '../css/SearchForm.css';
import '../css/main.css';

class SearchForm extends React.Component {
  handleSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit();
  };

  render() {
    return (
      <article>
        <section className='search-form'>
          <form
            action=''
            method='GET'
            name='search'
            role='search'
            onSubmit={this.handleSearchSubmit}
          >
            <p className='inp-wrap cat-wrap'>
              <select
                name='search categories'
                id='categories'
                className='grid-80'
              >
                <option value='I' selected>
                  I
                </option>
                <option value='we'>We</option>
              </select>
            </p>
            <p className='inp-wrap cat-wrap'>
              <label htmlFor='categories' className='grid-80'>
                want to be
              </label>
              <select
                name='search categories'
                id='categories'
                className='grid-80'
              >
                <option value='newyork' selected>
                  Cheerful
                </option>
                <option value='chicago'>Inspired</option>
                <option value='losangeles'>Romantic</option>
                <option value='seattle'>Peaceful</option>
                <option value='dallas'>Classy</option>
                <option value='boston'>Hipster</option>
                <option value='sanfran'>Trendy</option>
                <option value='sanfran'>Spiritual</option>
                <option value='sanfran'>Silly</option>
                <option value='sanfran'>Touristy</option>
              </select>
            </p>
            <p className='inp-wrap cat-wrap'>
              <label htmlFor='categories' className='grid-20'>
                while
              </label>
              <select
                name='search categories'
                id='categories'
                className='grid-80'
              >
                <option value='newyork' selected>
                  Eating
                </option>
                <option value='chicago'>Studying</option>
                <option value='losangeles'>Dating</option>
                <option value='seattle'>Relaxing</option>
                <option value='dallas'>Drinking</option>
                <option value='boston'>Shopping</option>
              </select>
            </p>
            <p className='inp-wrap submit-wrap' id='submitButtonContainer'>
              <button id='submitButton' className='grid-100 btn'>
                Search
              </button>
            </p>
          </form>
        </section>
      </article>
    );
  }
}

export default SearchForm;
