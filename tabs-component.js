Vue.component('tabs', {
    //Ensure for your component, that the template has one master or parent element in this case we have tabs and then tabs-details...two siblings
    //wrap in one div
    template : `
        <div>
            <div class="tabs">
              <ul>
                <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a><!--passing though current tab-->
                </li>

              </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    data() {
        //always be clear about what data your component or instance exposes
        return { tabs : [] };
    },
    created() {
        this.tabs = this.$children;
    },
    methods : {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template : `
        <div v-show="isActive"><slot></slot></div>
    `,
    props : {//immutable
        name: { required : true },
        selected : { default : false }
    },
    data() {
        return {
            isActive : false
        };
    },
    computed : {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g,'-');
        }
    },
    mounted() {
        this.isActive = this.selected;
    }
});

var vm = new Vue({

    el: "#app",

});
