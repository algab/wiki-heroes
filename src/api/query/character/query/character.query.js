const heroes = require('../../../../../data/heroes.json');
const evils = require('../../../../../data/evils.json');

class CharacterQuery {
    constructor() {
        this.heroes = heroes;
        this.evils = evils;
    }

    publisher(publisher) {
        const characters = this.heroes.filter(data => data.publisher === publisher);
        const evil = this.evils.filter(data => data.publisher === publisher);
        return characters.concat(evil);
    }

    author(id) {
        const character = [];
        for (let i = 0; i < this.heroes.length; i += 1) {
            const result = Array.isArray(this.heroes[i].idAuthor);
            if (result === true) {
                for (let j = 0; j < this.heroes[i].idAuthor.length; j += 1) {
                    if (this.heroes[i].idAuthor[j] === id) {
                        character.push(heroes[i]);
                    }
                }
            }
            if (this.heroes[i].idAuthor === id) {
                character.push(heroes[i]);
            }
        }
        for (let i = 0; i < this.evils.length; i += 1) {
            const result = Array.isArray(this.evils[i].idAuthor);
            if (result === true) {
                for (let j = 0; j < this.evils[i].idAuthor.length; j += 1) {
                    if (this.evils[i].idAuthor[j] === id) {
                        character.push(evils[i]);
                    }
                }
            }
            if (this.evils[i].idAuthor === id) {
                character.push(evils[i]);
            }
        }
        return character;
    }
}

module.exports = new CharacterQuery();
