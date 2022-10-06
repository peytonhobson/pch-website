<template>
  <section
    class="bg-white h-[190vh] md:h-screen flex items-center justify-evenly mt-10 md:py-20"
  >
    <div
      class="grid md:grid-cols-12 grid-cols-1 grid-rows-8 md:grid-rows-1 h-full justify-evenly w-full"
    >
      <div
        class="md:col-span-5 row-start-4 md:row-auto flex items-center justify-center md:justify-end w-full py-5 md:py-10 pb-20"
      >
        <display-card
          class="w-5/6 py-10 px-5 md:px-10 place-items-start"
          rows="1"
        >
          <Form class="w-full max-w-sm form" @submit="onSubmit">
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
                <ErrorMessage
                  name="phone-number"
                  class="text-red-500"
                  as="div"
                />
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
        </display-card>
      </div>
      <!--end col-->

      <div
        class="md:col-span-7 row-start-1 row-span-3 md:row-auto flex md:items-center md:justify-center my-7 md:my-0 px-10 md:px-0"
      >
        <div class="lg:ml-4">
          <h4
            class="mb-5 md:text-3xl text-2xl lg:leading-normal leading-normal font-sen font-semibold text-left"
          >
            Submit Your Resumé
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p class="text-slate-400 max-w-xl text-left font-sans">
            You may use this form to submit your PDF resumé for consideration,
            or you may send it to employment@premiercarehomes.net.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DisplayCard from "../Shared/DisplayCard.vue";
import ActionButton from "../Shared/ActionButton.vue";
import { Form, Field, ErrorMessage, RuleExpression } from "vee-validate";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

export default defineComponent({
  name: "SubmitResumeSection",
  components: {
    DisplayCard,
    ActionButton,
    Field,
    Form,
    ErrorMessage,
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
          ".form",
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
