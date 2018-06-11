Feature('Test4');

let inputs = new DataTable(['name','value']); 

inputs.add(['Yamaha MT09','27']);
inputs.add(['Yamaha MT25','82']);

//Codecept data driven test özelliği kullanılarak ilgili entry ismine göre
//belirtilen sayıda olup olmadığını kontrol eder.
Data(inputs).Scenario('test4', async (I,current,searchPage) => {
	 I.amOnPage('/');
	 searchPage.searchByName(current.name);
	 let foundValue = await searchPage.grabTotalNumber();
	 let assert =require('assert');
	 assert.equal(current.value,foundValue);	 
});