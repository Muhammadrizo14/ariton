<template>
  <div class="bg-brand-light-grey2">
    <div class="container pt-10 flex items-stretch gap-5">
      <div class="max-w-[948px] w-[85%]">
        <Swiper
            :modules="[SwiperPagination, SwiperNavigation]"
            class="mainSwiper"
            centered-slides
            :pagination="{ clickable: true }"
            :navigation="{ nextEl: '.swiper-button-custom-next', prevEl: '.swiper-button-custom-prev' }"
            space-between="30"
        >
          <SwiperSlide>
            <img src="/img/banner.png" style="margin: auto" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/banner.png" style="margin: auto" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/banner.png" style="margin: auto" alt=""/>
          </SwiperSlide>

          <div class="swiper-button-custom-prev">
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99998 12.28L1.65331 7.93333C1.13998 7.42 1.13998 6.58 1.65331 6.06667L5.99998 1.72"
                    stroke="#1C1C1C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>

          <div class="swiper-button-custom-next">
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.940002 12.28L5.28667 7.93333C5.8 7.42 5.8 6.58 5.28667 6.06667L0.940002 1.72" stroke="#1C1C1C"
                    stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </Swiper>
      </div>
      <div class="basis-3/4">
        <img src="/img/banner2.png" alt="">
      </div>
    </div>
    <div class="flex items-stretch gap-6 container pt-6">
      <nuxt-link to="/">
        <div class="w-[192px] h-[180px] relative bg-brand-white p-2 rounded-xl">
          <p class="text-base font-normal w-4/5">Письменные товары, черчение</p>
          <img class="absolute bottom-0 right-0" src="/img/categories/1.png" alt="category">
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <div class="w-[192px] h-[180px] relative bg-brand-white p-2 rounded-xl">
          <p class="text-base font-normal w-4/5">Папки, системы архивации</p>
          <img class="absolute bottom-0 right-0" src="/img/categories/2.png" alt="category">
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <div class="w-[192px] h-[180px] relative bg-brand-white p-2 rounded-xl">
          <p class="text-base font-normal w-4/5">Офисные принадлежности</p>
          <img class="absolute bottom-0 right-0" src="/img/categories/3.png" alt="category">
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <div class="w-[192px] h-[180px] relative bg-brand-white p-2 rounded-xl">
          <p class="text-base font-normal w-4/5">Бумага для офисной техники</p>
          <img class="absolute bottom-0 right-0" src="/img/categories/4.png" alt="category">
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <div class="w-[192px] h-[180px] relative bg-brand-white p-2 rounded-xl">
          <p class="text-base font-normal w-4/5">Бумажная продукция для офиса</p>
          <img class="absolute bottom-0 right-0" src="/img/categories/5.png" alt="category">
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <div class="w-[192px] h-[180px] relative bg-brand-white p-2 rounded-xl">
          <p class="text-base font-normal w-4/5">Хозтовары, упаковка</p>
          <img class="absolute bottom-0 right-0" src="/img/categories/6.png" alt="category">
        </div>
      </nuxt-link>
    </div>
    <div class="container pt-10">
      <h1 class="pb-2">Новинки</h1>
      <div class="grid grid-cols-4 gap-6">
        <card new fast_view/>
        <card new fast_view/>
        <card new fast_view/>
        <card new fast_view/>
      </div>
    </div>
    <div class="container pt-10">
      <h1 class="pb-2">Хиты продаж</h1>
      <div class="grid grid-cols-4 gap-6">
        <card top/>
        <card top/>
        <card top/>
        <card top/>
      </div>
    </div>
    <div class="container pt-10">
      <h1 class="pb-2">Распродажа</h1>
      <div class="grid grid-cols-4 gap-6">
        <card sale/>
        <card sale/>
        <card sale/>
        <card sale/>
      </div>
    </div>
    <div class="container pt-10 pb-10">
      <h1 class=" pb-5">Бренды</h1>
      <Swiper slides-per-view="6">
        <SwiperSlide>
          <img src="/img/brands/1.png" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/brands/2.png" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/brands/3.png" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/brands/4.png" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/brands/5.png" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/brands/6.png" alt="">
        </SwiperSlide>

      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/swiper-bundle.css';
import {SwiperNavigation, SwiperPagination} from "#imports";
</script>

<style scoped>
.swiper-button-custom-prev,
.swiper-button-custom-next {
  position: absolute;
  top: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  cursor: pointer;
  transform: translateY(-50%);
}


.swiper-button-custom-prev {
  left: 10px;
}

.swiper-button-custom-next {
  right: 10px;
}


.swiper-button-custom-prev svg,
.swiper-button-custom-next svg {
  width: 16px;
  height: 16px;
}

</style>