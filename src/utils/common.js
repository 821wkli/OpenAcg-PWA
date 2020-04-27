import localforage from 'localforage'
export const isEmpty = (obj) => {
  if (obj instanceof Array) {
    if (obj.length === 0) return true
  } else if (obj instanceof Object) {
    if (JSON.stringify(obj) === '{}') return true
  } else {
    if (obj === null || obj === '' || obj === undefined) return true
    return false
  }
  return false
}

export const setStore = (name, content) => {
  if (!name) return
  // if (typeof content !== 'string') {
  //   content = JSON.stringify(content)
  // }
  // window.localStorage.setItem(name, content)
  localforage.setItem(name, content)
}

export const getStore = async (name) => {
  try {
    const value = await localforage.getItem(name)

    if (isEmpty(value)) {
      return null
    }
    // This code runs once the value has been loaded
    // from the offline store.
    return value
  } catch (err) {
    // This code runs if there were any errors.
    throw new Error(err)
  }
}

export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export const getStyle = (element, attr, NumberMode = 'int') => {
  let target

  if (attr === 'scrollTop') {
    target = element.scrollTop
  } else if (element.currentStyle) {
    target = element.currentStyle[attr]
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr]
  }

  return NumberMode === 'float' ? parseFloat(target) : parseInt(target)
}

export const copyTextToClipboard = (text) => {
  const textArea = document.createElement('textarea')
  textArea.style.position = 'fixed'
  textArea.style.top = 0
  textArea.style.left = 0

  textArea.style.width = '2em'
  textArea.style.height = '2em'
  textArea.style.padding = 0
  textArea.style.border = 'none'
  textArea.style.outline = 'none'
  textArea.style.boxShadow = 'none'

  textArea.style.background = 'transparent'
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  let successful
  try {
    successful = document.execCommand('copy')
  } catch (err) {
    successful = false
  } finally {
    document.body.removeChild(textArea)
  }
  return successful
}

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
