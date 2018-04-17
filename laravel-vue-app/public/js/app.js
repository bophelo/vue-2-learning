class Errors {
    constructor() {
        this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    get(field) {
        if(this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors) {
        //updates errors object (object within another object?)
        this.errors = errors.errors;
    }

    clear(field) {
        delete this.errors[field];
    }
}
var vm = new Vue({

    el: "#app",

    data: {
        //skills: []
        //declare your v-models here
        name: '',
        description: '',
        errors: new Errors()
    },

    methods: {
        onSubmit() {
            //changes because of the class, need to record incoming error messages
            axios.post('/projects', this.$data)
                    .then(this.onSuccess)
                        .catch(error => this.errors.record(error.response.data));//data associated with the response
        },

        onSuccess(response) {
            alert(response.data.message);
            //very specific not dynamic
            this.name = '';
            this.description = '';
            // we 're trying to reset the form
        }
    },

    mounted() {
        //Make an ajax request to the server endpoint :/skills
        //axios.get('/skills').then(reponse => this.skills = reponse.data);
        //Vue resource is an alternative
    }

});
