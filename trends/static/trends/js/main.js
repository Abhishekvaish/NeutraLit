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

var indexApp = new Vue({
	delimiters: ['[[', ']]'],
	el : '#home',
	data : {
		india : '',
		piechart : '',
		bargraph : '',
	},
	created(){
		sendRequest('','get',null)
		.then(res=>{
			this.india = 'data:image/png;base64,'+res.data.india;
			this.piechart ='data:image/png;base64,'+res.data.piechart;
			this.bargraph ='data:image/png;base64,'+res.data.bargraph;
		});
	},
})