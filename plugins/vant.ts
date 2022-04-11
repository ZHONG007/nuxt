// import * as ElementPlus from 'element-plus/lib';
// import 'element-plus/dist/index.css';

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(ElementPlus, {
//     size: 'small',
//   });
// });
import { defineNuxtPlugin } from '#app';
import vant from 'vant';
import 'vant/lib/index.css';

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(vant)
})
