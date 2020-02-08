<template>
  <div class="dialogContainer">
    <div class="dialog">
      <h2 class="dialog_header">{{title}}</h2>
      <div class="dialog_content">
        <p>{{bodyContent}}</p>
      </div>
      <div class="dialog_button">
        <span @click="ok">OK</span>
        <span @click="cancel" class="cancel">Cancel</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "iosAlert",
        props:['title','bodyContent'],
      methods:{
          ok(){
            this.$emit('ok');
          },
        cancel(){
          this.$emit('cancel');
        }
      }
    }
</script>

<style lang="scss" scoped>
  p {
    line-height: 0.77rem;
  }
  .dialogContainer{
    position: absolute;
    padding-top: 1.95rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    justify-content: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    .dialog{
      order:0;
      -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      border-radius: 10px;
      min-width: 10.4rem;
      background-color: rgba(255,255,255, 0.90);
      .dialog_header{
        text-align: center;
        padding: 0.43rem;
        font-size: 1rem;
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        border-bottom: rgb(255,255,255) solid 0px;
        margin-bottom: -.7rem;
      }
      .dialog_content{
        padding: 0.43rem 0.45rem;
        text-align: center;
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-size: 0.7rem;
        border-bottom: rgb(180,180,180) solid 1px;
      }
      .dialog_button{
        span{
          display: block;
          text-align: center;
          text-decoration: none;
          padding: 0.43rem;
          font-family: "Open Sans", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          color: #2e7cf1;
          border-top: rgb(180,180,180) solid 1px;
        }
        span:nth-of-type(2){
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          font-weight: 700;
        }
        span:hover,span:active,span:focus{
          background: rgb(180,180,180);
        }
      }
    }
  }
</style>
