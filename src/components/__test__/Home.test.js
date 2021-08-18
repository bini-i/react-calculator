/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "../Home";

describe("Home", () => {
  test("renders Home component", () => {
    render(<Home />);
  });
});

describe("snapshot test for Home component", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
