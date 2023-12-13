/**
 * @jest-environment node
 *
 * Use Node environment for server-side tests to avoid loading browser libraries.
 * This needs to be the top comment in the file
 */

/* eslint-disable no-return-assign, no-param-reassign */

import { getServerSession } from "next-auth/next";
import { testApiHandler } from "next-test-api-route-handler";
import { firebaseConfig } from "@/firebase-config";
import { initializeApp, deleteApp } from "firebase/app";
import userEndpoint from "../pages/api/[id]/index";

jest.mock("next-auth/next");

const mockAuthenticated = {
  data: {
    user: {
      id: "test",
      name: "Mocked Name",
      email: "test@test.test",
    },
  },
  status: "authenticated",
};

// const mockUnauthenticated = {
//   data: undefined,
// };
let firebase;

describe("Api testing", () => {
  beforeAll(() => {
    firebase = initializeApp(firebaseConfig);
  });
  beforeEach(() => {
    getServerSession.mockResolvedValue(mockAuthenticated);
  });

  afterEach(() => {
    getServerSession.mockReset();
  });

  afterAll(() => {
    deleteApp(firebase);
  });

  test("POST /api/test should return something", async () => {
    await testApiHandler({
      rejectOnHandlerError: false, // We want to assert on the error
      handler: userEndpoint,
      paramsPatcher: (params) => (params.id = "testId"),
      test: async ({ fetch }) => {
        const res = await fetch({
          method: "POST",
          body: JSON.stringify({
            username: mockAuthenticated.data.user.name,
            email: mockAuthenticated.data.user.email,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        expect(res.ok).toBe(true);
        expect(res.status).toBe(200);
      },
    });
  });

  // describe("Unauthenticated calls are rejected", () => {
  //   beforeEach(() => {
  //     getServerSession.mockResolvedValue(mockUnauthenticated);
  //   });

  //   test("Unauthenticated [id]/active", async () => {
  //     await testApiHandler({
  //       rejectOnHandlerError: false, // We want to assert on the error
  //       handler: activeEndpoint,
  //       test: async ({ fetch }) => {
  //         const res = await fetch({
  //           method: "GET",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify(),
  //         });
  //         expect(res.ok).toBe(false);
  //         expect(res.status).toBe(403);
  //       },
  //     });
  //   });
  // });
});
