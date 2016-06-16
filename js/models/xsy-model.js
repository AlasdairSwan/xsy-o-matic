define([
        'backbone'
    ],
    function( Backbone, $, _ ) {
        'use strict';

        return Backbone.Model.extend({
            defaults: {
                bodyColor: '#73bde7',
                armColor: '#73bde7'
            }
        });
    }
);
