<template>
  <div class="item p-3 d-none d-md-flex">
    <b-button class="tag" size="sm" variant="outline-primary">Hàng Mới</b-button>
     <b-button class="tag" size="sm" variant="outline-info">Tất Cả</b-button>
    <b-button class="tag" size="sm" variant="outline-secondary">Nam <i class="fas fa-mars"></i></b-button>
    <b-button class="tag" size="sm" variant="outline-success">Nữ <i class="fas fa-venus"></i></b-button>
    <b-button class="tag" size="sm" variant="outline-danger">Áo Quần</b-button>
    <b-button class="tag" size="sm" variant="outline-warning">Giày Dép</b-button>
    <b-button class="tag" size="sm" variant="outline-info">Phụ Kiện</b-button>
    <b-button class="tag" size="sm" variant="outline-primary">Boozilla</b-button>
    <b-button class="tag" size="sm" variant="outline-secondary">Graphics</b-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  position: sticky;
  top: 65px;
  z-index: 2;
  background-color: #f5f5f5;
}
.item {
  display: flex;
  justify-content: center;
}
.tag {
  display: block;
  margin-right: 20px;
  border-radius: 15px;
}
</style>