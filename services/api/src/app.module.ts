import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { BookingsModule } from './bookings/bookings.module';
import { TechniciansModule } from './technicians/technicians.module';
import { PaymentsModule } from './payments/payments.module';
import { DiagnosisModule } from './diagnosis/diagnosis.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    AuthModule, 
    ServicesModule, 
    BookingsModule,
    TechniciansModule,
    PaymentsModule,
    DiagnosisModule,
    ReviewsModule,
    AdminModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
