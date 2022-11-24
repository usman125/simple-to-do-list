import { Pipe, PipeTransform } from "@angular/core";
import { TodoListItem } from "../models/todolistitem";

@Pipe({
  name: "toDoListPendingCount",
  pure: false
})
export class ToDoListPendingCountPipe implements PipeTransform {
  transform(array: TodoListItem[]): any {
    let count: number = 0;
    array.forEach(element => {
      if (!element.completed) {
        count = count + 1;
      }
    })
    return count;
  }
}