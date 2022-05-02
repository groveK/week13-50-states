<template>
  <div id="block-header">
    <h1 id="title">Have you visited every state?</h1>
  </div>
</template>

<script>

export default {
  name: 'PageHeader',
}
</script>\

<style scoped>

#block-header {
  padding: 3rem 1rem;
  margin-bottom: 2rem;
  border-radius: .5rem;
  background-color: darkcyan;
  background-image: url('~@/assets/map_header.jpg');
  background-size: cover;
}

#title {
  font-weight: 500;
  color: ghostwhite;
  text-shadow: #2c3e50;


}

</style>