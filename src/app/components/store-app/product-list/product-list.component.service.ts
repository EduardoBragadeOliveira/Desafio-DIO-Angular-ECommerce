import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from "./model/store.model";

@Injectable()

export class DunhallService{

    private url = 'https://sheet.best/api/sheets/93c1fd30-6d89-4506-9573-9b54b572abc6';

    httpOptions = {

        Headers: new HttpHeaders({

            'content-type': 'application/json'
        })
    }

    constructor(private http:HttpClient){}

    getDunhall(){

        return this.http.get(this.url)
    }
}