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

def CaF2():
    originalData = __loadData()
    newData = []

    for x in originalData:
        datapoint = (0.93091) / (1 + (11.12929/ x ) ** -12.43933 ) ** 4.32574
        newData.append(datapoint)
    
    finalData = __exportData()
    return finalData

def ZnSe():
    return

def sapphire():
    originalData = __loadData()
    newData = []

    for x in originalData:
        datapoint = (0.78928) / (1 + (11.9544/ x) ** -12.07226 ) ** 6903.57039
        newData.append(datapoint)
    
    finalData = __exportData()
    return finalData