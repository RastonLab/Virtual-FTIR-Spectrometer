import math
# import matplotlib.pyplot as plt
# import numpy as np

def __loadData(inputFile):

    file = open(inputFile, 'r')

    # File not found
    # May need corrections
    if not file:
        return "File not found"

    data = dict()

    for line in file:
        if "#" not in line:
            (key, val) = line.split()
            data[key] = val

    file.close()

    return data

def __exportData(data):

    # open file and start at the begining
    file = open("outputDataC.csv", 'w')

    for key in data:
        line = f'{key} {data[key]}\n' #key + " " + data[key] + "\n"
        file.write(line)

    return 

def KBr(inputFile):
    originalData = __loadData(inputFile)

    if originalData == "File not found":
        return originalData

    newData = dict()

    for x in originalData:
        x = float(x)
        datapoint = (0.92267) / (1 + (25.66477 / x) ** -12.35159) ** 0.17344
        newData[x] = datapoint
    
    __exportData(newData)
    return

def CaF2(inputFile):
    originalData = __loadData(inputFile)

    if originalData == "File not found":
        return originalData

    newData = dict()

    for x in originalData:
        y = float(originalData[x])
        datapoint = (0.93091) / (1 + (11.12929/ y ) ** -12.43933 ) ** 4.32574
        newData[x] = datapoint
    
    __exportData(newData)
    return 

def ZnSe(inputFile):
    originalData = __loadData(inputFile)

    if originalData == "File not found":
        return originalData

    newData = dict()

    for x in originalData:
        y = float(originalData[x])
        datapoint = (0.71015) / ((1 + (20.99353 / y) ** -19.31355 ) ** 1.44348) + -0.13265 / (2.25051 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 16.75) ** 2) / (2.25051 ** 2))

        newData[x] = datapoint

    __exportData(newData)
    return 

def sapphire(inputFile):
    originalData = __loadData(inputFile)

    if originalData == "File not found":
        return originalData

    newData = dict()

    for x in originalData:
        y = float(originalData[x])
        datapoint = (0.78928) / (1 + (11.9544/ y) ** -12.07226 ) ** 6903.57039
        newData[x] = datapoint
    
    __exportData(newData)
    return 

def AR_ZnSe(inputFile):
    originalData = __loadData(inputFile)

    if originalData == "File not found":
        return originalData

    newData = dict()

    for x in originalData:
        y = float(originalData[x])
        datapoint = (0.82609) / ((1 + ((34.63971 / y) ** -8.56269)) ** 186.34792) + -0.47 / (0.55* math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 1.47) ** 2) / (0.55 ** 2)) + -0.03456 / (0.4 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 2.88) ** 2) / (0.4 ** 2)) + -0.009 / (0.3 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 6.16) ** 2) / (0.3 ** 2)) + -0.09 / (1 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 16.2) ** 2) / (1 ** 2)) + -0.08 / (1 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 17.4) ** 2) / (1 ** 2)) + 1.12 / (8 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 9.5) ** 2) / (8 ** 2)) + 0.11546 / (2 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 4.9) ** 2) / (2 ** 2)) + 0.21751 / (2 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 2.6) ** 2) / (2 ** 2)) + -0.05 / (0.07 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 0.8) ** 2) / (0.07 ** 2))

        newData[x] = datapoint
    
    __exportData(newData)
    return 

def AR_CaF2(inputFile):
    originalData = __loadData(inputFile)

    if originalData == "File not found":
        return originalData

    newData = dict()

    for x in originalData:
        y = float(originalData[x])
        datapoint = (0.9795) / ((1 + ((18.77617/ y ) ** -6.94246) ) ** 91.98745) + -0.06 / (0.08 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( y - 0.76) ** 2) / (0.08 ** 2))+-0.06 / (0.2 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * ( y -1.06) ** 2/0.20 ** 2) + -0.6 / (3.0 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( y -4.85) ** 2) / (3.0 ** 2)) + -0.35 / (1.0 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( y - 9.40) ** 2) / (1.00 ** 2)) + 0.05 / (0.8 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( y - 2.60) ** 2) / (0.8 ** 2)) + 0.04 / (0.5 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( y - 7.75) ** 2) / (0.50 ** 2)) + -0.01 / (0.6 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( y - 6.55) ** 2) / (0.6 ** 2)) + 0.01 / (0.5 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( y - 1.82) ** 2) / (0.5 ** 2))
        newData[x] = datapoint
    
    __exportData(newData)
    return 

def InSb(inputFile):
    originalData = __loadData(inputFile)

    if originalData == "File not found":
        return originalData

    newData = dict()

    for x in originalData:
        y = float(originalData[x])
        datapoint = 1.97163E11 * (1 / (1 + math.exp( -(y - 5.3939) / 1.6624))) * (1 - 1 / (1 + math.exp( -(y - 5.3939) / 0.11925))) + (3.3 * (10 ** 10)) / (2.44977 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 5) ** 2) / (2.44977 ** 2))

        newData[x] = datapoint
    
    __exportData(newData)
    return

def MCT(inputFile):
    originalData = __loadData(inputFile)

    if originalData == "File not found":
        return originalData

    newData = dict()

    for x in originalData:
        y = float(originalData[x])
        datapoint = (1.98748 * (10 ** 9)) + (2.10252 * (10 ** 10)) * (1 / (1 + math.exp( -(y - 20.15819) / 5.73688))) * (1 - 1 / (1 + math.exp( -(y - 20.15819) / 1.11659))) + (1.3 * (10 ** 9)) / (2 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((y - 18.6) ** 2) / (2 ** 2))
        newData[x] = datapoint
   
    __exportData(newData)
    return 

if __name__ == "__main__":
    AR_CaF2("src/tungsten-1900-2300.csv")
    
#     # Set up for actual
#     data = __loadData("outputDataC.csv")
#     xs = []
#     ys = []
#     for key in data:
#         xs.append(float(key))
#         ys.append(float(data[key]))
        
#     # Set up for Expected
#     expected = __loadData("Results/KBr.txt")
#     exx = []
#     exy = []
#     for key in expected:
#         exx.append(float(key))
#         exy.append(float(expected[key]))
    
# #    plt.plot(np.array(xs), np.array(ys), color = 'red')
#     plt.plot(np.array(exx), np.array(exy), color = 'blue')                       
#     plt.show()
