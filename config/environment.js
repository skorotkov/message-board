/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'message-board',
    environment,
    rootURL: '/ui',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          scope: 'repo user'
        }
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.torii.providers['github-oauth2'].apiKey = process.env.GITHUB_DEV_CLIENT_ID;
    ENV.torii.providers['github-oauth2'].redirectUri = process.env.GITHUB_DEV_REDIRECT_URI + '/ui/torii/redirect.html';
    ENV.torii.providers['github-oauth2'].tokenExchangeUri = process.env.DEV_TOKEN_EXCHANGE_URL;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
