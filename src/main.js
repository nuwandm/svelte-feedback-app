import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
    Age: 34,
  },
});

export default app;
