<template>
  <div class="wrapper">
    <router-view></router-view>
    <wxc-popup width="500"
               pos="left"
               ref="sidebar"
               :show="isSidebarOpen"
               @wxcPopupOverlayClicked="overlayClicked">

      <wxc-cell label="首页"
                :has-arrow="true"
                @wxcCellClicked="linkTo(`/home`)"
                :has-margin="true"></wxc-cell>
      <wxc-cell label="新闻"
                :has-arrow="true"
                @wxcCellClicked="linkTo(`/news`)"
                :has-margin="true"></wxc-cell>
      <wxc-cell label="我"
                :has-arrow="true"
                @wxcCellClicked="linkTo(`/my`)"
                :has-margin="true"></wxc-cell>
    </wxc-popup>
  </div>
</template>

<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .fa {
    font-family: awesomefont;
  }
</style>

<script>
  import { WxcButton, WxcPopup, WxcCell, WxcMinibar } from 'weex-ui'

  export default {
    components: { WxcButton, WxcPopup, WxcCell, WxcMinibar },
    computed: {
      isSidebarOpen() {
        return this.$store.state.isSidebarOpen
      }
    },
    created() {
      let domModule = weex.requireModule('dom');
      domModule.addRule('fontFace', {
          'fontFamily': "iconfont",
          'src': "url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"
      });

      // http://fontawesome.io/cheatsheet/
      domModule.addRule('fontFace', {
          'fontFamily': "awesomefont",
          'src': "url('https://cdn.bootcss.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0')"
      });
    },
    methods: {
      linkTo(path) {
        this.$router.push(path)
        this.$refs.sidebar.hide()
      },
      overlayClicked () {
        this.$store.dispatch('CLOSE_SIDEBAR')
      },
      wxcCellClicked() {

      },

    }
  }
</script>
