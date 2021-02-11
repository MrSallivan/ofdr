let btn = document.querySelector('._load-more')
btn.addEventListener('click', function (event) {
	const btnclick = event.target
	console.log(btnclick)
	ajax({
		url:'../news.html',
		type: 'GET',
		beforeSend: function(){
			btn.setAttribute('disabled')
		},
		success: function(response){

		},
		error: function(){
			alert('error')
		}
	})
})