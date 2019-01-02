<template>
<div class="card">
    <img class="thumbnail" :src="$withBase(card.thumbnail)">
    </img>
    <!--<div class="title">{{card.title}}</div>-->
    <h4 class="heading">{{card.title}}</h4>

</div>
</template>

<script>
  export default {
    name: 'card',
    data: () => ({
    }),
    props: ['card']
  }
</script>

<style scoped>

    .card {
        flex-grow: 0;
        overflow: hidden;
        margin: .75rem;
        position: relative;
        border-radius: 5px;
        background-color: white;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    }

    .thumbnail {
        width:9.04rem;
        height:6.38rem;
        background-size: contain;
        background-color: #34aaf3;
    }

    .heading {
        width: 100%;
        margin: 0.5em;
    }

    .sub-heading {
        max-width: 8.04rem;
        text-align: left;
        color: gray;
        margin: 0.5em;
    }
</style>
