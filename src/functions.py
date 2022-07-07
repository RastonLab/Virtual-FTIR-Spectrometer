def __loadData():
    return

def __exportData():
    return

def KBr():
    originalData = __loadData()
    newData = []

    for x in originalData:
        datapoint = (0.92267) / (1 + (25.66477 / x) ** -12.35159) ** 0.17344
        newData.append(datapoint)
    
    finalData = __exportData()
    return finalData