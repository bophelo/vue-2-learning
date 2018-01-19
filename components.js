Vue.component('task', {
    template: '<li><slot></slot></li>'
});//global component

var vm = new Vue({

    el: "#app"

});
