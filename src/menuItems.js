export const menuItems = [
    {
        label: 'File',
        submenu: [
            {
                label:'Open',
                button: false
            },
            {
                label:'Save As',
                button: false
            },
            {
                label:'Print',
                button: false
            }
        ]
    },
    {
        label: 'Collect',
        submenu: [
            {
                label:'Experimental Setup',
                link:'/Experimental-Setup',
                button: false
            },
            {
                label:'Aquire Background Sample',
                button: false
            },
            {
                label:'Stop Aquisition',
                button: false
            }
        ]
    },
    {
        label: 'Analyze',
        submenu: [
            {
                label:'Find Peaks',
                button: false
            },
        ]
    },
    {
        label: 'Window',
        submenu: [
            {
                label:'Instrument',
                link:'/',
                button: false
            },
            {
                label:'Spectrum',
                button: false
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label:'Tutorial',
                button: false
            },
            {
                label:'Usage',
            },
            {
                label:'About',
                button: true,
                title: 'About The FTIR',
                text: 'Insert Lorum ipsum text'
            }
        ]
    }
]