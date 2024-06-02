<template>
  <Form id="friend-form" class="w-3/4 flex flex-col gap-8" @submit="onSubmit">
    <div>
      <label
        class="block text-gray-500 text-left font-bold mb-1 md:mb-0"
        for="inline-full-name"
      >
        Your Name<span class="text-red-500">*</span> :
      </label>
      <Field
        name="submitterName"
        type="text"
        :rules="schema.submitterName"
        placeholder="John Smith"
        class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
      />
      <ErrorMessage
        name="submitterName"
        class="text-red-500 text-left mt-1"
        as="div"
      />
    </div>
    <div>
      <label
        class="block text-gray-500 font-bold text-left mb-1 md:mb-0"
        for="inline-email"
      >
        Your Email<span class="text-red-500">*</span> :
      </label>
      <Field
        name="submitterEmail"
        type="email"
        :rules="schema.submitterEmail"
        placeholder="john.smith@example.com"
        class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
      />
      <ErrorMessage
        name="submitterEmail"
        class="text-red-500 text-left mt-1"
        as="div"
      />
    </div>
    <div>
      <label
        class="block text-gray-500 font-bold text-left mb-1 md:mb-0"
        for="inline-password"
      >
        Friend's Name<span class="text-red-500">*</span> :
      </label>
      <Field
        name="friendName"
        type="text"
        :rules="schema.friendName"
        placeholder="Jane Smith"
        class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
      />
      <ErrorMessage
        name="friendName"
        class="text-red-500 text-left mt-1"
        as="div"
      />
    </div>
    <div>
      <label
        class="block text-gray-500 font-bold text-left mb-1 md:mb-0"
        for="inline-password"
      >
        Friend's Email<span class="text-red-500">*</span> :
      </label>
      <Field
        name="friendEmail"
        type="email"
        :rules="schema.friendEmail"
        placeholder="jane.smith@example.com"
        class="py-3 bg-transparent border-b border-black w-full focus:outline-none focus:border-brand-green-gray"
      />
      <ErrorMessage
        name="friendEmail"
        class="text-red-500 text-left mt-1"
        as="div"
      />
    </div>
    <action-button text="Submit" type="primary" />
  </Form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { notify } from "@kyvg/vue3-notification";
import axios from "axios";

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

    const isLoading = ref(false);

    const onSubmit = async (values: unknown, actions: any) => {
      isLoading.value = true;

      try {
        await axios.post(
          `${process.env.VUE_APP_SERVER_URL}/friend-email`,
          values
        );
      } catch (error) {
        notify({
          type: "error",
          title: "Error",
          text: "There was an error sending your info.",
        });
      }

      notify({
        type: "success",
        title: "Success",
        text: "Your info has been sent.",
      });

      isLoading.value = false;

      actions.resetForm();
    };

    return { schema, onSubmit };
  },
});
</script>
