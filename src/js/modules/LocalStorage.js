export default class LocalStorage{
  constructor(){
    this.Storage=sessionStorage;
  }
  getItem(name)
    {
      return this.Storage.getItem(name);
    }
  setItem(name,value)
    {
      this.Storage.setItem(name,value);
    }
}