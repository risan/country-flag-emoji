/* global expect:false, test:false */
import countryFlagEmoji from "../src";

const TOTAL_COUNTRIES = 258;

test("it can access all emoji data", () => {
  expect(countryFlagEmoji).toHaveProperty("data.ID");
  expect(countryFlagEmoji).toHaveProperty("data.SE");
  expect(countryFlagEmoji).toHaveProperty("data.US");

  const codes = Object.keys(countryFlagEmoji.data);
  expect(codes).toHaveLength(TOTAL_COUNTRIES);

  const props = Object.keys(countryFlagEmoji.data.ID);
  expect(props).toEqual(["code", "unicode", "name", "emoji"]);
});

test("it can access country codes", () => {
  expect(countryFlagEmoji).toHaveProperty("countryCodes");

  expect(countryFlagEmoji.countryCodes).toHaveLength(TOTAL_COUNTRIES);

  expect(countryFlagEmoji.countryCodes).toContain("ID");
  expect(countryFlagEmoji.countryCodes).toContain("SE");
  expect(countryFlagEmoji.countryCodes).toContain("US");
});

test("it can access list of country flag emojis", () => {
  expect(countryFlagEmoji).toHaveProperty("list");

  expect(countryFlagEmoji.list).toHaveLength(TOTAL_COUNTRIES);

  const props = Object.keys(countryFlagEmoji.list[0]);
  expect(props).toEqual(["code", "unicode", "name", "emoji"]);
});

test("it can get country flag emoji using the country code", () => {
  expect(countryFlagEmoji.get("ID")).toEqual({
    code: "ID",
    unicode: "U+1F1EE U+1F1E9",
    name: "Indonesia",
    emoji: "🇮🇩"
  });

  expect(countryFlagEmoji.get()).toHaveLength(TOTAL_COUNTRIES);

  expect(countryFlagEmoji.get("foo")).toBeUndefined();
  expect(countryFlagEmoji.get(123)).toBeUndefined();
});
