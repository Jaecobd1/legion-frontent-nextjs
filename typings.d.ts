interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Event extends SanityBody {
  _type: "event";
  name: string;
  date: string;
  info: string;
}
export interface Dinner extends SanityBody {
  _type: "dinners";
  name: string;
  date: string;
  info: string;
}
