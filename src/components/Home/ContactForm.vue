<template>
  <Form id="contact-form" class="w-3/4 form" @submit="onSubmit">
    <div class="md:grid grid-cols-10 mb-8 w-full">
      <div class="mr-3 col-span-3 flex items-center justify-start">
        <label
          class="block text-gray-500 font-bold md:text-left lg:text-right mb-1 md:mb-0 pr-4"
          for="inline-password"
        >
          Full Name<span class="text-red-500">*</span> :
        </label>
      </div>
      <div class="flex-1 col-span-7">
        <Field
          name="name"
          type="text"
          placeholder="John Smith"
          :rules="schema.name"
          class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
        />
        <ErrorMessage name="name" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:grid grid-cols-10 mb-8 w-full">
      <div class="mr-3 col-span-3 h-full flex items-center justify-start">
        <label
          class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
          for="inline-password"
        >
          Email<span class="text-red-500">*</span> :
        </label>
      </div>
      <div class="flex-1 col-span-7">
        <Field
          name="email"
          type="text"
          placeholder="john.smith@example.com"
          :rules="schema.email"
          class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
        />
        <ErrorMessage name="email" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:grid grid-cols-10 mb-8">
      <div class="mr-3 col-span-3 flex items-start justify-start">
        <label
          class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
          for="inline-password"
        >
          Subject<span class="text-red-500">*</span> :
        </label>
      </div>
      <div class="flex-1 col-span-7">
        <Field
          name="subject"
          as="textarea"
          placeholder="Your Question..."
          :rules="schema.subject"
          class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
        />
        <ErrorMessage name="subject" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:grid md:grid-cols-10">
      <div class="md:col-start-5 md:col-span-5 flex">
        <action-button class="w-full" text="Submit" type="primary" />
      </div>
    </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { notify } from "@kyvg/vue3-notification";

export default defineComponent({
  name: "ResumeForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    ActionButton,
  },
  setup() {
    const schema = {
      name: yup.string().required().label("Full Name"),
      email: yup.string().email().required().label("Email Address"),
      subject: yup.string().required().label("Subject"),
    };

    const onSubmit = (values: any, actions: any) => {
      emailjs
        .sendForm(
          "service_nwq90ma",
          "template_adnda1m",
          "#contact-form",
          "SaV6yXcrzMc0lIWqN"
        )
        .then(
          (result) => {
            console.log(result);
            notify({
              type: "success",
              text: "Message sent successfully!",
              group: "contact",
            });
          },
          (error) => {
            console.log(error);
            notify({
              type: "error",
              text: error.text,
              group: "contact",
            });
          }
        );

      actions.resetForm();
    };

    return { schema, onSubmit };
  },
});
</script>
