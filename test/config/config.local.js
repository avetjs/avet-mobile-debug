const { join } = require('path');

exports.avet = {
  dir: join(process.cwd(), 'test'),
};

exports.build = {
  webpackDevMiddleware: {
    noInfo: true,
    quiet: true,
  },
};

exports.mobileDebug = {
  vconsole: {
    enable: true,
  },
  eruda: {
    enable: true,
  },
};
