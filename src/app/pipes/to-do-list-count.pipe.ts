import { Pipe, PipeTransform } from "@angular/core";
import { TodoListItem } from "../models/todolistitem";

@Pipe({
  name: "toDoListCount",
  pure: false
})
export class ToDoListCountPipe implements PipeTransform {
  transform(array: TodoListItem[]): any {
    return array.length;
  }
}