<template>
  <div>
    <div class="color-spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'colorfulSpinner'
}
</script>

<style lang="scss" scoped>

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .color-spinner{
    width: 150px;
    height: 150px;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top: 4px solid #f15e41;
    -webkit-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
    position: relative;
  }
  .color-spinner::before,
  .color-spinner::after {
    content: "";
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: 6px;
    right: 6px;
    border-radius: 50%;
    border: 4px solid transparent;
  }

  .color-spinner::before {
    border-top-color: #bad375;
    -webkit-animation: 3s spin linear infinite;
    animation: 3s spin linear infinite;
  }

  .color-spinner::after {
    border-top-color: #26a9e0;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
  }
</style>
