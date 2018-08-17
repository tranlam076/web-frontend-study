// socket io
const socket = io('http://localhost:3030')
console.log(io);
$(document).ready(function() {
	$('#btn-learn-more').click(function () {
		const message = 'hello';
		socket.emit('message/create', message, function (response) {
			console.log('Response from sending');
			console.log(response);
		});
	});

	$('#contact-form-btn-submit').click(function () {
		// const message = $('#contact-form-textarea').val();
		socket.emit('message/create', $('#contact-form-textarea').val(), function (response) {
			console.log('Response from sending');
			console.log(response);
		});
		$('#contact-form-textarea').val('');
	});

	socket.on('message/receive', function (data) {
		console.log('----------receive--------------');
		console.log(data);
		alert(data);
	})
});
