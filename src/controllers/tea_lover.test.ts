import request from "supertest";
import { app } from "../app";
describe("Test tea API endpoint request", () => {
  test("GET should return correct message", async () => {
    const res = await request(app).get("/tealover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like Tea!");
  });
});
