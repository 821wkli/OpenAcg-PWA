<template>
  <div class="container" @click="isEditingBook=false">

    <headTop show-operator="true"
             go-back="true"
             :head-title="$lang.headBar.myBookshelf"
             header-position="fixed"
    ></headTop>
    <div class="wrapper" ref="wrapper">
      <ul class="history-list-ul">
        <li v-longTap="{time:2000,handler:longTapHandler,disX:20,disY:20}"
            class="history-item" :class="{shaking:isEditingBook}"
            @click="goToBookHome(item)"
            v-for="(item,index) in this.bookshelfList" :key="index">
          <div class="book-cover">
            <img :src="item.cover_url" class="book-cover" :alt="item.title"/>
          </div>
          <p>{{item.title}}</p>
          <p  v-if='item.volumes' class="recent-update-volume">{{item.volumes[item.volumes.length-1].name}}</p>
          <span class="icon" v-if="isEditingBook" @click.stop="removeBookFromBookshelf(item)">
      <svg
        width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-remove"></use>
          </svg>
  </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import longTap from '../../plugins/longTap'
import headTop from '../../components/header/headTop'
import { mapActions } from 'vuex'
import { isEmpty } from '../../utils/common'
import { fetchUpdatedBookshelf } from '../../apis'
import { imageBaseUrl } from '../../config/env'

export default {
  name: 'bookshelf',
  components: { headTop },
  directives: { longTap },
  data () {
    return {
      isEditingBook: false,
      longTapping: false
    }
  },
  computed: {
    bookshelfList: function () {
      return this.$store.getters.bookshelfList || []
    }
  },
  mounted () {
    this.initData()
    // this.$nextTick(()=>{
    //   if(!this.scroll{
    //
    //   })
    // })
  },
  watch: {
    isEditingBook: function (newValue) {
      if (!newValue) {
        this.longTapping = false
      }
    }
  },
  methods: {
    initData: async function () {
      if (isEmpty(this.bookshelfList)) {
        await this.loadBookshelfList()
      }
      this.update()
    },
    longTapHandler: function () {
      this.isEditingBook = true
      this.longTapping = true
    },
    async update () {
      console.log('start update bookshelf')
      if (!isEmpty(this.bookshelfList)) {
        const requestBody = {
          time: new Date().getTime(),
          ids: this.bookshelfList.map(book => book.id)
        }
        // console.log(JSON.stringify(requestBody));
        // update vuex state

        const res = await fetchUpdatedBookshelf(requestBody)

        if (!isEmpty(res.response)) {
          res.response.forEach(book => {
            const newUrl = book.cover_url.split('/').pop()// get image file name
            book.cover_url = imageBaseUrl + '/image/' + newUrl
          })
          this.updateBookshelf(res.response)
          // this.UPDATE_BOOKSHELF_LIST(res.response)
          console.log('update bookshelf done')
        }
      }
    },
    goToBookHome (book) {
      if (!this.longTapping) {
        this.$router.push({ name: 'book', params: { bookid: book.id } })
      }
    },
    ...mapActions(['updateBookshelf', 'saveBookToBookshelf', 'removeBook', 'loadBookshelfList']),
    removeBookFromBookshelf (book) {
      this.removeBook(book)
    }
  }
}
</script>

<style lang="scss" scoped>
  .shaking {
    animation: shaking .3s infinite linear reverse;
  }

  @keyframes shaking {
    0% {
      /*transform: translateX(0);*/
      transform: rotate(1deg);
    }
    25% {
      /*transform: translateX(3px);*/
    }
    50% {
      /*transform: translateX(0);*/
      transform: rotate(1.5deg);

      /*<!--100% {-->*/
      /*<!--  transform: translateX(-1px);-->*/
      /*<!--}-->*/
    }
  }

  .container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #fff;
    box-sizing: border-box;
    padding-left: .4rem;
    padding-right: .4rem;
    padding-top: 1.95rem;
    padding-bottom: .4rem;
    overflow-y: scroll;

    .wrapper {
      width: 100%;
      height: 100%;
      position:fixed;
      overflow-y: scroll;
    }

    .history-list-ul {
      position: absolute;
      font-size: 0;
      margin-bottom: 1.8rem;
      width: 100%;

      li {
        position: relative;
        width: 32.33%;
        display: inline-block;
        -webkit-user-select: none;
        user-select: none;

        .icon {
          width: .8rem;
          height: .8rem;
          position: absolute;
          top: -4px;
          right: -.1rem;

          svg {
            width: 100%;
            height: 100%;
          }
        }

        div {
          padding: 0 .3125rem;
          position: relative;
          font-size: 0;
          height: 6.4rem;

          img {
            width: 100%;
            height: 6.4rem;
            -webkit-user-select: none;
            user-select: none;

          }
        }

        p {
          font-size: .7rem;
          color: #252525;
          letter-spacing: 0;
          padding-left: .2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: .2rem;
          -webkit-user-select: none;
          user-select: none;
          font-weight: bold;
        }

        .recent-update-volume {
          font-size: .5rem;
          color: #999999;
          letter-spacing: 0;
          padding-left: 0.2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: .2875rem;
          padding-bottom: 10px;
        }

      }
    }
  }
</style>
