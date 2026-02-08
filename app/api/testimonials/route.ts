/**
 * @swagger
 * /api/testimonials:
 * 
 *   get:
 *     description: Returns top testimonials have been registered
 *     responses:
 *       200:
 *         description: Hello Avesta!
 */
import { NextRequest, NextResponse } from "next/server";
import { TestimonialService } from "@/services/testimonialService";

export async function GET(request: NextRequest) {
  try {
    const data = await TestimonialService.getTestimonials();
    return NextResponse.json(
      { 
        success: true, 
        data,
        message: "نطرات ثبت شده کاربران."
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("خطایی در بازیابی نظرات رخ داده است.", error)
    return NextResponse.json(
      {
        success: false,
        data: [],
        message: JSON.stringify(error),
      },
      { status: 500 }
    );
  }
}