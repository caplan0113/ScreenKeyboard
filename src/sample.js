let can = document.getElementById("cvs")
let Text = document.getElementById("text")
let Footer = document.getElementById("footer")
let Keyname = document.getElementById("keyname")
can.style.border = "1px solid";
let ctx = can.getContext('2d')
ctx.lineWidth = 1;
ctx.textAlign = "center"
ctx.font = "italic 15px Arial";

var pressed = []
var pressed_text = ""
var pressed_num = 0

window.addEventListener("keydown", down);
window.addEventListener("keyup", up);


function draw(){
  ctx.clearRect(0, 0, can.width, can.height);
  for(let i in keymap){
    if(i == "Space") keydraw(ctx, " ", keymap[i][1], keymap[i][2], keymap[i][3], keymap[i][4], keymap[i][5]);
    else keydraw(ctx, keymap[i][0], keymap[i][1], keymap[i][2], keymap[i][3], keymap[i][4], keymap[i][5]);
  }
}
setInterval(draw, 10);

function keydraw(self, char, x, y, w, h, C) {
  var r = 5;
  var color = "#a9a9a9"

  self.beginPath();
  self.lineWidth = 3;
  self.strokeStyle = color;
  self.fillStyle = C;
  self.moveTo(x,y + r);  //←①
  self.arc(x+r,y+h-r,r,Math.PI,Math.PI*0.5,true);  //←②
  self.arc(x+w-r,y+h-r,r,Math.PI*0.5,0,1);  //←③
  self.arc(x+w-r,y+r,r,0,Math.PI*1.5,1);  //←④
  self.arc(x+r,y+r,r,Math.PI*1.5,Math.PI,1);  //←⑤
  self.closePath();  //←⑥
  self.stroke();  //←⑦
  self.fill();  //←⑧
  self.fillStyle = "#000000"

  self.fillText(char, x+w/2, y+h/2+5)
}

function down(e){
  e.preventDefault();
  console.log("down:"+e.code+"|"+e.key)
  if(e.code!="AltRight" && keymap[e.code][5]==defcolor) {
    pressed.push(e.code);
    if(pressed_num==0){
      pressed_text = keymap[e.code][0];
      pressed_num++;
    }else{
      pressed_text += " + " + keymap[e.code][0];
    }
    Keyname.innerHTML = pressed_text
    keymap[e.code][5] = "#ff9933";
  }
  if(e.ctrlKey && e.shiftKey && e.code=="F5") window.location.reload();
  if(e.shiftKey && e.code=="KeyE") {Text.remove(); Footer.remove(); refresh();}
}

function up(e){
  if(e.code=="Escape") {refresh();}
}

function refresh(){
  for(var i of pressed){ keymap[i][5] = defcolor;}
  pressed_num = 0;
  pressed_text = "スクリーンキーボード";
  Keyname.innerHTML = pressed_text;
}