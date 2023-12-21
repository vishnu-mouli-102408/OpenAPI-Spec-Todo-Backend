"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
//  same as
// export type TodoCreationParams = {
//   title: string;
//   description: string;
// };
class TodoService {
    getTodo(todoId) {
        return {
            title: "Mocked Title",
            id: todoId,
            description: "Dummy Description",
            done: false,
        };
    }
    createTodo(TodoCreationParams) {
        return {
            title: "Mocked Title for Creation",
            id: "1024",
            description: "Dummy Description for Creation",
            done: false,
        };
    }
}
exports.TodoService = TodoService;
