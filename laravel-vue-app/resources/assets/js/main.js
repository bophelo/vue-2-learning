import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';

//make them global through the window object
window.axios = axios;
window.Form = Form;//can then just say new Form, no need to import it
import Example from './components/Example';

var vm = new Vue({

    el: "#app",

    components: {
        Example //in our view we can now do <example></example>
    },

    data: {
        //skills: []
        //declare your v-models here
        //name: '', form class takes responsibility for these two fields
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
            //respond after updating the form, flash message etc...promises
            this.form.post('/projects')
                //.then(data => console.log(data))
                //.catch(error => console.log(error));//keeps throwing error...wtf?
                .then(data => alert(data.JSON))
                //.catch(error => alert(error))
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
