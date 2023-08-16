import request from "supertest";
import { app } from "../app";
describe("Test coffee API endpoint request", () => {
  test("GET /tea with different param should return correct object", async () => {
    const res = await request(app).get("/tea").query({ teaName: "Herbal Tea" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Herbal Tea",
    });
  });
});
