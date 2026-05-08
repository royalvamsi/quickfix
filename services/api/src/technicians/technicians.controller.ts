import { Controller, Get, Param, Put, Body } from '@nestjs/common';

@Controller('technicians')
export class TechniciansController {
  
  @Get(':id/jobs')
  getJobs(@Param('id') id: string) {
    return {
      success: true,
      data: [
        { id: "QF2847", service: "AC Gas Refill", city: "Vijayawada", distance: "2.4 km", earning: 850, date: "Today, 14:30" }
      ]
    };
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('isOnline') isOnline: boolean) {
    return {
      success: true,
      message: `Technician ${id} is now ${isOnline ? 'Online' : 'Offline'}`
    };
  }

  @Get(':id/earnings')
  getEarnings(@Param('id') id: string) {
    return {
      success: true,
      data: {
        total: 14500,
        thisWeek: 4200,
        pending: 850
      }
    };
  }
}
