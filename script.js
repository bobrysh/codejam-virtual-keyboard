/* eslint-disable linebreak-style */
const area = document.createElement('textarea');
const inputArea = document.createElement('div');
area.id = 'area';
inputArea.id = 'inputArea';
document.body.append(area, inputArea);

const button = document.createElement('li');
button.id = 'button';
button.classList.add('button');
button.innerText = '`';

inputArea.append(button);

const buttonID = document.getElementById('button');
const button_1 = buttonID.cloneNode(true);
button_1.innerText = '1';
const button_2 = buttonID.cloneNode(true);
button_2.innerText = '2';
const button_3 = buttonID.cloneNode(true);
button_3.innerText = '3';
const button_4 = buttonID.cloneNode(true);
button_4.innerText = '4';
const button_5 = buttonID.cloneNode(true);
button_5.innerText = '5';
const button_6 = buttonID.cloneNode(true);
button_6.innerText = '6';
const button_7 = buttonID.cloneNode(true);
button_7.innerText = '7';
const button_8 = buttonID.cloneNode(true);
button_8.innerText = '8';
const button_9 = buttonID.cloneNode(true);
button_9.innerText = '9';
const button_0 = buttonID.cloneNode(true);
button_0.innerText = '0';
const button_ = buttonID.cloneNode(true);
button_.innerText = '-';
const button_plus = buttonID.cloneNode(true);
button_plus.innerText = '=';
const buttonBackspace = buttonID.cloneNode(true);
buttonBackspace.innerText = 'Backspace';

inputArea.append(
  button_1, button_2, button_3, button_4, button_5, button_6,
  button_7, button_8, button_9, button_0, button_, button_plus
  , buttonBackspace,
);
