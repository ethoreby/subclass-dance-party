var Dancer = function(top, left, timeBetweenSteps){
  if(top > $(window).height() - 100) {
    top -= 100;
  }
  if(left > $(window).width() - 100) {
    left -= 100;
  }

  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(){
  var context = this;
  setTimeout(function(){
    context.step();
  }, this._timeBetweenSteps);
};

Dancer.prototype.lineUp = function(){
  var middle = $(window).height() / 2 - (this.$node.height()/2);
  var left = this.$node.offset().left;
  this.setPosition(middle, left);
};
/*
Dancer.prototype.remove = function(){
  this.$node.remove();
};
*/
