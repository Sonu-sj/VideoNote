import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import {NoteService} from '../../services/note-service.service';
import {Notebook} from '../../models/Notebook';
import { Observable,BehaviorSubject, combineLatest } from 'rxjs';
import {startWith, scan, map} from 'rxjs/operators'
import {ActivatedRoute,Router} from '@angular/router'
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css']
})
export class PagelistComponent implements OnInit {

  constructor(private NS:NoteService,private route: ActivatedRoute,private router:Router) {
   // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }
  notes= new BehaviorSubject <Notebook[]>([]);
  newNote =new BehaviorSubject<Notebook[]>([]);
  subscription;
  ngOnInit() {
  let apiNotes = this.route.parent.paramMap.pipe
  (
    switchMap((val)=>this.NS.getNotes(val.get("id"))
  ))
  apiNotes
  this.notes.next([]);

// apiNotes.subscribe((d)=>console.log(d));

 this.subscription = combineLatest(apiNotes,this.newNote)
  .pipe(map(this.mapfunction),
  scan(this.accfunction)).subscribe((d)=>this.notes.next(d));
}
mapfunction([val1,val2]){
  console.log("page map");
  console.log(val1)
  console.log(val2);
  if(val2.length===0){
    return val1
  }
  return val2
}
accfunction(acc,curr,{}){
   console.log("acc")
   console.log(acc);
   console.log(curr);
   if(curr=="initial"){
    return [];
   }else
   {
  
     var newPageCollection = [...acc,...curr]
    //console.log(newPageCollection)
   // console.log( Object.assign({}, acc,newPageCollection));
    return newPageCollection;
   }

}
  addPage(data){
    console.log(data);
    this.newNote.next(data);
  }

    ngOnDestroy() {
    console.log("destroying");
    this.subscription.unsubscribe();
  }
  ngAfterViewInit() {
  //  this.newNote.next('initial');
   // this.addData.nativeElement.value = "Anchovies! 🍕🍕";
  }
}
