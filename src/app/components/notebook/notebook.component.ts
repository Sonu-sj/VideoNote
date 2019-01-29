import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../services/note-service.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  constructor(private NS:NoteService) { }
 notes:any;
  ngOnInit() {

  }

  addNotes(){
    var NoteData = {
      Pages:[],
      Title:"New Note",
      id:4
    }
this.NS.addNotes(NoteData)
  }

}
