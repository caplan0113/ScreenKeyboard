let can = document.getElementById("cvs")
let Text = document.getElementById("text")
can.style.border = "1px solid";
let ctx = can.getContext('2d')

ctx.lineWidth = 1;
ctx.textAlign = "center"
ctx.font = "italic 15px Arial";

window.addEventListener("keydown", down);
window.addEventListener("keyup", up);


function draw(){
  ctx.clearRect(0, 0, can.width, can.height);
  for(let i in keymap){
    keydraw(ctx, keymap[i][0], keymap[i][1], keymap[i][2], keymap[i][3], keymap[i][4], keymap[i][5]);
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

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = `rgb(${r},${g},${b})`;
  return color;
}

function down(e){
  e.preventDefault();
  console.log("down:"+e.code+"|"+e.key)
  if(e.ctrlKey && e.shiftKey && e.code=="F5") window.location.reload();
  if(e.shiftKey && e.code=="Escape"){
    keymap["Backquote"][5] = keymap["CapsLock"][5] = keymap["KanaMode"][5] = defcolor;
  }
  if(e.shiftKey && e.code=="KeyE") Text.remove();
  keymap[e.code][5] = "#ff9933";
}

function press(e){ e.preventDefault(); }

function up(e){
  e.preventDefault();
  console.log("up:"+e.code+"|"+e.key)
  
  keymap[e.code][5] = "#ffffff";
}