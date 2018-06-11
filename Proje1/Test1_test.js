
Feature('Test1');

//sahibinden.com sitesinin anasayfasında belirtilen özelliklerin
//var olduğunun doğrulanmasıyla anasayfanın doğru bir şekilde
//yüklenip yüklenmediğini kontrol eder.
Scenario('test1', (I) => {
	 I.amOnPage('/');
	I.see('Giriş Yap');
	I.see('Üye Ol');
	I.see('Ücretsiz* İlan Ver');
	I.see('Detaylı Arama');
	I.seeElement('input[id=searchText]');
	//id
	I.seeElement('#searchText');
	//class
	I.seeElement('.logo');
	//xPath
	I.seeNumberOfElements('//*[@class="uiBox showcase"]/ul/li',56);
	I.see('Vasıta');
	I.see('Otomobil');
	I.see('Arazi, SUV & Pick-up');
	I.see('Motosiklet');
});
