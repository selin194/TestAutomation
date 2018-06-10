
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  
  
  selectMotosikletBrandAndType(brand,type)
  {
	I.click('Vasıta','//*[@href="/arama/detayli?category=3517"]');
	I.click('Motosiklet','//*[@href="/arama/detayli?category=3532"]');
	I.moveCursorTo('//*[@href="/arama/detayli?category=11757"]',400,-1300);
	I.click(brand,'//*[@href="/arama/detayli?category=11757"]');
	I.moveCursorTo('//*[@href="/arama/detayli?category=221415"]',270,-300);
	I.click(type,'//*[@href="/arama/detayli?category=221415"]'); 
  },
  
  specifyYearAndColorInfo(minYear, maxYear, color)
  {
	I.fillField('Min Yıl', minYear);
	I.fillField('Max Yıl', maxYear);
	I.executeScript(function() { document.querySelector('#a1331').style.display = 'block'; });
	I.selectOption('a1331', color);
	I.executeScript(function() {  document.getElementById('a106200').checked = 'true'; });
  },

  searchSpecificMotosiklet()
  {
	I.scrollPageToBottom();
	I.click('Arama Yap');
  }
}
