import { isEven } from "./math";

describe("isEven", () => {
  it("shoul return true if given an even number", () => {
    //function under tets (SUT)
    const result = isEven(2);

    expect(result).toEqual(true);
  });

  it("should return false if given an odd number", () => {
    //function under tets (SUT)
    const result = isEven(1);

    expect(result).toEqual(false);
  });
});
