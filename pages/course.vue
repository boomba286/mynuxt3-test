<template>
  <div>
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">{{ title }}</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <div
          class="space-y-1 mb-4 flex flex-col"
          v-for="chapter in chapters"
          :key="chapter.slug"
        >
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
            v-for="(lesson, idx) in chapter.lessons"
            :key="lesson.slug"
            :to="lesson.path"
            :class="{
              'text-blue-500' : lesson.path === $route.fullPath,
              'text-gray-600' : lesson.path !== $route.fullPath,
            }"
          >
            <span class="text-gray-500">{{ idx + 1 }}</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div
        class="prose p-12 bg-red-100 rounded-md w-[65ch]"
      >
        <!-- 동일한 이름을 가진 디렉터리 내부을 파일을 렌더링해준다. -->
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <p>
              Oh no, something breke!
              <code>{{ error }}</code>
              <button
              class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded"
              @click="resetError(error)"
            >
              Reset
            </button>
            </p>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { chapters, title } = useCourse();

const resetError = async (error: any) => {
  throw createError({
    fatal: true,
    message: 'Fatal error',
  })
  await navigateTo(
    '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
  );
};
</script>

<!-- <style scoped>
# 액티브된 링크 색깔 칠하기
.router-link-active {
  @apply text-blue-500;
}
</style> -->