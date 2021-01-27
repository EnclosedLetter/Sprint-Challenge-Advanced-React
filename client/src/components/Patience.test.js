import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Patience from "./Patience";

test("renders greeting on Greeting component", () => {
    //Arrange 
     const { getByText } = render(<Patience />);
   // Act
   const patience = getByText(/This Sprint really tested WINK, my patience/i);
   // Assert
   expect(patience).toBeVisible();
 });