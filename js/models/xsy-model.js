define([
        'backbone'
    ],
    function( Backbone, $, _ ) {
        'use strict';

        return Backbone.Model.extend({
            defaults: {
                background: '#fff',
                bodyColor: '#009de6',
                armColor: '#009de6',
                armPosition: 'up',
                eyeballColor: '#f8fafb',
                eyeLinerColor: '#3587be',
                retinaColor: '#102a3a',
                lips: '#2f83ba',
                teeth: '#e8e8e9',
                tongue: '#c0225f',
                hatTop: '#54575b',
                hatBase: '#888b8e',
                hatRibbon: '#be2863'
            }
        });
    }
);
