const frisby = require('frisby');
const Joi = frisby.Joi;
var assert = require("assert");

it('Test2', function () {
  return frisby.get('http://services.groupkt.com/state/get/USA/all')
   .expect('jsonTypes','RestResponse.result',Joi.array())
    .expect('jsonTypes', 'RestResponse.result.?', { 
      'id': Joi.number(),
	  'country' : Joi.string(),
    })
	.then(function (res){
		var body = JSON.parse(res._body);
		restResponse = body["RestResponse"];
		result = restResponse["result"];	
		
		var restResponseKeys = {}
		let j=0;
		for(var key in restResponse)
		{
			restResponseKeys[j] = key;
			++j;
		}
		assert.equal("result", restResponseKeys[1]);
		
		var keys = {};
		let i =0;
		for(var key in result[0])
		{
			keys[i] = key;
			i++;
		}			
		
		assert.equal("id", keys[0]);
		assert.equal("country", keys[1]);
		assert.equal("name", keys[2]);
		assert.equal("abbr", keys[3]);
		assert.equal("area", keys[4]);
		assert.equal("largest_city", keys[5]);
		assert.equal("capital", keys[6]);
	})
	
});
