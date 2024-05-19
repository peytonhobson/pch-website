<template>
  <Form id="contact-form" class="w-3/4 flex flex-col gap-8" @submit="onSubmit">
    <div>
      <label
        class="block text-gray-500 font-bold text-left mb-1 md:mb-0"
        for="inline-password"
      >
        Full Name<span class="text-red-500">*</span> :
      </label>
      <Field
        name="name"
        type="text"
        placeholder="John Smith"
        :rules="schema.name"
        class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
      />
      <ErrorMessage name="name" class="text-red-500 mt-1 text-left" as="div" />
    </div>
    <div>
      <label
        class="block text-gray-500 font-bold mb-1 md:mb-0 text-left"
        for="inline-password"
      >
        Email<span class="text-red-500">*</span> :
      </label>
      <Field
        name="email"
        type="text"
        placeholder="john.smith@example.com"
        :rules="schema.email"
        class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
      />
      <ErrorMessage name="email" class="text-red-500 mt-1 text-left" as="div" />
    </div>
    <div>
      <label
        class="block text-gray-500 font-bold mb-2 md:mb-0 text-left"
        for="inline-password"
      >
        <span class="whitespace-nowrap"
          >Subject<span class="text-red-500">*</span> :</span
        >
      </label>
      <Field
        name="subject"
        as="textarea"
        placeholder="Your Question..."
        :rules="schema.subject"
        class="pb-6 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray min-h-10"
      />
      <ErrorMessage
        name="subject"
        class="text-red-500 mt-1 text-left"
        as="div"
      />
    </div>
    <action-button class="w-full" text="Submit" type="primary" />
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
          () => {
            notify({
              type: "success",
              text: "Message sent successfully!",
              group: "contact",
            });
          },
          (error) => {
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
