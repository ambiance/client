import React from "react";
import "../css/SearchForm.css";
import "../css/main.css";

class SearchForm extends React.Component {
  render() {
    return (
      <article>
        <section className="search-form">
          <form action="" method="GET" name="search" role="search">
            <p className="inp-wrap cat-wrap">
              <select
                name="search categories"
                id="categories"
                className="grid-80"
              >
                <option value="I" selected>
                  I
                </option>
                <option value="we">We</option>
              </select>
            </p>
            <p className="inp-wrap cat-wrap">
              <label htmlFor="categories" className="grid-80">
                want to be
              </label>
              <select
                name="search categories"
                id="categories"
                className="grid-80"
              >
                <option value="newyork" selected>
                  Cheerful
                </option>
                <option value="chicago">Inspired</option>
                <option value="losangeles">Romantic</option>
                <option value="seattle">Peaceful</option>
                <option value="dallas">Classy</option>
                <option value="boston">Hipster</option>
                <option value="sanfran">Trendy</option>
                <option value="sanfran">Spiritual</option>
                <option value="sanfran">Silly</option>
                <option value="sanfran">Touristy</option>
              </select>
            </p>
            <p className="inp-wrap cat-wrap">
              <label htmlFor="categories" className="grid-20">
                while
              </label>
              <select
                name="search categories"
                id="categories"
                className="grid-80"
              >
                <option value="newyork" selected>
                  Eating
                </option>
                <option value="chicago">Studying</option>
                <option value="losangeles">Dating</option>
                <option value="seattle">Relaxing</option>
                <option value="dallas">Drinking</option>
                <option value="boston">Shopping</option>
              </select>
            </p>
            <p className="inp-wrap submit-wrap" id="submitButtonContainer">
              <button id="submitButton" className="grid-100 btn">
                {/* import magnifying glass icon later */
                /* <span class="search-icon-container">
                <?xml version="1.0" encoding="utf-8"?>
                <!-- Generated by IcoMoon.io -->
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"></span>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  id="search-icon"
                  width="768"
                  height="768"
                  viewBox="0 0 768 768"
                >
                  <g id="icomoon-ignore"></g>
                  <path
                    d="M304.5 448.5c79.5 0 144-64.5 144-144s-64.5-144-144-144-144 64.5-144 144 64.5 144 144 144zM496.5 448.5l159 159-48 48-159-159v-25.5l-9-9c-36 31.5-84 49.5-135 49.5-115.5 0-208.5-91.5-208.5-207s93-208.5 208.5-208.5 207 93 207 208.5c0 51-18 99-49.5 135l9 9h25.5z"
                  ></path>
                </svg>
              </span> */}
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
