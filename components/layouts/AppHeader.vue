<template>
  <header class="pb-5">
    <div class="py-3 border-y border-solid border-[rgba(229,229,229,1)]">
      <div class=" container flex items-center justify-between ">
        <ul class="flex gap-5 items-center">
          <li>
            <nuxt-link class="text-brand-dark-grey hover:text-brand-black" to="/">О компании</nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-brand-dark-grey hover:text-brand-black" to="/">Доставка и оплата</nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-brand-dark-grey hover:text-brand-black" to="/">Контакты</nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-brand-dark-grey hover:text-brand-black" to="/">Задать вопрос</nuxt-link>
          </li>
        </ul>
        <div class="flex  items-center gap-5">
          <div class="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M9.91667 11.9583H4.08334C2.33334 11.9583 1.16667 11.0833 1.16667 9.04166V4.95832C1.16667 2.91666 2.33334 2.04166 4.08334 2.04166H9.91667C11.6667 2.04166 12.8333 2.91666 12.8333 4.95832V9.04166C12.8333 11.0833 11.6667 11.9583 9.91667 11.9583Z"
                  stroke="#8B8B8B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.91666 5.25L8.09083 6.70833C7.48999 7.18667 6.50416 7.18667 5.90333 6.70833L4.08333 5.25"
                    stroke="#8B8B8B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a href="mailto:your_company@mail.ru" class="text-brand-dark-grey text-base">your_company@mail.ru</a>
          </div>
          <div class="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M4.548 1.62001C4.42719 1.44626 4.26969 1.30117 4.08663 1.19499C3.90357 1.08881 3.69942 1.02413 3.48862 1.00553C3.27781 0.986931 3.0655 1.01486 2.86667 1.08735C2.66785 1.15983 2.48737 1.2751 2.338 1.42501L1.859 1.90501C-0.104997 3.87801 1.564 7.19501 4.184 9.81801L4.181 9.81401C6.801 12.435 10.119 14.106 12.093 12.14L12.578 11.655C12.7268 11.5062 12.8412 11.3266 12.9131 11.1288C12.985 10.931 13.0127 10.7199 12.9942 10.5102C12.9757 10.3006 12.9115 10.0976 12.8061 9.91543C12.7006 9.73329 12.5566 9.57647 12.384 9.45601L11.209 8.63601C10.9067 8.42472 10.5458 8.3135 10.177 8.31798C9.80819 8.32246 9.45008 8.44243 9.153 8.66101L8.307 9.28401C8.2486 9.3279 8.17808 9.35269 8.10506 9.35502C8.03204 9.35735 7.96008 9.33709 7.899 9.29701C7.27275 8.87004 6.68875 8.38417 6.155 7.84601L6.152 7.84401C5.61384 7.31018 5.12827 6.72583 4.702 6.09901C4.66178 6.03803 4.64135 5.96613 4.6435 5.89312C4.64565 5.8201 4.67027 5.74952 4.714 5.69101L5.337 4.84501C5.55559 4.54799 5.67565 4.18995 5.68031 3.82119C5.68497 3.45243 5.57401 3.09147 5.363 2.78901L4.543 1.61301"
                  stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a href="tel:8(800)1234567" class="text-brand-dark-grey text-base">8(800)1234567</a>
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.25 0.875L4.5 4.125L7.75 0.875" stroke="#616161" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="container flex items-center pt-6 gap-5 justify-between">
      <img src="/logo.png" alt="">
      <AppButton blue filled class="px-4 !w-fit">
        <template #icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
        <span class="text-brand-white">Каталог</span>
      </AppButton>
      <div class="relative w-full">
        <input class="pl-4 pr-5 py-3 rounded-xl w-full bg-brand-light-grey2 border border-solid border-brand-light-grey" type="text" placeholder="Поиск по названию, коду, артикулу товара">
        <svg class="absolute right-3 top-1/2  transform translate-x-[-50%] translate-y-[-50%] " width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.5 16.5L15 15" stroke="#8B8B8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="flex items-center">
        <AppButton grey class="!px-4 !w-fit !rounded-e-none">
          <template #icon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.72 11.28 8.72 9.51001C8.72 7.70001 10.18 6.23001 12 6.23001C13.81 6.23001 15.28 7.70001 15.28 9.51001C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.74 19.38C16.96 21.01 14.6 22 12 22C9.40001 22 7.04001 21.01 5.26001 19.38C5.36001 18.44 5.96001 17.52 7.03001 16.8C9.77001 14.98 14.25 14.98 16.97 16.8C18.04 17.52 18.64 18.44 18.74 19.38Z" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </AppButton>
        <AppButton grey class="!px-4 !w-fit !rounded-s-none">
          <template #icon>
            <svg width="24" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.69001C1 3.60001 3.49 1.10001 6.56 1.10001C8.38 1.10001 9.99 1.98001 11 3.34001C12.01 1.98001 13.63 1.10001 15.44 1.10001C18.51 1.10001 21 3.60001 21 6.69001C21 13.69 14.52 17.82 11.62 18.81Z" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </AppButton>
      </div>
      <AppButton grey class="px-4 !w-fit">
        <template #icon>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.64472 2L6.02472 5.63" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.0247 2L19.6447 5.63" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.83472 7.85001C2.83472 6.00001 3.82472 5.85001 5.05472 5.85001H20.6147C21.8447 5.85001 22.8347 6.00001 22.8347 7.85001C22.8347 10 21.8447 9.85001 20.6147 9.85001H5.05472C3.82472 9.85001 2.83472 10 2.83472 7.85001Z" stroke="#1C1C1C"/>
            <path d="M10.5947 14V17.55" stroke="#1C1C1C" stroke-linecap="round"/>
            <path d="M15.1947 14V17.55" stroke="#1C1C1C" stroke-linecap="round"/>
            <path d="M4.33472 10L5.74472 18.64C6.06472 20.58 6.83472 22 9.69472 22H15.7247C18.8347 22 19.2947 20.64 19.6547 18.76L21.3347 10" stroke="#1C1C1C" stroke-linecap="round"/>
          </svg>

        </template>
        <span class="text-brand-black">Корзина</span>
      </AppButton>
    </div>
    <div class="flex items-center gap-2 pt-6 container">
      <AppButton outlined class="py-px px-3 !w-fit">
        <template #icon>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#007DEE"/>
            <path d="M8.58549 9.15199H4.83194V8.22159H8.57129C8.89326 8.22159 9.15959 8.16832 9.37029 8.06179C9.581 7.95289 9.73725 7.80374 9.83904 7.61435C9.94084 7.42259 9.99174 7.20241 9.99174 6.95384C9.99174 6.70762 9.94084 6.48745 9.83904 6.29332C9.73725 6.0992 9.58218 5.9465 9.37385 5.83523C9.16551 5.72159 8.90273 5.66477 8.58549 5.66477H7.0372V12H5.94345V4.72727H8.58549C9.1371 4.72727 9.59757 4.8267 9.96689 5.02557C10.3386 5.22443 10.6167 5.49195 10.8014 5.82812C10.9884 6.1643 11.0819 6.53835 11.0819 6.95028C11.0819 7.36695 10.9872 7.74219 10.7979 8.07599C10.6108 8.40743 10.3315 8.67022 9.95978 8.86435C9.59047 9.05611 9.13237 9.15199 8.58549 9.15199ZM8.63876 9.76278V10.6967H4.83194V9.76278H8.63876Z" fill="white"/>
          </svg>
        </template>
        <span class="text-brand-black">Акции</span>
      </AppButton>
      <AppButton outlined class="py-px px-3 !w-fit">
        <template #icon>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_24)">
              <path d="M2.133 4C3.312 4 4.267 3.105 4.267 2C4.267 0.895 3.312 0 2.133 0C0.955 0 0 0.895 0 2C0 3.105 0.955 4 2.133 4ZM14.396 3.996C15.279 3.996 15.996 3.325 15.996 2.496C15.996 1.668 15.28 0.996 14.396 0.996C13.512 0.996 12.796 1.668 12.796 2.496C12.796 3.325 13.512 3.996 14.396 3.996ZM2.662 14.997C3.546 14.997 4.262 14.325 4.262 13.497C4.262 12.668 3.546 11.997 2.662 11.997C1.779 11.997 1.062 12.668 1.062 13.497C1.062 14.325 1.779 14.997 2.662 14.997Z" fill="#007DEE"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53302 0L11.733 5L16 8L11.733 11L8.53302 16L5.33302 11L1.06702 8L5.33302 5L8.53302 0Z" fill="#007DEE"/>
            </g>
            <defs>
              <clipPath id="clip0_4_24">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </template>
        <span class="text-brand-black">Новинки</span>
      </AppButton>
      <AppButton outlined class="py-px px-3 !w-fit">
        <template #icon>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.023 1.81699C6.06329 1.59863 6.17511 1.39989 6.34083 1.25211C6.50655 1.10432 6.71674 1.0159 6.93827 1.00077C7.1598 0.98564 7.38006 1.04467 7.56433 1.16856C7.7486 1.29244 7.8864 1.47413 7.956 1.68498L10 7.99899L13.873 4.48898C14.0319 4.34092 14.2348 4.24869 14.4508 4.22626C14.6668 4.20382 14.8843 4.25241 15.0703 4.36466C15.2562 4.47691 15.4005 4.6467 15.4813 4.84832C15.5621 5.04993 15.575 5.27239 15.518 5.48199L14.275 10.12C14.108 10.765 13.893 11.675 13.917 11.968C13.95 12.669 14.375 13.038 14.528 13.15C14.7117 13.2652 14.8531 13.437 14.9308 13.6395C15.0084 13.842 15.0182 14.0643 14.9587 14.2729C14.8991 14.4814 14.7734 14.665 14.6005 14.7959C14.4276 14.9269 14.2169 14.9981 14 14.999H4.26L4 15.001V14.999H2.012C1.79793 14.9985 1.58964 14.9295 1.4177 14.802C1.24576 14.6744 1.11924 14.4951 1.0567 14.2904C0.994163 14.0857 0.998906 13.8663 1.07023 13.6645C1.14156 13.4626 1.27571 13.289 1.453 13.169C1.573 13.076 1.989 12.664 1.449 11.717L0.134002 9.43598C0.0239544 9.24535 -0.0201172 9.02372 0.00862212 8.80548C0.0373614 8.58725 0.137306 8.38459 0.292956 8.22894C0.448606 8.07329 0.651264 7.97334 0.869502 7.9446C1.08774 7.91587 1.30936 7.95994 1.5 8.06998L4.461 9.65698L6.023 1.81699ZM3.827 4.70498C3.75831 4.44879 3.59066 4.23037 3.36093 4.09778C3.13119 3.96519 2.8582 3.92929 2.602 3.99798C2.3458 4.06668 2.12738 4.23433 1.9948 4.46406C1.86221 4.69379 1.82631 4.96679 1.895 5.22299L2.173 6.25899C2.24728 6.50872 2.41608 6.7196 2.64349 6.84675C2.8709 6.9739 3.13896 7.00727 3.3906 6.93976C3.64225 6.87226 3.85761 6.70921 3.99085 6.48531C4.12409 6.26142 4.16469 5.99436 4.104 5.74099L3.827 4.70498ZM12.243 3.07598C12.2996 2.82417 12.2566 2.56024 12.1231 2.33937C11.9896 2.11851 11.7758 1.95782 11.5266 1.89092C11.2773 1.82402 11.0118 1.85608 10.7856 1.9804C10.5595 2.10473 10.3901 2.31168 10.313 2.55799L10.263 2.73899C10.1958 2.99472 10.2327 3.26665 10.3655 3.49528C10.4983 3.72391 10.7163 3.89064 10.9717 3.95899C11.2271 4.02734 11.4992 3.99175 11.7285 3.86001C11.9577 3.72826 12.1255 3.51109 12.195 3.25599L12.243 3.07598Z" fill="#007DEE"/>
          </svg>

        </template>
        <span class="text-brand-black">Хиты продаж</span>
      </AppButton>
      <AppButton outlined class="py-px px-3 !w-fit">
        <template #icon>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.857 9.429C4.19807 9.429 4.52517 9.56449 4.76634 9.80566C5.00751 10.0468 5.143 10.3739 5.143 10.715C5.143 11.0561 5.00751 11.3832 4.76634 11.6243C4.52517 11.8655 4.19807 12.001 3.857 12.001C3.51593 12.001 3.18883 11.8655 2.94766 11.6243C2.70649 11.3832 2.571 11.0561 2.571 10.715C2.571 10.3739 2.70649 10.0468 2.94766 9.80566C3.18883 9.56449 3.51593 9.429 3.857 9.429ZM9 9.429C9.17183 9.42427 9.34287 9.45405 9.503 9.51656C9.66313 9.57907 9.8091 9.67304 9.93229 9.79293C10.0555 9.91283 10.1534 10.0562 10.2202 10.2146C10.287 10.373 10.3214 10.5431 10.3214 10.715C10.3213 10.8869 10.2868 11.0571 10.2198 11.2154C10.1529 11.3737 10.0548 11.517 9.93157 11.6368C9.80829 11.7566 9.66224 11.8505 9.50207 11.9128C9.34189 11.9752 9.17083 12.0049 8.999 12C8.66427 11.9905 8.34644 11.8509 8.11308 11.6107C7.87971 11.3706 7.74922 11.0489 7.74935 10.714C7.74948 10.3792 7.88022 10.0576 8.11377 9.81758C8.34733 9.57761 8.66527 9.43821 9 9.429ZM2.143 0C3.089 0 3.857 1.054 3.857 2H10.702C11.648 2 12 2.381 12 3.328V4.57C12 5.517 11.141 6.034 10.286 6.285L3.857 8C3.025 8.155 2.72 7.72 2.571 6.813L1.714 2H1C0.527 2 0 1.473 0 1C0 0.527 0.527 0 1 0H2.143Z" fill="#007DEE"/>
          </svg>

        </template>
        <span class="text-brand-black">Спецпредложения</span>
      </AppButton>
    </div>
  </header>
</template>

<script setup>
import AppButton from "~/components/layouts/AppButton.vue";
</script>

<style lang="scss" scoped>

</style>