const request = require("supertest");
const app = require("../src/app"); // the express server
//const server = request(app);

// const baseUrl = "http://localhost:5000/api/v1";

describe("user registration", () => {
  it("user register successfully", async () => {
    const data = {
      firstName: "Bobii",
      lastName: "Gauri",
      email: "bob13@gmail.com",
      password: "bob567899k",
      password2: "bob567899k"
    };
    const { body } = await request(app)
      .post("/api/v1/register")
      .send(data)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(body).toHaveProperty("user");
  });

  it("user register fails when required field not provided", async () => {
    const data = {
      firstName: "Bobii",
      lastName: "Gauri",
      password: "bob567899k",
      password2: "bob567899k"
    };
    await request(app)
      .post("/api/v1/register")
      .send(data)
      .expect(400)
      .expect("Content-Type", /json/);
  });
});

it("user not registered when invalid email provided", async () => {
  const data = {
    firstName: "Bobii",
    lastName: "Gauri",
    email: "bob1gmail.com",
    password: "bob567899k",
    password2: "bob567899k"
  };
  await request(app)
    .post("/api/v1/register")
    .send(data)
    .expect(400);
});



