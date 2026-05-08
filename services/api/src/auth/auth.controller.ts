import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  
  @Post('send-otp')
  @HttpCode(HttpStatus.OK)
  sendOtp(@Body('phone') phone: string) {
    if (!phone) {
      return { success: false, message: "Phone number required" };
    }
    // Mock OTP logic
    return { 
      success: true, 
      message: `OTP sent to ${phone} successfully.`,
      debug_otp: "123456" 
    };
  }

  @Post('verify-otp')
  @HttpCode(HttpStatus.OK)
  verifyOtp(@Body('phone') phone: string, @Body('otp') otp: string) {
    if (otp === "123456") {
      return {
        success: true,
        token: "mock_jwt_token_for_" + phone,
        user: { id: "U-182", role: "customer", phone }
      };
    }
    return { success: false, message: "Invalid OTP" };
  }
}
