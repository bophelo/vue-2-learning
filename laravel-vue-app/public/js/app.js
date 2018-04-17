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
        //if you gave us a field then delete that single field else update errors or reset it entirely
        if (field) {
            delete this.errors[field];
            return;//deletes per field and doesn't just move on
        }
        this.errors = {};

    }
}

class Form {
    //the form class should be responsible for all of its fields
    //expose all functionality of a form e.g resetting, submitting etc
    constructor(data) {
        this.originalData = data; //but in order to access this this.name.data
        //eg {name: 'Andrew'} field becomes equal to name
        for (let field in data) {
            this[field] = data[field];
        }
        //now the form class is responsible for form errors..better coupling...
        this.errors = new Errors();
    }

    data() {
        //data should be name and description needs to be dynamic, cant fectch all the properties, there's errors, originalData
        //clone the object
        let data = Object.assign({}, this);
        //omit
        delete data.originalData;
        delete data.errors;
        //payload
        return data;
    }

    reset() {
        //pointer to the original data, so filter throught it and update the properties on the form
        for (let field in originalData) {
            this[field] = '';
        }
    }

    submit(requestType, url) {
        //perform axios call here
        //changes because of the class, need to record incoming error messages
        //make it dynamic e.g PATCH request
        //when these methods get called the this context get rebouned
            axios[requestType](url, this.data())
                    .then(this.onSuccess.bind(this))
                        .catch(this.onFail.bind(this))
    }

    onSuccess(response) {
        alert(response.data.message);
        //ensure that the errors are empty
        this.errors.clear();
        this.reset();
    }

    onFail(error) {
        this.errors.record(error.response.data);//data associated with the response
    }
}
var vm = new Vue({

    el: "#app",

    data: {
        //skills: []
        //declare your v-models here
        //name: '', form class takes responsibilit for these two fields
        //description: '',
        form: new Form({ //form.errors, since form class is now responsible..not defined on the instance
            //pass through reactive data
            //v-models should now point to form.field
            name: '',
            description: ''
        })
    },

    methods: {
        onSubmit() {
            this.form.submit('post','/projects');
        }

        /*onSuccess(response) {
            alert(response.data.message);
            //very specific not dynamic
            //this.name = '';
            //this.description = '';
            // we 're trying to reset the form
            form.reset();
        }*/
    },

    mounted() {
        //Make an ajax request to the server endpoint :/skills
        //axios.get('/skills').then(reponse => this.skills = reponse.data);
        //Vue resource is an alternative
    }

});
