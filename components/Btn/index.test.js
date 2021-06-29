import { render, screen } from "@testing-library/react";
import Btn from "./";

describe("Button", () => {
  it("renders text", () => {
    render(<Btn text="Button" />);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("does not render text", () => {
    render(<Btn />);
    expect(screen.queryByText("Button")).not.toBeInTheDocument();
  });

  it("renders icon", () => {
    render(<Btn icon="menu" />);
    expect(screen.queryByTestId("btn-icon"));
  });
});
