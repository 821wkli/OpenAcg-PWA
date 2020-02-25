let r = null, // setTimeout tag
  cr = null //  A timer to change element style being long tapped
let startX = 0, //finger position once touchEvent triggered
                //  use to determine whether the finger has been moved when touchmove
                // that's touchstart.pos === touchmove.pos?
  startY = 0
let firstTouch = false

export default {
  inserted(el, binding, vNode) {
    let delayTime = 350
    let disX = 10,
      disY = 10
    let value = binding.value
    let data = binding.arg
    /**
     * pass parameters wrapped in an object
     * time: in ms
     * v-longtap = "{time: 2000}"
     * time must be larger than 500ms
     */
    if (value && value.time && Number.isInteger(value.time) && value.time >= 500) {
      delayTime = value.time
    }
    /**
     * movementInternvals：v-longtap = "{disX: 10, disY: 10}"
     * if one of numbers is negative then not determine its direction
     */
    if (value && value.disX && Number.isInteger(value.disX)) {
      disX = value.disX
    }
    if (value && value.disY && Number.isInteger(value.disY)) {
      disY = value.disY
    }
    /**
     * element listen touchstart event
     * add a function，delayTime to defer callback function execution
     *If there is a long press event, this time will not be executed (the bottom part is the document binding click event, used to cancel a long press event that has been triggered)
     */
    el.addEventListener('touchstart', event => {
      firstTouch = true
      /**
       * touchend defer removal of element styles
       * prevent clicking multiple time that leads to style being deleted during the time of long press
       */
      if (cr) {
        clearTimeout(cr)
        cr = null
      }
      addActiveClass(el, true)
      let touch = event.changedTouches[0]
      startX = touch.clientX
      startY = touch.clientY
      // settimeout
      r = setTimeout(() => {
        r = null
        /**
         * If the value pass to directive is function type then execute,
         * If it is an object then resolve its handler value.
         *
         * v-longtap = "cb"
         * v-longtap = "{handler: cb}"
         * can not do something like this：v-longtap = "cb()"，
         */
        if (typeof value === 'function') {
          value(event, data, vNode)
          event.preventDefault()
          return
        } else if (value && value.handler && typeof value.handler === 'function') {
          value.handler(event, data, vNode)
          event.preventDefault()
          return
        }
      }, delayTime)
      touch = null
    }, false)
    /**
     * Target binding element listens touchmove event
     * If finger move over 10 pixels then this is not a long tap event, not trigger callback
     *
     */
    el.addEventListener('touchmove', event => {
      let touch = event.changedTouches[0]
      let diffX = Math.abs(touch.clientX - startX)
      let diffY = Math.abs(touch.clientY - startY)
      if ((disX > 0 && diffX > disX) || (disY > 0 && diffY > disY)) {
        firstTouch && addActiveClass(el, false)
        if (r) {
          clearTimeout(r)
          r = null
        }
        firstTouch = false
      }
      touch = null
    }, false)
    /**
     * Target binding element listen touchend event
     * When finger leave out of screen, if the touch time not over delaytime then this is not
     * a long tap action, cancel callback
     *
     */
    el.addEventListener('touchend', event => {
      firstTouch = false
      cr = setTimeout(() => {
        addActiveClass(el, false)
      }, 100)
      if (r) {
        clearTimeout(r)
        r = null
      }
    }, false)
    /**
     *
     */
    el.addEventListener('contextmenu', event => {
      event.preventDefault()
      event.stopPropagation();
      return false;
    })
  }
}

function addActiveClass(el, opt) {
  let cns = el.className.split(' ')
  let index = cns.indexOf('longtap-active')
  if (opt) {
    if (index === -1) {
      el.style.transition = 'all 0.3s'
      cns.push('longtap-active')
      el.className = cns.join(' ')
    }
  } else {
    if (index > -1) {
      cns.splice(index, 1)
      el.className = cns.join(' ')
      el.style.transition = 'all 0s'
    }
  }
}
