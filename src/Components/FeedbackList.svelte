<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedback = [];
</script>

<main>
  <h1>This is FeedbackList</h1>
  {#each feedback as fb (fb.id)}
    <h3><FeedbackItem {fb} /></h3>
  {/each}
</main>
