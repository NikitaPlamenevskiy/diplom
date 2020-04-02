import "./pages/index.css";
import NewsApi from "./js/modules/NewsApi";
import {
    NEWS_API
} from "./js/constants/constants";
import {
WEEK_MILLI_SECONDS
} from "./js/constants/constants";
import LocalStorage from "./js/modules/LocalStorage";
import NewsCard from "./js/components/NewsCard";
import NewsCardList from "./js/components/NewsCardList";
import SearchInput from "./js/components/SearchInput";



/*форма поиска*/
const searchForm = document.querySelector('.search-field');
/*поле ввода*/
const searchInput = document.querySelector('.input-field');
/*кнопка поиска*/
const buttonSearch = document.querySelector('.button__search');
/*кнопка больше карточек*/
const buttonMore = document.querySelector('.button__more');
/*блок прелоадер*/
const preloader = document.querySelector('.preloader');
/*блок результатов*/
const results = document.querySelector('.results');
/*блок не найдено */
const blockNotMatched = document.querySelector('.not-mathced__block');


const diagram = document.querySelector('.tabel');



/*данные даты*/
const currentDate = new Date();
const lastWeek = new Date(currentDate - WEEK_MILLI_SECONDS);
const dateTo = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
const dateFrom = `${lastWeek.getFullYear()}-${lastWeek.getMonth() + 1}-${lastWeek.getDate()}`




const localStorage = new LocalStorage();

const api = new NewsApi(NEWS_API);

/*карточка*/
const card = new NewsCard();

/*блок карточек*/
const cardList = new NewsCardList(document.querySelector('.card-list'), card);

const input = new SearchInput(api, results, cardList, card, preloader, blockNotMatched, buttonMore);

function validation(){
    if (!searchInput.value)
        buttonSearch.disabled=true;
    else if (searchInput.value!=searchInput.value.replace(/(\<(\/?[^>]+)>)/g,''))
        buttonSearch.disabled=true;
    else
        buttonSearch.disabled=false;
}

window.addEventListener('load',()=>{
  validation();
});

/*ивент на кнопку поиска*/
searchInput.addEventListener('input', event => {
  validation();
});

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    if (searchInput.value)
        input.submit(event, dateFrom, dateTo);
});


/*ивент на кнопку показать еще новости*/
buttonMore.addEventListener('click', event => {
    cardList.render();
});