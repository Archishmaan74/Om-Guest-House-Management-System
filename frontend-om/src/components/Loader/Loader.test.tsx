import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, test, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import Loader from "./Loader";

afterEach(() => {
  cleanup();
});

describe("Loader", () => {
  test("renders the loader", () => {
    render(<Loader />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("renders the small loader", () => {
    render(<Loader small />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
