const authors = require('../../../../../data/authors.json');

class AuthorQuery {
    constructor() {
        this.authors = authors;
    }

    list(begin = 0, end) {
        const listAuthors = [];
        if (begin !== 0) {
            for (let i = begin - 1; i < end; i += 1) {
                if (this.authors[i] !== undefined) {
                    listAuthors.push(this.authors[i]);
                }
            }
        } else {
            for (let i = 0; i < end; i += 1) {
                if (this.authors[i] !== undefined) {
                    listAuthors.push(this.authors[i]);
                }
            }
        }
        return listAuthors;
    }

    search(id) {
        const author = this.authors.filter(data => data.id === id);
        if (author.length !== 0) {
            return author[0];
        }
        return new Error('Author not found');
    }
}

module.exports = new AuthorQuery();
