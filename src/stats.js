const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats');

const ES = new EventSource(url, header);

ES.onerror = error => {
	ES.readyState ? console.error("⛔ EventSource failed: ", error) : null;
}

ES.onmessage = message =>{
	let data=JSON.parse(message.data);
	let dogs=data.dogs;
	let cats=data.cats;
	let parrots=data.parrots;

	let max=Math.max(dogs,cats,parrots);

	//get bars
	let bar_cats=document.querySelector("#bar-cats");
	let bar_dogs=document.querySelector("#bar-dogs");
	let bar_parrots=document.querySelector("#bar-parrots");

	//set width
	bar_cats.style.cssText=`width: ${(cats/max)*100}%`;
	bar_dogs.style.cssText=`width: ${(dogs/max)*100}%`;
	bar_parrots.style.cssText=`width: ${(parrots/max)*100}%`;


	//set text
	bar_cats.textContent =`Cats: ${cats}`;
	bar_dogs.textContent=`Dogs: ${dogs}`;
	bar_parrots.textContent=`Parrots: ${parrots}`;

}