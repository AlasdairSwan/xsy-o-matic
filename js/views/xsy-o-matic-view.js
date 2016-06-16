(function() {
    'use strict';

    define([
            'backbone',
            'jquery'
        ],
        function( Backbone, $ ) {
            return Backbone.View.extend({
                el: '.xsy-o-matic',

                //tpl: _.template(pageTpl),

                initialize: function() {
                    this.render();
                },

                render: function() {
                    this.$el.html('Backbone loading');
                }
            });
        }
    );
})();
