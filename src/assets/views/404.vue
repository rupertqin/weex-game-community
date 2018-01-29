<template>
  <div>
    <wxc-minibar title="404"
                 background-color="rgb(25, 114, 217)"
                 text-color="#FFFFFF"
                 right-text="more"
                 :useDefaultReturn="false"
                 @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                 @wxcMinibarRightButtonClicked="minibarRightButtonClick">
      <text slot="left" class="fa" style="color:#fff; width:48px; height:48px; font-size:48px;" >&#xf104;</text>
    </wxc-minibar>

  </div>
</template>

<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .fa {
    font-family: awesomefont;
  }
  .slider {
    margin-bottom: 25px;
    width: 750px;
    height: 250px;
  }
  .frame {
    width: 750px;
    height: 750px;
    position: relative;
  }
  .image {
    width: 750px;
    height: 750px;
  }
  .menu {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    height: 90px;
  }
  .bar-item{
    flex: 1;
  }
  .bar-active{
    color:#b4282d;
  }
  .title { padding-top:100px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 0px; color:#888; font-size: 30px;}
</style>

<script>
  import { WxcButton, WxcPopup, WxcMinibar } from 'weex-ui'
  const stream = weex.requireModule('stream');



  export default {
    components: { WxcButton, WxcPopup, WxcMinibar },
    data: () => ({
      news: {},
    }),
    created() {},
    methods: {
      minibarLeftButtonClick() {
        this.$router.push('/')
      },
      minibarRightButtonClick() {
      },
      buttonClicked () {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      linkTo(path) {
        this.$router.push(path)
      },
    }
  }
</script>