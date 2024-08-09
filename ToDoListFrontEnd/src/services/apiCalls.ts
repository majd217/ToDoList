import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Item} from './../interfaces/Item';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApiCalls {

backendURL ="http://localhost:8080";

constructor(private http: HttpClient){}

fetchItems():  Observable<Object> {

    return this.http.get(this.backendURL + '/item/fetch')
     
}

saveItems(items:Item[]): Observable<Object>{
    return this.http.get(this.backendURL + '/item/add');
}

deleteItems(items:Item[]) : Observable<Object> {
    return this.http.get(this.backendURL + '/item/delete');
}
}

