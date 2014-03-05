var AnglerDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass("dancer");
  this.$node.addClass("angler");
  this.h_velocity = 20;
};

AnglerDancer.prototype = Object.create(Dancer.prototype);
AnglerDancer.prototype.constructor = AnglerDancer;
AnglerDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var x = this.$node.offset().left;
  var y = this.$node.offset().top;
  if(this.$node.width() < ($(window).width() * 0.5)) {
    this.eat(x, y);
  }

  var maxWidth = $(window).width();
  var maxHeight = $(window).height();
  if (x <= 30) {
    this.h_velocity *= -1;
    this.$node.removeClass("angler-flip");
  }else if(x >= maxWidth - (this.$node.width()+20)) {
    this.h_velocity *= -1;
    this.$node.addClass("angler-flip");
  }
  this.$node.css({left:x + this.h_velocity});

  if(this.$node.offset().left <= 0) {   //left of screen
    this.$node.css({"left": 10});
  }
  if(this.$node.height() <= 0) {    //top of screen
    this.$node.css({"top": (this.$node.height() + 10)});
  }
  var rightMostPos = this.$node.offset().left + this.$node.width();   //right of screen
  if(rightMostPos >= $(window).width()) {
    this.$node.css({"left": ($(window).width() - this.$node.width() - 10)});
  }
  var bottomMostPos = this.$node.offset().top + this.$node.height();   //bottom of screen
  if(bottomMostPos >= $(window).height()) {
    this.$node.css({"top": ($(window).height() - this.$node.height() - 10)});
  }
};
AnglerDancer.prototype.eat = function(x, y) {
  if (!this.$node.hasClass("angler-flip")) {
    x += this.$node.width();
  }
  y += this.$node.height() / 2;
  var instance = this;

  window.dancers.forEach(function(dancer){
    if(dancer instanceof MarcusDancer) {
      var marcusX = dancer.$node.offset().left + 40;
      var marcusY = dancer.$node.offset().top + 50;
      if ((Math.abs(x - marcusX) <= 40) && (Math.abs(y - marcusY) <= 40)){
        window.dancers.splice(window.dancers.indexOf(dancer),1);
        dancer.$node.remove();

        instance.$node.css({"width": instance.$node.width() * 1.2, "height": instance.$node.height() * 1.2});
      }
    }
  });
};
