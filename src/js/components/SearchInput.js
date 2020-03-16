import LocalStorage from "./../modules/LocalStorage";

const dataStorage = new LocalStorage();
export default class SearchInput {
	constructor(api, results, cardList, card, preloader, blockNotMatched, textContainer, buttonMore) {
		this.api = api;
		this.card = card;
		this.cardList = cardList;
		this.results = results;
		this.preloader = preloader;
		this.blockNotMatched = blockNotMatched;
		this.buttonMore = buttonMore;
        this.cardList.postCardRender();
	}
	submit(event, dateFrom, dateTo) { 
		event.preventDefault();
		//форма поиска
		const searchForm = document.forms.form;
		//форма поля ввода
		const searchInput = searchForm.elements.search;
		//прелоудер показать
		this.preloader.classList.add('preloader_open');
		//результат показать
		this.results.classList.remove('results_open');
		//скрыть ничего не найдено
		this.blockNotMatched.classList.remove('not-matched_open');
		this.api.getNews(searchInput.value, dateFrom, dateTo).then(res => {
			this.preloader.classList.remove('preloader_open');
			this.results.classList.add('results_open');
			document.querySelector('.card-list').innerHTML = '';
			if (res.articles.length) {
				this.api.getNews(searchInput.value, dateFrom, dateTo).then(res => {
					//получен ответ от сервера
					dataStorage.clear();
					let storage = {
						"totalResults": res.articles.length,
						"word": searchInput.value,
						"articles": res.articles
					}
					dataStorage.setObj("dataStorage", storage);
					this.cardList.renderFirstCards(res.articles, searchInput.value);
				})
			} else {
				this.blockNotMatched.classList.add('not-matched_open');
				this.results.classList.remove('results_open');
			}
		}).catch(error => alert("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"));
	}
};