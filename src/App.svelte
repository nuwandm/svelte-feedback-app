<script>
  import FeedbackList from "./Components/FeedbackList.svelte";
  import FeedbackStats from "./Components/FeedbackStats.svelte";

  let feedback = [
    {
      id: 1,
      rating: 10,
      text: "Superb Service",
    },
    {
      id: 2,
      rating: 9,
      text: "Very Good Service",
    },
    {
      id: 3,
      rating: 8,
      text: "Good Service",
    },
  ];

  $: count = feedback.length;
  $: average =
    feedback.reduce((acc, current) => acc + current.rating, 0) / count;

  const deleteFeedback = (e) => {
    const feedbackId = e.detail;
    feedback = feedback.filter((i) => i.id !== feedbackId);
  };
</script>

<main class="container">
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:feedback-delete={deleteFeedback} />
</main>

<style>
</style>
