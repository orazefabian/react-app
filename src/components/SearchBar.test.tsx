import { describe, expect, test } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("correct placeholder texts for input field", () => {
  const { container } = render(<SearchBar onSearch={() => {}} />);
  const inputElement = container.querySelector("input");
  expect(inputElement).toHaveProperty("placeholder", "City...");
});

test("null city input should call onSearch with empty string", () => {
  const onSearch = jest.fn();

  const { getByPlaceholderText, getByText } = render(
    <SearchBar onSearch={onSearch} />
  );
  const inputField = getByPlaceholderText("City...");
  fireEvent.change(inputField, { target: { value: null } });

  const searchButton = getByText("Search");
  fireEvent.click(searchButton);

  expect(onSearch).toHaveBeenCalledWith("");
});

test("it should call onSearch when the button is clicked", () => {
  // Mock the onSearch function
  const onSearch = jest.fn();

  // Render the SearchBar
  const { getByText, getByPlaceholderText } = render(
    <SearchBar onSearch={onSearch}></SearchBar>
  );

  // Find input field and change input
  const inputField = getByPlaceholderText("City...");
  fireEvent.change(inputField, { target: { value: "New York" } });

  // Find search button and click it
  const searchButton = getByText("Search");
  fireEvent.click(searchButton);

  expect(onSearch).toHaveBeenCalledWith("New York");
});
