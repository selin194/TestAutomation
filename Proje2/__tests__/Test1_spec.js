const frisby = require('C:/Users/User/AppData/Roaming/npm/node_modules/frisby');
const Joi = frisby.Joi;

it('Test1', function () {
  return frisby.get('http://services.groupkt.com/country/get/all')
    .expect('bodyContains','RestResponse')
    .expect('status', 200)
	.expect('header', 'Content-Type', 'application/json;charset=UTF-8')
	.expect('jsonTypes','RestResponse.result',Joi.array())
	.expect('json','RestResponse.result.length','249')
	.expect('json', 'RestResponse.result.?', {
            name: 'Turkey',
			alpha2_code: 'TR',
			alpha3_code: 'TUR'
        })
});
