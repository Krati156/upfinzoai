
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
    'index.csr.html': {size: 851, hash: '5c4ad291bb220626a761a157e05bd8610c34fd9bf2d8b4b899af03863ef0b9bb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '0fcdcb6767879538adfd07bdf08b49e5b9dba4b0e5e0cb222db0ab751c1ad720', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34273, hash: 'c3faf798fe7d6979fd6fc2893b00ec5ecfc5b5cccc9a26ea9d36e383d8c982c5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4VJCOZCD.css': {size: 824, hash: 'g3PpPAqstqM', text: () => import('./assets-chunks/styles-4VJCOZCD_css.mjs').then(m => m.default)}
  },
};
