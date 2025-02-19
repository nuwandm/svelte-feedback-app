<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  import { fade, scale } from "svelte/transition";
  export let feedback = [];
</script>

<main>
  {#each feedback as fb (fb.id)}
    <div in:scale out:fade><FeedbackItem {fb} on:feedback-delete /></div>
  {/each}
</main>
