import math

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
    originalData = __loadData()
    newData = []

    for x in originalData:
        datapoint = (0.71015) / ((1 + (20.99353 / x) ** -19.31355 ) ** 1.44348) + -0.13265 / (2.25051 * math.sqrt(math.pi/(4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 16.75) ** 2) / (2.25051 ** 2))
        newData.append(datapoint)

    finalData = __exportData()
    return finalData

def sapphire():
    originalData = __loadData()
    newData = []

    for x in originalData:
        datapoint = (0.78928) / (1 + (11.9544/ x) ** -12.07226 ) ** 6903.57039
        newData.append(datapoint)
    
    finalData = __exportData()
    return finalData