(function() {
    'use strict';

    define([
            'backbone',
            'jquery',
            'text!templates/xsy-editor.underscore'
        ],
        function( Backbone, $, pageTpl ) {
            return Backbone.View.extend({
                el: '.xsy-editor',

                events: {
                    'blur input' : 'updateXsy'
                },

                tpl: _.template(pageTpl),

                initialize: function() {
                    this.render();
                },

                render: function() {
                    this.$el.html( this.tpl( this.model.toJSON() ) );
                },

                updateXsy: function(event) {
                    var $el = $(event.target),
                        attr = $el.data('attribute'),
                        val = $el.val();

                    this.model.set( attr, val );
                }
            });
        }
    );
})();
