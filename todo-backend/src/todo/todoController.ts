import { TodoService, TodoCreationParams } from "./todoService";
import { Todo } from "./todo";
import { Controller, Get, Path, Route } from "tsoa";

@Route("todos")
export class TodoController extends Controller {
  /**
   *  This is the controller for getting the todos
   */

  @Get("{todoId}")
  public async getTodo(@Path() todoId: string): Promise<Todo> {
    let todoService = new TodoService();
    return todoService.getTodo(todoId);
  }
}
