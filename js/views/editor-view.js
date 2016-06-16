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
                    'blur input' : 'updateInput',
                    'change select' : 'updateSelect',
                    'click .js-default' : 'xsyPreset'
                },

                tpl: _.template(pageTpl),

                initialize: function() {
                    this.render();
                },

                render: function() {
                    this.$el.html( this.tpl( this.model.toJSON() ) );
                },

                updateInput: function(event) {
                    var $el = $(event.target),
                        attr = $el.data('attribute'),
                        val = $el.val();

                    this.model.set( attr, val );
                },

                updateSelect: function(event) {
                    var $el = $(event.target),
                        attr = $el.data('attribute'),
                        val = $el.val();

                    this.model.set( attr, val );
                },

                xsyPreset: function(event) {
                    var xsy = $(event.target).data('xsy');
                    event.preventDefault();
                    this.model.preset(xsy);
                }
            });
        }
    );
})();
