const dayMilliseconds = 604800000/7;
const currentDate = new Date();
const weekMilliseconds = 604800000;
const lastWeek = new Date(currentDate - weekMilliseconds);

export default class Statistic{
  constructor(localStorage){
    this.week=JSON.parse(localStorage.getItem("week"));
    this.count=localStorage.getItem("count");
    this.totalResults=localStorage.getItem("totalResults");
    this.word=localStorage.getItem("word");
    this.diagram=document.querySelector('.tabel');
  }
  render(){
    if (this.diagram){
      let totalResult=document.querySelector(".total_result");
      totalResult.innerHTML=`Новостей за неделю: <b>${this.totalResults}</b>`;
      let totalSearch=document.querySelector(".total_search");
      totalSearch.innerHTML=`Упоминаний в загаловках: <b>${this.count}</b>`;

      let h1=document.querySelector(".title_searched");
      h1.innerHTML=`Вы спросили: «${this.word}»`;
      
      let dates = document.getElementsByClassName("dates__week-day");
      let analytics = document.getElementsByClassName("analytics__column");
      for (let i=0;i<7;i++)
      {
        let tempDate=new Date(lastWeek);
        tempDate.setDate(tempDate.getDate()+i+1);
        let weekDay=["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][tempDate.getDay()];
        dates[i].innerHTML= tempDate.getDate()+","+weekDay;
        analytics[i].innerHTML=this.week[i];
        analytics[i].style.width=Math.min(100,(+this.week[i]))+"%";
      }
    }
  }
}

