import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders(
    {'Content-Type':'application/json'}
  )
};
const baseUrl = "http://localhost:88";
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) {
    var params = {
      id:'test',
      pwd:'test'
    }
    console.log(this.mekeQuery(params));
  }

  private mekeQuery(params):string{
    var query = '?';
    for(var key in params){
      query += key + '=' + params[key] + '&';
    }
    query = query.substring(0,query.length-1);
    return query;
  }
  get(url,params){
    return this._http.get(baseUrl+url);
  }
  post(url,params){
    url = baseUrl + url;
    console.log(url);
    return this._http.post(url,params,httpOptions);
  }
}
