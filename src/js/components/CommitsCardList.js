export default class CommitsCardList {
	constructor(api, container, cardElement) {
		this.container = container;
		this.cardElement = cardElement;
		this.count = 0;
		this.api = api;
	}
	addCard(name, email, date, message, avatar_url) {
		const card = this.cardElement.create(name, email, date, message, avatar_url);
		this.container.innerHTML += card;
	}
	render() {
		this.api.getCommits().then(res => {
			this.commits = res;
			for (let i = 0; i < (this.commits.length > 20 ? 20 : this.commits.length); i++) {
				let commit = {
					committer: this.commits[i].commit.author,
					author: {
						avatar_url: this.commits[i].author.avatar_url
					},
					message: this.commits[i].commit.message
				}
				this.addCard(commit.committer.name, commit.committer.email, commit.committer.date, commit.message, commit.author.avatar_url);
			}
		})
	}
}