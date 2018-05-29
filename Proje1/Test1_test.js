
Feature('Test1');

Scenario('test1', (I) => {
	 I.amOnPage('/');
	I.see('Giriş Yap');
	I.see('Üye Ol');
	I.see('Ücretsiz* İlan Ver');
	I.see('Detaylı Arama');
	I.seeElement('input[id=searchText]');
	I.seeElement('.logo');
});
