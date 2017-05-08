<template>
  <div>
    <section id="home">
      <div class="logo-wrapper" style="background-color: rgba(255,255,255,0.3);position: absolute;left: 40px;top: 40px;padding: 10px;">
        <img src="img/logo.png" alt="" style="width:80px;height: 60px">
      </div>
      <div class="container">
        <div class="row">
          <div class="rol-md-12 rol-xs-12">
            <h1 class="cyjlaosong">我们相信科技是生命的第一创造力</h1>
            <div class="divider"></div>
            <h4>我们以前沿的生化科学及技术研究为企业生命力,</h4>
            <h4>探索并攻克严重疾病治愈的疗法，</h4>
            <h4>重新点燃患者生命之光。</h4>
          </div>
        </div>
        <div class="row">
          <a href="#" class="btn btn-default">查看更多</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style>
@import "../../../common/css/fonts.css";
  /*home start*/
  #home{
    width: 100%;
    height: 100vh;
    background: url('./img/home.jpg') no-repeat 50% 20% fixed;
    position: relative;
    color:white;
    display: flex;
    align-items: center;
    text-align: center;

  }

  #home .divider{
    width: 50%;
    height: 1px;
    background-color: white;
    display: inline-block;
  }
  #home h1{
    font-size: 40px;
    letter-spacing:9px;
    padding: 10px;
    font-family: 'qingke';
  }
  #home h2{
    font-size: 30px;
    letter-spacing:9px;
    padding: 10px;
    font-family: 'Microsoft YaHei';
  }
  #home h4{
    font-size: 20px;
    font-family: 'Microsoft YaHei';
    padding:5px;
  }
  #home .btn{
    background-color: #37B7E5 ;
    padding:7px 20px;
    border-radius: 0px;
    font-family: pinghei-light;
    font-size: 16px;
    border: 4px #37B7E5 solid;
    color: white;
    transition: all 1s;
    position: relative;
    vertical-align: middle;
    top: 30px;

  }

  #home .btn:hover{
    background-color: transparent;
    color:#37B7E5;
  }
  /*home end*/
</style>
