#%%
from decimal import Decimal
import matplotlib.pyplot as plt
import numpy as np

import math
from warnings import catch_warnings

#%%
def __loadData(inputFile):

    try:
        file = open(inputFile, 'r')

    # File not found
    except:
        print(f'File not found: {inputFile}')
        return

    data = {}

    for line in file:
        if "#" not in line:
            (key, val) = line.split()
            data[float(key)] = float(val)

    file.close()

    return data

def __exportData(data, fileName):

    # open file and start at the begining
    file = open(fileName, 'w')

    for key in data:
        line = f'{key} {data[key]}\n'
        file.write(line)
    
    file.close()
    
    return True

def KBr(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        datapoint = (0.92267) / (1 + (25.66477 / (x / 1000)) ** -12.35159) ** 0.17344
        data[x] = datapoint * data[x]
    
    return __exportData(data, "StepC.csv")

def CaF2(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        datapoint = (0.93091) / (1 + (11.12929/ (x / 1000)) ** -12.43933 ) ** 4.32574
        data[x] = datapoint * data[x]
    
    return __exportData(data, "StepC.csv")

def ZnSe(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        x_um = x / 1000
        datapoint = (0.71015) / ((1 + (20.99353 / x_um) ** -19.31355 ) ** 1.44348) + -0.13265 / (2.25051 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x_um - 16.75) ** 2) / (2.25051 ** 2))
        data[x] = datapoint * data[x]

    return __exportData(data, "StepC.csv")

def sapphire(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        datapoint =Decimal(0.78928) / Decimal(1 + (11.9544 / (x / 1000)) ** -12.07226 ) ** (Decimal(6903.57039))
        data[x] = datapoint * Decimal(data[x])
    
    return __exportData(data, "StepC.csv")

#TODO Interpolate
def AR_ZnSe(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    data2 = {}

    for x in data:
        x_um = x / 1000
        datapoint = Decimal(0.82609) / (Decimal(1 + ((34.63971 / x_um) ** -8.56269)) ** Decimal(186.34792)) + Decimal(-0.47) / Decimal(0.55 * math.sqrt(math.pi  / (4 * math.log(2)))) * Decimal(math.exp(-4 * math.log(2) * ((x_um- 1.47) ** 2) / (0.55 ** 2))) + Decimal(-0.03456) / Decimal(0.4 * math.sqrt(math.pi  / (4 * math.log(2)))) * Decimal(math.exp(-4 * math.log(2) * ((x_um- 2.88) ** 2) / (0.4 ** 2))) + Decimal(-0.009) / Decimal(0.3 * math.sqrt(math.pi  / (4 * math.log(2)))) * Decimal(math.exp(-4 * math.log(2) * ((x_um- 6.16) ** 2) / (0.3 ** 2))) +Decimal(-0.09) / Decimal(1 * math.sqrt(math.pi  / (4 * math.log(2)))) * Decimal(math.exp(-4 * math.log(2) * ((x_um - 16.2) ** 2) / (1 ** 2))) + Decimal(-0.08) / Decimal(1 * math.sqrt(math.pi  / (4 * math.log(2)))) * Decimal(math.exp(-4 * math.log(2) * ((x_um- 17.4) ** 2) / (1 ** 2))) + Decimal(1.12) / Decimal(8 * math.sqrt(math.pi /(4 * math.log(2)))) * Decimal(math.exp(-4 * math.log(2) * ((x_um- 9.5) ** 2) / (8 ** 2))) + Decimal(0.11546) / Decimal(2 * math.sqrt(math.pi  / (4 * math.log(2)))) * Decimal(math.exp(-4 * math.log(2) * ((x_um- 4.9) ** 2) / (2 ** 2))) + Decimal(0.21751) / Decimal(2 * math.sqrt(math.pi  / (4 * math.log(2)))) * Decimal(math.exp(-4 * math.log(2) * ((x_um- 2.6) ** 2) / (2 ** 2))) + Decimal(-0.05) / Decimal(0.07 * math.sqrt(math.pi  / (4 * math.log(2)))) * Decimal(math.exp(-4 * math.log(2) * ((x_um- 0.8) ** 2) / (0.07 ** 2)))

        data[x] = datapoint

    return __exportData(data, "StepC.csv")

def AR_CaF2(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        x_um = x / 1000
        datapoint = (0.9795) / ((1 + ((18.77617/ x_um) ** -6.94246) ) ** 91.98745) + -0.06 / (0.08 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x_um- 0.76) ** 2) / (0.08 ** 2))+-0.06 / (0.2 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * ( x_um-1.06) ** 2/0.20 ** 2) + -0.6 / (3.0 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x_um-4.85) ** 2) / (3.0 ** 2)) + -0.35 / (1.0 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x_um- 9.40) ** 2) / (1.00 ** 2)) + 0.05 / (0.8 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x_um- 2.60) ** 2) / (0.8 ** 2)) + 0.04 / (0.5 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x_um- 7.75) ** 2) / (0.50 ** 2)) + -0.01 / (0.6 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x_um- 6.55) ** 2) / (0.6 ** 2)) + 0.01 / (0.5 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x_um- 1.82) ** 2) / (0.5 ** 2))
        data[x] = datapoint * data[x]
    
    return __exportData(data, "StepC.csv")

def InSb(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        x_um = x /1000
        datapoint = 1.97163E11 * (1 / (1 + math.exp( -(x_um- 5.3939) / 1.6624))) * (1 - 1 / (1 + math.exp( -(x_um- 5.3939) / 0.11925))) + (3.3e10) / (2.44977 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x_um- 5) ** 2) / (2.44977 ** 2))
        data[x] = datapoint * data[x]
    
    return __exportData(data, "StepD.csv")

def MCT(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        x_um = x / 1000
        datapoint = (1.98748 * (10 ** 9)) + (2.10252 * (10 ** 10)) * (1 / (1 + math.exp( -(x_um - 20.15819) / 5.73688))) * (1 - 1 / (1 + math.exp( -(x_um - 20.15819) / 1.11659))) + (1.3 * (10 ** 9)) / (2 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x_um - 18.6) ** 2) / (2 ** 2))
        data[x] = datapoint * data[x]
   
    return __exportData(data, "StepD.csv")


def sPlank(data, temp):
    H = 6.62606957e-34
    C = 2.99792458e8
    K_B = 1.3806488e-23

    spectrum = __loadData(data)

    if spectrum == None:
        return False

    for x in spectrum:
        x2 = x * (10 ** -9)
        p = ((0.2* H * (C ** 2)) / ((x2 ** 4) * x )) * (1 / (math.exp((H * C) / (x2 * K_B * temp)) - 1))
        spectrum[x] = spectrum[x] * p

    return __exportData(spectrum, "StepB.csv")

if __name__=="__main__":
    sPlank("calc_spectrum-full-nm.csv", 1700)
    AR_ZnSe("StepB.csv")
    InSb("StepC.csv")

    print(Decimal(1.1) + Decimal(2.2))
    
    dataB = __loadData("data2.csv")
    dataC = __loadData("StepC.csv")
    dataD = __loadData("StepD.csv")
        
    xs = []
    ys = []
    for key in dataB:
        xs.append(float(key))
        ys.append(float(dataB[key]))

    Cxs = []
    Cys = []
    for key in dataC:
        Cxs.append(float(key))
        Cys.append(float(dataC[key]))
        
    Dxs = []
    Dys = []
    for key in dataD:
        Dxs.append(float(key))
        Dys.append(float(dataD[key]))

    # plt.plot(np.array(xs), np.array(ys), color = 'hotpink')
    plt.plot(np.array(Cxs), np.array(Cys), 'blue')
    # plt.plot(np.array(Dxs), np.array(Dys), color = 'purple')

    plt.show()
