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

    // Constants

    for(let i = 0; i < origionalData.length; i++) {
        let datapoint = (new Big(25.66477)).div(origionalData[i]);
        datapoint = datapoint.pow(-12.35154);
        datapoint = (datapoint.plus(1)).pow(0.173440);
        datapoint = (new Big(0.92267)).div(datapoint);
        newData.push(datapoint);
    }

    const finalData = exportData();
    return finalData;
}