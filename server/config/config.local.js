'use strict';
module.exports = appInfo => {
  const config = exports = {};
  config.mongoose = {
    clients: {
      default: {
        singleton: 'model', // models in `app/${singleton}`
        url: 'mongodb://121.42.8.134/develop-18857926522-yby',
        options: {
          user: 'uban',
          pass: 'Uban@2023',
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
