const frisby = require('C:/Users/User/AppData/Roaming/npm/node_modules/frisby');
const Joi = frisby.Joi;

it('Test2', function () {
  return frisby.get('http://services.groupkt.com/state/get/USA/all')
   .expect('bodyContains','result')
   .expect('jsonTypes','RestResponse.result',Joi.array())
    .expect('jsonTypes', 'RestResponse.result.?', { 
      'id': Joi.number(),
	  'country' : Joi.string(),
    })
	.expect('jsonStrict', 'RestResponse.result.?', {
         "id" : 1,
		"country" : "USA",
		"name" : "Alabama",
		"abbr" : "AL",
		"area" : "135767SKM",
		"largest_city" : "Birmingham",
        "capital" : "Montgomery"
        })	
	
});
