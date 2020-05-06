function makeChoice(opt){
	
	const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
	})

	const url = new URL('https://sf-pyw.mosyag.in/sse/vote/'+opt);

	fetch(url, {method: 'POST', header})
	.then(response=>{
		document.querySelector('#title').classList.add("d-none");
		document.querySelector('#buttons').classList.add("d-none");
		document.querySelector('.wind-message').classList.remove("d-none");
	})

	
}