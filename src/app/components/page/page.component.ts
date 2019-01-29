import { Component, OnInit,Input,Output, EventEmitter, ElementRef,ViewChildren,QueryList} from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() notes:any;
  @Output() addData=new EventEmitter<any>();
  @ViewChildren('pageHeader') pageHeaders: QueryList<ElementRef>
  constructor() {

  }

  ngOnInit(){
    //console.log(this.notes)
    console.log("init")
    //this.pageHeaders.last.nativeElement.focus();
  }

  createPage(val){
    val.stopPropagation();
    let pageData = {Title:"Untitled"};

    this.addData.emit({Pages:[{
    Title:"Test"
  }]});


}
ngAfterViewInit(){
  var len = this.pageHeaders.length;
  let NewPage = this.pageHeaders.find((item,index)=>{
  return index==len-1
  })
  //NewPage.nativeElement.focus();
}
}
