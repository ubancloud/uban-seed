'use strict';
module.exports = appInfo => {
  const config = exports = {};
  config.mongoose = {
    clients: {
      default: {
        singleton: 'model', // models in `app/${singleton}`
        singletonSrc: [ 'core/model' ],
        url: 'mongodb://121.42.8.134/6305a9d0e60f46789fde8976',
        options: {
          user: 'test',
          pass: 'test',
          useUnifiedTopology: true,
        },
        framework: 'core',
      },
    },
  };
  return {
    ...config,
  };
};
