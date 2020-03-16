export default class CommitCard {
	constructor() {}
	create(name, email, date, message, avatar_url) {
		this.date = date;
		this.date = new Date(this.date).toLocaleString("ru", {
			day: "numeric",
			year: 'numeric',
			month: 'long'
		});
		email = (email.length > 30) ? email.slice(0, 27) + "..." : email;
		return `<div class="glider-slide ">
            <div class="slider-card">
              <p class="slider-card__date">${this.date}</p>
              <div class="card-holder">
                <img class="holder__image" src="${avatar_url}" alt="автарка">
                <h2 class="holder__name">${name}</h2>
                <p class="holder__mail">${email}</p>
              </div>
              <p class="card__comment">${message}</p>
            </div>
          </div>`
	}
};