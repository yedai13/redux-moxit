import { addBug } from "./../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  it("shold handle the addBug actiosn", async () => {
    const store = configureStore();
    const bug = { description: "a" };
    await store.dispatch(addBug(bug));
    expect(store.getState().entities.bugs.list).toHaveLength(1);
  });
});
