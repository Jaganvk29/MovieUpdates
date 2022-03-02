import React, { useState } from "react";
import classes from "./header.module.css";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";

const formHandler = (event) => {
  event.preventDefault();
};

const Header = (props) => {
  const [moviename, setmovieName] = useState();
  const [showLinks, setShowLinks] = useState(false);
  const submitHandler = (event) => {
    console.log(moviename);
    const query = moviename;
    setmovieName("");
    if (showLinks == true) {
      setShowLinks(false);
    }
  };

  const hideMobileNav = () => {
    if (showLinks == true) {
      setShowLinks(false);
    }
  };

  const inputHandler = (event) => {
    const inputValue = event.target.value;

    setmovieName(inputValue);
  };
  // console.log(moviename);
  return (
    <Router>
      <header>
        {" "}
        <section className={classes.navsection}>
          <nav>
            <h2>
              <NavLink className={classes.hero} to="/">
                MOVIES UPDATE
              </NavLink>
            </h2>

            <ul className={showLinks ? classes.hidden : ""}>
              <div>
                <form onSubmit={formHandler}>
                  <input
                    className={classes.searchBar}
                    value={moviename}
                    onChange={inputHandler}
                    className={classes.search}
                    type={"text"}
                    placeholder={"Enter a Movie Name"}
                  ></input>

                  <Link to={"/search/" + moviename}>
                    {" "}
                    <button
                      onClick={submitHandler}
                      className={classes.searchbtn}
                      type="submit"
                    >
                      SEARCH
                    </button>
                  </Link>
                </form>
              </div>
              <li>
                <NavLink onClick={hideMobileNav} to="/upcomming">
                  UPCOMING
                </NavLink>
              </li>
              <li>
                <NavLink onClick={hideMobileNav} to="/newmovies">
                  NEW MOVIES
                </NavLink>
              </li>
              <li></li>
            </ul>

            <div className={classes.burgerbtn}>
              {showLinks ? (
                <i
                  className={classes.burgerbtn}
                  onClick={() => {
                    setShowLinks(!showLinks);
                  }}
                  className="fa-solid fa-xmark"
                ></i>
              ) : (
                <i
                  className={classes.burgerbtn}
                  onClick={() => {
                    setShowLinks(!showLinks);
                  }}
                  className="fa-solid fa-bars"
                ></i>
              )}
            </div>
          </nav>
        </section>
      </header>
      <div>{props.children}</div>
    </Router>
  );
};

export default Header;
