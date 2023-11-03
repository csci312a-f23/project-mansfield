import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
import { render } from "@testing-library/react";
import App from "@/pages/_app";
import Home from "@/pages/index";

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

describe("End-to-end testing", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  test("Render _app.js component", () => {
    render(<App Component={Home} />);
  });
});
