export default class LocalStorage {
	constructor() {
		this.storage = localStorage;
	}
	getItem(name) {
      try {
        return this.storage.getItem(name);
      }
      catch (error) {
        console.log(error);
      }
	}
	setItem(name, value) {
      try {
        this.storage.setItem(name, value);
      }
      catch (error) {
        console.log(error);
      }
	}
	getObj(name) {
      try {
        return JSON.parse(this.storage.getItem(name));
      }
      catch (error) {
        console.log(error);
      }
	}
	setObj(name, value) {
      try {
		this.storage.setItem(name, JSON.stringify(value));
      }
      catch (error) {
        console.log(error);
      }
	}
	clear() {
      try {
        this.storage.clear();
      }
      catch (error) {
        console.log(error);
      }
      
	}
}