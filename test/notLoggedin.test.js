const request = require("supertest");

const app = require("../src/app");

describe("app", () => {
  it("responds with a not found message", (done) => {
    request(app)
      .get("/isha")
      .set("Accept", "application/json")
      .expect(404, done);
  });
});

describe("GET /", () => {
  // token not being sent - should respond with a 400
  it("It should require authorization to access the profile", async () => {
    await request(app).get("/api/v1/profile");
    expect(400);
  });
});

describe("GET /", () => {
  it("It should require authorization to fetch the top headlines of news", async () => {
    await request(app).get("/api/v1/news");
    expect(400);
  });
});

describe("GET /", () => {
  it("It should require authorization for logout", async () => {
    await request(app).get("/api/v1/logout");
    expect(400);
  });
});

describe("GET /", () => {
  it("You are not allowed to access news search api without login", async () => {
    await request(app).post("/api/v1/search").send({ search: "delhi" });
    expect(400);
  });
});
