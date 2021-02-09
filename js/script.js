function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();

// API requests function
const requestURL = 'https://jsonplaceholder.typicode.com/posts';
function sendRequest(method, url) {
	return fetch(url).then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error(response.statusText);
	})
}

// Get 6 posts when clicked on button "SHOW MORE"
const parent = document.querySelector(".blog-page__cards");
document.querySelector(".blog-page__btn").addEventListener("click", (e) => {
	sendRequest('GET', requestURL)
		.then((result) => {
			for (let i = 0; i < 6; i++) {
				parent.innerHTML += '<article class="blog-page__card card-blog"><div class="card-blog__body"><h2 class="card-blog__title"><a href="#" class="card-blog__title-link">'
					+ result[i].title + '</a></h2><div class="card-blog__text"><p>'
					+ result[i].body.substring(0, 110) + '<span>...</span></p></div><a href="#" class="card-blog__more"><span>Read More</span></a></div></article>'
			}
		})
		.catch(err => console.error('Что-то пошло не так...', err))
	e.preventDefault();
});



