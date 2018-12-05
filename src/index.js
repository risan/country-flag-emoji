import data from "./data";

const countryCodes = Object.keys(data);

const list = Object.values(data);

/**
 * Get country flag emoji.
 *
 * @param {String} countryCode
 * @return {Object|Undefined}
 */
const get = countryCode => {
  if (countryCode === undefined) {
    return list;
  }

  if (typeof countryCode !== "string") {
    return undefined;
  }

  const code = countryCode.toUpperCase();

  return Object.prototype.hasOwnProperty.call(data, code)
    ? data[code]
    : undefined;
};

export default {
  data,
  countryCodes,
  list,
  get
};
