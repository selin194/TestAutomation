
Feature('Test2');

//Belirtilen özelliklere uygun değerlerin girilmesiyle
//aranılan  özelliklere uygun motosiklet bulunmadığını kotrol eder.
//detailedSearchPage page objecti kullanılmıştır.
Scenario('test2', (I,detailedSearchPage) => {
	 I.amOnPage('/');
	 I.click('Detaylı Arama');
	 detailedSearchPage.selectMotosikletBrandAndType('Yamaha','MT-07 ABS');
	 detailedSearchPage.specifyYearAndColorInfo('1998', '1999', 'Gri');
	 detailedSearchPage.searchSpecificMotosiklet();
	 I.see('Arama filtrelerinize uygun ilan bulunamadı');
});