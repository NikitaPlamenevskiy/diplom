import {
    WEEK
} from "./../constants/constants";
import {
    WEEK_MILLI_SECONDS
} from "./../constants/constants";


const LAST_WEEK = new Date(new Date() - 604800000);


function date2index(date) {
    return Math.round((new Date(date) - LAST_WEEK) * 7 / WEEK_MILLI_SECONDS) - 1
}

function countWordInDescription(article, word) {
    return (article.description.toLowerCase()).split(word.toLowerCase()).length - 1
}

function countWordInTitle(article, word) {
    return (article.description.toLowerCase()).split(word.toLowerCase()).length - 1
}

export default class Statistic {
    constructor(dataStorage) {
        this.week = [0, 0, 0, 0, 0, 0, 0];
        this.count = 0;
        this.dataStorage = dataStorage.getObj('dataStorage');
        this.articles = this.dataStorage.articles;
        this.totalResults = this.dataStorage.totalResults;
        this.word = this.dataStorage.word;
        this.diagram = document.querySelector('.tabel');
    }
    render() {
        for (let i in this.articles) {
            if (this.articles[i].description && this.articles[i].title) {
                //index - получаем номер в неделе для даты новости
                let index = date2index(this.articles[i].publishedAt);
                this.week[index] += countWordInDescription(this.articles[i], this.word);
                this.week[index] += countWordInTitle(this.articles[i], this.word);
                this.count += countWordInTitle(this.articles[i], this.word);
            }
        }
        const totalResult = document.querySelector('.total_result');
        totalResult.innerHTML = `Новостей за неделю: <b>${this.totalResults}</b>`;
        const totalSearch = document.querySelector('.total_search');
        totalSearch.innerHTML = `Упоминаний в загаловках: <b>${this.count}</b>`;
        const h1 = document.querySelector('.title_searched');
        h1.innerHTML = `Вы спросили: «${this.word}»`;
        const dates = document.getElementsByClassName('dates__week-day');
        const analytics = document.getElementsByClassName('analytics__column');
        for (let i = 0; i < 7; i++) {
            const tempDate = LAST_WEEK;
            tempDate.setDate(tempDate.getDate() + i + 1);
            const weekDay = WEEK[tempDate.getDay()];
            dates[i].innerHTML = tempDate.getDate() + "," + weekDay;
            analytics[i].innerHTML = this.week[i];
            analytics[i].style.width = Math.min(100, (+this.week[i])) + "%";
        }
    }
}