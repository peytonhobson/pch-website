<template>
  <Banner
    v-if="showBanner"
    :type="showBanner.type"
    :title="showBanner.title"
    :text="showBanner.text"
  />
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
    <action-button text="Submit" type="primary" :loading="isLoading" />
  </Form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import { Form, Field, ErrorMessage, RuleExpression } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import Banner from "@/components/Banner/Banner.vue";

export default defineComponent({
  name: "ResumeForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    ActionButton,
    Banner,
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

    const isLoading = ref(false);

    const showBanner = ref<
      | {
          type: "success" | "error";
          title: string;
          text: string;
        }
      | undefined
    >(undefined);

    const onSubmit = async (values: unknown, actions: any) => {
      isLoading.value = true;

      const { file }: { file: File } = values as { file: File };
      if (file && typeof values === "object") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          const base64String = (reader.result as string)?.split(",")[1];

          try {
            await axios.post(
              `${process.env.VUE_APP_SERVER_URL}/employment-email`,
              {
                ...values,
                file: base64String,
              }
            );

            showBanner.value = {
              type: "success",
              title: "Success!",
              text: "Your resume has been successfully submitted.",
            };
          } catch (error) {
            showBanner.value = {
              type: "error",
              title: "Error",
              text: "There was an error submitting your resume.",
            };
          }

          setTimeout(() => {
            showBanner.value = undefined;
          }, 5000);

          isLoading.value = false;

          actions.resetForm();
        };
        reader.onerror = () => {
          showBanner.value = {
            type: "error",
            title: "Error",
            text: "There was an error submitting your resume.",
          };
        };
      }
    };

    return { schema, onSubmit, validateFile, showBanner, isLoading };
  },
});
</script>
