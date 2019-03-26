import React from 'react';
import PropTypes from 'prop-types';
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
        <section className="search-form">
          <form action="" method="GET" name="search" role="search" onSubmit={this.handleSearchSubmit}>
            <span className="grid-80">I want to be</span>
            <p className="cat-wrap">
              <select name="search categories" className="grid-80">
                <option value="cheerful">Cheerful</option>
                <option value="inspired">Inspired</option>
                <option value="romantic">Romantic</option>
                <option value="peaceful">Peaceful</option>
                <option value="classy">Classy</option>
                <option value="hipster">Hipster</option>
                <option value="trendy">Trendy</option>
                <option value="spiritual">Spiritual</option>
                <option value="silly">Silly</option>
                <option value="touristy">Touristy</option>
              </select>
            </p>
            <span className="grid-40">while</span>
            <p className="cat-wrap">
              <select name="search categories" className="grid-80">
                <option value="eating">Eating</option>
                <option value="studying">Studying</option>
                <option value="dating">Dating</option>
                <option value="relaxing">Relaxing</option>
                <option value="drinking">Drinking</option>
                <option value="shopping">Shopping</option>
              </select>
            </p>
            <span className="grid-40">with</span>
            <p className="cat-wrap">
              <select name="search categories" className="grid-80">
                <option value="I">Myself</option>
                <option value="friends">Friends</option>
                <option value="date">A Date</option>
              </select>
            </p>
            <p className="submit-wrap" id="submitButtonContainer">
              <button id="submitButton" className="grid-100 btn">
                Search
              </button>
            </p>
          </form>
        </section>
      </article>
    );
  }
}

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
