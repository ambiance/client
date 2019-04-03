import React from 'react';

const auras = document.getElementsByClassName('resultCardAura');

export default function auraColorChange() {
  console.log('hello');
  for (let i = 0; i < auras.length; i++) {
    if (auras === 'trendy') {
      auras.backgroundColor = 'purple';
    } else {
      auras.backgroundColor = 'blue';
    }
  }
}
