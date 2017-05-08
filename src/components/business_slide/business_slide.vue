<template>
  <div>
    <section id="slider" class="">
      <!-- Carousel -->
      <div id="main-slide" class="carousel slide" data-ride="carousel">

        <!-- Indicators -->
        <ol class="carousel-indicators visible-lg visible-md">
          <li data-target="#main-slide" data-slide-to="0" class="active"></li>
          <li data-target="#main-slide" data-slide-to="1"></li>
        </ol><!--/ Indicators end-->

        <!-- Carousel inner -->
        <div class="carousel-inner">

          <div class="item active bg-img-1">
            <div class="slider-content text-left">
              <div class="col-md-12">
                <h2 class="slide-title effect2">我们的生化科技团队</h2>
                <h3 class="slide-sub-title effect3">致力于开创生化科技科研平台</h3>
                <h3 class="slide-sub-title effect3">为生化科技公司及生物医药产业提供科研顾问服务</h3>
                <p class="effect3">
                  <a href="#" class="slider btn btn-primary">咨询</a>
                  <a href="#" class="slider btn btn-secondary">关于我们</a>
                </p>
              </div>
            </div>
          </div><!--/ Carousel item 1 end -->

          <div class="item bg-img-2">
            <div class="slider-content text-right">
              <div class="col-md-12">
                <h2 class="slide-title effect6">我们助力您的产业计划</h2>
                <h3 class="slide-sub-title effect7">为传统医药公司的快速产业升级</h3>
                <h3 class="slide-sub-title effect7">及产业环节的各类问题提供专业的解决方案</h3>
                <p>
                  <a href="#" class="slider btn btn-primary">咨询</a>
                  <a href="#" class="slider btn btn-primary ">了解更多</a>
                </p>
              </div>
            </div>
          </div><!--/ Carousel item 3 end -->

        </div><!-- Carousel inner end-->

        <!-- Controllers -->
        <a class="left carousel-control" href="#main-slide" data-slide="prev">
          <span><i class="fa fa-angle-left"></i></span>
        </a>
        <a class="right carousel-control" href="#main-slide" data-slide="next">
          <span><i class="fa fa-angle-right"></i></span>
        </a>
      </div><!--/ Carousel end -->
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style>
  .bg-img-1{
    background-image: url("./img/1.jpg");
  }
  .bg-img-2{
    background-image: url("./img/3.jpg");
  }
  #main-slide .item {
    min-height: 700px;
    color: #fff;
    background-position: 50% 50%;
    -webkit-background-size: cover;
    background-size: cover;
    -webkit-backface-visibility: hidden;
  }

  #main-slide .item img {
    width: 100%;
    -webkit-backface-visibility: hidden;
  }

  #main-slide .item .slider-content {
    z-index: 1;
    opacity: 0;
    -webkit-transition: opacity 500ms;
    -moz-transition: opacity 500ms;
    -o-transition: opacity 500ms;
    transition: opacity 500ms;
  }

  #main-slide .item.active .slider-content {
    opacity: 1;
    -webkit-transition: opacity 100ms;
    -moz-transition: opacity 100ms;
    -o-transition: opacity 100ms;
    transition: opacity 100ms;
  }

  #main-slide .slider-content {
    top: 50%;
    padding: 0;
    position: absolute;
    width: 100%;
    color: #fff;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  #main-slide .slider-content.text-left {
    left: 10%;
  }

  #main-slide .slider-content.text-right {
    right: 10%;
  }

  .slider-content {
    position: relative;
    display: table;
    height: 100%;
    width: 100%;
  }
  .slider-content p{
    color: #212121;
  }
  .slide-title {
    font-size: 28px;
    line-height: 36px;
    color: #fff;
    margin: 15px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'qinghei';
  }

  .little-title{
    padding: 10px;
    font-family: 'qingke';
    font-weight: bold;
  }

  .divider{
    width: 10%;
    background-color: grey;
    height: 1px;
    display: inline-block;
    margin-bottom: 40px;
    display: inline-block;
  }

  .slide-sub-title {
    font-style: normal;
    font-size: 26px;
    line-height: 58px;
    margin: 5px 0;
    color: #00AEF0;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'qinghei';
  }

  .slider-text {
    display: table;
    vertical-align: bottom;
    color: #fff;
    padding-left: 40%;
    width: 100%;
    padding-bottom: 0;
    padding-top: 20px;
  }

  .slider-text .slide-head {
    font-size: 36px;
    color: #0052a5;
    position: relative;
  }

  .slider-img {
    display: block;
    position: absolute;
    top: -80px;
    left: 20%;
    width: 314px;
    max-height: 100%;
  }

  .slider-img img {
    display: block;
    position: relative;
    max-height: 100%;
    width: auto;
  }

  .slider.btn {
    margin: 5px;
    border: 2px solid transparent;
  }

  .slider.border {
    background: none;
    border: 2px solid #fff;
  }

  .slider.border:hover {
    background: #00AEF0;
    border: 2px solid transparent;
  }


  /* Carousel control */

  .carousel-indicators li {
    width: 10px;
    height: 10px;
    margin: 1px;
    border-radius: 100%;
    border: 0;
    background: rgba(255, 255, 255, .5);
  }

  #main-slide .carousel-indicators li.active,
  #main-slide .carousel-indicators li:hover {
    background: #00AEF0;
    -moz-transition: all 300ms ease;
    -webkit-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
  }

  #main-slide .carousel-control.left,
  #main-slide .carousel-control.right,
  #main-slide .carousel-indicators {
    opacity: 0;
    filter: alpha(opacity=0);
    background-image: none;
    background-repeat: no-repeat;
    text-shadow: none;
    -webkit-transition: all .25s ease;
    -moz-transition: all .25s ease;
    -ms-transition: all .25s ease;
    -o-transition: all .25s ease;
    transition: all .25s ease;
  }

  #main-slide:hover .carousel-control.left,
  #main-slide:hover .carousel-control.right,
  #main-slide:hover .carousel-indicators {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  #main-slide .carousel-control .fa-angle-left,
  #main-slide .carousel-control .fa-angle-right {
    position: absolute;
    top: 50%;
    z-index: 5;
    display: inline-block;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  #main-slide .carousel-control .fa-angle-left {
    left: 20px;
  }

  #main-slide .carousel-control .fa-angle-right {
    right: 20px;
  }

  #main-slide .carousel-control i {
    background-attachment: scroll;
    background-clip: border-box;
    background-color: rgba(0, 174, 240, 0.5);
    background-image: none !important;
    background-origin: padding-box;
    background-position: 0 0;
    background-repeat: repeat;
    background-size: auto auto;
    border-radius: 50%;
    height: 50px;
    line-height: 50px;
    top: 50%;
    width: 50px;
    z-index: 1;
  }

  #main-slide .carousel-control i:hover {
    background: #00AEF0;
  }

  .carousel .item.active .effect2 {
    -webkit-animation: fadeInLeft 1s ease-in 350ms both;
    animation: fadeInLeft 1s ease-in 350ms both;
  }

  .carousel .item.active .effect3 {
    -webkit-animation: fadeInLeft 1.5s ease-in-out 300ms both;
    animation: fadeInLeft 1.5s ease-in-out 300ms both;
  }

  .carousel .item.active .effect4 {
    -webkit-animation: lightSpeedIn 1.5s ease-in 300ms both;
    animation: lightSpeedIn 1.5s ease-in 300ms both;
  }

  .carousel .item.active .effect5 {
    -webkit-animation: bounceInLeft 1s ease-in-out 100ms both;
    animation: bounceInLeft 1s ease-in-out 100ms both;
  }

  .carousel .item.active .effect6 {
    -webkit-animation: fadeInRight 1s ease-in 200ms both;
    animation: fadeInRight 1s ease-in 200ms both;
  }

  .carousel .item.active .effect7 {
    -webkit-animation: fadeInRight 1.5s ease-in 300ms both;
    animation: fadeInRight 1.5s ease-in 300ms both;
  }


</style>
