import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private Customer:Customer[] = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Doe', age: 25 },
        { id: 3, name: 'Jim Doe', age: 35 },
    ];
    getAllCustomers():Customer[] {
        return this.Customer;
    }
    addCustomer(createCustomerDto: CreateCustomerDto): Customer {
        const newCustomer: Customer = {
            id: this.Customer.length + 1,
            name: createCustomerDto.name,
            age: createCustomerDto.age
        };
        this.Customer.push(newCustomer);
        return newCustomer;
    }
}
