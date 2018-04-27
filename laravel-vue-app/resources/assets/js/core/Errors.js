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

export default Errors;
