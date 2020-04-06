/* eslint-disable linebreak-style */
const russianKeys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'FN', 'Win', 'Ctrl'];

const englishKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'FN', 'Win', 'Ctrl'];

window.onload = function init() {
  let currentLanguage = 'rus'
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

  function changeLanguage(language) {
    if (language === 'en') {
      for (let i = 0; i < englishKeys.length; i++) {
        const key = document.getElementsByClassName('key');
        key[i].textContent = englishKeys[i];
      }
    } else {
      for (let i = 0; i < russianKeys.length; i++) {
        const key = document.getElementsByClassName('key');
        key[i].textContent = russianKeys[i];
      }
    }
  }

  function texting() {
    keyboardPlace.addEventListener('click', () => {
      inputPlace.value += event.target.textContent;
      if (event.target.textContent == 'FN') {
        if (currentLanguage == 'rus') {
          changeLanguage('en');
          currentLanguage = 'en';
        } else {
          changeLanguage('rus');
          currentLanguage = 'rus';
        }
      }
    });
  }


  texting();
};
