<template>
  <div class="container mx-auto md:px-4">
    <main class="py-6">
      <div class="mb-12 flex items-start justify-start">
        <div class="flex flex-col md:flex-row w-full lg:w-10/12">
          <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12">
            <a
              class="bg-gray-100"
              href="/blog/2018-12-29-writing-with-markdown/"
            >
              <img
                class="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out"
                alt="Writing With Markdown"
                src="https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg"
                width="640"
                height="360"
            /></a>
          </div>

          <div class="flex-1">
            <div class="flex items-center">
              <div class="flex ml-4">
                <div class="flex items-center mr-2 -ml-4">
                  <img
                    class="rounded-full border-white border-2"
                    src="@/assets/Headshot.jpg"
                    alt="Sage Kirk"
                    width="28"
                    height="28"
                  />
                </div>
              </div>

              <div class="text-sm font-medium text-gray-700">
                26 February 2015
              </div>
            </div>

            <a
              href="/blog/2018-12-29-writing-with-markdown/"
              class="hover:text-brand-green-gray"
            >
              <h2 class="text-2xl text-left font-semibold mb-1">
                Important Information for those (All too frequent) Pharmacy
                Visits
              </h2>
            </a>

            <p class="text-base text-left font-light text-gray-600 mb-4">
              Typically, as we age, we tend to end up taking more and more
              medication. Sometimes these medicines are over the counter...
            </p>

            <div class="mb-2 flex items-start justify-start">
              <a
                class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
                href="/category/development"
                >Premier</a
              >

              <a
                class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
                href="/category/javascript"
                >Care</a
              >

              <a
                class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
                href="/category/web-design"
                >Homes</a
              >
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Paginator from "@/components/Blog/Paginator.vue";

export default defineComponent({
  name: "BlogView",
  components: {
    Paginator,
  },
  setup() {},
});
</script>
