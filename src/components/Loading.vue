<template>
  <div class="timeline-wrapper">
    <div class="timeline-item">
      <div class="animated-background">
        <div class="background-masker header-top"></div>
        <div class="background-masker column-one"></div>
        <div class="background-masker column-two"></div>
        <div class="background-masker column-three"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.timeline-item {
    background: #fff;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 3px;
    margin: 0 auto;
}

@keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}

.animated-background {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 430px;
    position: relative;
}

.background-masker {
    background:white;
    position: absolute;
}


.background-masker.header-top{
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
}
.background-masker.column-one{
    top: 30px;
    left: 255px;
    right: 825px;
    height: 430px;
}
.background-masker.column-two{
    top: 30px;
    left: 540px;
    right: 540px;
    height: 430px;
}
.background-masker.column-three{
    top: 30px;
    left: 825px;
    right: 255px;
    height: 430px;
}


</style>