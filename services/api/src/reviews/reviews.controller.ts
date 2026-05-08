import { Controller, Post, Body, Get, Param } from '@nestjs/common';

@Controller('reviews')
export class ReviewsController {
  
  @Post()
  submitReview(@Body() body: any) {
    return {
      success: true,
      message: "Review submitted successfully"
    };
  }

  @Get('technician/:id')
  getTechnicianReviews(@Param('id') id: string) {
    return {
      success: true,
      average: 4.8,
      total: 124,
      reviews: [
        { user: "Raj K.", rating: 5, comment: "Quick and excellent service.", date: "12 Apr 2026" },
        { user: "Anil P.", rating: 4, comment: "Good work, but arrived 10 mins late.", date: "10 Apr 2026" }
      ]
    };
  }
}
