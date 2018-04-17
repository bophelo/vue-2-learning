var vm = new Vue({

    el: "#app",

    data: {
        skills: []
    },

    mounted() {
        //Make an ajax request to the server endpoint :/skills
        axios.get('/skills').then(reponse => this.skills = reponse.data);
        //Vue resource is an alternative
    }

});
