export default class GithubApi {
	constructor({
		baseUrl
	}) {
		this.baseUrl = baseUrl;
	}
	getCommits() {
		return fetch(this.baseUrl, {
			method: 'GET'
		}).then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Упс, что-то пошло не так... ${res.status}`);
		})
          .catch(
          (error) => {
            return Promise.reject(`Ошибка: ${error}`);
          }
        );
	}
};