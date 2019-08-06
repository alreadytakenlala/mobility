import arrayUtil from "../lang/arr";

class Map {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

export default class ArrayMap {
    constructor() {
        this.value = [];
    }

    put(key, value) {
        this.value.push(new Map(key, value));
    }

    remove(key) {
        this.value = arrayUtil.removeByAtt(this.value, "key", key);
    }

    get(key) {
        for (let i=0; i < this.value.length; i++) {
            let item = this.value[i];
            if (item.key == key) {
                return item.value;
            }
        }
        return false;
    }

    isHas(key) {
        return !!get(key);
    }

    size() {
        return this.value.length;
    }
}
