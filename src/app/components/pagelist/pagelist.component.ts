import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import {NoteService} from '../../services/note-service.service';
import {Notebook} from '../../models/Notebook';
import { Observable,BehaviorSubject, combineLatest } from 'rxjs';
import {startWith, scan, map} from 'rxjs/operators'
import {ActivatedRoute,Router} from '@angular/router'
import { switchMap } from 'rxjs/internal/operators/switchMap';
@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css']
})
export class PagelistComponent implements OnInit {

  constructor(private NS:NoteService,private route: ActivatedRoute,private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }
  notes:Observable<Notebook[]>;
  newNote =new BehaviorSubject<Notebook[]>([]);
  ngOnInit() {
  let apiNotes = this.route.parent.paramMap.pipe
  (
    switchMap((val)=>this.NS.getNotes(val.get("id"))
  ))


this.notes  = combineLatest(apiNotes,this.newNote)
  .pipe(map(this.mapfunction),
  scan(this.accfunction))
}
mapfunction([val1,val2]){
  console.log("page map")
  if(val2.length===0){
    return val1
  }
  return val2
}
accfunction(acc,curr){
   console.log("acc")
    var newPageCollection = [...acc.Pages,...curr.Pages]
    //console.log(newPageCollection)
    return Object.assign({}, acc, {Pages:newPageCollection})
}
  addPage(data){
    this.newNote.next(data);
  }
  ngAfterViewInit() {
   // this.addData.nativeElement.value = "Anchovies! 🍕🍕";
  }
}
