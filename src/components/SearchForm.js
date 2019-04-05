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
        categoryValue: 'eating',
        groupValue: 'myself',
      },
      scroll: 0,
      top: 10,
    };
  }

  componentDidMount() {
    const form = this.formRef.current;
    this.setState({ top: form.offsetTop, height: form.offsetHeight });
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchForm);
  };

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

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
              <select name="auraValue" className="grid-80 corner" onChange={this.handleChange}>
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
              <select name="categoryValue" className="grid-80 middle">
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
              <select name="groupValue" className="grid-80">
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
