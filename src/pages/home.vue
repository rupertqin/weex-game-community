<template>
  <scroller>
    <div>
      <wxc-minibar title="首页"
                   background-color="rgb(25, 114, 217)"
                   text-color="#FFFFFF"
                   right-text="more"
                   :useDefaultReturn="false"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick">
        <text slot="left" class="fa" style="color:#fff; width:36px; height:36px; font-size:36px;" >&#xf0c9;</text>
      </wxc-minibar>
      <slider class="slider" interval="3000" auto-play="true">
        <div class="frame" v-for="img in imageList">
          <image class="image" resize="cover" :src="img.src"></image>
        </div>
      </slider>
      <div class="content">
        <div class="menu">
          <div class="bar-item" @click="linkTo('/home')">
              <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
          </div>
          <div class="bar-item" @click="linkTo('/news')">
              <text class="bar-txt" :class="[this.isActive('news')]">资讯</text>
          </div>
          <div class="bar-item" @click="linkTo('class')">
              <text class="bar-txt" :class="[this.isActive('class')]">分类</text>
          </div>
          <div class="bar-item">
              <text class="bar-txt" :class="[this.isActive('shop')]">购物车</text>
          </div>
          <div class="bar-item" @click="linkTo('/my')">
              <text class="bar-txt" :class="[this.isActive('my')]">个人</text>
          </div>
        </div>
        <div>platform: {{ platform }}</div>
        <text class="iconfont">&#xe689;</text>
        

        <image :src="logoUrl" class="logo" style="width: 360px;height: 207.6px;"></image>
        <text class="title">Home {{target}}</text>
        <text class="title">Home {{target}}</text>
        <text class="title">Home {{target}}</text>
        <text class="title">Home {{target}}</text>
        <text class="desc">Now, let's use vue to build your weex app.</text>
        <wxc-button class="btn" text="Open Popup"
                    @wxcButtonClicked="buttonClicked">
        </wxc-button>
      </div>
      
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
  .content {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 30px;
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
  .btn {
    width: 730px;
  }


  .title { padding-top:100px; padding-bottom: 40px; font-size: 48px; }
  .desc { padding-top: 0px; color:#888; font-size: 30px;}

  .image {
    width: 750px;
    height: 750px;
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
</style>

<script>
  import { WxcButton, WxcPopup, WxcMinibar } from 'weex-ui'

  const modal = weex.requireModule('modal')
  console.log('modal: ', modal)



  export default {
    components: { WxcButton, WxcPopup, WxcMinibar },
    data: () => ({
      logoUrl: 'https://pic.36krcnd.com/201801/15061930/b80tardo9yta6qgf!heading',
      target: 'World',
      imageList: [
        { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
      ],
      config: JSON.stringify(weex.config),
      platform: weex.config.env.platform

    }),
    created() {
      modal.toast({
        message: 'I am a toast.',
        duration: 3
      })
    },
    methods: {
      buttonClicked () {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      minibarLeftButtonClick () {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      },
      isActive() {

      },
      linkTo(path) {
        this.$router.push(path)
      },
      tabTo() {}
    }
  }
</script>