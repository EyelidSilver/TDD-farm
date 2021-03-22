exports.getYieldForPlant = (plant) => {
return plant.yield;
}

exports.getYieldForCrop = (input) => {
return input.numCrops * this.getYieldForPlant(input.crop);
}

exports.getTotalYield = ({crops}) => crops.map(crop => this.getYieldForCrop(crop)).reduce((total, current) => {
    return total + current
})

exports.getCostForPlant = (plant) => {
    return plant.cost;
}

exports.getCostsForCrop = (input) => {
    return input.numCrops * this.getCostForPlant(input.crop);
}

exports.getSalePriceForCrop = (plant) => {
    return plant.salePrice;
}

exports.getRevenueForCrop = (input) => {
    return input.numCrops * this.getSalePriceForCrop(input.crop);
}

exports.getProfitForCrop = (input) => {
    return this.getRevenueForCrop(input) - this.getCostsForCrop(input)
}

exports.getTotalProfit = ({crops}) => crops.map(crop => this.getRevenueForCrop(crop) - this.getCostsForCrop(crop)).reduce((total, current) => {
    return total + current;
})