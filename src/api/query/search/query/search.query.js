const authors = require('../../../../../data/authors.json');
const heroes = require('../../../../../data/heroes.json');
const evils = require('../../../../../data/evils.json');

class SearchQuery {
    constructor() {
        this.authors = authors;
        this.heroes = heroes;
        this.evils = evils;
    }

    find(text) {
        const listSearch = this.authors.filter((data) => {
            if (data.name.search(new RegExp(text, 'i')) >= 0) {
                return data;
            }
            return null;
        });
        const hero = this.heroes.filter((data) => {
            if (data.name.search(new RegExp(text, 'i')) >= 0) {
                return data;
            }
            return null;
        });
        const evil = this.evils.filter((data) => {
            if (data.name.search(new RegExp(text, 'i')) >= 0) {
                return data;
            }
            return null;
        });
        return listSearch.concat(hero, evil);
    }
}

module.exports = new SearchQuery();
