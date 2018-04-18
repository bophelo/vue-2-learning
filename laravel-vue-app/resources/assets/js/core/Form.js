import Errors from './Errors';

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
        //let data = Object.assign({}, this);
        //omit
        //delete data.originalData;
        //delete data.errors;
        let data = {};
        for (let property in this.originalData) {
            //filtering through name and description
            //for each one data.name = this.name;
            data[property] = this[property];
        }
        //payload
        return data;
    }

    reset() {
        //pointer to the original data, so filter throught it and update the properties on the form
        for (let field in originalData) {
            this[field] = '';
        }
        //ensure that the errors are empty
        this.errors.clear();
    }

    post(url) {
        return this.submit('post', url);
    }

    put(url) {
        return this.submit('put', url);
    }

    patch(url) {
        return this.submit('patch', url);
    }

    delete(url) {
        return this.submit('delete', url);
    }

    submit(requestType, url) {
        //perform axios call here
        //changes because of the class, need to record incoming error messages
        //make it dynamic e.g PATCH request
        //when these methods get called the this context get rebouned
        //return our own promise
        //resolve a-okay, fail reject
        //axios call returns a promise, but in order to do it in our view instance we need to wrap it in another one
        return new Promise((resolve, reject) => { //form.submit('post','some-endpoint')
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);//*fix this
                    reject(error.response.data);
                });
        });
    }

    onSuccess(data) {
        alert(data.message);
        this.reset();
    }

    onFail(errors) {
        this.errors.record(errors);//data associated with the response
    }
}

export default Form;
