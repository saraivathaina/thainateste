import React from "react";
import { render } from "@testing-library/react";

import Botao from "./Botao";

describe("Botao", () => {
  test("renders the Botao component", () => {
    render(<Botao label="Hello world!" />);
  });
});