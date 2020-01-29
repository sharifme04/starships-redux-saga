import React from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

const StarshipList = props => {
  const { starships } = props;
  const Capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <div className="mt-1">
      {starships.isLoading ? (
        <div className="text-center">
          <div className="spinner-border custom-spin text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          {starships && starships.starships && starships.starships.results ? (
            starships.starships.results.map(e => (
              <div
                key={uuid.v4()}
                className="col-xs-12 col-sm-12 col-md-6 mt-2"
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Name: {Capitalize(e.name)}</h5>
                    <p className="card-text">
                      Crew: {parseInt(e.crew) ? e.crew : "None"}
                    </p>
                    <p className="card-text">
                      Passengers:{" "}
                      {parseInt(e.passengers) ? e.passengers : "None"}
                    </p>
                    <div style={{ display: "flex" }}>
                      <p className="card-text">Hyperdrive Class:</p>
                      {e.hyperdrive_rating ? (
                        <div className="col-md-9 mt-1">
                          <div className="progress">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{
                                width: `${(parseFloat(e.hyperdrive_rating) *
                                  100) /
                                  6}%`
                              }}
                              aria-valuenow={
                                (parseFloat(e.hyperdrive_rating) * 100) / 6
                              }
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      ) : (
                        <div className="col-md-9 mt-1">
                          <div className="progress custom-progress">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: `0%` }}
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5> Starships are not available</h5>
          )}
        </div>
      )}
    </div>
  );
};

StarshipList.propTypes = {
  starships: PropTypes.object,
  results: PropTypes.array,
  isLoading: PropTypes.bool
};

export default StarshipList;
