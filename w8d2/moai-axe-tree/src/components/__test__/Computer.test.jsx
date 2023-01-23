import Computer from "../Computer";
import { render } from "@testing-library/react";

describe("Computer component", () => {
  it("should be cheating when receiving the props isCheating", () => {
    // ...
    const { getByText } = render(<Computer isCheating={true} />);

    const element = getByText("🤖");

    // console.log(element);

    expect(element).toHaveClass("cheating");
  });
  it("should not be cheating when receiving the props isCheating at false", () => {
    // ...
    const { getByText } = render(<Computer isCheating={false} />);

    const element = getByText("🤖");

    // console.log(element);

    expect(element).not.toHaveClass("cheating");
  });
});
