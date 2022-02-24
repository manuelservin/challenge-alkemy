import { getDishById } from "../../helpers/helpers";

describe("Tests in getDishById ", () => {
  test("should return a dish", async () => {
    const dish = await getDishById(654018);
    expect(dish.title).toBe("Oreo Cake");
  });
});
