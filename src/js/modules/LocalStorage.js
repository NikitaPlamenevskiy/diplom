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
  getObj(name)
    {
      return (JSON.parse(this.Storage.getItem(name)))["0"];
    }
  setObj(name,value)
    {
      this.Storage.setItem(name,JSON.stringify({"0":value}));
    }
}