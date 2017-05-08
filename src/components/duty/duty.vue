<template>
  <div>
    <section id="duty">
      <div class="container">
        <div class="row">
          <div class="wrap">
            <div class="col-xs-6 item-wrap">
              <div class="item">
                我们时刻谨记并遵守我们的使命，即坚持科技研发，寻求攻克疾病的治疗方案。
                我们的价值观将引导并承诺我们的每一步科技创发工作。
            </div>
            </div>
            <div class="col-xs-6 item-wrap">
              <div class="item">
                我们的成功取决于通过对科学方法的应用，坚持专业的科技创新和持续改进，不断探索，我们将科技创新作为多环节的过程，做出理性决策。
            </div>
            </div>
          </div>
        </div>
        <div class="trigger-wrap">
          <a href="javascript:;" class="trigger trigger1"></a>
          <a href="javascript:;" class="trigger trigger2"></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style>
  /*duty start*/
  #duty .container{
    position: relative;
  }


  #duty .trigger-wrap{
    position: absolute;
    left: 60px;
    bottom: 100px;
    width: 16%;
    height: 20px;

  }

  #duty .trigger-wrap .trigger{
    background-color: rgba(0,0,0,0.5);
    display: inline-block;
    width:40%;
    height:3px;
    padding:4px;
    border-radius: 6px;
  }

  #duty .trigger-wrap .trigger:hover{
    background-color: rgba(0,0,0,0.8);
  }

  #duty .item1{
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
    transform: translateX(0px);
  }


  #duty .item2{
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }


  #duty .container .row{
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  #duty .wrap{
    width: 4000px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;

  }


  #duty .item-wrap{
    padding-right: 1600px;
  }
  #duty .item{
    height: 100vh;
    padding:200px 25px;
    background-color: rgba(55,183,229,0.8);
    font-family: 'qingke';
    color:white;
    font-size: 25px;

  }

  #duty{
    background: url('./img/duty-bg.jpg') no-repeat 50% 50% fixed;
  }
</style>
