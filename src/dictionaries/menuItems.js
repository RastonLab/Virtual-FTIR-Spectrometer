export const menuItems = [
    {
        label: 'File',
        submenu: [
            {
                label:'Open',
            },
            {
                label:'Save As',
            },
            {
                label:'Print',
            }
        ]
    },
    {
        label: 'Collect',
        submenu: [
            {
                label:'Aquire Background Sample',
            },
            {
                label:'Stop Aquisition',
            }
        ]
    },
    // {
    //     label: 'Analyze',
    //     submenu: [
    //         {
    //             label:'Find Peaks',
    //         },
    //     ]
    // },
    {
        label: 'Window',
        submenu: [
            {
                label:'Experimental Setup',
                link:'/experimental-setup',
            },
            {
                label:'Instrument',
                link:'/instrument',
            },
            {
                label:'Spectrum',
                link:'/spectrum',
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label:'Tutorial',
            },
            {
                label:'Usage',
            },
            {
                label:'About',
                button: true,
                title: 'About The FTIR',
                text: <p>Insert Lorum ipsum text<br/></p>
            }
        ]
    }
]
