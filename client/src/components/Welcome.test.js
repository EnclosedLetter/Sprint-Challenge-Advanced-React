import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Welcome from "./Welcome";

test("Welcome message is there", () => {
   //Arrange 
    const { getByText } = render(<Welcome />);
  // Act
  const welcome = getByText(/Welcome to my dummy component!/i);
  // Assert
  expect(welcome).toBeInTheDocument();
});
