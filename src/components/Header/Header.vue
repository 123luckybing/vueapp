<template>
  <div class='header'>
    <div class="back-btn">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="area">城市</div>
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
  }

  .area {
    width: 1.24rem;
    float: right;
  }

  .header-input {
    flex: 1;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    height: 0.64rem;
    background: #fff;
    border-radius: 0.1rem;
  }
}
</style>

