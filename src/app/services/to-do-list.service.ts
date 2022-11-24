import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../constants';
import { TodoListItem } from '../models/todolistitem';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  constructor(private _httpClient: HttpClient) { }

  public getToDoList() {
    const url = `${AppConfig.apiUrl}/todos`
    return this._httpClient.get<TodoListItem>(url);
  }

}
