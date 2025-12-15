
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
    'index.csr.html': {size: 851, hash: '0845d2562e1eeb9c5b902de1404d3afdce1210e006e88d17e0db77c53c411224', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '0d00d8cb3735b5c493c2973d7cef29a77467bdd72b7c5eb2ab62063075ff8dd0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34273, hash: '6d15cd487000a2732c736136fdc6985319de0587f6748dcdd77f34eb2874e57d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4VJCOZCD.css': {size: 824, hash: 'g3PpPAqstqM', text: () => import('./assets-chunks/styles-4VJCOZCD_css.mjs').then(m => m.default)}
  },
};
