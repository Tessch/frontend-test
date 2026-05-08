import { canAccessNewsletter } from "../services/newsletterAccess";
import { describe, it, expect } from "vitest";

const user = {
  subscriptions: ["RIGHT_1"],
};

describe("canAccessNewsletter", () => {
  it("returns true for public newsletter", () => {
    const newsletter = {
      subscriptions: [],
    } as any;

    expect(canAccessNewsletter(newsletter, user)).toBe(true);
  });

  it("returns true if user has required right", () => {
    const newsletter = {
      subscriptions: ["RIGHT_1"],
    } as any;

    expect(canAccessNewsletter(newsletter, user)).toBe(true);
  });

  it("returns false if user lacks rights", () => {
    const newsletter = {
      subscriptions: ["RIGHT_2"],
    } as any;

    expect(canAccessNewsletter(newsletter, user)).toBe(false);
  });
});
