<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  import { fade, scale } from "svelte/transition";
  import { feedBackStore } from "../store";
  import { onDestroy } from "svelte";
  let feedback = [];

  const unsubscribe = feedBackStore.subscribe((data) => {
    feedback = data;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<main>
  {#each feedback as fb (fb.id)}
    <div in:scale out:fade><FeedbackItem {fb}  /></div>
  {/each}
</main>
