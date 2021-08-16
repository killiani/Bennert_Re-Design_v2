//__colored Logo

let loadColored = false;

window.onload = function () {
    if($("body#top").hasClass("blue_logo") === true){
        loadColored = true;
        //console.log("klasse entdeckt : " + loadColored);

    } else {
        this.loadColored = 2;
        //console.log("keine Klasse : " + loadColored);
        loadColored = false;
    }
}

function logoColorOn(){
    if(loadColored === true){
        $("body#top").addClass("blue_logo");
        //console.log("add");
    }
}

function logoColorOff(){
    if(loadColored === true){
        $("body#top").removeClass("blue_logo");
        //console.log("remove");
    }
}





// ___vue
const desktop = new Vue({
    el: '#menu-button-desktop',
    delimiters: ['${', '}'],
    data: {
        checked: false
    },

    methods: {

        switchButton() {

            let c = this.checked;
            if (c) {
                //console.log('on');
                this.checked = false;
                logoColorOn();
                enableScrolling();
            } else {
                //console.log('off');
                this.checked = true;
                logoColorOff();
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

const mobile = new Vue({
    el: '#menu-button-mobile',
    delimiters: ['${', '}'],
    data: {
        checked: false,
    },

    methods: {
        switchButton() {
            let c = this.checked;

            if (c) {
                //console.log('on');
                this.checked = false;
                enableScrolling();
            } else {
                //console.log('off');
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
    },

    mounted: function () {
        this.$nextTick(function () {

        })
    }

});