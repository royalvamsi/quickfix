import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  
  @Get('dashboard')
  getDashboardStats() {
    return {
      success: true,
      data: {
        revenue: "₹1,42,500",
        activeJobs: 124,
        techniciansOnline: 84,
        openComplaints: 8
      }
    };
  }

  @Post('pricing/rules')
  updatePricingRules(@Body() rules: any) {
    return {
      success: true,
      message: "Pricing rules updated successfully."
    };
  }
}
