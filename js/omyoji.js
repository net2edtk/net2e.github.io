var app = new Vue({
  el: '#app',
  data: {
    basicHit: 10,
    additionalHit: 0,
    additionalDefend: 0,
    hitTimes: 1,

    hitP: 0,
    lostP: 0,
    atLeastHitP: 0,
  },
  mounted: function() {
    $(".button-collapse").sideNav();
    this.caculate();
  },
  methods: {
    // 計算
    caculate: function () {
      var hitPro = (this.basicHit) * ( (1+(this.additionalHit/100))/(1+(this.additionalDefend/100)) );
      this.hitP = this.roundNum(hitPro);

      this.lostP = 100 - this.hitP;
      var tem = 100 - Math.pow(this.lostP/100, this.hitTimes)*100;
      this.atLeastHitP = this.roundNum(tem);

      var text = document.getElementById('hit-p');
      var text2 = document.getElementById('at-least-hit-p');
      text.classList.add('x-large-text');
      text2.classList.add('x-large-text');
      setTimeout(function(){
        text.classList.remove('x-large-text')
        text2.classList.remove('x-large-text');
      }, 300);
    },
    roundNum: function (value) {
      return Math.round(value * 100) / 100;
    }
  }
});