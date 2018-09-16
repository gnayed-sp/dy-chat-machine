window.addEventListener("load", (e) => {
	if (!('serviceWorker' in navigator)){
		console.log('Service Worker not supported');
		return;
	}
	
	navigator.serviceWorker.register('service-worker.js')
	.then(() => {
		console.log('Registered Service Worker');		
	})
	.catch(error => {
		console.log("Registering of Service Worker Failed: " + error);
	});
});