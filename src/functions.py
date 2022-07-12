import math
from warnings import catch_warnings

def __loadData(inputFile):

    try:
        file = open(inputFile, 'r')

    # File not found
    except:
        print("File not found")
        return

    data = dict()

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
        datapoint = (0.92267) / (1 + (25.66477 / x) ** -12.35159) ** 0.17344
        data[x] = datapoint * data[x]
    
    return __exportData(data, "StepC.csv")

def CaF2(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        datapoint = (0.93091) / (1 + (11.12929/ x ) ** -12.43933 ) ** 4.32574
        data[x] = datapoint * data[x]
    
    return __exportData(data, "StepC.csv")

def ZnSe(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        datapoint = (0.71015) / ((1 + (20.99353 / x) ** -19.31355 ) ** 1.44348) + -0.13265 / (2.25051 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 16.75) ** 2) / (2.25051 ** 2))

        data[x] = datapoint * data[x]

    return __exportData(data, "StepC.csv")

def sapphire(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        datapoint = (0.78928) / (1 + (11.9544/ x) ** -12.07226 ) ** 6903.57039
        data[x] = datapoint * data[x]
    
    return __exportData(data, "StepC.csv")

def AR_ZnSe(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        datapoint = (0.82609) / ((1 + ((34.63971 / x) ** -8.56269)) ** 186.34792) + -0.47 / (0.55* math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 1.47) ** 2) / (0.55 ** 2)) + -0.03456 / (0.4 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 2.88) ** 2) / (0.4 ** 2)) + -0.009 / (0.3 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 6.16) ** 2) / (0.3 ** 2)) + -0.09 / (1 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 16.2) ** 2) / (1 ** 2)) + -0.08 / (1 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 17.4) ** 2) / (1 ** 2)) + 1.12 / (8 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 9.5) ** 2) / (8 ** 2)) + 0.11546 / (2 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 4.9) ** 2) / (2 ** 2)) + 0.21751 / (2 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 2.6) ** 2) / (2 ** 2)) + -0.05 / (0.07 * math.sqrt(math.pi  / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 0.8) ** 2) / (0.07 ** 2))

        data[x] = datapoint * data[x]
    
    return __exportData(data, "StepC.csv")

def AR_CaF2(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        datapoint = (0.9795) / ((1 + ((18.77617/ x ) ** -6.94246) ) ** 91.98745) + -0.06 / (0.08 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x - 0.76) ** 2) / (0.08 ** 2))+-0.06 / (0.2 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * ( x -1.06) ** 2/0.20 ** 2) + -0.6 / (3.0 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x -4.85) ** 2) / (3.0 ** 2)) + -0.35 / (1.0 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x - 9.40) ** 2) / (1.00 ** 2)) + 0.05 / (0.8 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x - 2.60) ** 2) / (0.8 ** 2)) + 0.04 / (0.5 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x - 7.75) ** 2) / (0.50 ** 2)) + -0.01 / (0.6 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x - 6.55) ** 2) / (0.6 ** 2)) + 0.01 / (0.5 * math.sqrt(math.pi /(4 * math.log(2)))) * math.exp(-4 * math.log(2) * (( x - 1.82) ** 2) / (0.5 ** 2))
        data[x] = datapoint * data[x]
    
    return __exportData(data, "StepC.csv")

def InSb(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        datapoint = 1.97163E11 * (1 / (1 + math.exp( -(x - 5.3939) / 1.6624))) * (1 - 1 / (1 + math.exp( -(x - 5.3939) / 0.11925))) + (3.3e10) / (2.44977 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 5) ** 2) / (2.44977 ** 2))

        data[x] = datapoint * data[x]
    
    return __exportData(data, "StepD.csv")

def MCT(inputFile):
    data = __loadData(inputFile)

    if data == None:
        return False

    for x in data:
        datapoint = (1.98748 * (10 ** 9)) + (2.10252 * (10 ** 10)) * (1 / (1 + math.exp( -(x - 20.15819) / 5.73688))) * (1 - 1 / (1 + math.exp( -(x - 20.15819) / 1.11659))) + (1.3 * (10 ** 9)) / (2 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(-4 * math.log(2) * ((x - 18.6) ** 2) / (2 ** 2))
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
    sPlank("calc_spectrum-800-5000-nm.csv", 1700)
    KBr("StepB.csv")
    InSb("StepC.csv")
