// scroll bar
$(document).ready(function() {
	$('#header a').click(function() {
		$('.current').removeClass('current');
		var posClick = $(this).attr('href'); 
		var pos = $(posClick).position().top; 
		$('[href="'+ posClick + '"]').addClass('current'); 
		$('html, body').animate({scrollTop: pos + 20}, 1500);  
	});

	$('#header-menu-contact a').click(function() {
		fetchContacts();
	});
});
//ajax
function fetchContacts() {
	var url = 'http://5b765956deca780014eca06b.mockapi.io/api/v1/contacts';
	var token = ''
	request(url, token, 'GET', null, function(error, contacts) {
		if (error) {
			console.log(error);
			alert('Have something wrong!');
		} else {
			var listContacts = contacts.map(function(contact) {
				return contact.telephoneNumber;
			});
			console.log(listContacts);
		}
	});
}

function request(url, token, method, data, callback) {
	$.ajax({
		// headers: { "Authorization": 'Bearer ' + token },
		url: url,
		data: (data !== null) ? JSON.stringify(data) : data,
		contentType: 'application/json; charset=utf-8',
		error: function(error) {
			callback(error);
		},
		success: function(data) {
			callback(null, data);
		},
		type: method
	});
};

