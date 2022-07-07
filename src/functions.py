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

def AR_ZnSe():
    originalData = __loadData()
    newData = []

    for x in originalData:
        datapoint = (0.82609) / ((1 + ((34.63971 / x) ** -8.56269)) ** 186.34792) + -0.47 / (0.55* math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 1.47) ** 2) / (0.55 ** 2)) + -0.03456 / (0.4 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 2.88) ** 2) / (0.4 ** 2)) + -0.009 / (0.3 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 6.16) ** 2) / (0.3 ** 2)) + -0.09 / (1 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 16.2) ** 2) / (1 ** 2)) + -0.08 / (1 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 17.4) ** 2) / (1 ** 2)) + 1.12 / (8 * math.sqrt(math.pi/(4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 9.5) ** 2) / (8 ** 2)) + 0.11546 / (2 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 4.9) ** 2) / (2 ** 2)) + 0.21751 / (2 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 2.6) ** 2) / (2 ** 2)) + -0.05 / (0.07 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 0.8) ** 2) / (0.07 ** 2))
        newData.append(datapoint)
    
    finalData = __exportData()
    return finalData