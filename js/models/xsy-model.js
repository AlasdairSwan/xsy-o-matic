define([
        'backbone'
    ],
    function( Backbone, $, _ ) {
        'use strict';

        return Backbone.Model.extend({
            defaults: {
                bodyColor: '#73bde7',
                armColor: '#73bde7',
                eyeballColor: '#fff',
                eyeLinerColor: '#000',
                retinaColor: '#000',
                lips: '#73bde7',
                teeth: '#fff',
                tongue: '#f00'
            }
        });
    }
);
