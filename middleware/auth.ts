// 파일 이름에 .global을 붙이면 모든 페이지에 적용한다.
defineNuxtRouteMiddleware((to, from) => {
  if (to.params.chapterSlug === '1-chapter-1') {
    return;
  }
  return navigateTo('/login')
}) 