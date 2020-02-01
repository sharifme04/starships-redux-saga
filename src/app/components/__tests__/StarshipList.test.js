import React from "react";
import { shallow } from "enzyme";
import StarshipList from "../StarshipList";

jest.mock("uuid", () => {
  return {
    v4: jest.fn(() => 1)
  };
});

const fakeShips = {
  isLoading: false,
  starships: {
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
        films: [
          "https://swapi.co/api/films/2/",
          "https://swapi.co/api/films/3/"
        ],
        created: "2014-12-15T12:31:42.547000Z",
        edited: "2017-04-19T10:56:06.685592Z",
        url: "https://swapi.co/api/starships/15/"
      }
    ]
  }
};

describe("<StarshipList />", () => {
  test("renders", () => {
    const component = shallow(<StarshipList starships={fakeShips} />);
    expect(component).toMatchSnapshot();
  });

  test("return the default array when there is no data to map through", () => {
    const component = shallow(<StarshipList />);
    expect(component).toMatchSnapshot();
  });

  test("does not break without value", () => {
    const component = shallow(<StarshipList />);
    expect(component.find("h5")).toHaveLength(1);
    expect(component.find("p")).toHaveLength(0);
  });

  test("does not break with an empty array", () => {
    const component = shallow(<StarshipList results={[]} />);
    expect(component.find("h5")).toHaveLength(1);
    expect(component.find("p")).toHaveLength(0);
  });
});
