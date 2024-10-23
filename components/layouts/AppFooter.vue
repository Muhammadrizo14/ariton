<template>
  <div class="py-4">
    <div class="container flex items-stretch justify-between">
      <div class="flex items-center gap-3">
        <img src="/logo.png" alt="logo">
        <AppButton outlined class="w-fit py-1 px-3">Я - партнер</AppButton>
      </div>
      <div>
        <h3 class="font-medium text-base pb-2">Каталог</h3>
        <ul class="flex flex-col gap-2">
          <li><nuxt-link class="text-sm text-brand-dark-grey">Каталог товаров</nuxt-link></li>
          <li><nuxt-link class="text-sm text-brand-dark-grey">Акции</nuxt-link></li>
          <li><nuxt-link class="text-sm text-brand-dark-grey">Новинки</nuxt-link></li>
          <li><nuxt-link class="text-sm text-brand-dark-grey">Хиты продаж</nuxt-link></li>
          <li><nuxt-link class="text-sm text-brand-dark-grey">Спецпредложение</nuxt-link></li>
        </ul>
      </div>
      <div>
        <h3 class="font-medium text-base pb-2">Покупателю</h3>
        <ul class="flex flex-col gap-2">
          <li><nuxt-link class="text-sm text-brand-dark-grey">Как сделать заказ</nuxt-link></li>
          <li><nuxt-link class="text-sm text-brand-dark-grey">Доставка и оплата</nuxt-link></li>
        </ul>
      </div>
      <div>
        <h3 class="font-medium text-base pb-2">Компания</h3>
        <ul class="flex flex-col gap-2">
          <li><nuxt-link class="text-sm text-brand-dark-grey">О нас</nuxt-link></li>
          <li><nuxt-link class="text-sm text-brand-dark-grey">Контакты</nuxt-link></li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <a href="tel:8(863)4385040" class="font-medium">8(863)4385040</a>
        <AppButton outlined class="w-fit">
          <span class="font-medium">Задать вопрос</span>
        </AppButton>
      </div>
    </div>
    <div class="h-px w-full bg-brand-light-grey mt-5 mb-5"></div>
    <div class="flex container gap-20">
      <p class="text-brand-grey">© 9∙18, 2008–2024</p>
      <div class="flex gap-10">
        <nuxt-link class="text-brand-grey text-sm">Политика защиты персональных данных</nuxt-link>
        <nuxt-link class="text-brand-grey text-sm">Согласие на обработку персональных данных</nuxt-link >
      </div>
    </div>
  </div>
</template>

<script setup>

import AppButton from "~/components/layouts/AppButton.vue";
</script>

<style lang="scss" scoped>

</style>