#%%
import math, sys
from decimal import Decimal
from radis import calc_spectrum
from warnings import catch_warnings

# NOTE for graphing
import numpy as np
import matplotlib.pyplot as plt

# function presents error and usage to user, then quits
def __error(error_text):
    print(error_text)
    print(
        "  usage: python3 generate_spectra.py <source (t or g)> <min-wavenumber (cm^-1)>  <max-wavenumber (cm^-1)> <beamsplitter AR_ZnSe or AR_CaF2> <cell_window KBr or CaF2 or ZnSe> <detector MCT or InSb>"
    )
    quit()


def __loadData(s):

    data = {}

    for key, val in zip(s[0], s[1]):
        data[float(key)] = float(val)

    return data


def __KBr(data):

    if data == None:
        return False

    for x in data:
        datapoint = (0.92267) / (1 + (25.66477 / (x / 1000)) ** -12.35159) ** 0.17344
        data[x] = datapoint * data[x]

    return data


def __CaF2(data):

    if data == None:
        return False

    for x in data:
        datapoint = (0.93091) / (1 + (11.12929 / (x / 1000)) ** -12.43933) ** 4.32574
        data[x] = datapoint * data[x]

    return data


def __ZnSe(data):

    if data == None:
        return False

    for x in data:
        x_um = x / 1000
        datapoint = (0.71015) / (
            (1 + (20.99353 / x_um) ** -19.31355) ** 1.44348
        ) + -0.13265 / (2.25051 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(
            -4 * math.log(2) * ((x_um - 16.75) ** 2) / (2.25051**2)
        )
        data[x] = datapoint * data[x]

    return data


def __sapphire(data):

    if data == None:
        return False

    for x in data:
        # Gets accurate graph with numpy float128 but throws runtime overflow error
        # datapoint = Decimal(0.78928) / Decimal(1 + (11.9544 / (x / 1000)) ** -12.07226 ) ** (Decimal(6903.57039))
        datapoint = np.float128(0.78928) / np.float128(
            1 + (11.9544 / (x / 1000)) ** -12.07226
        ) ** (np.float128(6903.57039))
        dp2 = datapoint * np.float128(data[x])
        data[x] = dp2

    return data


def __AR_ZnSe(data):

    if data == None:
        return False

    for x in data:
        x_um = x / 1000
        datapoint = (
            (0.82609) / ((1 + ((34.63971 / x_um) ** -8.56269)) ** 186.34792)
            + -0.47
            / (0.55 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 1.47) ** 2) / (0.55**2))
            + -0.03456
            / (0.4 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 2.88) ** 2) / (0.4**2))
            + -0.009
            / (0.3 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 6.16) ** 2) / (0.3**2))
            + -0.09
            / (1 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 16.2) ** 2) / (1**2))
            + -0.08
            / (1 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 17.4) ** 2) / (1**2))
            + 1.12
            / (8 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 9.5) ** 2) / (8**2))
            + 0.11546
            / (2 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 4.9) ** 2) / (2**2))
            + 0.21751
            / (2 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 2.6) ** 2) / (2**2))
            + -0.05
            / (0.07 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 0.8) ** 2) / (0.07**2))
        )

        data[x] = datapoint * data[x]

    return data


def __AR_CaF2(data):

    if data == None:
        return False

    for x in data:
        x_um = x / 1000
        datapoint = (
            (0.9795) / ((1 + ((18.77617 / x_um) ** -6.94246)) ** 91.98745)
            + -0.06
            / (0.08 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 0.76) ** 2) / (0.08**2))
            + -0.06
            / (0.2 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * (x_um - 1.06) ** 2 / 0.20**2)
            + -0.6
            / (3.0 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 4.85) ** 2) / (3.0**2))
            + -0.35
            / (1.0 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 9.40) ** 2) / (1.00**2))
            + 0.05
            / (0.8 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 2.60) ** 2) / (0.8**2))
            + 0.04
            / (0.5 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 7.75) ** 2) / (0.50**2))
            + -0.01
            / (0.6 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 6.55) ** 2) / (0.6**2))
            + 0.01
            / (0.5 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 1.82) ** 2) / (0.5**2))
        )
        data[x] = datapoint * data[x]

    return data


def __InSb(data):

    if data == None:
        return False

    for x in data:
        x_um = x / 1000
        datapoint = 1.97163e11 * (1 / (1 + math.exp(-(x_um - 5.3939) / 1.6624))) * (
            1 - 1 / (1 + math.exp(-(x_um - 5.3939) / 0.11925))
        ) + (3.3e10) / (2.44977 * math.sqrt(math.pi / (4 * math.log(2)))) * math.exp(
            -4 * math.log(2) * ((x_um - 5) ** 2) / (2.44977**2)
        )
        data[x] = datapoint * data[x]

    return data


def __MCT(data):

    if data == None:
        return False

    for x in data:
        x_um = x / 1000
        datapoint = (
            (1.98748 * (10**9))
            + (2.10252 * (10**10))
            * (1 / (1 + math.exp(-(x_um - 20.15819) / 5.73688)))
            * (1 - 1 / (1 + math.exp(-(x_um - 20.15819) / 1.11659)))
            + (1.3 * (10**9))
            / (2 * math.sqrt(math.pi / (4 * math.log(2))))
            * math.exp(-4 * math.log(2) * ((x_um - 18.6) ** 2) / (2**2))
        )
        data[x] = datapoint * data[x]

    return data


def __sPlanck(spectrum, temp):
    H = 6.62606957e-34
    C = 2.99792458e8
    K_B = 1.3806488e-23

    if spectrum == None:
        return False

    for x in spectrum:
        x2 = x * (10**-9)
        p = ((0.2 * H * (C**2)) / ((x2**4) * x)) * (
            1 / (math.exp((H * C) / (x2 * K_B * temp)) - 1)
        )
        spectrum[x] = spectrum[x] * p

    return spectrum


#%%
# NOTE: Change back to process_spectrum???
# def process_spectrum():
if __name__ == "__main__":

    # NOTE for graphing
    source = "t"
    min_wavenum = 1900
    max_wavenum = 2300
    beamsplitter = "AR_ZnSe"
    cell_window = "CaF2"
    detector = "MCT"

    # check if source is correct (t or g)
    if (source != "t") and (source != "g"):
        __error("  source needs to be <t> or <g>. provided source: %s" % (source))

    # set source_temp based on source input
    if source == "g":
        source_temp = 1700
    elif source == "t":
        source_temp = 3100
    else:
        __error("  source needs to be <t> or <g>. provided source: %s" % (source))

    # check if wavenumbers are correct
    if min_wavenum < 400:
        __error(
            "  min wavenumber is out of range (400 - 12500). provided min: %s"
            % (min_wavenum)
        )
    elif min_wavenum > 12500:
        __error(
            "  max wavenumber is out of range (400 - 12500). provided max: %s"
            % (max_wavenum)
        )
    elif min_wavenum > max_wavenum:
        __error(
            "  min wavenumber is greater than max wavenumber. provided min: %s  provided max: %s"
            % (min_wavenum, max_wavenum)
        )
    elif min_wavenum == max_wavenum:
        __error(
            "  min wavenumber is equivalent to max wavenumber. provided min: %s  provided max: %s"
            % (min_wavenum, max_wavenum)
        )

    # check if beamsplitter is vaild
    if beamsplitter != "AR_ZnSe" and beamsplitter != "AR_CaF2":
        __error(
            " given beamsplitter option is not a vaild option\n Valid Options:  AR_ZnSe  AR_CaF2"
        )

    # check if cell_window is vaild
    if cell_window != "CaF2" and cell_window != "ZnSe":
        __error(
            " given cell window option is not a vaild option\n Valid Options:  CaF2  ZnSe"
        )

    # check if detector is vaild
    if detector != "MCT" and detector != "InSb":
        __error(
            " given detector option is not a vaild option\n Valid Options:  MCTs  InSb"
        )

    # output verified params to console as self-check before calc_spectrum()
    print(
        "source: %s   source_temp: %s   min_wavenum: %s   max_wavenum: %s   beamspliter: %s   cell_window: %s   detector: %s"
        % (
            source,
            source_temp,
            min_wavenum,
            max_wavenum,
            beamsplitter,
            cell_window,
            detector,
        )
    )

    # ----- a.) transmission spectrum of gas sample -----
    # https://radis.readthedocs.io/en/latest/source/radis.lbl.calc.html#radis.lbl.calc.calc_spectrum
    s = calc_spectrum(
        min_wavenum,  # wmin minimum wavelength (nm - 800)
        max_wavenum,  # wmax maximum wavelength (nm - 250000)
        molecule="CO",
        isotope="1,2,3",
        pressure=0.01,  # bar
        Tgas=294.15,  # K
        path_length=10,  # cm
        wstep=0.5,  # cm^-1
        verbose=False,  # hides HITRAN output
        databank="hitran",
        warnings={"AccuracyError": "ignore"},
    )

    spectrum = __loadData(s.get("transmittance_noslit", wunit="nm", Iunit="default"))

    xs = []
    ys = []
    for key in spectrum:
        xs.append(float(key))
        ys.append(float(spectrum[key]))
    plt.plot(np.array(xs), np.array(ys), "blue")
    plt.show()

    # ----- b.) blackbody spectrum of source -----
    spectrum = __sPlanck(spectrum, source_temp)
    xs = []
    ys = []
    for key in spectrum:
        xs.append(float(key))
        ys.append(float(spectrum[key]))
    plt.plot(np.array(xs), np.array(ys), "blue")
    plt.show()

    # ----- c.) transmission spectrum of windows/beamsplitter -----
    # Beamsplitter
    if beamsplitter == "AR_ZnSe":
        spectrum = __AR_ZnSe(spectrum)
    elif beamsplitter == "AR_CaF2":
        spectrum = __AR_CaF2(spectrum)

    xs = []
    ys = []
    for key in spectrum:
        xs.append(float(key))
        ys.append(float(spectrum[key]))
    plt.plot(np.array(xs), np.array(ys), "blue")
    plt.show()

    # Cell Windows
    if cell_window == "CaF2":
        spectrum = __CaF2(spectrum)
        spectrum = __CaF2(spectrum)
    elif cell_window == "ZnSe":
        spectrum = __ZnSe(spectrum)
        spectrum = __ZnSe(spectrum)

    xs = []
    ys = []
    for key in spectrum:
        xs.append(float(key))
        ys.append(float(spectrum[key]))
    plt.plot(np.array(xs), np.array(ys), "blue")
    plt.show()

    # ----- d.) detector response spectrum -----
    if detector == "MCT":
        spectrum = __ZnSe(spectrum)
        spectrum = __MCT(spectrum)
    elif detector == "InSb":
        spectrum = __sapphire(spectrum)
        spectrum = __InSb(spectrum)

    # NOTE to graph results
    xs = []
    ys = []
    for key in spectrum:
        xs.append(float(key))
        ys.append(float(spectrum[key]))
    plt.plot(np.array(xs), np.array(ys), "blue")
    plt.show()
#%%
