<template>
  <div>
    <slot/>
  </div>
</template>

<script>
import Flickity from 'flickity'

export default {
  name: 'swiper',
  props: {
    options: Object
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.$swiper.destroy()
    this.$swiper = null
  },
  methods: {
    init () {
      this.$swiper = new Flickity(this.$el, this.options)
      this.$emit('init', this.$swiper)
      this.$swiper.on('change', (index) => {
        this.onChangeSlide(index)
      })

      var touchingCarousel = false
      var touchStartCoords

      document.body.addEventListener('touchstart', function (e) {
        if (e.target.closest('.flickity-slider')) {
          touchingCarousel = true
        } else {
          touchingCarousel = false
          return
        }

        touchStartCoords = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        }
      })

      document.body.addEventListener('touchmove', function (e) {
        if (!(touchingCarousel && e.cancelable)) {
          return
        }

        var moveVector = {
          x: e.touches[0].pageX - touchStartCoords.x,
          y: e.touches[0].pageY - touchStartCoords.y
        }

        if (Math.abs(moveVector.x) > 7) { e.preventDefault() }
      }, { passive: false })
    },
    onChangeSlide (index) {
      this.$emit('onChangeSlide', index)
    },
    swiper () {
      return this.$swiper
    },
    /**
       * Select a slide
       *
       * @param {number} index
       * @param {boolean} isWrapped
       * @param {boolean} isInstant
       */
    select (index, isWrapped, isInstant) {
      this.$swiper.select(index, isWrapped, isInstant)
    },
    /**
       * Change to the next slide
       *
       * @param {boolean} isWrapped
       * @param {boolean} isInstant
       */
    next (isWrapped, isInstant) {
      this.$swiper.next(isWrapped, isInstant)
    },
    /**
       * Change to the previous slide
       *
       * @param {boolean} isWrapped
       * @param {boolean} isInstant
       */
    previous (isWrapped, isInstant) {
      this.$swiper.previous(isWrapped, isInstant)
    },
    /**
       * Select a cell
       *
       * @param {number} value
       * @param {boolean} isWrapped
       * @param {boolean} isInstant
       */
    selectCell (value, isWrapped, isInstant) {
      this.$swiper.selectCell(value, isWrapped, isInstant)
    },
    /**
       * Sizing and Positioning
       */
    /**
       * Trigger a resize event
       */
    resize () {
      this.$swiper.resize()
    },
    /**
       * Trigger a reposition event
       */
    reposition () {
      this.$swiper.reposition()
    },
    /**
       * Adding and removing cells
       */
    /**
       * Prepend elements to flickity
       *
       * @param {array|HTMLElement|NodeList} elements
       */
    prepend (elements) {
      this.$swiper.prepend(elements)
    },
    /**
       * Append elements to flickity
       *
       * @param {array|HTMLElement|NodeList} elements
       */
    append (elements) {
      this.$swiper.append(elements)
    },
    /**
       * Insert elements at a given index
       *
       * @param {array|HTMLElement|NodeList} elements
       * @param {number} index
       */
    insert (elements, index) {
      this.$swiper.insert(elements, index)
    },
    /**
       * Remove elements from flickity
       *
       * @param {array|HTMLElement|NodeList} elements
       */
    remove (elements) {
      this.$swiper.remove(elements)
    },
    /**
       * Player
       */
    /**
       * Trigger a playPlayer event
       */
    playPlayer () {
      this.$swiper.playPlayer()
    },
    /**
       * Trigger a stopPlayer event
       */
    stopPlayer () {
      this.$swiper.stopPlayer()
    },
    /**
       * Trigger a pausePlayer event
       */
    pausePlayer () {
      this.$swiper.pausePlayer()
    },
    /**
       * Trigger a unpausePlayer event
       */
    unpausePlayer () {
      this.$swiper.unpausePlayer()
    },
    /**
       * Trigger a rerender event
       */
    rerender () {
      this.$swiper.destroy()
      this.init()
    },
    /**
       * Utilities
       */
    /**
       * Destroy the flickity instance
       */
    destroy () {
      this.$swiper.destroy()
    },
    /**
       * Trigger a rerender event
       */
    reloadCells () {
      this.$swiper.reloadCells()
    },
    /**
       * Get the cell elements
       *
       * @return {array}
       */
    getCellElements () {
      return this.$swiper.getCellElements()
    },
    /**
       * Return flickity data
       *
       * @return {Flickity}
       */
    data () {
      const Flickity = require('flickity')
      return Flickity.data(this.$el)
    },
    /**
       * Events
       */
    /**
       * Attach an event
       *
       * @param {string} eventName
       * @param {function} listener
       */
    on (eventName, listener) {
      this.$swiper.on(eventName, listener)
    },
    /**
       * Remove an event
       *
       * @param {string} eventName
       * @param {function} listener
       */
    off (eventName, listener) {
      this.$swiper.off(eventName, listener)
    },
    /**
       * Attach an event once
       *
       * @param {string} eventName
       * @param {function} listener
       */
    once (eventName, listener) {
      this.$swiper.once(eventName, listener)
    },
    /**
       * Properties
       */
    /**
       * Return the selected element
       *
       * @return {HTMLElement}
       */
    selectedElement () {
      return this.$swiper.selectedElement
    },
    /**
       * Return the selected elements
       *
       * @return {array}
       */
    selectedElements () {
      return this.$swiper.selectedElements
    },
    /**
       * Return the selected index
       *
       * @return {number}
       */
    selectedIndex () {
      return this.$swiper.selectedIndex
    },
    /**
       * Return the cells
       *
       * @return {array}
       */
    cells () {
      return this.$swiper.cells
    },
    /**
       * Return the slides
       *
       * @return {array}
       */
    slides () {
      return this.$swiper.slides
    },
    /**
       * Disable dragging of slider
       */
    disableDrag () {
      this.$swiper.options.draggable = false
      this.$swiper.updateDraggable()
    },
    /**
       * Enable dragging of slider
       */
    enableDrag () {
      this.$swiper.options.draggable = true
      this.$swiper.updateDraggable()
    }
  }
}
</script>

<style src='flickity/dist/flickity.css' scoped>
</style>
