<template>
<div class="anime">
  <div class="header">
    <div class="logo-container">
      <router-link class='logo' to='/anime'></router-link>
    </div>
    <input type="text" class="search" maxlength="50" v-model="searchText"/>
    <button class="searchBtn">Search</button>
  </div>
  <div class="main">
    <div class="daily-info">

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Anime',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    onCancel: function () {
      this.searchText = ''
    },
    onSearch: function () {
      console.log('search')
    },
    onClear: function () {
      this.searchText = ''
    }
  }

}
</script>

<style lang="scss" scoped>
  .anime{
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    .header{
      width: 100%;
      max-width: 1600px;
      position: fixed;
      top: 0;
      height: 50px;
      padding: 4px 16px 4px 4px;
      background-color: #ffffff;
      z-index: 999;
      display: flex;
      .logo-container{
        height: auto;
        .logo{
          display: block;
          width: 160px;
          height: 25px;
          margin: 13px 0 0 16px;
        }
        .logo:after{
          content: "OpenAcg";
          position: absolute;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: #38F;
          z-index: -1;
        }

      }
      .search{
        font-size: 24px;
        padding: 6px 12px;
        border: none;
        border-radius: 8px;
        background: #f5f5f5;
        outline: none !important;
        transition: background 0.3s ease-out;
        @media (max-width: 1600px) {
          width: calc(100% - 200px);
        }
      }
      .searchBtn{
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
      }

    }
    .main{
      width: 100%;
      max-width: 1600px;
      .daily-info{
        width: calc(100% - 2px) !important;
        margin-bottom: 0;
        border: 1px solid #ccc;
        padding: 0;
        border-radius: 8px;
      }
    }
  }
</style>
