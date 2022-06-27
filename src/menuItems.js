export const menuItems = [
    {
        label: 'File',
        submenu: [
            {
                label:'Open',
                link: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf',
                target: "_blank"
            },
            {
                label:'Save As'
            },
            {
                label:'Print'
            }
        ]
    },
    {
        label: 'Collect',
        submenu: [
            {
                label:'Experimental Setup'
            },
            {
                label:'Aquire Background Sample'
            },
            {
                label:'Stop Aquisition'
            }
        ]
    },
    {
        label: 'Analyze',
        submenu: [
            {
                label:'Find Peaks'
            },
        ]
    },
    {
        label: 'Window',
        submenu: [
            {
                label:'Instrument'
            },
            {
                label:'Spectrum'
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label:'Tutorial'
            },
            {
                label:'Usage'
            },
            {
                label:'About'
            }
        ]
    }
]