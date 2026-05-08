import { Controller, Get, Param } from '@nestjs/common';

const MOCK_SERVICES = [
  { id: "S101", category: "Electrician", name: "MCB Replacement", basePrice: 350, duration: "1 hr" },
  { id: "S102", category: "Electrician", name: "Fan Installation", basePrice: 250, duration: "45 min" },
  { id: "S201", category: "Plumber", name: "Leaking Pipe Fix", basePrice: 300, duration: "1.5 hr" },
  { id: "S301", category: "AC Repair", name: "AC Gas Refill", basePrice: 1250, duration: "2 hr" },
];

@Controller('services')
export class ServicesController {
  
  @Get()
  getAllServices() {
    return {
      success: true,
      data: MOCK_SERVICES
    };
  }

  @Get('categories')
  getCategories() {
    return {
      success: true,
      data: ["Electrician", "Plumber", "AC Repair", "Carpentry", "Appliances"]
    };
  }

  @Get(':id')
  getServiceDetails(@Param('id') id: string) {
    const service = MOCK_SERVICES.find(s => s.id === id);
    if (!service) return { success: false, message: "Service not found" };
    return { success: true, data: service };
  }
}
