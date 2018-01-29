
export default {
  OPEN_SIDEBAR: (state) => state.isSidebarOpen = true,
  CLOSE_SIDEBAR: (state) => state.isSidebarOpen = false,
  FETCH_START: (state) => state.loading = true,
  RESET_NEWS_LIST: (state) => {
    state.newsList = []
    state.noMoreNews = false
  },
  FETCH_NEWS_LIST_FINISH: (state, list) => {
    if (list.length < 10) state.noMoreNews = true
    const mergeList = state.newsList.concat(list)
    state.newsList = mergeList
    state.loading = false
  },
  FETCH_NEWS_DETAILS_FINISH: (state, news) => {
    state.news = news
    state.loading = false
  }
}

