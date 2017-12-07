import React from 'react';

export default ({ config }) => {
  const { mobileDebug } = config;
  const MobileDebugHead = {
    content: [],
  };

  if (mobileDebug.vconsole.enable) {
    MobileDebugHead.content = MobileDebugHead.content.concat([
      <script src={mobileDebug.vconsole.cdn} key={'vc-1'} />,
      <script
        key={'vc-2'}
        dangerouslySetInnerHTML={{
          __html: `
            new VConsole(${JSON.stringify(mobileDebug.vconsole.options)})
          `,
        }}
      />,
    ]);
  }

  if (mobileDebug.eruda.enable) {
    MobileDebugHead.content = MobileDebugHead.content.concat([
      <script src={mobileDebug.eruda.cdn} key={'er-1'} />,
      <script
        key={'er-2'}
        dangerouslySetInnerHTML={{
          __html: `
            eruda.init(${JSON.stringify(mobileDebug.eruda.options)})
          `,
        }}
      />,
    ]);
  }

  return {
    head: MobileDebugHead,
  };
};
