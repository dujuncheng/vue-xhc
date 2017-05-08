<template>
  <div>
    <div class="banner-bottom">
      <div class="container">
        <h2 class="little-title">新合诚研究院</h2>
        <div class="divider"></div>
        <p class="description-text">新合诚研究院重点激励下一代创新者，通过持续资助科技创新，不断将世界级的科技带入医疗事业。</p>
        <a href="#gallery" class="arrow scroll fa fa-arrow-down"> </a>
      </div>
    </div>
    <!--//banner-bottom-->
    <!--gallery-->
    <div class="gallery" id="gallery">
      <div class="col-md-6 gallery-left">
        <h4>协同区域高校合作</h4>
        <h4>共建研发实践岗位</h4>
      </div>
      <div class="col-md-6 gallery-right">
        <div class="gallery-grid-a">
          <h4>利用跨国科研优势</h4>
          <h4>促进人才交流机遇</h4>
        </div>
        <div class="gallery-grid-b">
          <h4>提倡国际科研合作</h4>
          <h4>共建研发实践岗位</h4>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>
    <!--//gallery-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style>
  .banner-bottom{
    padding-top: 50px;
    text-align: center;
  }
  .description-text{
    font-size: 16px;
    font-family: 'Microsoft YaHei UI';
  }

  /*--gallery--*/
  .gallery-left{
    min-height: 600px;
    background: url(./images/img1.jpg)no-repeat 50% 50%;
    background-size: cover;
    padding: 14% 0;
  }
  .gallery-right{
    padding: 0!important;
  }
  .gallery-grid-a{
    line-height: 300px;
    min-height: 300px;
    background: url(./images/img2.jpg)no-repeat 50% 50%;
    background-size: cover;
    padding: 10% 0;
  }
  .gallery-grid-b{
    min-height: 300px;
    background: url(./images/img3.jpg)no-repeat 50% 50%;
    background-size: cover;
    padding: 10% 0;
  }
  .gallery h4 {
    font-size: 20px;
    text-align: center;
    font-family: 'Marvel-Regular';
    color: #fff;
    padding: 20px 0px;
  }
  .gallery p {
    color: #fff;
    text-align: center;
    width: 45%;
    margin: 0 auto;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 1px;
  }
  /*--//gallery--*/
  /*--work--*/
  .banner-bottom a {
    font-size: 40px;
    display: block;
    width: 64px;
    height: 35px;
    margin: 2em auto 0;
    margin-bottom: 50px;
  }
</style>
