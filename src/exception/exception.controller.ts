import { Controller, Get, NotFoundException, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception/http-exception.filter';

@Controller('exception')
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id', ParseIntPipe) id: number) {
        if (id === 1) {
            return { message: 'Hello, World! Your id is 1.' };
        } else {
            throw new NotFoundException(`Resource with id ${id} not found`);
        }

}
}