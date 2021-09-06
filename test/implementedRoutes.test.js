const request = require("supertest");
const StatusCodes = require("http-status-codes");

const app = require("../src/app");

const baseUrl = "/api/v1";

describe("Implemented Routes", () => {
  it.each(["/register", "/login", "/search", "/weather"])(
    "POST %s",
    async (url) => {
      const res = await request(app).post(`${baseUrl}${url}`);
      expect(res.status).not.toEqual(StatusCodes.NOT_FOUND);

    }
  );
});

describe("Implemented Routes", () => {
  it.each(["/profile", "/news", "/logout"])(
    "GET %s",
    async (url) => {
      const res = await request(app).get(`${baseUrl}${url}`);
      expect(res.status).not.toEqual(StatusCodes.NOT_FOUND);

    }
  );
});
