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
  maxlength =0;
  ngOnInit(){
    //console.log(this.notes)
    console.log("init")
    //this.pageHeaders.last.nativeElement.focus();
  }

  createPage(val){
      var len = this.pageHeaders.length;
  this.maxlength = this.pageHeaders.length;
  let NewPage = this.pageHeaders.find((item,index)=>{
  return index==len-1
  })
    val.stopPropagation();
    let pageData = {Title:"Untitled"};
    console.log(this.maxlength);
    this.addData.emit([{
    Title:"Test",
    id:this.maxlength +1
  }]);
}

editPageTitle(i)
{ 
  console.log(this.pageHeaders[i]);
  console.log("editing");
   let editDiv = this.pageHeaders.find((item,index)=>{
  return index==i;
  })
  editDiv.nativeElement.setAttribute("contentEditable",true);
}
ngAfterViewInit(){
  var len = this.pageHeaders.length;
  this.maxlength = this.pageHeaders.length;
  let NewPage = this.pageHeaders.find((item,index)=>{
  return index==len-1
  })
  //NewPage.nativeElement.focus();
}
}
