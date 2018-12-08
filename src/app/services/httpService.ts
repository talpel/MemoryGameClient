import { Injectable } from '@angular/core';
import { User } from '../classes/clsUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class httpService {
    readonly rootUrl = '/api/';
    constructor(private http: HttpClient) { }

    signUp(user: User){
        var headerOptions = new HttpHeaders({ 'Content-Type':'application/json' });

        return this.http.post(this.rootUrl + 'SignUp', JSON.stringify(user), {
            headers: headerOptions,
            withCredentials: true
         });
    }   

    login(user: User){
        var headerOptions = new HttpHeaders({ 'Content-Type':'application/json' });

        return this.http.post(this.rootUrl + 'Login', JSON.stringify(user), {
            headers: headerOptions,
            withCredentials: true
         });
    }
    
    SaveGameResult(gameResult){
        var headerOptions = new HttpHeaders({ 'Content-Type':'application/json' });

        return this.http.post(this.rootUrl + 'SaveGameResult', JSON.stringify(gameResult), {
            headers: headerOptions,
            withCredentials: true
         });
    }

    GetGameResult(){
        var headerOptions = new HttpHeaders({ 'Content-Type':'application/json' });

        return this.http.get(this.rootUrl + 'GetGameResult', {
            headers: headerOptions,
            withCredentials: true
         });
    }

    GetImages() {
        var headerOptions = new HttpHeaders({ 'Content-Type':'application/json' });

        return this.http.get(this.rootUrl + 'GetImages', {
            headers: headerOptions,
            withCredentials: true
         });
    }

    InsertFeedback(feedback: any){
        var headerOptions = new HttpHeaders({ 'Content-Type':'application/json' });

        return this.http.post(this.rootUrl + 'InsertFeedback', JSON.stringify(feedback), {
            headers: headerOptions,
            withCredentials: true
         });
    }

    GetFeedbacks() {
        var headerOptions = new HttpHeaders({ 'Content-Type':'application/json' });

        return this.http.get(this.rootUrl + 'GetFeedbacks', {
            headers: headerOptions,
            withCredentials: true
         });
    }

    SendMessage(message: any){
        var headerOptions = new HttpHeaders({ 'Content-Type':'application/json' });

        return this.http.post(this.rootUrl + 'SendMessage', JSON.stringify(message), {
            headers: headerOptions,
            withCredentials: true
         });
    }
}