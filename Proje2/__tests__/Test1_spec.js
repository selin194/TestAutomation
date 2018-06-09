const frisby = require('C:/Users/User/AppData/Roaming/npm/node_modules/frisby');
const Joi = frisby.Joi;
var assert = require("assert");

 function isAsciiForFirstAndSecondChar(a, b) {
        return a >= 65 && a <= 90 && b <128;
 };

it('Test1', function () {
  return frisby.get('http://services.groupkt.com/country/get/all')
    .expect('status', 200)
	.expect('header', 'Content-Type', 'application/json;charset=UTF-8')
	.expect('jsonTypes','RestResponse.result',Joi.array())
	.expect('json','RestResponse.result.length','249')
	.expect('json', 'RestResponse.result.?', {
            name: 'Turkey',
			alpha2_code: 'TR',
			alpha3_code: 'TUR'
     })
	.then(function (res){
		var body = JSON.parse(res._body);
		let responseKey;
		
		for (var key in body) {
			if(key == "RestResponse")
			{
				responseKey = key;
				break;
			}
		}
		assert.equal("RestResponse",responseKey);
		restResponse = body[responseKey];
		
		var results = restResponse["result"];
		let isSortedByName = false;
		for(i=1;i<results.length;++i)
		{
			console.log(results[i].name.charCodeAt(0));
		
			results[i].name = results[i].name.toUpperCase();
			results[i-1].name = results[i-1].name.toUpperCase();
			
			if(isAsciiForFirstAndSecondChar(results[i].name.charCodeAt(0), results[i-1].name.charCodeAt(1))
				&& isAsciiForFirstAndSecondChar(results[i-1].name.charCodeAt(0),results[i-1].name.charCodeAt(1))
   			    && results[i].name < results[i-1].name)
			{
				console.log(results[i].name);
				console.log(results[i-1].name);
				isSortedByName = false;
				break;
			}
		}
			
		assert.equal(false,isSortedByName);
	})
});

 
