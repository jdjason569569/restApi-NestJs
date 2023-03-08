import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  public todos: Todo[] = [
    { id: 1, description: 'mt 09', done: false },
    { id: 2, description: 'z1000', done: false },
    { id: 3, description: 'bmw', done: true },
  ];

  create({ description }: CreateTodoDto) {
    const newTodo = {
      id: 123,
      description: description,
      done: false,
    };

    this.todos.push(newTodo);
    return newTodo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((element: any) => element.id === id);
    if (!todo) throw new NotFoundException(`not found element ${id}`);

    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
