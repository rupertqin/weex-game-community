const stream = weex.requireModule('stream')
import config from '../config'

const baseUrl = `http://${ config.ip }:7001/`

export function fetchNewsList (page) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'GET',
      url: `${ baseUrl }api/v1/article?page=${ page }`,
      type: 'json'
    }, (response) => {
      if (response.status == 200) {
        resolve(response.data)
      }
      else {
        reject(response)
      }
    }, () => {})
  })
}

export function fetchNewsDetails (id) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'GET',
      url: `${ baseUrl }api/v1/article/${ id }`,
      type: 'json'
    }, (response) => {
      if (response.status == 200) {
        resolve(response.data)
      }
      else {
        reject(response)
      }
    }, () => {})
  })
}
