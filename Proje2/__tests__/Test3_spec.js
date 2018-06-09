const frisby = require('C:/Users/User/AppData/Roaming/npm/node_modules/frisby');

let readAlpha3_code;

describe('Chaning', function () {
	it('Test3', function () {
		return frisby.get('http://services.groupkt.com/country/get/all')
		.then(function (res){
			var body = JSON.parse(res._body);
			restResponse = body["RestResponse"];
			result = restResponse["result"];
		
			for (i = 0; i < result.length; i++) {
				if(result[i].name == "India")
				{
					readAlpha3_code = result[i].alpha3_code;	
					break;
				}
			}			
		})
		.then(function () { 
		   return frisby.get('http://services.groupkt.com/state/get/' + readAlpha3_code + '/all')
			.expect('status', 200)
			.expect('json', 'RestResponse.result.?', {
				"id" : 65,
				"largest_city" : "Srinagar Jammu",
			})
		});
	});
});

