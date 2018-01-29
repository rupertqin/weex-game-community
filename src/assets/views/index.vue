<template>
  <div class="wrapper">
    <image :src="logo" class="logo" @click="jump"></image>
    <text class="greeting">The environment is ready!ss</text>
    <text class="message">Now, let's use Vue.js to build your Weex app.</text>
  </div>
</template>

<script>
  import weex from 'weex-vue-render';
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      }
    },
    methods: {
      jump (e) {
        navigator.push({
          url: 'http://192.168.0.177:8081/dist/home.js',
          animated: "true"
        }, event => {
          modal.toast({ message: 'callback: ' + event })
        })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
