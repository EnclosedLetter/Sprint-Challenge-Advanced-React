import React from "react";
import { render } from "@testing-library/react";
import App from './App';


test("app renders without crashing", ()=> {
    // Arrange
    const { getByText } = render(<App />);
    // Act
    const meet = getByText(/Meet The Players!/i);
    // Assert
    expect(meet).toBeInTheDocument();
})

// test("is there a search bar there?", ()=> {
// const { getByText } = render(<App />);
// const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
 
// })

// test("can you type in the textbox", ()=> {
//     // Arrange
//     const { getByText } = render(<App />);
//     // Act
//     const greeting = getByText(/hello lambdalorians!/i);
//     // Assert
//     expect(greeting).toBeInTheDocument();
// })

const Greeting = () => {
  return <h1 class="my-greeting">Hello Lambdalorians!</h1>;
};

export default Greeting;
