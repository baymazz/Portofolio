<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="tempProject">
    <h1>{{ label }}</h1>
    <img :src="source" :alt="label" />
    <p>{{ detail }}</p>
  </div>
</template>

<style>
.tempProject h1 {
    margin-top: 20px;
  text-align: center;
}

.tempProject img {
  width: 50%;
  display: block;
  margin: auto;
}

.tempProject p {
  text-align: center;
  margin: 30px;
}
</style>