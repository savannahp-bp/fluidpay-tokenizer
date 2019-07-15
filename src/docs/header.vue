<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss">
  @import './assets/scss/_variables.scss';

  .header {
    display: flex;
    flex-direction: column;
    width: 100%;

    .title {
      font-size: 42px;
      font-weight: bold;
      color: $color-white;
      text-align: center;
      padding: $spacing-half 0 $spacing-quarter 0;
    }

    .menu {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: $spacing;

      a {
        color: $color-white;
        font-size: 16px;
        font-weight: bold;
        margin: 0 $spacing-half 0 $spacing-half;
      }
    }
  }
</style>

<template>
  <div class="header">
    <div class="title">FluidPay Tokenizer Form</div>
    <div class="menu">
      <router-link to="/home">Home</router-link>
      <router-link to="/methods">Methods</router-link>
      <router-link to="/styles">Styles</router-link>
      <router-link to="/sections">Sections</router-link>
      <router-link to="/payments">Payments</router-link>
    </div>
  </div>
</template>
