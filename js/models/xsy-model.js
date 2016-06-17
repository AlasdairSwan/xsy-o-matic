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
                ribbonPosition: 'left',
                custom1Img: '',
                custom1X: '',
                custom1Y: '',
                custom1Height: '',
                custom1Width: ''
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
                ribbonPosition: 'right',
                custom1Img: '',
                custom1X: '',
                custom1Y: '',
                custom1Height: '',
                custom1Width: ''
            },

            accessories: {
                flyingV: {
                    custom1Img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Epiphone_flying_v_guitar_svg.svg/800px-Epiphone_flying_v_guitar_svg.svg.png',
                    custom1X: '10',
                    custom1Y: '60',
                    custom1Height: '200px',
                    custom1Width: '300px'
                },
                nicklezack: {
                    custom1Img: 'https://s3.amazonaws.com/uploads.hipchat.com/26537/894226/k3TMn65iKCbqbnR/Screen%20Shot%202016-06-17%20at%202.30.50%20PM.png',
                    custom1X: '165',
                    custom1Y: '100',
                    custom1Height: '100px',
                    custom1Width: '100px'
                }
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
