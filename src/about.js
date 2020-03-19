import "./pages/index.css";
import LocalStorage from "./js/modules/LocalStorage";
import GithubApi from "./js/modules/GithubApi";
import {
    GITHUB_API
} from "./js/constants/constants";
import CommitCard from "./js/components/CommitCard";
import CommitsCardList from "./js/components/CommitsCardList";
import Swiper from 'swiper';




const localStorage = new LocalStorage();

const apiGitHub = new GithubApi(GITHUB_API);

const commitCard = new CommitCard();
/*блок карточек*/
const cardCommitList = new CommitsCardList(apiGitHub, document.querySelector(".swiper-wrapper"), commitCard);
cardCommitList.render();
window.addEventListener("load", () => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        slidesPerColumn: 0,
        loop: false,
        uniqueNavElements: true,
        loopedSlides: 3,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });
    setTimeout(function() {
        swiper.update();
    }, 1000);
});