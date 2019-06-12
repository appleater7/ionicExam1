import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
})
export class JoinPage implements OnInit {
  joinForm:FormGroup;
  constructor(private cs:CommonService,
    private lc:LoadingController,
    private ac:AlertController,
    private fBuilder:FormBuilder
    ) {
    
  }

  ngOnInit() {
    this.joinForm = this.fBuilder.group({
      'id':[null,Validators.required],
      'pwd':[null,Validators.required],
      'name':[null,Validators.required]
    });
  }

  async doLogin() { // async 로 왜 바꿔?
    var loading = await this.lc.create({ // 객체만 만듬
      message:'회원가입중'
    })
    await loading.present(); // 화면에 보여줌
    var url = '/join';
    this.cs.post(url,{}).subscribe(

    )
    setTimeout(
      ()=>{
        loading.dismiss(); // 화면에서 없애줌
      },
      500
    );
  }

}
