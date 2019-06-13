import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  board:any[]=[];

  constructor() { }

  ngOnInit() {
    this.addData();
  }
  addData(){
    var cnt = this.board.length;
    for(var i=cnt+1;i<=cnt+20;i++){
      this.board.push({no:i,title:'테스트'+i});
     }
  }
  printScroll(evt){
    console.log(evt)
  }
  loadData(event){
    setTimeout(()=>{
      this.addData();
      console.log('Done');
      event.target.complete();
      if (this.board.length == 300){
        event.target.disabled = true;
      }
    }, 500);
  }

}
