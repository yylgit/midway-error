export default (appInfo: any) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1564482756908_3949';

  // add your config here
  config.middleware = [
  ];

  return config;
};
