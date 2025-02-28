/** @jest-environment jsdom */
import React from "react";

import AccountPage from "../src/app/account/page";
import { render, screen } from "@testing-library/react";
import Membership from "../src/app/account/membership/page";
import MembershipInfo from "../src/app/account/membership/membership-info/page";

describe("render pages of the projects", () => {
  test("renders AccountPage with welcome message", () => {
    render(<AccountPage />);
    screen.getByText("AccountPage");
  });

  test("renders membership with welcome message", () => {
    render(<Membership />);
    screen.getByText("Welcome to Membership page.");
  });

  test("renders membership info with welcome message", () => {
    render(<MembershipInfo />);
    screen.getByText("Welcome to MembershipInfo page.");
  });
});
