$(document).foundation()
// スワイパー
// const swiper = new Swiper(".swiper", {});

const swiper = new Swiper(".swiper", {
    loop: true, // 繝ｫ繝ｼ繝�
    speed: 1500, // 蟆代＠繧�▲縺上ｊ(繝�ヵ繧ｩ繝ｫ繝医�300)
    slidesPerView: 1.5, // 荳蠎ｦ縺ｫ陦ｨ遉ｺ縺吶ｋ譫壽焚
    spaceBetween: 30, // 繧ｹ繝ｩ繧､繝蛾俣縺ｮ霍晞屬
    centeredSlides: true, // 繧｢繧ｯ繝�ぅ繝悶↑繧ｹ繝ｩ繧､繝峨ｒ荳ｭ螟ｮ縺ｫ縺吶ｋ
    autoplay: {
      delay: 1000, // 1遘貞ｾ後↓谺｡縺ｮ繧ｹ繝ｩ繧､繝�
      disableOnInteraction: false, // 遏｢蜊ｰ繧偵け繝ｪ繝�け縺励※繧り�蜍募�逕溘ｒ豁｢繧√↑縺�
    },
    // 繝壹�繧ｸ繝阪�繧ｷ繝ｧ繝ｳ
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 蜑榊ｾ後�遏｢蜊ｰ
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�縺ｮ髱櫁｡ｨ遉ｺ
    scrollbar: {
      hide: true, // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�繧帝國縺�
    },
    // 繝ｬ繧ｹ繝昴Φ繧ｷ繝冶ｨｭ螳�
    breakpoints: {
      // 768px譛ｪ貅�医せ繝槭�陦ｨ遉ｺ��
      0: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      // 768px莉･荳奇ｼ医ち繝悶Ξ繝�ヨ陦ｨ遉ｺ��
      768: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      // 1024px莉･荳奇ｼ医ヱ繧ｽ繧ｳ繝ｳ陦ｨ遉ｺ��
      1024: {
        slidesPerView: 4, // 3繧ｫ繝ｩ繝�
        centeredSlides: false,
      },
    },
  });