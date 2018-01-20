Vue.component('coupon', {
    template : `
        <input placeholder="Enter your coupon code" @blur="onCouponApplied">
    `,
    methods : {
        onCouponApplied() {
            this.$emit('applied');// can also pass in any data associated with it
        }
    }
});

var vm = new Vue({

    el: "#app",
    data : {
        couponApplied : false
    },
    methods : {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});
