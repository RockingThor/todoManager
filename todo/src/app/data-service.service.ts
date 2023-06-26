import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor( private http: HttpClient) { }

  private url="http://localhost:3000/todos";

  getAllTodos(){
    return this.http.get(this.url);
  }

  getASpecificTodo(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  updateATodo(id: number, todo: any){
    return this.http.put(`${this.url}/${id}`,todo);
  }

  createATodo(todo:any){
    return this.http.post(`${this.url}`,todo);
  }

  deleteATodo(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
