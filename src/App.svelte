<script>
  import FeedbackForm from "./Components/FeedbackForm.svelte";
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

  const addFeedback = (e) => {
    const { text, rating } = e.detail;
    const newFeedbackObj = {
      id: feedback.length + 1,
      rating: rating,
      text: text,
    };
    feedback = [...feedback, newFeedbackObj];
  };
</script>

<main class="container">
  <FeedbackForm on:feedback-add={addFeedback} />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:feedback-delete={deleteFeedback} />
</main>

<style>
</style>
