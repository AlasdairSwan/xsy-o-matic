(function() {
    'use strict';

    define([
            'backbone',
            'jquery',
            'js/models/xsy-model',
            'js/views/display-view',
            'js/views/editor-view',
            'text!templates/xsy-o-matic-view.underscore'
        ],
        function( Backbone, $, XsyModel, DisplayView, EditorView, pageTpl ) {
            return Backbone.View.extend({
                el: '.xsy-o-matic',

                events: {
                    'click .js-default' : 'xsyPreset'
                },

                tpl: _.template(pageTpl),

                initialize: function() {
                    this.model = new XsyModel();
                    this.render();
                },

                render: function() {
                    this.$el.html( this.tpl() );
                    this.postRender();
                },

                postRender: function() {
                    this.displayView = new DisplayView({
                        model: this.model
                    });

                    this.editView = new EditorView({
                        model: this.model
                    });
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
