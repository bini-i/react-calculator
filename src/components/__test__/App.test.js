/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});

describe("snapshot test for App component", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
