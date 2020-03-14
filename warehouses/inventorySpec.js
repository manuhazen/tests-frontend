describe("Test the inventory picker initializer", () => {
    it('should construct the locations', () => {
        let newInventory = new Inventory([{
                store: "A",
                units: 24
            },
            {
                store: "B",
                units: 48
            }
        ])
        expect(newInventory.locations).toBeInstanceOf(Array);
    });

    it('should construct the base value and return it', () => {
        let newInventory = new Inventory([{
                store: "A",
                units: 24
            },
            {
                store: "B",
                units: 48
            }
        ], 12);
        expect(newInventory.baseValue).toBe(12);
    })

    it('give me the total of units on the global inventory trough all locations', () => {
        let newInventory = new Inventory([{
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
        ], 12);
        expect(newInventory.total).toBe(72);
    })

    it('should resolute the case one of the test PDF', () => {
        let newInventory = new Inventory([{
                store: "A",
                units: 24
            },
            {
                store: "B",
                units: 48
            }
        ], 12);
        let store = newInventory.makeOrder(12);
        expect(store).toEqual({
            store: "A",
            units: 24
        });
    })

    it('cannot order most stock of what is available globally', () => {
        let newInventory = new Inventory([{
                store: "A",
                units: 24
            },
            {
                store: "B",
                units: 48
            }
        ], 12);
        expect(() => newInventory.makeOrder(100)).toThrow(new Error("We don't have enough inventory for these order, call HQ please."))
    })
});