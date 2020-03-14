/*данные даты*/
const currentDate = new Date();
const weekMilliseconds = 604800000;
const dayMilliseconds = 604800000/7;
const lastWeek = new Date(currentDate - weekMilliseconds);
const dateTo = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
const dateFrom = `${lastWeek.getFullYear()}-${lastWeek.getMonth() + 1}-${lastWeek.getDate()}`
 
export default class SearchInput{
  constructor(api, results, cardList, card, preloader, blockNotMatched, textContainer, buttonMore){
    this.api = api;
    this.card = card;
    this.cardList = cardList;
    this.results = results;
    this.preloader = preloader;
    this.blockNotMatched = blockNotMatched;
    this.buttonMore = buttonMore;
  }
  
  submit(event, dateFrom, dateTo){
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
    
    this.api.getNews(searchInput.value, dateFrom, dateTo)
    .then(res => {
      this.preloader.classList.remove('preloader_open');
      this.results.classList.add('results_open');
      document.querySelector('.card-list').innerHTML='';
      if (res.articles.length){
        this.api.getNews(searchInput.value, dateFrom, dateTo)
        .then(res => {
          localStorage.setItem("totalResults",res.totalResults);
          localStorage.setItem("word",searchInput.value);
          let week=[0,0,0,0,0,0,0];
          let count=0;
          for(let i in res.articles){
            if(res.articles[i].description&&res.articles[i].title){
              week[Math.round((new Date(res.articles[i].publishedAt)-lastWeek)*7/weekMilliseconds) - 1]+=((res.articles[i].description.toLowerCase()).split(searchInput.value.toLowerCase()).length-1)+((res.articles[i].title.toLowerCase()).split(searchInput.value.toLowerCase()).length-1);
              count+=((res.articles[i].title.toLowerCase()).split(searchInput.value.toLowerCase()).length-1);
            }
          }
          localStorage.setItem("week",JSON.stringify(week));
          localStorage.setItem("count",count);
          this.cardList.renderFirstCards(res.articles, searchInput.value);
        })
      }else{
        this.blockNotMatched.classList.add('not-matched_open');
        this.results.classList.remove('results_open');
      }
      
    })  
    .catch(error => alert("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"));
  }
};