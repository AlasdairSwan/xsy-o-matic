require(
    ['js/require-config'],
    function() {
        require(
            ['js/views/xsy-o-matic-view'],
            function(XsyOMaticView) {
                return new XsyOMaticView();
            }
        );
    }
);
