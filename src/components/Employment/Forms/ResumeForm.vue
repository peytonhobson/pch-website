<template>
  <Form id="resume-form" class="w-3/4 flex flex-col gap-8" @submit="onSubmit">
    <div>
      <label
        class="block text-gray-500 font-bold text-left mb-1 md:mb-0"
        for="inline-full-name"
      >
        Full
        <span class="whitespace-nowrap"
          >Name<span class="text-red-500">*</span> :</span
        >
      </label>
      <Field
        name="name"
        type="text"
        :rules="schema.name"
        placeholder="John Smith"
        class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
      />
      <ErrorMessage name="name" class="text-red-500 text-left mt-1" as="div" />
    </div>
    <div>
      <label
        class="block text-gray-500 font-bold text-left mb-1 md:mb-0"
        for="inline-email"
      >
        Email<span class="text-red-500">*</span> :
      </label>

      <Field
        name="email"
        type="email"
        :rules="schema.email"
        placeholder="john.smith@example.com"
        class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
      />
      <ErrorMessage name="email" class="text-red-500 text-left mt-1" as="div" />
    </div>
    <div>
      <label
        class="block text-gray-500 font-bold text-left mb-1 md:mb-0"
        for="inline-password"
      >
        Phone :
      </label>
      <Field
        name="phoneNumber"
        type="text"
        :rules="schema.phoneNumber"
        placeholder="555-555-5555"
        class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
      />
      <ErrorMessage
        name="phone-number"
        class="text-red-500 text-left mt-1"
        as="div"
      />
    </div>
    <div>
      <label
        class="block text-gray-500 font-bold text-left mb-4"
        for="inline-password"
      >
        Resumé
        <span class="whitespace-nowrap"
          >PDF<span class="text-red-500">*</span> :</span
        >
      </label>
      <Field
        name="file"
        type="file"
        :rules="validateFile"
        class="w-5/6 md:w-full"
      />
      <ErrorMessage name="file" class="text-red-500 text-left mt-1" as="div" />
    </div>
    <action-button text="Submit" type="primary" />
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import { Form, Field, ErrorMessage, RuleExpression } from "vee-validate";
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
    const validateFile = (
      value?: RuleExpression<unknown>
    ): RuleExpression<unknown> => {
      let valid = true;
      if (value) {
        if (!["application/pdf"].includes((value as unknown as File).type)) {
          valid = false;
        }
      } else {
        return "Resumé is required";
      }
      if (valid) {
        return valid as unknown as RuleExpression<unknown>;
      }
      return "File must be a PDF file";
    };

    const schema = {
      name: yup.string().required().label("Full Name"),
      email: yup.string().email().required().label("Email Address"),
      phoneNumber: yup.string(),
    };

    const onSubmit = (values: any, actions: any) => {
      emailjs
        .sendForm(
          "service_nwq90ma",
          "template_li8xvdz",
          "#resume-form",
          "SaV6yXcrzMc0lIWqN"
        )
        .then(
          () => {
            notify({
              type: "success",
              text: "Application submitted successfully!",
              group: "resume",
            });
          },
          (error) => {
            notify({
              type: "error",
              text: error.text,
              group: "resume",
            });
          }
        );

      actions.resetForm();
    };

    return { schema, onSubmit, validateFile };
  },
});
</script>
