import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  listAll() {
    return `Listagem de cursos completa!`;
  }

  @Get(':id')
  findOne(@Param() params) {
    return `Curso número: ${params.id}`;
  }

  @Get('/outros/:id')
  findOutros(@Param('id') id: string) {
    return `Curso #${id}`;
  }
}
