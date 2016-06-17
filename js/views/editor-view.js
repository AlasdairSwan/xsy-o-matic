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
                    'blur input' : 'updateXsy',
                    'change select' : 'updateXsy',
                    'change .js-inventory' : 'selectInventoryItem'
                },

                tpl: _.template(pageTpl),

                initialize: function() {
                    this.model.on('preset', this.render, this);
                    this.render();
                },

                render: function() {
                    this.$el.html( this.tpl( this.model.toJSON() ) );
                },

                selectInventoryItem: function(event) {
                    var $el = $(event.target),
                        val = $el.val();

                    this.model.set(this.model.accessories[val]);
                    $('#xsy-custom-img').val(this.model.get('custom1Img'));
                    $('#xsy-custom-x').val(this.model.get('custom1X'));
                    $('#xsy-custom-y').val(this.model.get('custom1Y'));
                    $('#xsy-custom-height').val(this.model.get('custom1Height'));
                    $('#xsy-custom-width').val(this.model.get('custom1Width'));
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
