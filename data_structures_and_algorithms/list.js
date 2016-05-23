function List () {
  this.start = null;
  this.end = null;
}

List.prototype = {
	makeNode: function() {
		return {data: null, next: null}
	},
	add: function (data) {
		if (this.start === null) {
			this.start = this.makeNode()
			this.end = this.start;
		}
		else {
			this.end.next = this.makeNode();
			this.end = this.end.next;
		}
		this.end.data = data;
	}
}


function Stack () {
	this = [];
}

Stack.prototype = {
	add: function (data) {
		this.push(data);
	},
	remove: function () {
		this.pop()
	}
}


function Queue () {
	this = [];
}

Stack.prototype = {
	add: function (data) {
		this.push(data);
	},
	remove: function () {
		this.shift()
	}
}