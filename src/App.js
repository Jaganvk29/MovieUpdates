import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// import Home from "./components/HOME/home";

// import MovieDetails from "./components/MovieDetails/MovieDetails";
// import SearchMovie from "./components/SearchMovie/SearchMovie";
// import UpcommingSection from "./components/Movietypemain/Upcomming";
// import NewMoviesSection from "./components/Movietypemain/Newmovies";
// LAZY LOADING
const Home = React.lazy(() => import("./components/HOME/home"));
const MovieDetails = React.lazy(() =>
  import("./components/MovieDetails/MovieDetails")
);
const SearchMovie = React.lazy(() =>
  import("./components/SearchMovie/SearchMovie")
);
const UpcommingSection = React.lazy(() =>
  import("./components/Movietypemain/Upcomming")
);
const NewMoviesSection = React.lazy(() =>
  import("./components/Movietypemain/Newmovies")
);

const App = () => {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Switch>
        <Route path="/upcomming">
          <UpcommingSection />
        </Route>
        <Route path="/newmovies">
          <NewMoviesSection />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:detailID" exact>
          <MovieDetails />
        </Route>
        <Route path="/search/:sid">
          <SearchMovie />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;
