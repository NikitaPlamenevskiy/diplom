export default class NewsCard {
    constructor() {}
    create(urlToImage, url, publishedAt, title, description, source) {
        //Перевод даты
        this.date = publishedAt;
        this.date = new Date(this.date).toLocaleString("ru", {
            day: "numeric",
            year: 'numeric',
            month: 'long'
        });
        //Разметка карточки
        title = (title.length > 35) ? title.slice(0, 32) + "..." : title;
        return `
      <a href="${url}" class="card" target="_blank">
        <div class="card__image" style="background-image: url(${urlToImage});"></div>
        <p class="card__date">${this.date}</p>
        <h2 class="card__name">${title}</h2>
        <p class="card__par">${description}</p>
        <p class="card__source">${source.name}</p>
      </a>
    `
    }
};