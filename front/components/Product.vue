<template>

  <div class="product">
    <img :src="`http://localhost:1337` + image" alt="Product image"/>
    <div class="product__name">{{ name }}</div>
  </div>

</template>

<style lang="scss">
.product {
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 15px -8px rgba(0, 0, 0, 0.75);
  border-radius: 2px 2px 20px 2px;
  cursor: pointer;
  width: 180px;

  :hover {
    box-shadow: 1px 1px 15px -8px rgba(78, 24, 143, 0.75);
  }

  &__name {
    text-align: center;
    font-size: 30px;
    color: white;
    border-radius: 2px 2px 20px 2px;
    position: relative;
    overflow: hidden;

    &::after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: mediumpurple;
      transition: .35s;
      z-index: -2;
    }

    &::before {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: orange;
      border-radius: 2px 2px 20px 2px;
      transition: .5s;
      z-index: -1;
    }

    &:hover::before {
      width: 100%;
      background: orange;
      z-index: -1;
    }

  }

}
</style>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>
