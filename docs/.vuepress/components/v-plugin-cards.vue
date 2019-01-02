<template>
    <div class="showcase">
        <div class="container">
            <v-card v-for="card in cards" :key="card.name" :card="card"></v-card>
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
  const pluginData = require('./data/plugins.json')
  export default {
    name: 'plugin-cards',
    data: () => ({
      // reactive data property of the component.
      cards: pluginData,
    }),
  }
</script>

<style scoped>

    .showcase {
        background-color: #EFF0F2;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-evenly;
        padding-top: .5em;
        padding-bottom: .5em;
    }
</style>
