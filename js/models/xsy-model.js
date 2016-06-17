define([
        'backbone'
    ],
    function( Backbone, $, _ ) {
        'use strict';

        return Backbone.Model.extend({
            happy: {
                background: '#fff',
                bodyColor: '#009de6',
                armColor: '#009de6',
                armPosition: 'up',
                eyeball: '#f8fafb',
                eyeLiner: '#3587be',
                iris: '#102a3a',
                lips: '#2f83ba',
                mouth: 'happy',
                teeth: '#e8e8e9',
                tongue: '#c0225f',
                hatTop: '#54575b',
                hatBase: '#888b8e',
                hatRibbon: '#be2863',
                ribbon: 'show',
                ribbonBkg: '#fff',
                ribbonLetter: '#d5216a',
                ribbonFringe: '#d5216a',
                ribbonTail: '#701E3F',
                ribbonPosition: 'left'
            },

            sad: {
                background: '#fff',
                bodyColor: '#d5216a',
                armColor: '#d5216a',
                armPosition: 'down',
                eyeball: '#f8fafb',
                eyeLiner: '#701E3F',
                iris: '#102a3a',
                lips: '#701E3F',
                mouth: 'sad',
                teeth: '#e8e8e9',
                tongue: '#c0225f',
                hatTop: '#54575b',
                hatBase: '#888b8e',
                hatRibbon: '#009de6',
                ribbon: 'show',
                ribbonBkg: '#fff',
                ribbonLetter: '#009de6',
                ribbonFringe: '#009de6',
                ribbonTail: '#3587be',
                ribbonPosition: 'right'
            },

            defaults: function() {
                return this.happy;
            },

            preset: function(preset) {
                this.set(this[preset]);
                this.trigger('preset');
            }
        });
    }
);
