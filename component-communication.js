window.Event = new Vue();
Vue.component('coupon', {
    template : `
        <input placeholder="Enter your coupon code" @blur="onCouponApplied">
    `,
    methods : {
        onCouponApplied() {
            Event.$emit('applied');// can also pass in any data associated with it
        }
    }
});

var vm = new Vue({

    el: "#app",
    data : {
        couponApplied : false
    },
    created() {
        Event.$on('applied', () => alert('Applying'));//any component can both fire and listen for other events
    },
    methods : {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});
