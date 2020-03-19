import LocalStorage from "./../modules/LocalStorage";
const dataStorage = new LocalStorage();
const input = document.querySelector(".input-field");

export default class NewsCardList {
    constructor(container, cardElement) {
        this.container = container;
        this.cardElement = cardElement;
        this.count = 0;
        this.total = 0;
    }
    addCard(urlToImage, url, publishedAt, title, description, source) {
        const card = this.cardElement.create(urlToImage, url, publishedAt, title, description, source);
        this.container.innerHTML += card;
    }
    renderFirstCards(cards, word) {
        this.word = word;
        this.total = 0;
        this.countCards = Object.keys(cards).length;
        this.cards = cards;
        this.render();
        dataStorage.setItem("total", this.total);
    }
    render() {
        const buttonMore = document.querySelector('.button__more');
        buttonMore.classList.remove('button__more_hidden');
        for (let i = this.total; i < this.total + 3; ++i) {
            if (i >= this.countCards) {
                buttonMore.classList.add('button__more_hidden');
                return;
            }
            const card = this.cards[i];
            this.addCard(card.urlToImage, card.url, card.publishedAt, card.title, card.description, card.source, this.word);
        }
        this.total += 3;
        dataStorage.setItem("total", this.total);
    }
    postCardRender() {
        const data = dataStorage.getObj("dataStorage");
        if (dataStorage.getItem("total") && data["word"] && data["articles"]) {
            this.container.parentNode.classList.add("results_open");
            input.value = data["word"];
            this.cards = data["articles"];
            this.countCards = Object.keys(this.cards).length;
            this.total = +dataStorage.getItem("total");
            const buttonMore = document.querySelector('.button__more');
            buttonMore.classList.remove('button__more_hidden');
            for (let i = 0; i < this.total; ++i) {
                if (i >= this.countCards) {
                    buttonMore.classList.add('button__more_hidden');
                    return;
                }
                const card = this.cards[i];
                this.addCard(card.urlToImage, card.url, card.publishedAt, card.title, card.description, card.source, this.word);
            }
            this.total;
        }
    }
};