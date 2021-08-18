/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Quote from "../Quote";

describe("Quote", () => {
  test("renders Quote component", () => {
    render(<Quote />);
  });
});

describe("snapshot test for Quote component", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
