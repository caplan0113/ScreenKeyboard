let bet = 5
let H1 = 10
let H2 = H1 + 58
let H3 = H2 + 58
let H4 = H3 + 58
let H5 = H4 + 58
let W1 = 10
let W2 = 95
let W3 = 110
let W4 = 135
let hw = 50
let defcolor = "#ffffff"

//line5
let x1 = W1
let x2 = W1 + hw + 35 + bet
let x3 = x2 + hw + 10 + bet
let x4 = x3 + hw + 13 + bet
let x5 = x4 + hw + bet
let x6 = x5 + hw*3 + 8 + bet
let x7 = x6 + hw + bet
let x8 = x7 + hw + bet
let x9 = x8 + hw + 15 + bet
let x10 = x9 + hw + 40 + bet

var keymap = {
  "Escape" : [ 0, 900, 900, 0, 0, 0],
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
  "Tab"  :  ["Tab", W1, H2, hw+30, hw, defcolor],
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
  "Enter"  :  ["Enter", W3+(hw+bet)*12 , H2, hw+10, hw*2+8, defcolor],
  //3
  "CapsLock"  :  ["Caps Lock*", W1, H3, W3-10-bet, hw, defcolor],
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
  "ShiftLeft"  :  ["Shift", W1, H4, W4-10-bet, hw, defcolor],
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
  "ShiftRight"  :  ["Shift", W4+(hw+bet)*11, H4, hw+41, hw, defcolor],
  //5
  "ControlLeft"  :  ["Ctrl", x1, H5, hw+35, hw, defcolor],
  "MetaLeft"  :  ["Win", x2, H5, hw+10, hw, defcolor],
  "AltLeft"  :  ["Alt", x3, H5, hw+13, hw, defcolor],
  "NonConvert"  :  ["無変換", x4, H5, hw, hw, defcolor],
  "Space"  :  ["", x5, H5, hw*3+8, hw, defcolor],
  "Convert"  :  ["変換", x6, H5, hw, hw, defcolor],
  "KanaMode"  : ["かな*", x7, H5, hw, hw, defcolor],
  "AltRight"   : ["Alt", x8, H5, hw+15, hw, defcolor],
  "ContextMenu"   : ["", x9, H5, hw+40, hw, defcolor],
  "ControlRight"  : ["Ctrl", x10, H5, hw+54, hw, defcolor]
}