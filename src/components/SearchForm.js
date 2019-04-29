import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchForm.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();

    this.state = {
      searchForm: {
        auraValue: '',
        categoryValue: '',
        cityValue: '',
      },
      scroll: 0,
      top: 10,
    };
  }

  componentDidMount() {
    const form = this.formRef.current;
    this.setState({ top: form.offsetTop });
    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchForm);
  };

  handleAuraChange = event => {
    const { value } = event.target;
    this.setState(prevState => {
      const tempForm = prevState.searchForm;
      tempForm.auraValue = value;
      return { searchForm: tempForm };
    });
  };

  handleCategoryChange = event => {
    const { value } = event.target;
    this.setState(prevState => {
      const tempForm = prevState.searchForm;
      tempForm.categoryValue = value;
      return { searchForm: tempForm };
    });
  };

  handleCityChange = event => {
    const { value } = event.target;
    this.setState(prevState => {
      const tempForm = prevState.searchForm;
      tempForm.cityValue = value;
      return { searchForm: tempForm };
    });
  };

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    return (
      <article>
        <section
          id="search-form"
          ref={this.formRef}
          className={this.state.scroll > this.state.top ? 'fixed' : ''}
        >
          <form
            action=""
            method="GET"
            name="search"
            role="search"
            onSubmit={this.handleSearchSubmit}
          >
            <span id="want" className="grid-80">
              I want to be
            </span>
            <p className="cat-wrap">
              <select
                value={this.state.searchForm.auraValue}
                name="auraValue"
                className="grid-80 corner"
                onChange={this.handleAuraChange}
              >
                <option value="">Any Aura</option>
                <option value="trendy">Trendy</option>
                <option value="inspired">Inspired</option>
                <option value="romantic">Romantic</option>
                <option value="cheerful">Cheerful</option>
                <option value="intimate">Intimate</option>
                <option value="classy">Classy</option>
                <option value="hipster">Hipster</option>
                <option value="casual">Casual</option>
                <option value="touristy">Touristy</option>
              </select>
            </p>

            <span className="grid-40">while</span>
            <p className="cat-wrap">
              <select
                value={this.state.searchForm.categoryValue}
                name="categoryValue"
                className="grid-80 middle"
                onChange={this.handleCategoryChange}
              >
                <option value="">Going Out</option>
                <option value="eating">Eating</option>
                <option value="studying">Studying</option>
                <option value="dating">Dating</option>
                {/* <option value="relaxing">Relaxing</option> */}
                <option value="drinking">Drinking</option>
                {/* <option value="shopping">Shopping</option> */}
              </select>
            </p>

            <span className="grid-40">in</span>
            <p className="cat-wrap">
              <select
                value={this.state.searchForm.cityValue}
                name="cityValue"
                className="grid-80 city"
                onChange={this.handleCityChange}
              >
                <option value="">Any Place</option>
                <option value="Santa Monica">Santa Monica</option>
                <option value="Downtown LA">Los Angeles</option>
                <option value="Culver City">Culver City</option>
                <option value="Beverly Hills">Beverly Hills</option>
                <option value="Hollywood">Hollywood</option>
                <option value="Van Nuys">Van Nuys</option>
                <option value="Pasadena">Pasadena</option>
                <option value="Newport Beach">Newport Beach</option>
                <option value="La Brea">La Brea</option>
                <option value="Anaheim">Anaheim</option>
                <option value="Rowland Heights">Rowland Heights</option>
                <option value="Brea">Brea</option>
                <option value="Laguna">Laguna</option>
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
