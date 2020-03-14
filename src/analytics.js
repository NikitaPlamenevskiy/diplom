import "./pages/index.css";
import LocalStorage from "./js/modules/LocalStorage";
import Statistic from "./js/components/Statistic";


const diagram=document.querySelector('.tabel');

const localStorage=new LocalStorage();


const statistic=new Statistic(localStorage);
statistic.render();