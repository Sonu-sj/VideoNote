import { Component, OnInit, Input } from '@angular/core';
import {NoteService} from '../../services/note-service.service';
import {Notebook} from '../../models/Notebook';
import { Observable,BehaviorSubject, combineLatest } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {
  notes:Observable<Notebook[]>;
  subscription:any;
  constructor(private NS:NoteService) { }

  ngOnInit() {
    this.notes = this.NS.getAllNotes();

    this.subscription=this.NS.getAllNotes().subscribe((d)=>console.log(d));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
