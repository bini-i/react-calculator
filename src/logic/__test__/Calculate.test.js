/* eslint-disable no-undef */
import calculate from "../calculate";

describe("calculate", () => {
  const total = Math.floor(Math.random() * 1000);
  const next = Math.floor(Math.random() * 1000);
  const operation = (Math.random() + 1).toString(36).substring(9);
  test("it sets total, next and operation null when btnName==AC", () => {
    expect(calculate({ total, next, operation }, "AC")).toEqual({
      total: null,
      next: null,
      operation: null
    });
  });

  test("it negates total and next when btnName==+/-", () => {
    expect(calculate({ total, next, operation }, "+/-")).toEqual({
      total: -total,
      next: -next,
      operation
    });
  });
  test("it sets operation to the btnName passed when btnName is in (+,-,x,/)", () => {
    expect(calculate({ total, next, operation }, "+")).toEqual({
      total,
      next,
      operation: "+"
    });
  });
  test("it operates next with total and set it to zero when btnName is =", () => {
    expect(calculate({ total, next, operation: "÷" }, "=")).toEqual({
      total: total / next,
      next: total / next,
      operation: null
    });
  });
  test("it sets next to btnName when btnName is a number", () => {
    expect(calculate({ total, next, operation }, "2")).toEqual({
      total,
      next: next * 10 + 2,
      operation
    });
  });
});
