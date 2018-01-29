import {
  fetchNewsList,
  fetchNewsDetails
} from './fetch'

export default {
  OPEN_SIDEBAR: ({ commit }) => commit('OPEN_SIDEBAR'),
  CLOSE_SIDEBAR: ({ commit }) => commit('CLOSE_SIDEBAR'),
  RESET_NEWS_LIST: ({ commit }) => commit('RESET_NEWS_LIST'),
  FETCH_NEWS_LIST: ({ commit }, page = 1) => {
    commit('FETCH_START')
    return fetchNewsList(page).then(list => commit('FETCH_NEWS_LIST_FINISH', list))
  },
  FETCH_NEWS_DETAILS: ({ commit }, id) => {
    commit('FETCH_START')
    return fetchNewsDetails(id).then(news => commit('FETCH_NEWS_DETAILS_FINISH', news))
  }
}
