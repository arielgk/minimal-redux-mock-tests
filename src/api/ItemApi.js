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

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

const generateId = course => {
  return replaceAll(course.title, " ", "-");
};

class ItemApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveItem(item) {
    item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item.id) {
          const existingItemIndex = items.findIndex(a => a.id == item.id);
          items.splice(existingItemIndex, 1, item);
        } else {
          //Just simulating creation here.
          item.id = generateId(item);
          items.push(item);
        }

        resolve(item);
      }, delay);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          item.id == itemId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ItemApi;
