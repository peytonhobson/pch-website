<template>
  <Form id="friend-form" class="w-full max-w-md" @submit="onSubmit">
    <div class="md:flex md:items-center mb-10">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          Your Name<span class="text-red-500"> *</span>
        </label>
      </div>
      <div class="md:w-2/3">
        <Field
          name="submitterName"
          type="text"
          :rules="schema.submitterName"
          class="input bg-white input-bordered w-full focus:outline-none focus:border-brand-green-gray"
        />
        <ErrorMessage name="submitterName" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:flex md:items-center mb-10">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-email"
        >
          Your Email<span class="text-red-500"> *</span>
        </label>
      </div>
      <div class="md:w-2/3">
        <Field
          name="submitterEmail"
          type="email"
          :rules="schema.submitterEmail"
          class="input bg-white input-bordered w-full focus:outline-none focus:border-brand-green-gray"
        />
        <ErrorMessage name="submitterEmail" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:flex md:items-center mb-10">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-password"
        >
          Friend's Name<span class="text-red-500"> *</span>
        </label>
      </div>
      <div class="md:w-2/3">
        <Field
          name="friendName"
          type="text"
          :rules="schema.friendName"
          class="input bg-white input-bordered w-full focus:outline-none focus:border-brand-green-gray"
        />
        <ErrorMessage name="friendName" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:flex md:items-center mb-10">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-password"
        >
          Friend's Email<span class="text-red-500"> *</span>
        </label>
      </div>
      <div class="md:w-2/3">
        <Field
          name="friendEmail"
          type="email"
          :rules="schema.friendEmail"
          class="input bg-white input-bordered w-full focus:outline-none focus:border-brand-green-gray"
        />
        <ErrorMessage name="friendEmail" class="text-red-500" as="div" />
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <action-button text="Submit" type="primary" />
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
  name: "ShareWithFriendForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    ActionButton,
  },
  setup() {
    const schema = {
      submitterName: yup.string().required().label("Your Name"),
      submitterEmail: yup.string().email().required().label("Your Email"),
      friendName: yup.string().required().label("Friend's Name"),
      friendEmail: yup.string().email().required().label("Friend's Email"),
    };

    const onSubmit = (values: any, actions: any) => {
      emailjs
        .sendForm(
          "service_nwq90ma",
          "template_1stcgtb",
          "#friend-form",
          "SaV6yXcrzMc0lIWqN"
        )
        .then(
          () => {
            notify({
              type: "success",
              text: "Referral submitted successfully!",
              group: "friend",
            });
          },
          () => {
            notify({
              type: "error",
              text: "Something went wrong. Please try again",
              group: "friend",
            });
          }
        );

      actions.resetForm();
    };

    return { schema, onSubmit };
  },
});
</script>
