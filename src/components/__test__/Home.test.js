/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import Home from "../Home";

describe("snapshot test for Home component", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
