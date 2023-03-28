'use strict';
module.exports = appInfo => {
  const config = exports = {};
  config.mongoose = {
    clients: {
      default: {
        singleton: 'model', // models in `app/${singleton}`
        singletonSrc: [ 'core/model' ],
        url: 'mongodb://121.42.8.134/63370763b07ceb6fd918bd94',
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
