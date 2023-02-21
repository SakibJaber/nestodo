import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';


@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {};

  @Post(':id')
  create(
    @Body(ValidationPipe) createTodoDto: CreateTodoDto,
    @Param('id') id: number,
  ) {
    return this.todosService.create(createTodoDto, Number(+id));
  }

  @Get('/findAllNC/:userId')
  findAllTodoByUserNC(@Param('userId') userId: number) {
    return this.todosService.findAllTodoByUserNC(Number(userId));
  }

  @Get('findAllC/:userId')
  findAllTodoByUserC(@Param('userId') userId: number) {
    return this.todosService.findAllTodoByUserC(Number(userId));
  }

  @Patch(':id')
  update(@Param('id') id: number) {
    return this.todosService.update(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.todosService.remove(Number(id));
  }
}
