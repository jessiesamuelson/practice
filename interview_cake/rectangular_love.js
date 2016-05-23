function Rectangle (leftX, bottomY, width, height) {
	this.leftX = leftX;
	this.bottomY = bottomY;
	this.width = width;
	this.height = height;
}

Rectangle.prototype () {
	area: function() {
    return this.width * this.height;
	},
	getRightX: function() {
		return this.leftX + width;
	},
	getTopY: function() {
		return this.bottomY + height;
	}
}

function compareRectangle (rect1, rect2) {
  var outputRect;
  
  if ( findXOverlap(rect1, rect2) && findXOverlap(rect1, rect2) ) {
       // find right most leftX
			outputRect.leftX = Math.max(rect1.leftX, rect2.leftX);
			// find upper bottomY 
			outputRect.bottomY = Math.max(rect1.leftX, rect2.leftX);

			// find left most rightX
			var rightX = Math.min( rect1.getRightX(), rect2.getRightX() )
			// find bottom most topY
			var topY = Math.min( rect1.getTopY(), rect2.getTopY() )

			outputRect.width = Math.abs(rightX - outputRect.leftX);
			outputRect.height = Math.abs(topY - outputRect.bottomY);
  
		  return outputRect;	
  }
  else return "no overlap"

}

function findXOverlap ( rect1, rect2 ) {
	var 1x = [rect1.leftX, rect1.getRightX()]
	var 2x = [rect2.leftX, rect2.getRightX()]

	if ( 1x[1] < 2x[0] || 2x[1] < 1x[0]) return false
	else                                 return true;
}

function findYOverlap ( rect1, rect2 ) {
	var 1x = [rect1.bottomY, rect1.getTopY()]
	var 2x = [rect2.bottomY, rect2.getTopY()]

	if ( 1x[1] < 2x[0] || 2x[1] < 1x[0]) return false
	else                                 return true;
}