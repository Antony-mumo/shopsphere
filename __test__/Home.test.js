import { render } from "@testing-library/react-native";
import React from "react";
import Home from "../src/screens/Home";

describe("Home Component", () => {
  it("should render without crashing", () => {
    render(<Home />);
  });

  it("should render the correct number of child components", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("safeAreaView")).toBeTruthy();
    expect(getByTestId("scrollView")).toBeTruthy();
    expect(getByTestId("welcome")).toBeTruthy();
    expect(getByTestId("carousel")).toBeTruthy();
    expect(getByTestId("headings")).toBeTruthy();
    expect(getByTestId("productRow")).toBeTruthy();
  });

  it("should render the correct text for location", () => {
    const { getByText } = render(<Home />);
    const locationText = getByText("Location");
    expect(locationText).toBeTruthy();
  });

  it("should render the correct cart number", () => {
    const { getByText } = render(<Home />);
    const cartNumber = getByText("5"); // Replace '5' with the expected cart number
    expect(cartNumber).toBeTruthy();
  });
});
