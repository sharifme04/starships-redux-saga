import React from "react";
//import { unmountComponentAtNode } from "react-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App from "./App";

const mockStore = configureMockStore();
const store = mockStore({});

const fakeShips = {
  count: 37,
  next: "https://swapi.co/api/starships/?page=2",
  previous: null,
  results: [
    {
      name: "Executor",
      model: "Executor-class star dreadnought",
      manufacturer: "Kuat Drive Yards, Fondor Shipyards",
      cost_in_credits: "1143350000",
      length: "19000",
      max_atmosphering_speed: "n/a",
      crew: "279144",
      passengers: "38000",
      cargo_capacity: "250000000",
      consumables: "6 years",
      hyperdrive_rating: "2.0",
      MGLT: "40",
      starship_class: "Star dreadnought",
      pilots: [],
      films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/"],
      created: "2014-12-15T12:31:42.547000Z",
      edited: "2017-04-19T10:56:06.685592Z",
      url: "https://swapi.co/api/starships/15/"
    }
  ]
};

test("should render initial layout", () => {
  const component = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(component.exists()).toBe(true);
});

test("snapshot data renders", () => {
  const component = renderer.create(
    <Provider store={store}>
      <App starships={fakeShips} />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot renders", () => {
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
