// Test the pokemon list:
//  - heading
//  - list
//  - number of list items

// Import an array of pokemons to test the component.

// Do we need to test the Pokemon Card here?

import "@testing-library/jest-dom";
import { logRoles, render, screen, within } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import PokemonList from "./PokemonList";

describe("Pokemon List", () => {
  it("should have a heading of Pokemon  List", () => {
    render(<PokemonList />);
    logRoles(document.body);
    const headingEl = screen.getByRole("heading", {
      name: "Select Your Pokemon",
    });
    expect(headingEl).toBeInTheDocument();
  });
  it("should have a list of Pokemon List", () => {
    render(<PokemonList />);
    const ulEl = screen.getByRole("list", { name: "Select Your Pokemon" });
    expect(ulEl).toBeInTheDocument();
  });
  it("should have 21 items in the list", () => {
    render(<PokemonList />);
    const ulEl = screen.getByRole("list", { name: "Select Your Pokemon" });
    logRoles(ulEl);
    const liEl = within(ulEl).getAllByRole("listitem");
    expect(liEl.length).toBe(21);
  });
});
