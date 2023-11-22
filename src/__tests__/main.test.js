import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
import { useSession } from "next-auth/react";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import App from "@/pages/_app";
import Home from "@/pages/index";

jest.mock("next-auth/react");
jest.mock("next/router", () => require("next-router-mock")); // eslint-disable-line global-require

// Tell the mock router about the pages we will use (so we can use dynamic routes)
mockRouter.useParser(
  createDynamicRouteParser([
    // These paths should match those found in the `/pages` folder:
    "/login",
    "/user/bethistory",
    "/user/openbets",
  ]),
);

const mockAuthenticated = {
  data: { user: { name: "Mocked Name" } },
  status: "authenticated",
};

const mockUnauthenticated = {
  data: undefined,
};

describe("End-to-end testing", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  test("Render _app.js component", () => {
    // this test is worthless, but alas.
    useSession.mockReturnValue(mockAuthenticated);
    act(() => {
      render(<App Component={Home} />);
    });
  });

  test("Access to home component while authenticated", () => {
    useSession.mockReturnValue(mockAuthenticated);
    render(<Home />);
    expect(screen.queryByRole("main")).toBeInTheDocument();
  });

  test("No access to home component while not authenticated", () => {
    useSession.mockReturnValue(mockUnauthenticated);
    render(<Home />);
    expect(screen.queryByRole("main")).toBeNull();
  });
});
