import { createApp, h } from 'vue';
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import AppLayout from './Layouts/Default.vue';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'My Dashboard';

createInertiaApp({
  id: 'app',
  title: (title) => `${title}`,
  resolve: (name) => {
    const page = resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob("./Pages/**/*.vue")
    );
    page.then((module) => {
      module.default.layout = module.default.layout || AppLayout;
    });
    return page;
  },
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
    app.use(plugin)
    app.mount(el)
  },
});

InertiaProgress.init({
  color: '#ff7d36'
});