<script>
  import Card from "./Card.svelte";
  export let fb = {};
  console.log("fb", fb);
</script>

<Card>
  <div class="num-display">{fb.rating}</div>
  <div class="close">x</div>
  <p class="text-display">
    {fb.text}
  </p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
