import { Controller, Post, Body } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
  
  @Post('create-order')
  createOrder(@Body() body: any) {
    if (!body.bookingId || !body.amount) {
      return { success: false, message: "Invalid payload" };
    }
    return {
      success: true,
      orderId: "order_mock_" + Math.random().toString(36).substring(7),
      amount: body.amount,
      currency: "INR"
    };
  }

  @Post('verify')
  verifyPayment(@Body() body: any) {
    // Razorpay signature verification logic would go here
    return {
      success: true,
      message: "Payment verified successfully",
      paymentId: "pay_mock_" + Math.random().toString(36).substring(7)
    };
  }
}
