import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Notebook} from '../models/Notebook';
import { Observable, BehaviorSubject,combineLatest } from 'rxjs';
import { scan,map} from 'rxjs/operators';
import { all } from 'q';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
allNotes:any;
noteStream:any;
  constructor(private http: HttpClient) {
    this.allNotes = new BehaviorSubject<Notebook[]>([]);
    this.noteStream=new BehaviorSubject<Notebook[]>([])
    console.log("initialised");
    this.LoadNotes();
    this.allNotes.pipe(
      scan(this.accfunction)
    ).subscribe((d)=>this.noteStream.next(d));
    // this.noteData.subscribe((data)=>console.log(data))
   }
notes =[];

public  LoadNotes(){

    this.http.get<Notebook[]>('/api/Notes')
  .subscribe((Notes) => {
    this.allNotes.next(Notes)});
  }
  public  getAllNotes(){
    return this.noteStream;
  }
   getNotes(id):Observable<Notebook[]>{
    //  return this.allNotes.asObservable();

  return this.http.get<Notebook[]>(`/api/Notes/${id}`)
  }
  addNotes(noteData){
    console.log("adding");
    this.allNotes.next(noteData);
  }
  mapfunction([val1,val2]){
    console.log("map");
    console.log(val1,val2)
    if(val2.length===0){
      return val1
    }
    return val2
  }

  accfunction(acc,curr){
    console.log("acc");
    console.log(acc);
    console.log(curr);
    if(acc.length>0){
      return [...acc,curr]
    }
    else{
      return curr;
    }

}
}
