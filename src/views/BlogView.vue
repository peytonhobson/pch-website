<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Blog
  </section>
  <div class="container mx-auto px-4">
    <main class="py-6">
      <div class="mb-12 flex items-center justify-center flex-wrap">
        <blog-post
          :key="blogContent.date"
          v-for="blogContent in blogContents"
          :blogContent="blogContent"
          class="py-5 border-b-2"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlogPost from "@/components/Blog/BlogPost.vue";

export default defineComponent({
  name: "BlogView",
  components: {
    BlogPost,
  },
  setup() {
    const blogContents = [
      {
        mainImage: "https://source.unsplash.com/INHtWKpBTsA/640x360",
        authorImage: "src/assets/Headshot.jpg",
        date: "26 February 2015",
        title:
          "Important Information for those (All too frequent) Pharmacy Visits",
        description:
          "Typically, as we age, we tend to end up taking more and more medication. Sometimes these medicines are over the counter... ",
        categories: ["Medication", "Dealing with Age", "Pharmacy"],
      },
      {
        mainImage: "https://source.unsplash.com/y3PdLg_zSDs/640x360",
        authorImage: "src/assets/Headshot.jpg",
        date: "27 January 2015",
        title: "Osteoporosis",
        description:
          "I enjoy continuing my education and staying up to date on health related news, especially as it relates to the senior population.",
        categories: ["Bone Health", "Education"],
      },
      {
        mainImage: "https://source.unsplash.com/YmQ0-nmWcV0/640x360",
        authorImage: "src/assets/Headshot.jpg",
        date: "13 January 2015",
        title: "Let’s Help Recall Those Memories",
        description:
          "Selfishly, we all get a little upset and sad when our elderly loved ones don’t recognize us or recall some of our favorite memories.  ",
        categories: ["Dimentia", "Loved Ones", "Memories"],
      },
      {
        mainImage: "https://source.unsplash.com/MS7KD9Ti7FQ/640x360",
        authorImage: "src/assets/Headshot.jpg",
        date: "20 November 2014",
        title: "Maybe They Wont Have to Turn up That Hearing Aid",
        description:
          "I think most of us can agree that many of our elderly family members are hard of hearing, or are certainly headed in that direction.",
        categories: ["Hearing", "Family"],
      },
    ];

    return { blogContents };
  },
});
</script>
