# avet-mobile-debug

Provide easy way to debug page in mobile.

## Install

```bash
$ npm install avet-mobile-debug --save
```

## Usage

```javascript
// {app_root}/config/plugin.local.js
exports.mobileDebug = {
  enable: true,
  package: "avet-mobile-debug"
};
```

## Configuration

```javascript
// {app_root}/config/config.local.js
// above is default config
exports.mobileDebug = {
  // https://github.com/Tencent/vConsole
  vconsole: {
    // default enable vconsole
    enable: true
  },

  // https://github.com/liriliri/eruda
  eruda: {
    // default disable eruda
    enable: false
  }
};
```

All Configuration you can look at `config/config.default.js`.
