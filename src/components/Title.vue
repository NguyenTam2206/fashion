<template>
  <div>
    <h2>{{title}}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style scoped>
h2 {
  margin-top: 30px;
  color: grey;
  text-align: center;
}
hr {
    width: 150px;
}
</style>