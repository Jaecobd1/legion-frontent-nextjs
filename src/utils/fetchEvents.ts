import { Event } from "typings";

export const fetchEvent = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getEvents`);

  const data = await res.json();
  const events: Event[] = data.events;

  console.log("fetching" + events);
  return events;
};
