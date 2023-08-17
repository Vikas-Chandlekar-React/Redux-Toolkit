import Chance from "chance";

const chance = Chance();

export const fakeUserData = () => {
  const fakeData = chance.name({ middle: true });
  console.log("Fake data = ", fakeData);
  return fakeData;
};
