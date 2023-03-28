import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Open Ai Api
import { Configuration, OpenAIApi } from 'openai';
//Access to Token
import { environment } from 'src/environments/environment';

const APIKEY = environment.openAIToken;

@Injectable({
  providedIn: 'root'
})
export class OpenaiserviceService {
  imgURL: string = '';
  image: string = '';

  constructor(public http : HttpClient) { }

  readonly configuration = new Configuration({
    apiKey:APIKEY,
  });

  readonly openai = new OpenAIApi(this.configuration);

  async queryFromOpenAi(text:any) {
    const params = {
      model:'text-davinci-003',
      prompt:text,
      max_tokens:256,
      temperature:0.7
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(APIKEY)
      },
      body: JSON.stringify(params)
    };
    
    const response = await fetch('https://api.openai.com/v1/completions',requestOptions);
    const data = await response.json();
    //data.choices[0].text)
    console.log("DATOS>>> ",data.choices[0].text);
    return data.choices[0].text;
  }

  generateImageFromText(text:string){

    //this.hidden = true;
    let val = {prompt: text, n: 1, size: '512x512'}
    this.createImage(val).subscribe(resp => {
      this.imgURL = resp.data[0].url;
      console.log('Imagen Generada: ',this.imgURL);
      //this.hidden = false;
    })
    return this.image = this.imgURL;
  }

  getImage(text:string){
 

    
  }
  
  createImage(inputBody:any): Observable<any> {
    const headers = { 'Authorization': `Bearer ${APIKEY}` };
    return this.http.post<any>('https://api.openai.com/v1/images/generations',
      inputBody, { headers });
  }

}
