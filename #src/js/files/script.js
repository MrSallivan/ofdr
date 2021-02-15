let btn = document.querySelector('._load-more')

btn.addEventListener('click', function (event) {

	let request = new XMLHttpRequest();
	request.open('GET', 'news.html');

	request.addEventListener('readystatechange', function () {

		if (request.readyState === 4 && request.status === 200) {

			let block = document.body.querySelector('.morenews')
			let content = request.response
			console.log(content)
			block.innerHTML = content
		}


	})
	request.send()
})