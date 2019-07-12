const heroes = require('../../../../../data/heroes.json');

class HeroQuery {
    constructor() {
        this.heroes = heroes;
    }

    list(begin = 0, end) {
        const listHeroes = [];
        if (begin !== 0) {
            for (let i = begin - 1; i < end; i += 1) {
                if (this.heroes[i] !== null) {
                    listHeroes.push(this.heroes[i]);
                }
            }
        } else {
            for (let i = 0; i < end; i += 1) {
                if (this.heroes[i] !== null) {
                    listHeroes.push(this.heroes[i]);
                }
            }
        }
        return listHeroes;
    }

    search(id) {
        const hero = this.heroes.filter(data => data.id === id);
        if (hero.length !== 0) {
            return hero[0];
        }
        return new Error('Character not found');
    }
}

module.exports = new HeroQuery();
