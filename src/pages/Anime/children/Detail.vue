<template>
    <div id="anime-detail" ref="animeDetail">
      <section class="card-wrapper">
        <div class="anime-info-card">
          <div class="basic-info">
            <div class="info-title">{{currentAnime.title}}</div>
            <div class="info-share">
              <div class="left"></div>
              <div class="right">
                <p >Share link</p>
                <p class="link">
                  <span>www.gooogle.com</span>
                  <span class="share-icon"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

export default {
  name: 'Detail',
  computed: {
    currentAnime: function () {
      return this.$store.getters.currentAnime || {}
    }
  }

}
</script>

<style lang="scss" scoped>
  #anime-detail{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #f6f6f6;
    .card-wrapper{
      height: 100%;
      padding:60px 14px;
      display: flex;
      justify-content: center;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      min-width: 0;
      .anime-info-card{
        background-color: #FFFFFF;
        flex-basis: 66.66666666666666%;
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 66.66666666666666%;
        @media(max-width:960px){
          flex-basis: 100%;
          max-width:100%;

        }
      }

      .basic-info{
        width: 100%;
        padding: 10px;
        .info-title{
          margin-bottom: 16px!important;
          font-size: 20px!important;
          font-weight: 500;
          line-height: 1!important;
          letter-spacing: .02em!important;
          font-family: Roboto,sans-serif!important;
        }

      }

    }
  }
</style>
