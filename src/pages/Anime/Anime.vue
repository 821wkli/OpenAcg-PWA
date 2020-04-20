<template>
  <div class="anime" ref="anime">
    <div class="header">
      <div class="logo-container">
        <router-link class='logo' to='/anime'></router-link>
      </div>
      <input type="text" class="search" maxlength="50"  @keyup.enter="onSearch" v-model="searchText"/>
      <button @click='onSearch' class="searchBtn">Search</button>
    </div>
    <div class="main">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"  />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
import { isEmpty } from '../../utils/common'
// import { fetchAnimeList } from '../../apis'
import { mapActions } from 'vuex'

export default {
  name: 'Anime',
  data () {
    return {
      searchText: '',
      offset: 0
    }
  },
  methods: {
    ...mapActions(['saveSearchResults']),
    onCancel: function () {
      this.searchText = ''
    },
    onSearch: function () {
      if (!isEmpty(this.searchText)) {
        // fetchAnimeList(this.offset, 20, this.searchText).then(res => {
        //   if (!isEmpty(res.response)) {
        //     res.response.forEach(elem => {
        //       if (/約\d+條評論/.test(elem.title)) {
        //         elem.title = elem.title.substring(0, elem.title.indexOf('約'))
        //       }
        //     })
        //     this.saveSearchResults(res.response)
        //     this.offset += 20
        //   }
        // })
        /\burn:btih:([A-F\d]\W{40})\b/i.test(this.searchText) ||
        /\b([A-F\d]\W{40})\b/i.test(this.searchText)

          ? this.$router.push({ name: 'detail', params: { mid: this.searchText } })
          : this.$router.replace({ name: 'list', query: { keywords: this.searchText } })
      }
    },
    onClear: function () {
      this.searchText = ''
    }
  }

}
</script>

<style lang="scss" scoped>
  .anime {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;

    .header {
      width: 100%;
      max-width: 1600px;
      position: fixed;
      top: 0;
      height: 50px;
      padding: 4px 16px 4px 4px;
      background-color: #ffffff;
      z-index: 999;
      display: flex;
      justify-content: space-between;
      .logo-container {
        height: auto;
        cursor: pointer;
        .logo {
          cursor: inherit;
          display: block;
          width: 160px;
          height: 25px;
          padding: 5px 10px;
        }

        .logo:after {
          content: "OpenAcg";
          position: absolute;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: #38F;
          z-index: -1;
        }

      }

      .search {
        font-size: 24px;
        padding: 6px 12px;
        border: none;
        border-radius: 8px;
        background: #f5f5f5;
        outline: none !important;
        transition: background 0.3s ease-out;
        cursor: text;
        flex: 1;
        @media (max-width: 1600px) {
          width: calc(100% - 200px);
        }

        &:hover {
          background-color: darken(#f5f5f5, 5);
        }
      }

      .searchBtn {
        font-weight: bold;
        margin: 0 0 0 7px;
        padding: 6px 18px;
        border: none;
        border-radius: 8px;
        color: #fff;
        letter-spacing: 1px;
        text-decoration: none;
        cursor: pointer;
        background: #38F;
        transition: background 0.3s ease-out;
        @media(max-width: 760px){
          display: none;
        }
      }

    }

    .main {
      width: 100%;
      max-width: 1600px;
      margin: 51px auto 30px auto;
      padding: 0;
      background: #fcfcfc;
    }
  }
</style>
