exports.mobileDebug = {
  vconsole: {
    // 默认开启 vconsole
    enable: true,
    cdn:
      '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js',
    options: {
      // Listed built-in plugins will be inited and loaded into vConsole.
      defaultPlugins: [ 'system', 'network', 'element', 'storage' ],
      // Overflow logs will be removed from log tabs.
      maxLogNumber: 1000,
    },
  },

  eruda: {
    enable: false,
    cdn: '//cdn.jsdelivr.net/npm/eruda',
    options: {
      // Container element. If not set, it will append an element directly under html root element.
      container: null,
      // Choose which default tools you want, by default all will be added.
      tool: [
        'console',
        'elements',
        'network',
        'resources',
        'sources',
        'info',
        'snippets',
        'features',
      ],
    },
  },
};
