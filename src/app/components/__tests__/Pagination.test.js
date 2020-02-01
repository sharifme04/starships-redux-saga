import React from "react";
import { shallow } from "enzyme";
import Pagination from "../Pagination";

describe("<Pagination />", () => {
  test("render", () => {
    const component = shallow(
      <Pagination nextPage={() => {}} previousPage={() => {}} currentPage={1} />
    );
    expect(component).toMatchSnapshot();
  });

  test("return the default when there is no data to map through", () => {
    const component = shallow(<Pagination />);
    expect(component).toMatchSnapshot();
  });

  test("does not break without value", () => {
    const component = shallow(<Pagination />);
    expect(component.find("button")).toHaveLength(2);
  });

  test("does not break with an empty array", () => {
    const component = shallow(<Pagination starships={{}} />);
    expect(component.find("button")).toHaveLength(2);
  });
});
