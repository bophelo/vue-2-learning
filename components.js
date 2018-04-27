Vue.component('task-list', {
    //whenever you have a template in a component it always needs to have a single root element
    //using v-for we have a bunch of siblings
    template: `
        <div><task v-for="task in tasks" :key="task.id"> {{ task.description }}</task>
        </div>
    `,
    data() {
        return {
            tasks : [
                { id: 1, description: 'Go to the store', complete : true},
                { id: 2, description: 'Go the the mall', complete : false},
                { id: 3, description: 'Go to the farm', complete : true},
                { id: 4, description: 'Go to the bank', complete : false}
            ]
        };
    }
});//global component

Vue.component('task', {
    template: '<li><slot></slot></li>'
});//global component

var vm = new Vue({

    el: "#app"

});
