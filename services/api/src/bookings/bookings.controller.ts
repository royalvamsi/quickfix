import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('bookings')
export class BookingsController {
  
  @Post()
  createBooking(@Body() body: any) {
    if (!body.serviceId || !body.addressId) {
      return { success: false, message: "Missing required fields" };
    }
    return {
      success: true,
      message: "Booking created successfully",
      bookingId: "QF" + Math.floor(1000 + Math.random() * 9000),
      status: "Confirmed"
    };
  }

  @Get('user/:userId')
  getUserBookings(@Param('userId') userId: string) {
    return {
      success: true,
      data: [
        { id: "QF2847", service: "AC Gas Refill", status: "Completed", amount: 1250, date: "2026-04-24T14:30:00Z" },
        { id: "QF2109", service: "Switch Replacement", status: "Completed", amount: 450, date: "2026-04-15T10:00:00Z" }
      ]
    };
  }

  @Get(':id')
  getBooking(@Param('id') id: string) {
    return {
      success: true,
      data: {
        id,
        service: "AC Gas Refill",
        status: "Live Tracking",
        technician: { name: "Suresh Reddy", phone: "+91 9876543210", eta: "12 mins", lat: 16.515, lng: 80.632 },
        customerOtp: "8421",
        bill: { base: 1250, components: [] }
      }
    };
  }
}
