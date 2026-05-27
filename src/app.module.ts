import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer(validation and DTO))/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles(role-based)/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';


@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule,ConfigModule.forRoot({ isGlobal: true,  }),MongooseModule.forRoot(process.env.MONGO_URI!)],
  controllers: [AppController, UserController, ProductController, MynameController, UserRolesController, ExceptionController, DatabaseController, EvController],
  providers: [AppService, ProductService, DatabaseService, EvService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}


//NestModule is an interface in NestJS used to configure middleware for a module.