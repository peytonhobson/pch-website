<template>
  <Form id="resume-form" class="w-full max-w-md form" @submit="onSubmit">
    <div class="md:flex md:items-center mb-10">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          Full Name<span class="text-red-500"> *</span>
        </label>
      </div>
      <div class="md:w-2/3">
        <Field
          name="name"
          type="text"
          :rules="schema.name"
          class="bg-white appearance-none border border-solid border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brand-green-gray"
        />
        <ErrorMessage name="name" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:flex md:items-center mb-10">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-email"
        >
          Email<span class="text-red-500"> *</span>
        </label>
      </div>
      <div class="md:w-2/3">
        <Field
          name="email"
          type="email"
          :rules="schema.email"
          class="bg-white appearance-none border border-solid border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brand-green-gray"
        />
        <ErrorMessage name="email" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:flex md:items-center mb-10">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-password"
        >
          Phone
        </label>
      </div>
      <div class="md:w-2/3">
        <Field
          name="phone-number"
          type="text"
          :rules="schema.phoneNumber"
          class="bg-white appearance-none border border-solid border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brand-green-gray"
        />
        <ErrorMessage name="phone-number" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:flex md:items-center mb-10">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-password"
        >
          Resumé PDF<span class="text-red-500"> *</span>
        </label>
      </div>
      <div class="md:w-2/3">
        <Field name="file" type="file" :rules="validateFile" />
        <ErrorMessage name="file" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <action-button text="Submit" type="primary" class="w-1/2" />
      </div>
    </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import { Form, Field, ErrorMessage, RuleExpression } from "vee-validate";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

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

    const onSubmit = () => {
      emailjs
        .sendForm(
          "service_nwq90ma",
          "template_li8xvdz",
          "#resume-form",
          "SaV6yXcrzMc0lIWqN"
        )
        .then(
          (result: any) => {
            console.log(result.text);
          },
          (error: any) => {
            console.log(error.text);
          }
        );
    };

    return { schema, onSubmit, validateFile };
  },
});
</script>
