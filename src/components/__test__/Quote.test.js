/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import Quote from "../Quote";

describe("snapshot test for Quote component", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
