
Feature('Test2');

Scenario('test2', (I,detailedSearchPage) => {
	 I.amOnPage('/');
	 I.click('Detaylı Arama');
	 detailedSearchPage.selectMotosikletBrandAndType('Yamaha','MT-07 ABS');
	 detailedSearchPage.specifyYearAndColorInfo('1998', '1999', 'Gri');
	 detailedSearchPage.searchSpecificMotosiklet();
	 I.see('Arama filtrelerinize uygun ilan bulunamadı');
});