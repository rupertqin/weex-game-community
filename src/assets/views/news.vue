<template>
  <div>
    <wxc-loading :show="false" type="default"></wxc-loading>
    <wxc-minibar title="资讯"
                 background-color="rgb(25, 114, 217)"
                 text-color="#FFFFFF"
                 right-text="more"
                 :useDefaultReturn="false"
                 @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                 @wxcMinibarRightButtonClicked="minibarRightButtonClick">
      <text slot="left" class="fa" style="color:#fff; width:36px; height:36px; font-size:36px;" >&#xf0c9;</text>
    </wxc-minibar>
    <list class="list">
      <cell>
        <slider class="slider" interval="3000" auto-play="true">
          <div class="frame" v-for="img in imageList">
            <image class="image" resize="cover" :src="img.src"></image>
          </div>
        </slider>
      </cell>
      <cell class="menu content">
        <div class="bar-item" @click="linkTo('/home')">
          <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
        </div>
        <div class="bar-item" @click="linkTo('/news')">
          <text class="bar-txt" :class="[this.isActive('news')]">资讯</text>
        </div>
        <div class="bar-item" @click="linkTo('/class')">
          <text class="bar-txt" :class="[this.isActive('class')]">分类</text>
        </div>
        <div class="bar-item">
          <text class="bar-txt" :class="[this.isActive('shop')]">购物车</text>
        </div>
        <div class="bar-item" @click="linkTo('/my')">
          <text class="bar-txt" :class="[this.isActive('my')]">个人</text>
        </div>
      </cell>

      <loading @loading="fetchData" :display="loading ? 'show' : 'hide'">
        <loading-indicator class="indicator"></loading-indicator>
      </loading>

      

      <cell
        v-for="(v,i) in news"
        append="tree"
        :index="i"
        :key="i"
        class="row content"
        @appear="onappear(i, $event)"
        @disappear="ondisappear(i, $event)">
        <div class="item">
          <text class="item-title" @click="linkTo(`/news/${v.id}`)">{{ v.title }}</text>
        </div>
      </cell>
    </list>
      
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
  .content {
    padding-left: 10px;
    padding-right: 10px;
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

  .list {height: 1100px;}
  .row {width: 750px;}
  .item {height: 80px;}
</style>

<script>
  import { WxcButton, WxcPopup, WxcMinibar, WxcLoading } from 'weex-ui'
  const modal = weex.requireModule('modal')
  const stream = weex.requireModule('stream')



  export default {
    components: { WxcButton, WxcPopup, WxcMinibar, WxcLoading },
    data: () => ({
      imageList: [
        { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
      ],
      page: 0,
    }),
    computed: {
      news () {
        return this.$store.state.newsList
      },
      loading () {
        return this.$store.state.loading
      }
    },
    created () {
      modal.toast({
          message: WXEnvironment.deviceHeight,
          duration: 3
      })

      this.$store.dispatch('RESET_NEWS_LIST')
      this.fetchData()
    },
    methods: {
      minibarLeftButtonClick () {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      minibarRightButtonClick () {
      },
      buttonClicked () {
        this.$store.dispatch('OPEN_SIDEBAR')
      },
      linkTo (path) {
        this.$router.push(path)
      },
      isActive () {

      },
      fetchData () {
        if (this.$store.state.noMoreNews) return 
        this.$store.dispatch('FETCH_NEWS_LIST', ++this.page)
      },
      onappear () {},
      ondisappear () {},
    }
  }
</script>

