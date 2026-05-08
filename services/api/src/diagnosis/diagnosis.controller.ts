import { Controller, Post, Body } from '@nestjs/common';

@Controller('diagnosis')
export class DiagnosisController {
  
  @Post('analyze')
  async analyzeIssue(@Body('imageUrl') imageUrl: string, @Body('description') description: string) {
    // Mocking an OpenAI Vision API response delay
    await new Promise(r => setTimeout(r, 1500));
    
    return {
      success: true,
      diagnosis: {
        detectedIssue: "Water leaking from internal AC unit.",
        probableCause: "The drain pipe appears to be blocked with debris or dust, causing condensation to overflow.",
        recommendedService: "Standard AC Servicing + Drain Unblocking",
        estimatedCost: "₹450 - ₹600",
        severity: "Medium"
      }
    };
  }
}
