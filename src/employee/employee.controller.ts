import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {

    @Get()
    getEmployee() {
        return { name: 'Alice Smith', position: 'Software Engineer' };
    }
}
