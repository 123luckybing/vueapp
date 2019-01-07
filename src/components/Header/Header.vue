<template>
  <div class='header'>
    <div class="back-btn">
      <img src="../../assets/img/back.png" alt="">
    </div>
    <div class="header-input">
      <img src="../../assets/img/search.png" alt="">
      输入城市/景点/游玩主题
    </div>
    <div class="area">
      城市
      <img src="../../assets/img/down.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.header {
  font-size: 0.3rem;
  width: 100%;
  height: .86rem;
  display: flex;
  background: #00bcd4;
  color: #fff;
  line-height: .86rem;

  .back-btn {
    width: 0.64rem;
    float:left;

    img {
      margin-top: 0.05rem;
      display: block;
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  .area {
    width: 1.24rem;
    float: right;
  }

  .header-input {
    padding-left: 0.1rem;
    flex: 1;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    height: 0.64rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;

    img {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      vertical-align: middle;
    }
  }
}
</style>
