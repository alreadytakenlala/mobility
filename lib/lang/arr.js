/**
 * 数组 工具类
 */
let arrayUtil = {
    /**
     * 根据某个条件搜索
     */
    searchArray(array, key, value) {
        for (let i=0; i < array.length; i++) {
            if (array[i][key] == value) {
                return array[i];
            }
        }
    },

    /**
     * 去掉数字改索引的元素
     */
    removeByIndex(array, index) {
        array.splice(index, 1);
    },

    /**
     * 是否包含该元素
     */
    isContain(arr, ...param) {
        for (let i=0; i < arr.length; i++) {
            for (let j=0; j < param.length; j++) {
                if (arr[i] == param[j]) return true;
            }
        }
        return false;
    },

    /**
     * 在该索引处添加一个元素
     */
    add(array, index, newValue) {
        let newArray = [];
        if (index < 0) {
            newArray.push(newValue);
            array.forEach((item, i) => {
                newArray.push(item);
            });
        } else {
            array.forEach((item, i) => {
                newArray.push(item);
                if (i == index) {
                    newArray.push(newValue);
                }
            });
        }
        array = newArray;
        return newArray;
    },

    /**
     * 数组复制
     */
    copy(array) {
        let newArray = [];
        array.forEach(item => {
            newArray.push(item);
        });
        return newArray;
    },

    /**
     * 根据某个属性排序
     */
    sort(arr, att) {
        for (let i=0; i < arr.length; i++) {
            let min = i;
            for (let j=i; j < arr.length; j++) {
                if (arr[j][att] < arr[min][att]) {
                    min = j;
                }
            }
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        return arr;
    },

    /**
     * 去除数组中一个元素
     */
    removeByAtt(arr, key, value) {
        let newArr = [];
        arr.forEach(item => {
            if (item[key] != value) newArr.push(item);
        });
        return newArr;
    },


    /**
     * 解析成数组
     */
    parseToArray(data) {
        if (!data) return [];
        else if (typeof data == "string" || !data.length) return [data];
        else return data
    }
};

export default arrayUtil;
