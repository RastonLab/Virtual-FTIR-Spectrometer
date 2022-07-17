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
        text: 'Once again, insert Lorum ipsum'
    },
    'flatrotatablemirror': {
        title: 'Flat Rotatable Mirror',
        text: 'Once again, insert Lorum ipsum'
    },
    'globar': {
        title: 'Globar',
        text: 'Once again, insert Lorum ipsum'
    },
    'parabolicmirror': {
        title: 'Parabolic Mirror',
        text: 'Once again, insert Lorum ipsum'
    },
    'tungsten': {
        title: 'Tungsten',
        text: 'Once again, insert Lorum ipsum'
    },
    'detectionchamber': {},
    'cdflatrotatablemirror': {
        title: 'Flat Rotatable Mirror',
        text: 'Once again, insert Lorum ipsum'
    },
    'samplecompartment': {
        title: 'Sample Compartment',
        text: 'Once again, insert Lorum ipsum'
    },
    'mct': {
        title: 'MCT',
        text: 'Once again, insert Lorum ipsum'
    },
    'lnsb': {
        title: 'LNSB',
        text: 'Once again, insert Lorum ipsum'
    },
    'cdflatrotatablemirror2': {
        title: 'Flat Rotatable Mirror',
        text: 'Once again, insert Lorum ipsum'
    },
    'fixedcornercube': {
        title: 'Fixed Cornder Cube',
        text: 'Once again, insert Lorum ipsum'
    },
    'fixedmirror': {
        title: 'Fixed Mirror',
        text: 'Once again, insert Lorum ipsum'
    },
    'laser': {
        title: 'Laser',
        text: 'Once again, insert Lorum ipsum'
    },
    'movablecornercube': {
        title: 'Movable Corner Cube',
        text: 'Once again, insert Lorum ipsum'
    },
    'parabolicmirrorhole': {
        title: 'Parabolic Mirror with Hole',
        text: 'Once again, insert Lorum ipsum'
    },
    'parabolicmirrorhole2': {
        title: 'Parabolic Mirror with Hole',
        text: 'Once again, insert Lorum ipsum'
    },
    'laserbeams': {}
}