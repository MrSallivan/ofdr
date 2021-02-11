let btn = document.querySelector('._load-more')
btn.addEventListener('click', function (event) {
	const btnclick = event.target
	console.log(btnclick)
	let xhttp = new XMLHttpRequest()

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			myFunction(this.responseText)
		}
	}
	xhttp.open('GET', '../news.html', true)
	xhttp.send()


	function myFunction(data) {
		console.log(data)
	}
})