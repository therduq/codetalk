import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-imagegenerator',
  templateUrl: './imagegenerator.page.html',
  styleUrls: ['./imagegenerator.page.scss'],
})
export class ImagegeneratorPage implements OnInit {

  imageGen:any;
  imageData:any;

  hidden: boolean = false;
  imgURL: string = '';
  promtUser: string = '';
  
  constructor(public http : HttpClient) { }

  ngOnInit() {
  }


  getImage(){
    //this.promtUser = this.imageGen;
    this.hidden = true;
    let val:any = {prompt: this.imageGen, n: 1, size: '512x512'}
    this.createImageIA(val).subscribe(resp => {
      this.imgURL = resp.data[0].url;
      this.hidden = false;
      this.imageData = this.imgURL;
    })
  }
  
  createImageIA(inputBody:any): Observable<any> {
    const headers = { 'Authorization': `Bearer ${environment.openAIToken}` };
    return this.http.post<any>('https://api.openai.com/v1/images/generations',
      inputBody, { headers });
  }

  showspanner(){
    this.hidden = true
  }
}
