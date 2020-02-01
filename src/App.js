import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { starshipsRequest } from "./app/redux/actions/starships";
import StarshipList from "./app/components/StarshipList";
import Pagination from "./app/components/Pagination";

function App() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPages] = useState(1);
  const starships = useSelector(state => state.starships);

  useEffect(() => {
    dispatch(starshipsRequest(currentPage));
  }, [currentPage, dispatch]);

  const previousPage = pageNumber => setCurrentPages(pageNumber - 1);
  const nextPage = pageNumber => setCurrentPages(pageNumber + 1);

  return (
    <div className="container-fluid mt-1">
    <h2>Starships app</h2>
    <hr />
      <StarshipList starships={starships} />
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
        starships={starships && starships.starships && starships.starships}
      />
    </div>
  );
}

export default App;
