Vue.component('coupon', {
    props: ['value'],
    template: `
        <input type="text" :value="value" @input="updateCode($event.target.value)" ref="input">
    `,
    data() {
        return {
            invalids: ['All-Free','50-50']
        }
    },
    methods: {
        updateCode(code) {
            if (this.invalids.includes(code)) {
                alert('This coupon is no longer valid');
                //clear out input after entering
                this.$refs.input.value = code = '';
            }
            this.$emit('input', code);
        }
    }
});

var vm = new Vue({
    el: "#app",
    data: {
        coupon: 'Freebie'
    }
});
