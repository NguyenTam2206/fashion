<template>
    <router-link tag="div" :to="linkto" class="col-2 offset-5 text-center btn btn-info mt-3">
       {{content}}
    </router-link> 
</template>

<script>
export default {
  props : {
    linkto : {
      type : Object
    },
    content : {
        type : Object
    }
  },
};
</script>

<style scoped>
</style>
