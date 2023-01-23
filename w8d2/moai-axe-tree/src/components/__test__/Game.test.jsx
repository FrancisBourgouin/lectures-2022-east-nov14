import Game from "../Game";
import { render, fireEvent, queryByText, waitForElement } from "@testing-library/react";

describe("Game component", () => {
  it("should toggle cheating by clicking on the robot", () => {
    const { getByText } = render(<Game isCheating={true} />);

    const element = getByText("🤖");

    expect(element).toHaveClass("cheating");

    fireEvent.click(element);

    expect(element).not.toHaveClass("cheating");
  });

  it("should display a result if the player takes an action", () => {
    const { getByText, getByTestId, queryByText } = render(<Game />);

    const axeButton = getByTestId("axe");
    fireEvent.click(axeButton);

    waitForElement(() => getByTestId("resultMessage")).then(() => {
      const result = queryByText("Waiting for your choice !");
      expect(result).not.toBeInTheDocument();
    });
  });
});
