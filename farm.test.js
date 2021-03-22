const {getYieldForPlant, getYieldForCrop, getTotalYield, getSalePriceForCrop, getRevenueForCrop, getCostForPlant, getCostsForCrop, getProfitForCrop, getTotalProfit} = require("./farm");
const {describe, expect, test} = require("@jest/globals")

//Do not change this code
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});
//Do not change the code above

describe("getCostForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        cost: 2,
    };

    test("Get costs for plant", () => {
        expect(getCostForPlant(corn)).toBe(2);
    });
});

describe("getCostsForCrop", () => {
     const corn = {
        name: "corn",
        yield: 3,
        cost: 2,
        salePrice: 5,
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    expect(getCostsForCrop(input)).toBe(20);
})

describe("getSalePriceForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        cost: 2,
        salePrice: 5,
    };

    test("Get sale price for crop", () => {
        expect(getSalePriceForCrop(corn)).toBe(5);
    });
});

describe("getRevenueForCrop", () => {
test("Calculate revenue for crop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        cost: 2,
        salePrice: 5,
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    expect(getRevenueForCrop(input)).toBe(50);
});
});

describe("getProfitForCrop", () => {
    const corn = {
        name: "corn",
        yield: 10,
        cost: 1,
        salePrice: 5,
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
        expect(getProfitForCrop(input)).toBe(40);
    });

describe("getTotalProfit", () => {
    const corn = {
        name: "corn",
        yield: 10,
        cost: 1,
        salePrice: 5,
    };
    const pumpkin = {
        name: "pumpkin",
        yield: 5,
        cost: 1,
        salePrice: 5,
    };
    const crops = [
        { crop: corn, numCrops: 10 },
        { crop: pumpkin, numCrops: 10 },
    ];
        expect(getTotalProfit({crops})).toBe(80);
    });