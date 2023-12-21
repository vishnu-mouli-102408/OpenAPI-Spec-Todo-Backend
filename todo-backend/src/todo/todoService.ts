import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">;

//  same as
// export type TodoCreationParams = {
//   title: string;
//   description: string;
// };

export class TodoService {
  public getTodo(todoId: string): Todo {
    return {
      title: "Mocked Title",
      id: todoId,
      description: "Dummy Description",
      done: false,
    };
  }

  public createTodo(TodoCreationParams: TodoCreationParams): Todo {
    return {
      title: "Mocked Title for Creation",
      id: "1024",
      description: "Dummy Description for Creation",
      done: false,
    };
  }
}
