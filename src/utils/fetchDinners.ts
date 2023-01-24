import { Dinner } from "typings";

export const fetchDinner = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getDinners`);

  const data = await res.json();
  const dinners: Dinner[] = data.events;

  console.log("fetching" + dinners);
  return dinners;
};
