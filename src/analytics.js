import "./pages/index.css";
import LocalStorage from "./js/modules/LocalStorage";
import Statistic from "./js/components/Statistic";


const diagram = document.querySelector('.tabel');

const dataStorage = new LocalStorage();


const statistic = new Statistic(dataStorage);
statistic.render();