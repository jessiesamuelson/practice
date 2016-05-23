function validater(str){
 var guide = {"(": ")", "[": "]", "{": "}"};
 var left = ["(", "[", "{"];
 var right = [")", "]", "}"];
 var stack = [];
 for (var i = 0; i < str.length; i++){
  if (left.indexOf(str[i]) >= 0){
   stack.push(str[i])
  } else if (right.indexOf(str[i]) >= 0){
   if (stack.length === 0 || guide[stack.pop()] != str[i]){
    return false
   } 
  }
 }
 return stack.length === 0
}

var guide = {"(": ")", "[": "]", "{": "}"};
var left = [];
var right = []; 
for (var key in guide){
left.push(key);
right.push(guide[key])
}