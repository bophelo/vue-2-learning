//can be stored wherever e.g a module
let store = {
    user: {
        name: 'Mpilo'
    }
};

var vm = new Vue({
    el: "#one",
    //eg other for other non related data
    data: {
        //other data...
        foo: 'foo',
        shared: store
    },
});

var vm2 = new Vue({
    el: "#two",
    data: {
        foo: 'bar',
        shared: store
    }
});
