function sendRequest(url,method,data){
	var r = axios({
		url : url,
		method : method,
		data : data,
		xsrfCookieName : 'csrftoken',
		xsrfHeaderName : 'X-CSRFToken',
		headers : {
			'x-Requested-With':'XMLHttpRequest'
		}
	})
	return r;
}

var topicsApp = new Vue({
	delimiters: ['[[', ']]'],
	el : '#topics',
	data : {
		topics : [],
	},
	created(){
		sendRequest('','get',null)
		.then(res => {
			 this.topics  = res.data.topics;
		});
	},
	
});