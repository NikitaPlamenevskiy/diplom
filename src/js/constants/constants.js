export const GITHUB_API = {
  baseUrl: 'https://api.github.com/repos/NikitaPlamenevskiy/diplom/commits',
}

export const NEWS_API = {
  baseUrl: 'https://newsapi.org/v2/everything?',
  key: 'f4c0fc7a12334e0bb5f3ef5a430ddded',
  pageSize: '100'
}

export const WEEK = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
export const CURRENT_DATE = new Date();
export const WEEK_MILLI_SECONDS = 604800000;
export const LAST_WEEK = new Date(CURRENT_DATE - 604800000);
export const DAY_MILLI_SECONDS = 604800000/7;
export const DATE_TO = `${CURRENT_DATE.getFullYear()}-${CURRENT_DATE.getMonth() + 1}-${CURRENT_DATE.getDate()}`
export const DATE_FROM = `${LAST_WEEK.getFullYear()}-${LAST_WEEK.getMonth() + 1}-${LAST_WEEK.getDate()}`
