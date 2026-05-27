import {SetMetadata} from '@nestjs/common';
//SetMetadata() is used to attach custom metadata to routes, controllers, methods, etc.

export const ROLES_KEY = 'roles';

export const Role = (...roles : string[]) => SetMetadata(ROLES_KEY,roles)


// ...roles here is rest operator
// it allow access function to enter multiple amount of parameter to pass to function 