const request = require("supertest");

const app = require("../src/app");

it("login without email and password will give error", async () => {
  await request(app)
    .post("/api/v1/login")
    .set("Accept", "application/json")
    .expect(400);
});

it("Success if credential is valid", async () => {
  let token;
  await request(app)
    .post("/api/v1/login")
    .set("Accept", "application/json")
    .set("Content-Type", "application/json")
    .send({ email: "bob12@gmail.com", password: "bob567899" })
    .expect(200)
    .expect("Content-Type", /json/)
    .expect((response) => {
      token = response.body.token;
      expect(response.body);
    });
});

describe("GET /", () => {
  it("Get profile", async () => {
    await request(app).get("/api/v1/profile");
    expect(200);
  });
});

