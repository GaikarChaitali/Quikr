import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = 'http://localhost:4321/quickr/users';
  
  constructor(private http: HttpClient) { }

  createUser(userAccount: Object): Observable<Object> {
    console.log(userAccount)
    return this.http.post(`${this.baseUrl}` + `/create`, userAccount);
  }

  validateUser(loginAccount: Object): Observable<Object> {
    console.log(loginAccount)
    return this.http.post(`${this.baseUrl}` + `/login`,loginAccount);


/*     this.http.get("http://127.0.0.1:8096/api/shipmentcount/sample").success(function(response) {
    console.log(response);
}); */
  }

}



