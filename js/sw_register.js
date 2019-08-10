if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('js/sw_register.js')
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}