import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    getAllCustomers() {
        return this.customerService.getAllCustomers();
    }
    @Post()
    addCustomer(@Body() createCustomerDto: { name: string, age: number }) {
        return this.customerService.addCustomer(createCustomerDto);
    }
}
