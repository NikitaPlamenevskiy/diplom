export const GITHUB_API = {
  baseUrl: 'https://api.github.com/repos/NikitaPlamenevskiy/diplom/commits',
}

export const NEWS_API = {
  baseUrl: 'http://newsapi.org/v2/everything?',
  language: 'ru',
  key: 'f4c0fc7a12334e0bb5f3ef5a430ddded',
  pageSize: '100'
}

export const WEEK = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
export const WEEK_MILLI_SECONDS = 604800000;
export const ADDITIONAL_CARDS = 3;
export const CLEAR_HTML = (el) => {
  while (el.firstChild) el.removeChild(el.firstChild);
}