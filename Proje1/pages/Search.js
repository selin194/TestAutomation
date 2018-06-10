
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  
  searchByName(name)
  {
	I.fillField('query_text',name);
	I.executeScript(function() { document.getElementById('searchSuggestionForm').submit(); });
	I.wait(2);
  },
  
  grabTotalNumber: async () => {
    I.waitForVisible('//*[@id="searchResultsSearchForm"]/div/div[3]/div[1]/div[1]/div[1]/div[1]/span');
    let foundValue = await I.grabTextFrom('//*[@id="searchResultsSearchForm"]/div/div[3]/div[1]/div[1]/div[1]/div[1]/span');  
    return foundValue;
  }
}
