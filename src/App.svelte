<script>
  import FeedbackList from "./Components/FeedbackList.svelte";
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

  const deleteFeedback = (e) => {
    const feedbackId = e.detail;
    feedback = feedback.filter((i) => i.id !== feedbackId);
  };
</script>

<main class="container">
  <FeedbackList {feedback} on:feedback-delete={deleteFeedback} />
</main>

<style>
</style>
