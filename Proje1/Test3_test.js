Feature('Test3');

let inputs = new DataTable(['name','value']); 
inputs.add(['Yamaha MT07','64']);

//Codecept data driven test özelliği kullanılarak ilgili entry ismine göre
//belirtilen sayıda olup olmadığını kontrol eder.
Data(inputs).Scenario('test3', async (I,current,searchPage) => {
	 I.amOnPage('/');
	 searchPage.searchByName(current.name);
	 I.click('Motosiklet');	
	 let foundValue = await searchPage.grabTotalNumber();
	 let assert =require('assert');
	 assert.equal(current.value,foundValue);	 
});