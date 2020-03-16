/*класс API новостей*/
export default class NewsApi {
	constructor({
		baseUrl,
		key,
		pageSize
	}) {
		this.baseUrl = baseUrl;
		this.key = key;
		this.pageSize = pageSize;
	}
	getNews(word, dateFrom, dateTo) {
		return fetch(`${this.baseUrl}q=${word}&from=${dateFrom}&to=${dateTo}&sortBy=publishedAt&pageSize=${this.pageSize}&apiKey=` + this.key, {
			method: 'GET'
		}).then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Упс, что-то пошло не так... ${res.status}`);
		}).catch(error => alert(error));
	}
};