import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
})
export class JoinPage implements OnInit {
  joinForm:FormGroup;
  ops:any[]=[];
  hobbies:any[]=[];
  constructor(private cs:CommonService,
    private lc:LoadingController,
    private ac:AlertController,
    private fBuilder:FormBuilder
    ) {
    
  }

  ngOnInit() {
    this.ops.push({value:1,text:'서울'});
    this.ops.push({value:2,text:'경기'});
    this.ops.push({value:3,text:'대전'});
    this.ops.push({value:4,text:'부산'});
    this.hobbies.push({value:'낚시',text:'낚시'});
    this.hobbies.push({value:'축구',text:'축구'});
    this.hobbies.push({value:'노래',text:'노래'});
    this.hobbies.push({value:'연기',text:'연기'});

    this.cs.get('/hobbies',{}).subscribe(
      res=>{
        
      }
    )
    this.joinForm = this.fBuilder.group({
      'id':[null,Validators.required],
      'pwd':[null,Validators.required],
      'name':[null,Validators.required]
    });
  }

  async doLogin(form:NgForm) {
    // async 는 es7 부터 프로미스를 대체하는 개념으로 나옴
    var alert = await this.ac.create({
      message:'잘지내나요?',
      buttons:[
        {
          text:'No',
          handler:data=>{
            console.log('No');
          }
        },
        {
          text:'Yes',
          handler: async data=>{
            var loading = await this.lc.create({ // 객체만 만듬
              message:'회원가입중'
            })
            await loading.present(); // 화면에 보여줌
            var url = '/join';
            console.log(form); // loading dismiss 처리 해주어야 함
            this.cs.post(url,form).subscribe(
              res=>{
                console.log(res);
                loading.dismiss();
              },
              err=>{
                console.log(err);
                loading.dismiss();
              }
            )
          }
        }
      ]
    })
    await alert.present();
  }
}
