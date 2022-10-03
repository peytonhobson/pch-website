<template>
  <div
    v-if="filteredPost"
    class="py-6 md:py-12 lg:w-10/12 md:text-center mx-auto"
  >
    <div class="font-medium text-gray-700">29 December 2018</div>

    <h1
      class="heading text-4xl md:text-6xl font-bold font-sans md:leading-tight"
    >
      {{ filteredPost.title }}
    </h1>

    <h2 class="text-xl text-gray-600 mt-2">
      Learn how to use Markdown to write blog posts. Understand front-matter and
      how it is used in templates.
    </h2>
  </div>

  <div class="flex flex-col pb-3 md:hidden">
    <div class="flex items-center mb-3 last:mb-0">
      <img
        class="rounded-full border-white border-2"
        src="/assets/images/author/sage-kirk.jpg"
        alt="Sage Kirk"
        width="48"
        height="48"
      />

      <div>
        <span class="font-medium text-sm ml-1 block">Sage Kirk</span>
        <a
          class="text-sm ml-1 block text-green-400"
          href="https://www.twitter.com/@zerostaticio"
          >@zerostaticio</a
        >
      </div>
    </div>

    <div class="flex items-center mb-3 last:mb-0">
      <img
        class="rounded-full border-white border-2"
        src="/assets/images/author/mike-vance.jpg"
        alt="Mike Vance"
        width="48"
        height="48"
      />

      <div>
        <span class="font-medium text-sm ml-1 block">Mike Vance</span>
        <a
          class="text-sm ml-1 block text-green-400"
          href="https://www.twitter.com/@zerostaticio"
          >@zerostaticio</a
        >
      </div>
    </div>
  </div>

  <img
    src="https://source.unsplash.com/CTivHyiTbFw/1600x900"
    width="1600"
    height="900"
  />

  <div class="flex flex-col md:flex-row py-6 md:py-12">
    <div class="w-full md:w-3/12 pr-3">
      <div class="flex flex-col hidden md:flex mb-3 md:mb-6">
        <div class="flex items-center mb-3 last:mb-0">
          <img
            class="rounded-full border-white border-2"
            src="/assets/images/author/sage-kirk.jpg"
            alt="Sage Kirk"
            width="48"
            height="48"
          />

          <div>
            <span class="font-medium text-sm ml-1 block">Sage Kirk</span>
            <a
              class="text-sm ml-1 block text-green-400"
              href="https://www.twitter.com/@zerostaticio"
              >@zerostaticio</a
            >
          </div>
        </div>

        <div class="flex items-center mb-3 last:mb-0">
          <img
            class="rounded-full border-white border-2"
            src="/assets/images/author/mike-vance.jpg"
            alt="Mike Vance"
            width="48"
            height="48"
          />

          <div>
            <span class="font-medium text-sm ml-1 block">Mike Vance</span>
            <a
              class="text-sm ml-1 block text-green-400"
              href="https://www.twitter.com/@zerostaticio"
              >@zerostaticio</a
            >
          </div>
        </div>
      </div>

      <div class="hidden md:block">
        <a
          class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
          href="/category/development"
          >Development</a
        >

        <a
          class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
          href="/category/javascript"
          >Javascript</a
        >

        <a
          class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
          href="/category/web-design"
          >Web Design</a
        >
      </div>
    </div>

    <div class="w-full md:w-9/12">
      <div class="prose">
        <p>
          Markdown is a lightweight markup language with plain-text-formatting
          syntax. Its design allows it to be converted to many output formats,
          but the original tool by the same name only supports HTML. Markdown is
          often used to format readme files, for writing messages in online
          discussion forums, and to create rich text using a plain text editor.
        </p>

        <h2 id="history">History</h2>

        <p>
          John Gruber created the Markdown language in 2004 in collaboration
          with Aaron Swartz on the syntax, with the goal of enabling people “to
          write using an easy-to-read and easy-to-write plain text format”. Its
          key design goal is readability. That the language be readable as-is.
        </p>

        <blockquote>
          <p>
            To write using an easy-to-read and easy-to-write plain text format
          </p>
        </blockquote>

        <p>
          To this end, its main inspiration is the existing conventions for
          marking up plain text in email, though it also draws from earlier
          markup languages, notably setext, Textile, and reStructuredText.
        </p>

        <h3 id="syntax-highlighting">Syntax Highlighting</h3>

        <div class="language-js highlighter-rouge">
          <div class="highlight">
            <pre
              class="highlight"
            ><code><span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">scroll</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
  <span class="c1">// this will work when your window scrolled.</span>
  <span class="kd">var</span> <span class="nx">scroll</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">();</span> <span class="c1">//getting the scrolling height of window</span>
  <span class="k">if</span> <span class="p">(</span><span class="nx">scroll</span> <span class="o">&gt;</span> <span class="mi">100</span><span class="p">)</span> <span class="p">{</span>
    <span class="nx">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.header</span><span class="dl">"</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">header-scrolled</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
    <span class="nx">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.header</span><span class="dl">"</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">header-scrolled</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">}</span>
<span class="p">});</span>
</code></pre>
          </div>
        </div>

        <h2 id="markdown-flavours">Markdown Flavours</h2>

        <p>There are several different versions of markdown</p>

        <h3 id="commonmark">CommonMark</h3>

        <p>
          From 2012, a group of people including Jeff Atwood and John MacFarlane
          launched what Atwood characterized as a standardization effort. A
          community website now aims to “document various tools and resources
          available to document authors and developers, as well as implementors
          of the various markdown implementations”.
        </p>

        <h3 id="github-flavored-markdown-gfm">
          GitHub Flavored Markdown (GFM)
        </h3>

        <p>
          In 2017, GitHub released a formal specification of their GitHub
          Flavored Markdown (GFM) that is based on CommonMark. It follows the
          CommonMark specification exactly except for tables, strikethrough,
          autolinks and task lists, which the GitHub spec has added as
          extensions.
        </p>

        <p>
          <img
            src="https://source.unsplash.com/3igFnx0L2pY/640x360"
            alt="unsplash"
          />
        </p>

        <h3 id="markdown-extra">Markdown Extra</h3>

        <p>
          Markdown Extra is a lightweight markup language based on Markdown
          implemented in PHP (originally), Python and Ruby. It adds features not
          available with plain Markdown syntax. Markdown Extra is supported in
          some content management systems such as, for example, Drupal.
        </p>

        <p>Markdown Extra adds the following features to Markdown:</p>

        <ul>
          <li>markdown markup inside HTML blocks</li>
          <li>elements with id/class attribute</li>
          <li>“fenced code blocks” that span multiple lines of code</li>
          <li>tables</li>
          <li>definition lists</li>
          <li>footnotes</li>
          <li>abbreviations</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="py-6 mt-6 border-t-2 block md:hidden">
    <h3 class="text-sm font-medium mb-1">Categories</h3>
    <div>
      <a
        class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
        href="/category/development"
        >Development</a
      >

      <a
        class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
        href="/category/javascript"
        >Javascript</a
      >

      <a
        class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
        href="/category/web-design"
        >Web Design</a
      >
    </div>
  </div>

  <footer class="py-6 border-t-2">
    <div class="container mx-auto">
      <div class="flex mb-2">
        <a
          class="py-2 mr-2"
          href="https://github.com/zerostaticthemes/jekyll-atlantic-theme"
          ><img
            src="https://simpleicons.org/icons/github.svg"
            alt="Github"
            width="24"
            height="24"
        /></a>

        <a class="py-2 mr-2" href="https://twitter.com/zerostaticio"
          ><img
            src="https://simpleicons.org/icons/twitter.svg"
            alt="Twitter"
            width="24"
            height="24"
        /></a>
      </div>
      <div class="text-sm text-gray-600">
        <span>Free Jekyll theme by</span>
        <a
          class="text-green-500"
          href="
        https://www.zerostatic.io"
          >Zerostatic Themes</a
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { UPDATE_SELECTED_JOB_POST_TITLE } from "@/store/constants";
import { defineComponent, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { key } from "@/store";
import { useFilteredPosts, useFetchPostsDispatch } from "@/store/composables";
// import { Post } from "@/api/types";

export default defineComponent({
  name: "BlogPostView",
  components: {},
  setup() {
    const parseJobPostTitle = () => {
      const route = useRoute();
      const title = route.params.title[0].replace(" ", "_") || "";
      const store = useStore(key);
      store.commit(UPDATE_SELECTED_JOB_POST_TITLE, title);
    };
    onBeforeMount(useFetchPostsDispatch);
    onBeforeMount(parseJobPostTitle);

    const filteredPost = computed(() => useFilteredPosts().value[0]);

    return { filteredPost };
  },
});
</script>
