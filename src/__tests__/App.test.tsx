import React from "react";
import { describe, expect, test } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("render without crash", () => {
  render(<App></App>);
});
