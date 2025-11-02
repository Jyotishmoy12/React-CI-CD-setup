import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("renders vite+React text", () => {
    render(<App />)
    const headerElement = screen.getByText('Vite + React');
    expect(headerElement).toBeInTheDocument();
})

test('increments count on button click', () => {
    render(<App />);
    const buttonElement = screen.getByText(/count is 0/i);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/count is 1/i);

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/count is 2/i);
})