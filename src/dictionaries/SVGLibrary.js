import {ReactComponent as SourceBoxSVG} from '../components/svgs/source-box.svg';
import {ReactComponent as ApertureWheelSVG} from '../components/svgs/aperture-wheel.svg';
import {ReactComponent as FlatRotatableMirrorSVG} from '../components/svgs/flat-rotatable-mirror.svg';
import {ReactComponent as GlobarSVG} from '../components/svgs/globar.svg';
import {ReactComponent as ParabolicMirrorSVG} from '../components/svgs/parabolic-mirror.svg';
import {ReactComponent as TungstenSVG} from '../components/svgs/tungsten.svg';
import {ReactComponent as DetectionChamberSVG} from '../components/svgs/detection-chamber.svg';
import {ReactComponent as SampleCompartmentSVG} from '../components/svgs/sample-compartment.svg';
import {ReactComponent as CDFlatRotatableMirrorSVG} from '../components/svgs/dc-flat-rotatable-mirror.svg';
import {ReactComponent as MCTSVG} from '../components/svgs/MCT.svg';
import {ReactComponent as LNSBSVG} from '../components/svgs/lnsb.svg';
import {ReactComponent as CDFlatRotatableMirror2SVG} from '../components/svgs/cd-flat-rotatable-mirror-2.svg';
import {ReactComponent as FixedCornerCubeSVG} from '../components/svgs/fixed-corner-cube.svg';
import {ReactComponent as FixedMirrorSVG} from '../components/svgs/fixed-mirror.svg';
import {ReactComponent as LaserSVG} from '../components/svgs/laser.svg';
import {ReactComponent as MovableCornerCubeSVG} from '../components/svgs/movable-corner-cube.svg';
import {ReactComponent as ParabolicMirrorHoleSVG} from '../components/svgs/parabolic-mirror-w-hole.svg';
import {ReactComponent as ParabolicMirrorHole2SVG} from '../components/svgs/parabolic-mirror-w-hole-2.svg';
import {ReactComponent as LaserbeamsSVG} from '../components/svgs/laserbeams.svg';

import wheel from '../components/tooltip-svgs/aperture-wheel.svg';
import frm from '../components/tooltip-svgs/flat-rotatable-mirror-1.svg';
import globar from '../components/tooltip-svgs/globar.svg';
import pm from '../components/tooltip-svgs/parabolic-mirror.svg';
import tungsten from '../components/tooltip-svgs/tungsten.svg';
import sample from '../components/tooltip-svgs/sample-compartment.svg';
import dcfrm from '../components/tooltip-svgs/flat-rotatable-mirror-2.svg';
import MCT from '../components/tooltip-svgs/mct.svg';
import lnsb from '../components/tooltip-svgs/insb.svg';
import cdfrm2 from '../components/tooltip-svgs/flat-rotatable-mirror-3.svg';
import fc from '../components/tooltip-svgs/fixed-corner-cube.svg';
import fm from '../components/tooltip-svgs/fixed-mirror.svg';
import laser from '../components/tooltip-svgs/laser.svg';
import mc from '../components/tooltip-svgs/movable-corner-cube.svg';
import pmh from '../components/tooltip-svgs/parabolic-mirror-w-hole-1.svg';
import pmh2 from '../components/tooltip-svgs/parabolic-mirror-w-hole-2.svg';

export const ftirParts = {
    'sourcebox': SourceBoxSVG,
    'aperturewheel': ApertureWheelSVG,
    'flatrotatablemirror': FlatRotatableMirrorSVG,
    'globar': GlobarSVG,
    'parabolicmirror': ParabolicMirrorSVG,
    'tungsten': TungstenSVG,
    'detectionchamber': DetectionChamberSVG,
    'cdflatrotatablemirror': CDFlatRotatableMirrorSVG,
    'samplecompartment': SampleCompartmentSVG,
    'mct': MCTSVG,
    'lnsb': LNSBSVG,
    'cdflatrotatablemirror2': CDFlatRotatableMirror2SVG,
    'fixedcornercube': FixedCornerCubeSVG,
    'fixedmirror': FixedMirrorSVG,
    'laser': LaserSVG,
    'movablecornercube': MovableCornerCubeSVG,
    'parabolicmirrorhole': ParabolicMirrorHoleSVG,
    'parabolicmirrorhole2': ParabolicMirrorHole2SVG,
    'laserbeams': LaserbeamsSVG
}

export const ttImgSrc = {
    'aperturewheel': wheel,
    'flatrotatablemirror': frm,
    'globar': globar,
    'parabolicmirror': pm,
    'tungsten': tungsten,
    'cdflatrotatablemirror': dcfrm,
    'samplecompartment': sample,
    'mct': MCT,
    'lnsb': lnsb,
    'cdflatrotatablemirror2': cdfrm2,
    'fixedcornercube': fc,
    'fixedmirror': fm,
    'laser': laser,
    'movablecornercube': mc,
    'parabolicmirrorhole': pmh,
    'parabolicmirrorhole2': pmh2,
}

export const toolTips = {
    'sourcebox': {},
    'aperturewheel': {
        title: 'Aperture Wheel',
        text: 'This is a black wheel with apertures (holes) of different sizes. Smaller apertures allow for higher resolution at a cost of increased attenuation (blocking) of radiation.'
    },
    'flatrotatablemirror': {
        title: 'Flat Rotatable Mirror',
        text: 'Gold plated flat rotatable mirror that reflects radiation from the source to the parabolic mirror.'
    },
    'globar': {
        title: 'Globar',
        text: "Globar heating element which produces radiation at a temperature of 1700 K. Its spectrum is very well approximated by Planck's law. Radiation is produced by passing a relatively large current through the material, which is silicon carbide (SiC). Note, the word “globar” is a portmanteau word which blends together “glow” and “bar”."
    },
    'parabolicmirror': {
        title: 'Parabolic Mirror',
        text: 'Gold plated parabolic mirror that focuses reflected radiation at the aperture wheel.'
    },
    'tungsten': {
        title: 'Tungsten',
        text: 'Tungsten lamp which produces radiation at a temperature of 3100 K. Its spectrum is well approximated by Planck’s law. Radiation is produced by passing a current through a tungsten (W) filament, which is in an evacuated bulb.'
    },
    'detectionchamber': {},
    'cdflatrotatablemirror': {
        title: 'Flat Rotatable Mirror',
        text: 'Gold plated flat rotatable mirror that reflects radiation from the parabolic mirror onto one of the detectors.'
    },
    'samplecompartment': {
        title: 'Sample Compartment',
        text: 'This is a pyrex sample cell that has two valves for controlling gas flow into (right) and out from (right) it. There are uncoated salt windows on either end which can be either zinc selenide (ZnSe), which has good transmittance in the far-to-mid-infrared region (in particular, below 1100 cm-1), or calcium fluoride (CaF2), which has good transmittance in the mid-to-near-infrared region.'
    },
    'mct': {
        title: 'MCT',
        text: 'Liquid nitrogen cooled Mercury-Cadmium-Telluride (MCT) detector with a sapphire window. This is a semiconductor detector that utilizes a photoelectric-like effect in order to convert light into electricity. The output current is proportional to the infrared intensity. It is more sensitive than InSb in the far-infrared region (below ~1500 cm-1).'
    },
    'lnsb': {
        title: 'INSB',
        text: 'Liquid nitrogen cooled Indium Antimonide (InSb) detector with a sapphire window. This is a semiconductor detector that utilizes a photoelectric-like effect in order to convert light into electricity. The output current is proportional to the infrared intensity. It is more sensitive than MCT in the mid- and near-infrared regions (above ~1500 cm-1).'
    },
    'cdflatrotatablemirror2': {
        title: 'Flat Rotatable Mirror',
        text: 'Gold plated flat rotatable mirror that reflects radiation from the parabolic mirror onto one of the detectors.'
    },
    'fixedcornercube': {
        title: 'Fixed Cornder Cube',
        text: 'Gold coated corner-cube. This component reflects back a return beam that is parallel to the incident beam.'
    },
    'fixedmirror': {
        title: 'Fixed Mirror',
        text: 'Gold coated flat mirror.'
    },
    'laser': {
        title: 'Laser',
        text: 'Helium-neon (HeNe) laser. This is a source of coherent, monochromatic light, with a wavelength of 632.8 nm.'
    },
    'movablecornercube': {
        title: 'Movable Corner Cube',
        text: 'Gold coated movable corner-cube. This component reflects back a return beam that is parallel to the incident beam and moves a distance that is inversely proportional to the resolution.'
    },
    'parabolicmirrorhole': {
        title: 'Parabolic Mirror with Hole',
        text: 'Gold plated parabolic mirror with centered hole for the laser beam to pass through.'
    },
    'parabolicmirrorhole2': {
        title: 'Parabolic Mirror with Hole',
        text: 'Gold plated parabolic mirror with centered hole for superposition of laser and “source” beams.'
    },
    'laserbeams': {}
}