<template>
  <scroller class="wrapper" @click="update">
    <wxc-minibar title="个人"
                 background-color="rgb(25, 114, 217)"
                 text-color="#FFFFFF"
                 right-text="more"
                 :useDefaultReturn="false"
                 @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                 @wxcMinibarRightButtonClicked="minibarRightButtonClick">
      <text slot="left" class="fa" style="color:#fff; width:48px; height:48px; font-size:48px;" >&#xf104;</text>
    </wxc-minibar>
    <div>
      <image :src="logoUrl" class="logo"></image>
      <text class="title">My {{target}}</text>
      <text class="title">My {{target}}</text>
      <text class="title">My {{target}}</text>
      <text class="title">My {{target}}</text>
      <text class="title">My {{target}}</text>
      <text class="title">My {{target}}</text>
      <text class="desc">Now, let's use vue to build your weex app.</text>
      <wxc-button text="Open Popup"
                  @wxcButtonClicked="buttonClicked">
      </wxc-button>
      <wxc-popup width="500"
                 pos="left"
                 :show="isShow"
                 @wxcPopupOverlayClicked="overlayClicked">
      </wxc-popup>
    </div>
  </scroller>
</template>

<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .fa {
    font-family: awesomefont;
  }
  .wrapper { align-items: center; }
  .title { padding-top:100px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 0px; color:#888; font-size: 30px;}
</style>

<script>
  import { WxcButton, WxcPopup, WxcMinibar } from 'weex-ui'

  const modal = weex.requireModule('modal')

  export default {
    components: { WxcButton, WxcPopup, WxcMinibar },
    data: () => ({
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      isShow: false
    }),
    created() {
      modal.toast({
        message: 'me ',
        duration: 3
      })
    },
    methods: {
      buttonClicked () {
        this.isShow = true;
      },
      overlayClicked () {
        this.isShow = false;
      },
      minibarLeftButtonClick() {
        this.$router.push('/')
      },
      minibarRightButtonClick() {
      },
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>