// Test a single pokemon card:
//  - heading
//  - image
//  - button

// Import a single pokemon object to test the component.

// Do we need to test the Stats List here?

import "@testing-library/jest-dom";
import { logRoles, render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

// describe("Pokemon Card", () => {
//   it("should have list elements of Pokemon List", () => {
//     render(<PokemonCard />);
//     const liEl = screen.getByRole("listitem");
//     logRoles(liEl);
//     const h2El = within(liEl).getAllByRole("heading");
//     expect(h2El).toBeInTheDocument();
//   });
// });
