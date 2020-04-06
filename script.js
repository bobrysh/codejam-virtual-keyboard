/* eslint-disable linebreak-style */
const russianKeys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'FN', 'Win', 'Ctrl'];

window.onload = function init() {
  const rows = [];
  const inputPlace = document.createElement('textarea');
  const keyboardPlace = document.createElement('div');
  inputPlace.className = 'input';
  keyboardPlace.className = 'keyboard';
  document.body.append(inputPlace, keyboardPlace);

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.className = `row${i}`;
    rows.push(row);
  }

  for (let i = 0; i < russianKeys.length; i++) {
    const button = document.createElement('div');
    button.textContent = russianKeys[i];
    button.className = 'key';
    if (i < 14) {
      rows[0].append(button);
    } else if (i < 28) {
      rows[1].append(button);
    } else if (i < 41) {
      rows[2].appendChild(button);
    } else if (i < 53) {
      rows[3].appendChild(button);
    } else {
      rows[4].append(button);
    }
  }


  keyboardPlace.append(rows[0], rows[1], rows[2], rows[3], rows[4]);

};
