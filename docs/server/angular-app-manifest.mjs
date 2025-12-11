
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 862, hash: '37bac5f5921bdc1acba8bc550a05529c752b7e5d63aa1753a679e1ffd0583fc9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'bf582c84cf5bf0a0ca65351a3948ccabd42568760598a8846bd553c3c72f61d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15116, hash: '52dc61cb1c8fb6b518a032adadfc742fdae65d592dee0adefaa03566f5408755', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4VJCOZCD.css': {size: 824, hash: 'g3PpPAqstqM', text: () => import('./assets-chunks/styles-4VJCOZCD_css.mjs').then(m => m.default)}
  },
};
