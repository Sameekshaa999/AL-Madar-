import qatarPropertiesData from "./qatarPropertiesData.js";

export const locations = [
  ...new Set(qatarPropertiesData.map((item) => item.location)),
].sort();
export const unitTypes = [
  ...new Set(qatarPropertiesData.map((item) => item.type)),
].sort();
export const bedrooms = [
  ...new Set(qatarPropertiesData.map((item) => item.bedrooms)),
].sort();
export const furnishings = [
  ...new Set(qatarPropertiesData.map((item) => item.furnished)),
].sort();
export const pricings = [
  "< 2,000",
  "2,000 - 4,000",
  "4,000 - 7,000",
  "7,000 - 10,000",
  "> 10,000",
];

const dropdownLocations = locations.map((item) => ({
  value: item,
  label: item,
}));
const dropdownTypes = unitTypes.map((item) => ({ value: item, label: item }));
const dropdownBedrooms = bedrooms.map((item) => ({ value: item, label: item }));
const dropdownFurnishings = furnishings.map((item) => ({
  value: item,
  label: item,
}));
const dropdownPricings = [
  { value: [0, 2000], label: "< 2,000" },
  { value: [2000, 4000], label: "2,000 - 4,000" },
  { value: [4000, 7000], label: "4,000 - 7,000" },
  { value: [7000, 10000], label: "7,000 - 10,000" },
  { value: [10000, 90000], label: "> 10,000" },
];

export {
  dropdownLocations,
  dropdownBedrooms,
  dropdownFurnishings,
  dropdownPricings,
  dropdownTypes,
};
