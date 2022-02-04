import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiagnosisController } from './modules/diagnosis/controller/diagnosis.controller';
import { UsersService } from './modules/users/services/users.service';
import { UsersController } from './modules/users/controller/users.controller';
import { UsersRepository } from './modules/users/repositories/users.repository';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/careyou')],
  controllers: [DiagnosisController, UsersController],
  providers: [UsersService, UsersRepository],
})
export class AppModule {}
