var PointyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // change classes: this.$node;
  //this.$node.addClass("pointy");
  this.$node.removeClass("dancer");
};

PointyDancer.prototype = Object.create(Dancer.prototype);
PointyDancer.prototype.constructor = PointyDancer;
PointyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //Dancer.prototype.step();

  if(this.$node.hasClass("inverse-pointy")) {
    this.$node.addClass("pointy");
    this.$node.removeClass("inverse-pointy");

  }else {
    this.$node.addClass("inverse-pointy");
    this.$node.removeClass("pointy");
  }
};
