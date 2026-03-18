import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("shows about page content by default", async () => {
  render(<App />);
  // The about page title should be visible in the default language (fr)
  const title = await screen.findByText(/à propos/i);
  expect(title).toBeInTheDocument();
});

test("language toggle button is present", async () => {
  render(<App />);
  const btn = await screen.findByRole("button", { name: /switch to english/i });
  expect(btn).toBeInTheDocument();
});

test("toggles language to English on button click", async () => {
  render(<App />);
  const btn = await screen.findByRole("button", { name: /switch to english/i });
  await userEvent.click(btn);
  // After switching, the about title should be in English
  const title = await screen.findByText(/^about$/i);
  expect(title).toBeInTheDocument();
});
