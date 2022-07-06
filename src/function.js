function loadData() {
    // load these data points as Big data type
    return;
}

function exportData() {
    return;
}

function KBr() {
    const originalData = loadData();
    let newData = [];

    for(let i = 0; i < originalData.length; i++) {
        let datapoint = (new Big(25.66477)).div(originalData[i]);
        datapoint = datapoint.pow(-12.35154);
        datapoint = (datapoint.plus(1)).pow(0.173440);
        datapoint = (new Big(0.92267)).div(datapoint);
        newData.push(datapoint);
    }

    const finalData = exportData();
    return finalData;
}

function CaF2() {
    const originalData = loadData();
    let newData = [];

    for(let i = 0; i < originalData.length; i++) {
        let datapoint = (new Big(11.12929)).div(originalData[i]);
        datapoint = datapoint.pow(-12.43933);
        datapoint = (datapoint.plus(1)).pow(4.32574);
        datapoint = (new Big(0.93091)).div(datapoint);
        newData.push(datapoint);
    }

    const finalData = exportData();
    return finalData;
}

function ZnSe() {
    return;
}

function sapphire() {
    const originalData = loadData();
    let newData = [];

    for(let i = 0; i < originalData.length; i++) {
        let datapoint = (new Big(11.9544)).div(originalData[i]);
        datapoint = datapoint.pow(-12.07226);
        datapoint = (datapoint.plus(1)).pow(6903.57039);
        datapoint = (new Big(0.78928)).div(datapoint);
        newData.push(datapoint);
    }

    const finalData = exportData();
    return finalData;
}