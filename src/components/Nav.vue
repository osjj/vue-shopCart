<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link :to="{ path: '/'}" class="navbar-brand">Shopping Cart</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li :class="{active: activeStyle == 'routerOne'}" @click="clickActive('routerOne')"><router-link :to="{ path: '/'}">iPhone 6S <span class="sr-only">(current)</span></router-link></li>
          <li :class="{active:activeStyle == 'routerTwo'}" @click="clickActive('routerTwo')"><router-link :to="{ path: '/cart'}"> 购物车 <span class="badge text-danger" v-text="totalItem" v-if="totalItem"></span></router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'nav',
    data() {
      return {
        activeStyle: 'routerOne'
      }
    },
    methods: {
      clickActive:function(router) {
        this.activeStyle = router
      }
    },
    computed: {
      'totalItem': function() {
        return this.cart.length
      },
      ...mapGetters([
        'cart'
      ])
    }
  }
</script>

<style media="screen">
  .text-danger {
    color: #fff;
    background-color: #d9534f;
  }
</style>
