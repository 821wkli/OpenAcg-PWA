<template>
  <div class="container">
    <search-bar class="search-bar" v-model="searchText"
                :placeholder="showPlaceHolder?hottestBook:''"
                cancel-text="取消"
                @cancel="onCancel"
                @search="onSearch"
                @clear="onClear"
                @doFocus="onFocus"
                @doBlur='onBlur'

    ></search-bar>
    <section v-if="!isSearching">`
    <section class="recommendation-container">
      <header>
        <p>大家都在搜</p>
      </header>
      <div class="hot-items">
        <div @click="goToBook(item)" class='item' :key='index'
             v-for="(item,index) in hotList"><p>{{item.title}}</p></div>
      </div>
    </section>
    <div class="line" style="background: #f4f4f4;height: .5rem"></div>
    <section class="search-history-container">
      <header class="history-title">
        <p>History</p>
        <p @click="this.cleanSearchHistory"
           style="color: blue">Clear</p>
      </header>
      <ul class="history-list">
        <li :key="index" class="item" v-for="(item,index) in reversedSearchHistoryList " @click="$router.push({ name: 'home', query: { keyword: item.title } })">
          <span class="icon">
            <img src="//s1.hdslb.com/bfs/static/mult/images/history.png" alt="">
          </span>
          <span class="title">{{item.title}}</span>
        </li>
      </ul>
    </section>
    </section>
    <section v-else class="search-keywords-container" >
      <ul class="search-keywords-list">
        <li :key="index" class="item" v-for="(item,index) in fuzzingKeywords " @click="$router.push({ name: 'home', query: { keyword: item } })">
          <span class="title">{{item}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import SearchBar from '@/components/search/searchBar'
import { mapGetters, mapActions } from 'vuex'
import { isEmpty } from '@/utils/common'
import { fetchRelatedKeywords } from '../../apis'

export default {
  name: 'search',
  data () {
    return {
      searchText: '',
      showPlaceHolder: true,
      fuzzingKeywords: []
    }
  },
  computed: {
    ...mapGetters(['hotList', 'searchHistory']),
    reversedSearchHistoryList: function () {
      // if (isEmpty(this.searchHistory)) {
      //   return []
      // }
      // const copy = [...this.searchHistory]
      return isEmpty(this.searchHistory) ? [] : [...this.searchHistory].reverse()
    },
    hottestBook: function () {
      return !isEmpty(this.hotList) ? this.hotList[Math.floor(Math.random() * this.hotList.length)].title : ''
    },
    isSearching: function () {
      return this.searchText.trim().length > 0
    }
  },
  created () {
    this.saveLatestBookList([])
    this.saveHomeScrollingPosY(0)
    if (isEmpty(this.searchHistory)) {
      this.initSearchHistory()
    }
    fetchRelatedKeywords(this.searchText).then(res => {
      if (!isEmpty(res.response)) {
        this.fuzzingKeywords = res.response.map(book => book.title)
      }
    })
  },
  methods: {
    ...mapActions(['initSearchHistory', 'saveHomeScrollingPosY', 'saveSearchHistory', 'cleanSearchHistory', 'saveLatestBookList']),

    goToBook: function (item) {
      this.saveSearchHistory({ title: item.title })
      this.$router.push({ name: 'book', params: { bookid: item.id } })
    },
    onSearch: function () {
      if (this.searchText.trim() !== '') {
        this.saveSearchHistory({ title: this.searchText })
        this.$router.push({ name: 'home', query: { keyword: this.searchText } })
      }
    },
    onCancel: function () {
      this.$router.go(-1)
    },
    onClear: function () {
      this.searchText = ''
    },
    onFocus: function () {
      this.showPlaceHolder = false
    },
    onBlur: function () {
      this.showPlaceHolder = true
    }
  },
  components: { SearchBar }
}
</script>

<style lang="scss" scoped>

  .container {
    @include wh(100vw, 100vh);
    background: #fff;
    position: absolute;
    padding-top: .8rem;

    .recommendation-container {
      position: relative;
      margin-top: .1rem;
      z-index: 0;
      margin-left: .53333rem;
      margin-right: .14933rem;

      header {
        p {
          position: relative;
          padding-top: .68267rem;
          color: #999;
          line-height: .59733rem;
          font-size: .59733rem;
          text-align: left;
        }
      }

      .hot-items {
        width: 100%;

        margin-top: .123rem;
        margin-bottom: .9rem;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        .item {
          margin-top: .5rem;
          margin-right: .25rem;
          border: .04267rem solid #ccc;
          border-radius: .68267rem;
          padding: .40533rem .512rem;

          p {
            font-size: .45rem;
            line-height: .45rem;
            color: #505050;
            text-align: center;
          }

        }

      }
    }

    .search-history-container,.search-keywords-container {
      margin-left: .53333rem;
      margin-right: .14933rem;
      padding-right: 3.33%;
      background-color: inherit;
      height: 100%;
      &.search-keywords-container{
        background-color: rgb(244, 244, 244);
        margin-left: 0;
        margin-right: 0;
        padding-left:.53333rem;
      }
      .history-title {
        display: flex;
        justify-content: space-between;

        p {
          text-align: left;
          color: #999;
          font-size: .59733rem;
          line-height: 1.96267rem;
        }

      }

      .history-list,.search-keywords-list {
        margin-top: .5rem;
        &.search-keywords-list{
          margin-top: 1.8rem;
        }
        li {
          display: flex;
          justify-content: flex-start;
          height: 1.87733rem;

          border-bottom: .02133rem solid #ccc;

          .icon {
            width: .55rem;
            margin-top: .59733rem;

            img {
              display: block;
              width: 100%;
            }
          }

          .title {
            width: 11.94667rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: .384rem;
            font-size: .59733rem;
            line-height: 1.87733rem;
            color: #505050;
            text-align: left;
          }
        }
      }
    }
  }
</style>
