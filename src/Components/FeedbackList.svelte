<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedback = [];
</script>

<main>
  {#each feedback as fb (fb.id)}
    <h3><FeedbackItem {fb} on:feedback-delete /></h3>
  {/each}
</main>
