class CharacterCountExceeded extends Error {
    // parent error
    constructor(post_id, content) {
        super();
        this.name = this.constructor.name; // good practice

        if (this instanceof LongTitleError)
            // checking if title or body
            this.type = 'title';
        else if (this instanceof LongBodyError) this.type = 'body';

        this.message = `The character count of post (id: ${post_id}) ${this.type} is too long. (${content.length} characters)`; // detailed error message
        this.statusCode = 500; // error code for responding to client
    }
}

// extending to child error classes
class LongTitleError extends CharacterCountExceeded {}
class LongBodyError extends CharacterCountExceeded {}

class MailDesignationRequired extends Error {
    constructor(post_id, content) {
        super();
        this.name = 'Field missing';
        this.message = `Mail id was required`; // detailed error message
        this.statusCode = 422; // error code for responding to client
    }
}

class MailError extends Error {
    constructor(error) {
        super();
        this.name = 'Something went wrong';
        this.message = error; // detailed error message
        this.statusCode = 422; // error code for responding to client
    }
}

module.exports = {
    CharacterCountExceeded,
    LongTitleError,
    LongBodyError,
    MailDesignationRequired,
    MailError,
};
