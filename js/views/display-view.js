(function() {
    'use strict';

    define([
            'backbone',
            'jquery',
            'text!templates/xsy-display.underscore'
        ],
        function( Backbone, $, pageTpl ) {
            return Backbone.View.extend({
                el: '.xsy',

                tpl: _.template(pageTpl),

                initialize: function() {
                    this.model.on('change', this.render, this);
                    this.render();
                },

                render: function() {
                    this.$el.html( this.tpl( this.model.toJSON() ) );
                }
            });
        }
    );
})();
