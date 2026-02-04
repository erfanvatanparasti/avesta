
export class BlogService {
 
  // Get employments with pagination
  static async getBlogs(page = 1, limit = 50, filters?: any) {
    const skip = (page - 1) * limit;
    return [
      {
        id: "03",
        title: "۲۶ آذر، روز ملی حمل‌ونقل ایران گرامی باد",
        text: "حمل‌ونقل، شریان حیاتی اقتصاد و زیرساخت توسعه پایدار کشور است. از جاده و ریل تا دریا و هوا، این صنعت نقشی تعیین‌کننده در پایداری زنجیره تأمین، رشد تجارت و اتصال هوشمند کسب‌وکارها",
        image: "blog-03.jpg",
        order: 'unactive'
      },
      {
        id: "02",
        title: "۲۶ آذر، روز ملی حمل‌ونقل ایران گرامی باد",
        text: "حمل‌ونقل، شریان حیاتی اقتصاد و زیرساخت توسعه پایدار کشور است. از جاده و ریل تا دریا و هوا، این صنعت نقشی تعیین‌کننده در پایداری زنجیره تأمین، رشد تجارت و اتصال هوشمند کسب‌وکارها",
        image: "blog-02.jpg",
        order: 'active'
      },
      {
        id: "01",
        title: "۲۶ آذر، روز ملی حمل‌ونقل ایران گرامی باد",
        text: "حمل‌ونقل، شریان حیاتی اقتصاد و زیرساخت توسعه پایدار کشور است. از جاده و ریل تا دریا و هوا، این صنعت نقشی تعیین‌کننده در پایداری زنجیره تأمین، رشد تجارت و اتصال هوشمند کسب‌وکارها",
        image: "blog-01.jpg",
        order: 'unactive'
      },
    ]
  }

  // Update employment
  static async updateBlog(
    id: string, 
    data: any
  ) {
    return {}
  }

  // Delete employment
  static async deleteBlog(id: string) {
    return {}
  }

  // Create employment
  static async createBlog(data:any) {
    return {}
  }
}