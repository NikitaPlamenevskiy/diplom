import "./pages/index.css";
import NewsApi from "./js/modules/NewsApi";
import {
    NEWS_API
} from "./js/constants/constants";
import LocalStorage from "./js/modules/LocalStorage";
import NewsCard from "./js/components/NewsCard";
import NewsCardList from "./js/components/NewsCardList";
import SearchInput from "./js/components/SearchInput";



/*кнопка поиска*/
const buttonSearch = document.querySelector('.button__search');
/*кнопка больше карточек*/
const buttonMore = document.querySelector('.button__more');
/*поле ввода*/
const inputWord = document.querySelector('.input-field');
/*блок прелоадер*/
const preloader = document.querySelector('.preloader');
/*блок результатов*/
const results = document.querySelector('.results');
/*блок не найдено */
const blockNotMatched = document.querySelector('.not-mathced__block');


const searchForm = document.forms.form;
const searchInput = searchForm.elements.search;
const diagram = document.querySelector('.tabel');



/*данные даты*/
const currentDate = new Date();
const lastWeek = new Date(currentDate - 604800000);
const dateTo = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
const dateFrom = `${lastWeek.getFullYear()}-${lastWeek.getMonth() + 1}-${lastWeek.getDate()}`




const localStorage = new LocalStorage();

const api = new NewsApi(NEWS_API);

/*карточка*/
const card = new NewsCard();

/*блок карточек*/
const cardList = new NewsCardList(document.querySelector('.card-list'), card);

const input = new SearchInput(api, results, cardList, card, preloader, blockNotMatched, buttonMore);

/*ивент на кнопку поиска*/
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    if (event.target.elements[0].value)
        input.submit(event, dateFrom, dateTo);
});


/*ивент на кнопку показать еще новости*/
buttonMore.addEventListener('click', event => {
    cardList.render();
});