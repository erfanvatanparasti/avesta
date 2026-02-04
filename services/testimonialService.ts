
export class TestimonialService {
 
  // Get employments with pagination
  static async getTestimonials(page = 1, limit = 50, filters?: any) {
    const skip = (page - 1) * limit;
    return [
      {
        image: "testimonial-01.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      },
      {
        image: "testimonial-02.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      },
      {
        image: "testimonial-03.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      },
      {
        image: "testimonial-04.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      },
      {
        image: "testimonial-05.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      },
      {
        image: "testimonial-06.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      }
    ];
  }

  // Update employment
  static async updateTestimonial(
    id: string, 
    data: any
  ) {
    return {}
  }

  // Delete employment
  static async deleteTestimonial(id: string) {
    return {}
  }

  // Create employment
  static async createTestimonial(data:any) {
    return {}
  }
}