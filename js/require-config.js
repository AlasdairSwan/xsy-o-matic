(function() {
    'use strict';

    require.config({
        /**
         * Set paths for modules. If relative paths, set relative to baseUrl above.
         * If a special value of "empty:" is used for the path value, then that
         * acts like mapping the path to an empty file. It allows the optimizer to
         * resolve the dependency to path, but then does not include it in the output.
         * Useful to map module names that are to resources on a CDN or other
         * http: URL when running in the browser and during an optimization that
         * file should be skipped because it has no dependencies.
         */
        paths: {
            backbone: 'node_modules/backbone/backbone-min',
            jquery: 'node_modules/jquery/dist/jquery.min',
            text: 'node_modules/requirejs-text/text',
            underscore: 'node_modules/underscore/underscore-min'
        },

        waitseconds: 120,

        /**
         * If shim config is used in the app during runtime, duplicate the config
         * here. Necessary if shim config is used, so that the shim's dependencies
         * are included in the build. Using "mainConfigFile" is a better way to
         * pass this information though, so that it is only listed in one place.
         * However, if mainConfigFile is not an option, the shim config can be
         * inlined in the build config.
         */
        shim: {
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            underscore: {
                exports: '_'
            }
        }
    });
})();
