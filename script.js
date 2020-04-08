const russianKeys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'FN', 'Win', '←', '↓', '→', 'Ctrl'];

const russianKeysUP = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'FN', 'Win', '←', '↓', '→', 'Ctrl'];

const englishKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'FN', 'Win', '←', '↓', '→', 'Ctrl'];

const englishKeysUP = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'FN', 'Win', '←', '↓', '→', 'Ctrl'];

window.onload = function init() {
  let currentLanguage = 'rus';
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
    } else if (i < 29) {
      rows[1].append(button);
    } else if (i < 42) {
      rows[2].appendChild(button);
    } else if (i < 55) {
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
    } else if (language === 'enUP') {
      for (let i = 0; i < englishKeysUP.length; i++) {
        const key = document.getElementsByClassName('key');
        key[i].textContent = englishKeysUP[i];
      }
    } else if (language === 'rusUP') {
      for (let i = 0; i < russianKeysUP.length; i++) {
        const key = document.getElementsByClassName('key');
        key[i].textContent = russianKeysUP[i];
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
      event.target.classList.remove('animate');
      const textPlace = document.querySelector('.input');
      const carriage = textPlace.selectionStart;
      textPlace.focus();
      if (event.target.textContent === 'Backspace') {
        textPlace.value = textPlace.value.slice(0, carriage - 1) + textPlace.value.slice(carriage);
        textPlace.selectionStart = carriage - 1;
        textPlace.selectionEnd = carriage - 1;
      } else if (event.target.textContent == 'Space') {
        textPlace.value += ' ';
      } else if (event.target.textContent === 'Tab') {
        textPlace.setRangeText('    ');
        textPlace.selectionStart = carriage + 4;
      } else if (event.target.textContent == 'Enter') {
        textPlace.setRangeText('\n');
        textPlace.selectionStart = carriage + 1;
      } else if (event.target.textContent == 'Delete') {
        textPlace.value = textPlace.value.slice(0, carriage) + textPlace.value.slice(carriage + 1);
        textPlace.selectionStart = carriage;
        textPlace.selectionEnd = carriage;
      } else if (event.target.textContent == 'Caps Lock') {
        document.querySelector('.keyboard').classList.toggle('toUpperCase');
        if (document.querySelector('.keyboard').classList.contains('toUpperCase')) {
          capsed = true;
          if (currentLanguage == 'rus') {
            changeLanguage('rusUP');
            currentLanguage = 'rusUP';
          } else {
            changeLanguage('enUP');
            currentLanguage = 'enUP';
          }
        } else {
          capsed = false;
          if (currentLanguage == 'rusUP') {
            changeLanguage('rus');
            currentLanguage = 'rus';
          } else {
            changeLanguage('en');
            currentLanguage = 'en';
          }
        }
      } else if (event.target.textContent == 'FN') {
        if (currentLanguage == 'rus') {
          changeLanguage('en');
          currentLanguage = 'en';
        } else if (currentLanguage == 'rusUP') {
          changeLanguage('enUP');
          currentLanguage = 'enUP';
        } else if (currentLanguage == 'enUP') {
          changeLanguage('rusUP');
          currentLanguage = 'rusUP';
        } else {
          changeLanguage('rus');
          currentLanguage = 'rus';
        }
      } else if (event.target.className !== 'key' || event.target.textContent == 'Ctrl' || event.target.textContent == 'Win' || event.target.textContent == 'Alt' || event.target.textContent == 'FN') return;
      else {
        event.target.classList.add('animate');
        inputPlace.value += event.target.textContent;
      }
    });
  }

  texting();
};
