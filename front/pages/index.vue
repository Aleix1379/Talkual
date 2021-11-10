<template>

  <div id="products">

    <div class="product-list">

      <div class="product-item" v-for="(product, key) of products" :key="key">
        <Product :name="product.name" :image="product.image.url"/>
      </div>

    </div>

    <b-button
      v-if="currentPage < pagination.totalPages - 1"
      class="btn-show-more"
      @click="showMore"
    >
      Show more
    </b-button>

    <span v-if="currentPage === pagination.totalPages - 1" class="no-more-products">No hay mas productos</span>

  </div>

</template>

<style lang="scss">

#products {
  display: flex;
  flex-direction: column;
}

.product-list {
  display: flex;
  flex-wrap: wrap;

}

.product-item {
  margin: 20px 25px;
}

.no-more-products,
.btn-show-more {
  align-self: center;
  margin-top: 30px;
}

</style>

<script>

import ProductService from "../services/Product"
import Product from '../components/Product'

const productService = new ProductService()

export default {
  components: {
    Product
  },
  data: () => ({
    currentPage: 0,
    products: [],
    pagination: {
      numberOfElements: 0,
      size: 0,
      totalElements: 0,
      totalPages: 0
    }
  }),

  async fetch() {
    try {
      const response = await productService.find(this.currentPage)

      this.products = response.items

      this.pagination.numberOfElements = response.numberOfElements
      this.pagination.size = response.size
      this.pagination.totalElements = response.totalElements
      this.pagination.totalPages = response.totalPages
    } catch (e) {
      this.$store.commit('openLoginModal')
    }
  },

  methods: {
    async showMore() {
      if (this.currentPage < this.pagination.totalPages - 1) {
        const response = await productService.find(++this.currentPage)

        this.products = this.products.concat(response.items)

        this.pagination.numberOfElements = response.numberOfElements
        this.pagination.size = response.size
        this.pagination.totalElements = response.totalElements
        this.pagination.totalPages = response.totalPages
      }
    }
  }

}

</script>
