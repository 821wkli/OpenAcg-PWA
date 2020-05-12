import { apiBaseUrl } from '../config/env'
import { isEmpty } from './common'
import { chinese } from '../config/langs'

function NetworkError (msg) {
  this.name = 'NetworkError'
  this.message = msg.message
  const error = new Error(this.message)
  error.name = this.name
  this.staack = error.stack
  this.statusCode = msg.statusCode
}

export default async (type = 'GET', url = '', data = {}, timeout = 10000) => {
  type = type.toUpperCase()
  url = apiBaseUrl + url

  if (type === 'GET') {
    let dataStr = '' // concat query strings
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  if (window.fetch) {
    const contoller = new AbortController()
    const signal = contoller.signal
    const requestConfig = {
      method: type,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      signal
    }

    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }

    setTimeout(() => {
      contoller.abort()
    }, timeout)
    try {
      var response = await fetch(url, requestConfig)
      var responseJson = await response.json()
    } catch (error) {
      // console.log(response)
      // console.log(error)
      if (error.name === 'AbortError') {
        throw new NetworkError({ message: 'timeout', statusCode: 500 })
      }

      if (!isEmpty(response)) {
        throw new NetworkError({ message: response.statusText, statusCode: response.status })
      }
      // catch offline exception
      throw new NetworkError({ message: chinese.common.networkError, statusCode: 400 })
    }

    return responseJson
  } else {
    let requestObj
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest()
    } else {
      requestObj = new XMLHttpRequest()
    }

    let sendData = ''
    if (type === 'POST') {
      sendData = JSON.stringify(data)
    }

    requestObj.open(type, url, true)
    requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    requestObj.send(sendData)

    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4) {
        if (requestObj.status === 200) {
          let obj = requestObj.response
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj)
          }
          return obj
        } else {
          throw new Error(requestObj)
        }
      }
    }
  }
}
