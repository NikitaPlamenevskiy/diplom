export default class NewsCardList{
  constructor(container, cardElement){
    this.container = container;
    this.cardElement = cardElement;
    this.count = 0;
  }
  
  addCard(urlToImage, url, publishedAt, title, description, source){
    const card = this.cardElement.create(urlToImage,url, publishedAt, title, description, source);
    this.container.innerHTML+=card;
  }
  
  renderFirstCards(cards, word){
    
    
    this.word = word;
    this.total = 0;
    
    this.countCards = Object.keys(cards).length;
    this.cards = cards; 
    this.render();
  }
  
  render(){
    const buttonMore = document.querySelector('.button__more');
    buttonMore.classList.remove('button__more_hidden');
      
    for (let i = this.total; i < this.total + 3; ++i){
      if (i >=  this.countCards){
        buttonMore.classList.add('button__more_hidden');
          return;
      }
      const card = this.cards[i];
      this.addCard(card.urlToImage,card.url, card.publishedAt, card.title, card.description, card.source, this.word);
    }
    this.total += 3;
  }
};