import {HttpClient , HttpHeaders} from '@angular/common/http';
import {UserRegistrationAccount} from './userRegistrationAccount';
import {Injectable} from '@angular/core';


const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
providedIn: 'root'
})
export class RegistrationService{
private url : string = 'http://localhost:1234/reg';

constructor(private http : HttpClient){

}

getAllUsers() {
console.log("ProductDetails")
  
const headers = new Headers();
headers.append('Access-Control-Allow-Headers', 'Content-Type');
headers.append('Access-Control-Allow-Methods', 'GET');
headers.append('Access-Control-Allow-Origin', '*'); 
 

return this.http.get<UserRegistrationAccount[]>(this.url + `/getusers` );
}
}