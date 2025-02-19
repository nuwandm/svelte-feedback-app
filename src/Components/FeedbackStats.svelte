<script>
  import { feedBackStore } from "../store";

  $: count = $feedBackStore.length; // we can access the store directly with the $ sign
  $: average = count
    ? (
        $feedBackStore.reduce((acc, { rating }) => acc + rating, 0) / count
      ).toFixed(1)
    : "0.0";
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Rating: {average}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
