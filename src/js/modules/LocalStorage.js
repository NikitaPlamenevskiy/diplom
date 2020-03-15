export default class LocalStorage{
  constructor(){
    this.Storage=localStorage;
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
      return (JSON.parse(this.Storage.getItem(name)));
    }
  setObj(name,value)
    {
      this.Storage.setItem(name,JSON.stringify(value));
    }
  clear()
  {
    this.Storage.clear();
  }
}