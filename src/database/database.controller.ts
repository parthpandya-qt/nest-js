import { Controller, Get } from '@nestjs/common';

@Controller('database')
export class DatabaseController {
    @Get()
    getDatabaseInfo() {
        return { name: 'MyDatabase', version: '1.0.0' };
    }
}
