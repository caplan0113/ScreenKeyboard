let hw = 50
let bet = 5
let H0 = 10
let H1 = 50
let H2 = H1 + hw*1.16
let H3 = H2 + hw*1.16
let H4 = H3 + hw*1.16
let H5 = H4 + hw*1.16
let W0 = 10
let W1 = 10
let W2 = hw*1.9
let W3 = hw*2.2
let W4 = hw*2.7
let defcolor = "#ffffff"

//line5
let f1 = W0+hw+bet+hw*0.6
let f5 = W1+(hw+bet)*6 + hw*0.4
let f9 = W1+(hw+bet)*11
let x1 = W1
let x2 = W1 + hw + bet
let x3 = x2 + hw + bet
let x4 = x3 + hw + bet
let x5 = x4 + hw + bet
let x6 = x5 + hw + bet
let x7 = x6 + hw*3.5 + bet
let x8 = x7 + hw + bet
let x9 = x8 + hw + bet
let x10 = x9 + hw + bet
let x11 = x10 + hw + bet + bet
let x12 = x11 + hw*0.9 + bet
let x13 = x12 + hw*0.9 + bet


var keymap = {
  //f0
  "Escape" : [ "Esc", W0, H0, hw, hw*0.6666, defcolor],
  "F1" : ["F1", W0+(hw+bet)*1, H0, hw, hw*0.666, defcolor],
  "F2" : ["F2", W0+(hw+bet)*2, H0, hw, hw*0.666, defcolor],
  "F3" : ["F3", W0+(hw+bet)*3, H0, hw, hw*0.666, defcolor],
  "F4" : ["F4", W0+(hw+bet)*4, H0, hw, hw*0.666, defcolor],
  "F5" : ["F5", W0+(hw+bet)*5, H0, hw, hw*0.666, defcolor],
  "F6" : ["F6", W0+(hw+bet)*6, H0, hw, hw*0.666, defcolor],
  "F7" : ["F7", W0+(hw+bet)*7, H0, hw, hw*0.666, defcolor],
  "F8" : ["F8", W0+(hw+bet)*8, H0, hw, hw*0.666, defcolor],
  "F9" : ["F9", W0+(hw+bet)*9, H0, hw, hw*0.666, defcolor],
  "F10" : ["F10", W0+(hw+bet)*10, H0, hw, hw*0.666, defcolor],
  "F11" : ["F11", W0+(hw+bet)*11, H0, hw, hw*0.666, defcolor],
  "F12" : ["F12", W0+(hw+bet)*12, H0, hw, hw*0.666, defcolor],
  "Insert" : ["PrtScr", W0+(hw+bet)*13, H0, hw, hw*0.666, defcolor],
  "Delete" : ["delete", W0+(hw+bet)*14, H0, hw, hw*0.666, defcolor],
  //1
  "Backquote" : ["半角*", W1, H1, hw, hw, defcolor],
  "Digit1"  : ["1", W1+(hw+bet)*1, H1, hw, hw, defcolor],
  "Digit2"  : ["2", W1+(hw+bet)*2, H1, hw, hw, defcolor],
  "Digit3"  : ["3", W1+(hw+bet)*3, H1, hw, hw, defcolor],
  "Digit4"  : ["4", W1+(hw+bet)*4, H1, hw, hw, defcolor],
  "Digit5"  : ["5", W1+(hw+bet)*5, H1, hw, hw, defcolor],
  "Digit6"  : ["6", W1+(hw+bet)*6, H1, hw, hw, defcolor],
  "Digit7"  : ["7", W1+(hw+bet)*7, H1, hw, hw, defcolor],
  "Digit8"  : ["8", W1+(hw+bet)*8, H1, hw, hw, defcolor],
  "Digit9"  : ["9", W1+(hw+bet)*9, H1, hw, hw, defcolor],
  "Digit0"  : ["0", W1+(hw+bet)*10, H1, hw, hw, defcolor],
  "Minus" : ["-", W1+(hw+bet)*11, H1, hw, hw, defcolor],
  "Equal" : ["^", W1+(hw+bet)*12, H1, hw, hw, defcolor],
  "IntlYen" : ["￥", W1+(hw+bet)*13, H1, hw, hw, defcolor],
  "Backspace"   : ["back", W1+(hw+bet)*14, H1, hw, hw, defcolor],
  //2
  "Tab"  :  ["Tab", W1, H2, hw+hw*0.6, hw, defcolor],
  "KeyQ"  :  ["Q", W2, H2, hw, hw, defcolor],
  "KeyW"  :  ["W", W2+(hw+bet)*1 , H2, hw, hw, defcolor],
  "KeyE"  :  ["E", W2+(hw+bet)*2 , H2, hw, hw, defcolor],
  "KeyR"  :  ["R", W2+(hw+bet)*3 , H2, hw, hw, defcolor],
  "KeyT"  :  ["T", W2+(hw+bet)*4 , H2, hw, hw, defcolor],
  "KeyY"  :  ["Y", W2+(hw+bet)*5 , H2, hw, hw, defcolor],
  "KeyU"  :  ["U", W2+(hw+bet)*6 , H2, hw, hw, defcolor],
  "KeyI"  :  ["I", W2+(hw+bet)*7 , H2, hw, hw, defcolor],
  "KeyO"  :  ["O", W2+(hw+bet)*8 , H2, hw, hw, defcolor],
  "KeyP"  :  ["P", W2+(hw+bet)*9 , H2, hw, hw, defcolor],
  "BracketLeft"  :  ["@", W2+(hw+bet)*10 , H2, hw, hw, defcolor],
  "BracketRight"  :  ["[", W2+(hw+bet)*11 , H2, hw, hw, defcolor],
  "Enter"  :  ["Enter", W3+(hw+bet)*12 , H2, hw+hw*0.2, hw*2+hw*0.16, defcolor],
  //3
  "CapsLock"  :  ["Caps Lock*", W1, H3, W3-hw*0.2-bet, hw, defcolor],
  "KeyA"  :  ["A", W3, H3, hw, hw, defcolor],
  "KeyS"  :  ["S", W3+(hw+bet)*1, H3, hw, hw, defcolor],
  "KeyD"  :  ["D", W3+(hw+bet)*2, H3, hw, hw, defcolor],
  "KeyF"  :  ["F", W3+(hw+bet)*3, H3, hw, hw, defcolor],
  "KeyG"  :  ["G", W3+(hw+bet)*4, H3, hw, hw, defcolor],
  "KeyH"  :  ["H", W3+(hw+bet)*5, H3, hw, hw, defcolor],
  "KeyJ"  :  ["J", W3+(hw+bet)*6, H3, hw, hw, defcolor],
  "KeyK"  :  ["K", W3+(hw+bet)*7, H3, hw, hw, defcolor],
  "KeyL"  :  ["L", W3+(hw+bet)*8, H3, hw, hw, defcolor],
  "Semicolon"  :  [";", W3+(hw+bet)*9, H3, hw, hw, defcolor],
  "Quote"  :  [":", W3+(hw+bet)*10, H3, hw, hw, defcolor],
  "Backslash"  :  ["]", W3+(hw+bet)*11, H3, hw, hw, defcolor],
  //4
  "ShiftLeft"  :  ["Shift", W1, H4, W4-hw*0.2-bet, hw, defcolor],
  "KeyZ"  :  ["Z", W4, H4, hw, hw, defcolor],
  "KeyX"  :  ["X", W4+(hw+bet)*1, H4, hw, hw, defcolor],
  "KeyC"  :  ["C", W4+(hw+bet)*2, H4, hw, hw, defcolor],
  "KeyV"  :  ["V", W4+(hw+bet)*3, H4, hw, hw, defcolor],
  "KeyB"  :  ["B", W4+(hw+bet)*4, H4, hw, hw, defcolor],
  "KeyN"  :  ["N", W4+(hw+bet)*5, H4, hw, hw, defcolor],
  "KeyM"  :  ["M", W4+(hw+bet)*6, H4, hw, hw, defcolor],
  "Comma"  :  [",", W4+(hw+bet)*7, H4, hw, hw, defcolor],
  "Period"  :  [".", W4+(hw+bet)*8, H4, hw, hw, defcolor],
  "Slash"  :  ["/", W4+(hw+bet)*9, H4, hw, hw, defcolor],
  "IntlRo"  :  ["\\", W4+(hw+bet)*10, H4, hw, hw, defcolor],
  "ControlRight"  :  ["Shift", W4+(hw+bet)*11, H4, hw+hw*0.82, hw, defcolor],
  //5
  "ControlLeft"  :  ["Ctrl", x1, H5, hw, hw, defcolor],
  "Fn" : ["fn", x2, H5, hw, hw, defcolor],
  "MetaLeft"  :  ["Win", x3, H5, hw, hw, defcolor],
  "AltLeft"  :  ["Alt", x4, H5, hw, hw, defcolor],
  "NonConvert"  :  ["無変換", x5, H5, hw, hw, defcolor],
  "Space"  :  ["", x6, H5, hw*3.5, hw, defcolor],
  "Convert"  :  ["変換", x7, H5, hw, hw, defcolor],
  "KanaMode"  : ["かな*", x8, H5, hw, hw, defcolor],
  "AltRight"   : ["Alt", x9, H5, hw, hw, defcolor],
//  "ContextMenu"   : ["", x10, H5, hw, hw, defcolor],
  "ShiftRight"  : ["Ctrl", x10, H5, hw, hw, defcolor],
  //arrow
  "ArrowUp"  : ["↑", x12, H5, hw*0.9, hw*0.45, defcolor],
  "ArrowLeft"   : ["←", x11, H5+hw*0.55, hw*0.9, hw*0.45, defcolor],
  "ArrowRight"   : ["→", x13, H5+hw*0.55, hw*0.9, hw*0.45, defcolor],
  "ArrowDown"  : ["↓", x12, H5+hw*0.55, hw*0.9, hw*0.45, defcolor],
}