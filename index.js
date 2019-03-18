var katzDeliLine = []

function takeANumber (lineName){
  var i = 0
  lineName.push(i++);
  return `Welcome, You are number ${i}.`;
}

console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(katzDeliLine)

// Welcome, you are number 52

function nowServing (lineName){
  if (lineName.length === 0)
    return "There is nobody waiting to be served!";

  return `Currently serving ${lineName.shift()}.`;
}

function currentLine(lineName) {
  if (lineName.length===0) {
   return "The line is currently empty.";
 }
    var line = [];
    for (var i = 0; i < lineName.length; i++) {
    line.push(i + 1 + ". " + lineName[i])
 }
   return "The line is currently: " + line.join(", ");
 }
