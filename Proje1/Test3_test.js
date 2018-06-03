Feature('Test3');

let inputs = new DataTable(['name','value']); 
inputs.add(['Yamaha MT07','61']);
inputs.add(['Yamaha MT09','25']);
inputs.add(['Yamaha MT25','73']);

Data(inputs).Scenario('test3', async (I,current) => {
	 I.amOnPage('/');
	 I.fillField('query_text',current.name);
	 I.executeScript(function() { document.getElementById('searchSuggestionForm').submit(); });
	 I.click('Motosiklet');	
	 let foundValue = await I.grabTextFrom('//*[@id="searchResultsSearchForm"]/div/div[3]/div[1]/div[1]/div[1]/div[1]/span');
	 let assert =require('assert');
	 assert.equal(current.value,foundValue);	 
});