import { writable } from "svelte/store";

export const feedBackStore = writable([
  {
    id: 1,
    text: "This is feedback item 1",
    rating: 10,
  },
  {
    id: 2,
    text: "This is feedback item 2",
    rating: 9,
  },
  {
    id: 3,
    text: "This is feedback item 3",
    rating: 7,
  },
]);
