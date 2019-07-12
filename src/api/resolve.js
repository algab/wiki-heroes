const authors = require('../../data/authors.json');
const heroes = require('../../data/heroes.json');
const evils = require('../../data/evils.json');

class Resolve {
    static author(id) {
        return authors.filter(author => id.includes(author.id));
    }

    static hero(id) {
        return heroes.filter(hero => id.includes(hero.id));
    }

    static evil(id) {
        return evils.filter(evil => id.includes(evil.id));
    }

    static language(character, language) {
        if (language === 1) {
            return character.namePortuguese;
        }
        return character.name;
    }
}

module.exports = Resolve;
