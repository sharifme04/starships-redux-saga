import React from "react";
import PropTypes from "prop-types";

const Pagination = props => {
  const { previousPage, currentPage, nextPage, starships } = props;
  return (
    <div className="d-flex justify-content-around mt-4">
      <div>
        <button
          type="button"
          className="btn btn-warning"
          disabled={starships && !starships.previous}
          onClick={() => previousPage(currentPage)}
        >
          Previous
        </button>
      </div>
      <div className="circle">
        <p>
          <b>Page: {currentPage}</b>
        </p>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        disabled={starships && !starships.next}
        onClick={() => nextPage(currentPage)}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func,
  starships: PropTypes.object
};

export default Pagination;
