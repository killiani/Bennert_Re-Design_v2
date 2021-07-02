const bio = new Vue({
    el: '#menu-button',
    delimiters: ['${', '}'],
    data: {
        checked: false,
    },

    methods: {
        switchButton() {
            let c = this.checked;

            if (c) {
                console.log('on');
                this.checked = false;
                enableScrolling();
            } else {
                console.log('off');
                this.checked = true;
                totop();
                stopScrolling();
            }

            function totop(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }

            function stopScrolling(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

                    window.onscroll = function() {
                        window.scrollTo(scrollLeft, scrollTop);
                    };

            }
            function enableScrolling(){
                window.onscroll = function() {};
            }
        },
    }
});