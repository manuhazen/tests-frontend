const stores = [
  { store: "Store A", inventory: 12 },
  { store: "Store B", inventory: 48 },
  { store: "Store C", inventory: 10 },
  { store: "Store D", inventory: 12 },
  { store: "Store E", inventory: 28 },
  { store: "Store F", inventory: 12 }
];

let picker = 12;
let response = [];

// Most closest
function closest(array, quantity) {
  return array.reduce((prev, curr) =>
    Math.abs(curr["inventory"] - quantity) <
    Math.abs(prev["inventory"] - quantity)
      ? curr
      : prev
  );
}

// Filter the stores
function filter(picker) {
  stores.map(store => {
    if (store.inventory === picker) {
      return store;
    }
  });

  console.log(`Stores where to pick: ${JSON.stringify(response)}`);
}

function test(array, quantity_requested) {
  array.map(location => {
    if (location["inventory"] === quantity_requested) {
      response.push(location);
    }
  });

  console.log(response);
}

console.log(test(stores, picker));
