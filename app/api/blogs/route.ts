/**
 * @swagger
 * /api/blogs:
 * 
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
import { NextRequest, NextResponse } from "next/server";
import { BlogService } from "@/services/blogService";

export async function GET(request: NextRequest) {
  try {
    const data = await BlogService.getBlogs();
    return NextResponse.json(
      { 
        success: true, 
        data,
        message: "مقالات و رویدادهای اوستا هوش‌یار."
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