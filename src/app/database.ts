import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Notebook} from './models/Notebook';

export class Database implements InMemoryDbService {

  createDb() {
    const Notes: Notebook[] = [
      {id: 1, Title: 'Work',Pages:[
      {id:1,Title:"Monday",Content:"This is a test"},
      {id:2,Title:"Tuesday",Content:"This is Tuesday"},
      {id:3,Title:"Wednesday",Content:"This is Wednesday"},
      {id:4,Title:"Thursday",Content:"This is Thursday"},
      {id:5,Title:"",Content:"This is Friday"},
    ]},{
      id:2,Title:"Learning",Pages:[{id:1,Title:"Angular",Content:"This is a test"}]
    }
    ];
    return {Notes};
  }
}
