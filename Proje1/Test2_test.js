
Feature('Test2');

Scenario('test2', (I) => {
	 I.amOnPage('/');
	 I.click('Detaylı Arama');
	 I.click('Vasıta','//*[@href="/arama/detayli?category=3517"]');
	 I.click('Motosiklet','//*[@href="/arama/detayli?category=3532"]');
	 I.moveCursorTo('//*[@href="/arama/detayli?category=11757"]');
	 I.click('Yamaha','//*[@href="/arama/detayli?category=11757"]');
	 I.moveCursorTo('//*[@href="/arama/detayli?category=221415"]');
	 I.click('MT-07 ABS','//*[@href="/arama/detayli?category=221415"]');
	 I.fillField('Min Yıl', '1998');
	 I.fillField('Max Yıl', '1999');
	 I.executeScript(function() { document.querySelector('#a1331').style.display = 'block'; });
	 I.selectOption('a1331', 'Gri');
	 I.executeScript(function() {  document.getElementById('a106200').checked = 'true'; });
	 I.scrollPageToBottom();
	 I.click('Arama Yap');
	 I.see('Arama filtrelerinize uygun ilan bulunamadı');
});