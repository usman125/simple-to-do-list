import { Pipe, PipeTransform } from "@angular/core";
import { TodoListItem } from "../models/todolistitem";

@Pipe({
  name: "toDoListFilter"
})
export class ToDoListFilterPipe implements PipeTransform {
  transform(array: TodoListItem[], query: string): any {
    if (query) {
      if (query === 'completed') {
        return array.filter(element => element.completed);
      }
      if (query === 'pending') {
        return array.filter(element => !element.completed);
      }
    }
    return array;
  }
}