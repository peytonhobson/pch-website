<template>
  <div
    class="rounded-2xl bg-gray-300 h-144 grid grid-cols-1 grid-rows-6 shadow-2xl"
  >
    <section :class="headerClass">
      <div class="self-center">
        {{ header }}
      </div>
    </section>
  </div>
</template>
