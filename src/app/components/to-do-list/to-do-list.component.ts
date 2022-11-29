import { Component, OnInit } from '@angular/core';
import { TodoListItem } from 'src/app/models/todolistitem';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  providers: [ToDoListService]
})
export class ToDoListComponent implements OnInit {

  public toDoList: TodoListItem[] = [];
  public itemName: string = '';
  public filterQuery: string = '';

  constructor(private _toDoListService: ToDoListService) { }

  ngOnInit() {
    this._toDoListService.getToDoList().subscribe(
      (result: any) => {
        this.toDoList = result;
      }
    )
  }

  public completeToDoListItem(item: TodoListItem) {
    this.toDoList = this.toDoList.map(element => {
      if (element.id === item.id) {
        return {
          ...element,
          completed: true,
        } as TodoListItem
      }
      return element as TodoListItem
    })
  }

  public removeToDoListItem(index: number) {
    this.toDoList.splice(index, 1);
  }

  public addToDoListItem() {
    let newItem: TodoListItem = {
      title: this.itemName,
      completed: false,
      userId: '1',
      id: this.toDoList.length + 1,
    }
    this.toDoList.unshift(newItem);
    this.itemName = ''
  }


  

}
