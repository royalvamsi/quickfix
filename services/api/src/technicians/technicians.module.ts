import { Module } from '@nestjs/common';
import { TechniciansController } from './technicians.controller';

@Module({
  controllers: [TechniciansController],
  providers: [],
})
export class TechniciansModule {}
