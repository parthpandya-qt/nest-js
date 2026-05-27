import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role } from '../guards/roles(rolebased)/roles.enum';
import { RolesGuard } from '../guards/roles(rolebased)/roles.guard';
import { Role as RoleDecorator } from '../guards/roles(rolebased)/roles.decorator';    

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @RoleDecorator(Role.Admin)
    getAdminData() {
        return { message: 'This data is only for admins' };
    }
    @Get('user-data')
    @UseGuards(RolesGuard)
    @RoleDecorator(Role.User)
    getUserData() {
        return { message: 'This data is only for regular users' };
    }
}
