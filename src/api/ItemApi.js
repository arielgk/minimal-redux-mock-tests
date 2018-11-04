import delay from "./delay";

const items = [
    {
        id: 1,
        title: "item 1"
    },
    {
        id: 2,
        title: "item 2"
    },
    {
        id: 3,
        title: "item 3"
    },
    {
        id: 4,
        title: "item 4"
    },
    {
        id: 5,
        title: "item 5"
    }
];

/**
 *
 * @param str
 * @param find
 * @param replace
 * @returns {void | string | never}
 */
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
}

/**
 *
 * Generates slug type id from title
 * just for mock, should be implemented on server
 * @param item
 * @returns {string}
 */
const generateIdString = item => {
    return replaceAll(item.title, " ", "-");
};

/**
 *
 * Generates id autoincrement
 * just for mock, should be implemented on server

 * @returns {integer}
 */
const generateId = () => {
    return items.length +1
};
/**
 * Mock API for Items
 */
class ItemApi {
    /**
     *
     * @returns {Promise<Items>}
     */
    static getAllItems() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], items));
            }, delay);
        });
    }

    /**
     * Save passed in Item
     * @param item
     * @returns {Promise<Item>}
     */
    static saveItem(item) {
        // avoid manipulation of object passed in.
        item = Object.assign({}, item);
        console.log(item);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (item.id) {
                    const existingItemIndex = items.findIndex(a => a.id === item.id);
                    items.splice(existingItemIndex, 1, item);
                    console.log(item);
                } else {
                    //Just simulating creation here.
                    item.id = generateId();
                    items.push(item);
                    console.log(item);
                }

                resolve(item);
            }, delay);
        });
    }

    /**
     * Deletes an Item by ID
     * @param itemId
     * @returns {Promise<any>}
     */
    static deleteItem(itemId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfItemToDelete = items.findIndex(item => {
                    return item.id === itemId;
                });
                items.splice(indexOfItemToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default ItemApi;
