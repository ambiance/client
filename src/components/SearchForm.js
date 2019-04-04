import React from 'react';
import PropTypes from 'prop-types';

import '../css/SearchForm.css';
import '../css/main.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();

    this.state = {
      searchForm: {
        auraValue: 'trendy',
      },
      scroll: 0,
      top: 0,
    };
  }

  componentDidMount() {
    const form = this.formRef.current;
    this.setState({ top: form.offsetTop, height: form.offsetHeight });
    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentDidUpdate() {
    if (this.state.scroll > this.state.top) document.body.style.paddingTop = `${this.state.height}px`;
    else document.body.style.paddingTop = 0;
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchForm);
  };

  handleChange = event => {
    this.setState({ searchForm: { auraValue: event.target.value } });
  };

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    return (
      <article>
        <section id="search-form" ref={this.formRef} className={this.state.scroll > this.state.top ? 'fixed' : ''}>
          <form action="" method="GET" name="search" role="search" onSubmit={this.handleSearchSubmit}>
            <span id="want" className="grid-80">
              I want to be
            </span>
            <p className="cat-wrap">
              <select
                value={this.state.searchForm.auraValue}
                name="search categories"
                className="grid-80"
                onChange={this.handleChange}
              >
                <option value="trendy">Trendy</option>
                <option value="inspired">Inspired</option>
                <option value="romantic">Romantic</option>
                <option value="peaceful">Peaceful</option>
                <option value="classy">Classy</option>
                <option value="hipster">Hipster</option>
                <option value="silly">Classy</option>
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
