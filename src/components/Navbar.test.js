import { useSession } from "next-auth/react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("ButtonBar: ButtonBar tests", () => {
  const balance = 100;
  const balanceNeg = -100;

  const mockUser = {
    data: { user: { name: "user" } },
    status: "authenticated",
  };

  beforeEach(() => {
    useSession.mockReturnValue(mockUser);
  });

  test("Navbar: displays mansfield button and dropdown button", () => {
    render(<Navbar balance={balance} setBalance={jest.fn()} />);

    expect(
      screen.queryByRole("button", { name: "Mansfield" }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("dropdownButton")).toBeInTheDocument();
  });

  test("ButtonBar: positive balance is green", () => {
    render(<Navbar balance={balance} setBalance={jest.fn()} />);

    expect(screen.getByTestId("positiveBalance")).toBeVisible();
    expect(screen.getByTestId("negativeBalance")).not.toBeVisible();
  });

  test("ButtonBar: negative balance is red", () => {
    render(<Navbar balance={balanceNeg} setBalance={jest.fn()} />);

    expect(screen.getByTestId("positiveBalance")).not.toBeVisible();
    expect(screen.getByTestId("negativeBalance")).toBeVisible();
  });
});
