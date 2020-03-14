let caseOne = [{
    store: "A",
    units: 24
  },
  {
    store: "B",
    units: 48
  }
];

let caseTwo = [{
    store: "A",
    units: 12
  },
  {
    store: "B",
    units: 12
  },
  {
    store: "C",
    units: 48
  }
];

let caseThree = [{
    store: "A",
    units: 12
  },
  {
    store: "B",
    units: 12
  },
  {
    store: "C",
    units: 10
  },
  {
    store: "D",
    units: 10
  }
];

function Inventory(locations, baseValue) {
  this.locations = locations;
  this.baseValue = baseValue;
  this.greater = [];
  this.equal = [];
  this.less = [];
  this.response = [];

  // Init functions
  this.total = locations
    .map(function (a) {
      return a.units;
    })
    .reduce(function (a, b) {
      return a + b;
    });

  this.closest = function (array, quantity) {
    return array.reduce((prev, curr) =>
      Math.abs(curr["inventory"] - quantity) <
      Math.abs(prev["inventory"] - quantity) ?
      curr :
      prev
    );
  };

  this.arrangeLocations = function () {
    this.locations.map(location => {
      if (location["units"] > baseValue) {
        this.greater.push(location);
      } else if (location["units"] === baseValue) {
        this.equal.push(location);
      } else {
        this.less.push(location);
      }
    });

    this.greater.sort((a, b) => a["units"] - b["units"]);
    this.equal.sort((a, b) => a["units"] - b["units"]);
    this.less.sort((a, b) => a["units"] - b["units"]);
  };

  this.makeOrder = function (quantity) {
    if (quantity > this.total) {
      throw new Error(
        "We don't have enough inventory for these order, call HQ please."
      );
    }

    if (quantity >= this.baseValue && this.greater.length > 0) {
      return this.closest(this.greater, quantity);
    } else if (quantity <= this.baseValue) {
      let unit = 0;
      let stores = this.equal.concat(this.less);
      while (unit < quantity) {
        stores.forEach(store => {
          if (store.units % this.baseValue === 0) {
            unit = unit + store.units;
            this.response.push(store);
          }
        });
      }
      return this.response;
    }
  };

  this.arrangeLocations();

}

// Running the program
let inventoryPicker = new Inventory(caseOne, 12);

// Console log the program
console.log(inventoryPicker.makeOrder(12));