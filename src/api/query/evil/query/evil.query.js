const evils = require('../../../../../data/evils.json');

class EvilQuery {
    constructor() {
        this.evils = evils;
    }

    list(begin = 0, end) {
        const listEvil = [];
        if (begin !== 0) {
            for (let i = begin - 1; i < end; i += 1) {
                if (this.evils[i] !== null) {
                    listEvil.push(this.evils[i]);
                }
            }
        } else {
            for (let i = 0; i < end; i += 1) {
                if (this.evils[i] !== null) {
                    listEvil.push(this.evils[i]);
                }
            }
        }
        return listEvil;
    }

    search(id) {
        const evil = this.evils.filter(data => data.id === id);
        if (evil.length !== 0) {
            return evil[0];
        }
        return new Error('Character not found');
    }
}

module.exports = new EvilQuery();
