<template>
    <div class="share-box">
      <header>
        <span class="left">Share book</span>
        <span class="right icon">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"/>
              </svg>
        </span>
      </header>
      <section class="content">
        <div class="content-box"></div>
        <div class="share-icons">
          <span class="icon copy">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-copy"/>
                      </svg>
          </span>
          <span class="icon telegram">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-telegram"/>
                      </svg>
          </span>
          <span class="icon twitter">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter"/>
                      </svg>
          </span>
          <span class="icon whatsapp">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-whatsapp"/>
                      </svg>
          </span>
          <span class="icon"></span>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'shareBox',
  props: {
    book: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  .share-box{
    box-sizing: border-box;
    position: relative;
    width: 100%;
    max-width: 512px;
    margin: 0 1rem;
    background: #f6f6f6;
    border-radius: 4px;
    -webkit-box-shadow: 0 4px 8px rgba(0,0,0,.2);
    box-shadow: 0 4px 8px rgba(0,0,0,.2);
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: column nowrap;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    header{
      padding: 0 1rem;
      background-color: #FFFFFF;
      height: 1.8rem;
      line-height: 1.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right{
        &.icon{
          width: 32px;
          height: 32px;
          svg{
            width: 100%;
            height: 100%;
          }
        }
      }

    }
    .content{
      flex-grow: 1;
      padding: 1rem;
      .content-box{
        background: #fff;
        height: 120px;
        font-size: 18px;
        padding: 8px;
      }
      .share-icons{
        display: flex;
        margin-top: 12px;
        .icon{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin-right: 10px;
          svg{
            width: 24px;
            height: 24px;
          }
          &.copy{
            background-color: #fff;;
          }
          &.telegram{
            background-color: #1296db;
          }
          &.twitter{
            background-color: #00aceb;
          }
          &.whatsapp{
            background-color: #25D366;
          }

        }
      }

    }

  }
</style>
