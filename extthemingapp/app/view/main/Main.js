Ext.define('ThemingApp.view.main.Main', {

    extend: 'Ext.container.Viewport',
    alias: 'widget.main',

    scrollable: true,
    layout: 'absolute',

    items: [
        {
            xtype: 'panel',
            x: 10,
            y: 10,
            ui: 'macosx',
            height: 150,
            maxWidth: 150,
            title: 'Regular Panel',
            glyph: '88@Spotifinder',
            tools: [
                {
                    xtype: 'tool'
                }
            ]
        },
        {
            xtype: 'panel',
            x: 170,
            maxWidth: 150,
            y: 10,
            frame: true,
            height: 150,
            title: 'Framed Panel',
            glyph: '88@Spotifinder',
            tools: [
                {
                    xtype: 'tool'
                }
            ]
        },
        {
            xtype: 'panel',
            x: 330,
            y: 10,
            height: 150,
            width: 150,
            collapsed: true,
            collapsible: true,
            title: 'Collapsed Panel'
        },

        {
            xtype: 'tabpanel',
            x: 490,
            y: 10,
            height: 150,
            width: 200,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Tab 1'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3',
                    tabConfig: {
                        xtype: 'tab',
                        disabled: true
                    }
                }
            ]
        },
        {
            xtype: 'tabpanel',
            ui: 'alternative',
            x: 700,
            y: 10,
            frame: true,
            plain: true,
            height: 150,
            width: 200,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Tab 1'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3',
                    tabConfig: {
                        xtype: 'tab',
                        disabled: true
                    }
                }
            ]
        },
        {
            xtype: 'tabpanel',
            x: 910,
            y: 10,
            height: 150,
            width: 200,
            activeTab: 0,
            plain: true,
            items: [
                {
                    xtype: 'panel',
                    title: 'Tab 1'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3',
                    tabConfig: {
                        xtype: 'tab',
                        disabled: true
                    }
                }
            ]
        },

        {
            xtype: 'menu',
            x: 10,
            y: 170,
            floating: false,
            width: 120,
            items: [
                {
                    xtype: 'menuitem',
                    text: 'Menu Item',
                    focusable: true
                },
                {
                    xtype: 'menuitem',
                    disabled: true,
                    text: 'Menu Item',
                    focusable: true
                },
                {
                    xtype: 'menuseparator',
                    focusable: true
                },
                {
                    xtype: 'menucheckitem',
                    text: 'Menu Item',
                    focusable: true
                },
                {
                    xtype: 'menucheckitem',
                    text: 'Menu Item',
                    focusable: true,
                    checked: true
                }
            ]
        },

        {
            xtype: 'panel',
            x: 10,
            y: 330,
            width: 280,
            items: [
            {
                xtype: 'checkboxfield',
                fieldLabel: 'Checkbox',
                checked: true
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Date Field'
            },
            {
                xtype: 'filefield',
                fieldLabel: 'File Upload'
            },
            {
                xtype: 'combobox',
                fieldLabel: 'ComboBox',
                store: [
                    'icecream',
                    'chocolate',
                    'popcorn'
                ]
            }]
        },

        {
            xtype: 'fieldset',
            x: 300,
            y: 380,
            title: 'legend',
            layout: 'form',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Text',
                allowBlank: false,
                maxLength: 2,
                value: "2222",
                emptyText: "placeholder"
            }],
            width: 260
        },
        {
            xtype: 'htmleditor',
            x: 10,
            y: 510,
            height: 150,
            width: 650,
            fieldLabel: 'HTML Editor'
        },
        {
            xtype: 'numberfield',
            x: 10,
            y: 660,
            fieldLabel: 'Number Field'
        },
        {
            xtype: 'radiofield',
            x: 10,
            y: 690,
            fieldLabel: 'Radio'
        },
        {
            xtype: 'radiofield',
            x: 150,
            y: 690,
            fieldLabel: 'Radio',
            checked: true
        },
        {
            xtype: 'textareafield',
            x: 640,
            y: 685,
            fieldLabel: 'Text Area',
            width: 320
        },
        {
            xtype: 'textfield',
            x: 330,
            y: 720,
            value: 'Default',
            fieldLabel: 'Text Field'
        },
        {
            xtype: 'timefield',
            x: 330,
            y: 685,
            fieldLabel: 'Time Field'
        },
        {
            xtype: 'colormenu',
            x: 620,
            y: 170,
            floating: false,
            height: 150,
            width: 150
        },
        /*{
            xtype: 'datemenu',
            x: 780,
            y: 170,
            floating: false,
            width: 300
        },*/
                {
            xtype: 'gridpanel',
            x: 780,
            y: 170,
            height: 250,
            width: 450,
            title: 'Grid Panel',
            bbar: [{
                xtype: 'pagingtoolbar',
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'gender', {
                        name: 'age',
                        type: 'int'
                    }],
                    data: [
                        {
                            name: 'Joe',
                            gender: 'male',
                            age: 36
                        },
                        {
                            name: 'Anna',
                            gender: 'female',
                            age: 29
                        },
                        {
                            name: 'Frederick',
                            gender: 'male',
                            age: 74
                        },
                        {
                            name: 'Joe',
                            gender: 'male',
                            age: 36
                        },
                        {
                            name: 'Anna',
                            gender: 'female',
                            age: 29
                        },
                        {
                            name: 'Frederick',
                            gender: 'male',
                            age: 74
                        }
                    ]
                }),
                displayInfo: true,
                displayMsg : 'Displaying topics {0} - {1} of {2}'
            }],
 store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'gender', {
                        name: 'age',
                        type: 'int'
                    }],
                    data: [
                        {
                            name: 'Joe',
                            gender: 'male',
                            age: 36
                        },
                        {
                            name: 'Anna',
                            gender: 'female',
                            age: 29
                        },
                        {
                            name: 'Frederick',
                            gender: 'male',
                            age: 74
                        },
                        {
                            name: 'Joe',
                            gender: 'male',
                            age: 36
                        },
                        {
                            name: 'Anna',
                            gender: 'female',
                            age: 29
                        },
                        {
                            name: 'Frederick',
                            gender: 'male',
                            age: 74
                        }
                    ]
                }),
			selType : 'checkboxmodel',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'gender',
                    text: 'Gender'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'age',
                    text: 'Num'
                },
                {
			        xtype : 'templatecolumn',
			        dataIndex: 'age',
			        text: 'New',
			        flex : 1,

			        tpl: new Ext.XTemplate(
			        	'<span class="{[this.isPos(values)]}">{age}</span>',
			        	{
			        		isPos: function(values){
           						if (values.age >= 30) {
           							return "plus";
           						} else {
           							return "min";
           						}
			        		}
			        	}
			        )
			    }
            ]
        },


        {
            xtype: 'button',
            x: 680,
            y: 450,
            text: 'Small Button'
        },
        {
            xtype: 'button',
            x: 680,
            y: 600,
            disabled: true,
            text: 'Disabled Button'
        },
        {
            xtype: 'button',
            x: 680,
            y: 490,
            scale: 'medium',
            text: 'Medium Button'
        },
        {
            xtype: 'button',
            x: 680,
            y: 540,
            scale: 'large',
            text: 'Large Button'
        },
        {
            xtype: 'progressbar',
            x: 570,
            y: 390,
            width: 200,
            value: 0.4
        },
        {
            xtype: 'toolbar',
            x: 10,
            y: 800,
            maxWidth: 850,
            items: [
                {
                    xtype: 'button',
                    text: 'Small Button'
                },
                {
                    xtype: 'button',
                    scale: 'medium',
                    text: 'Medium Button'
                },
                {
                    xtype: 'button',
                    scale: 'large',
                    text: 'Large Button'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    disabled: true,
                    text: 'Disabled Button'
                },
                {
                    xtype: 'cycle',
                    showText: true,
                    menu: {
                        xtype: 'menu',
                        width: 120,
                        items: [
                            {
                                xtype: 'menucheckitem',
                                text: 'Menu Item',
                                focusable: true
                            },
                            {
                                xtype: 'menucheckitem',
                                text: 'Menu Item',
                                focusable: true
                            },
                            {
                                xtype: 'menucheckitem',
                                text: 'Menu Item',
                                focusable: true
                            }
                        ]
                    }
                },
                {
                    xtype: 'splitbutton',
                    text: 'Split Button'
                }
            ]
        },
        {
            xtype: 'treepanel',
            x: 370,
            y: 170,
            height: 200,
            width: 200,
            title: 'Tree Panel',
            store: Ext.create('Ext.data.TreeStore', {
                fields: [
                    {
                        type: 'string',
                        name: 'id'
                    },
                    {
                        type: 'string',
                        name: 'text'
                    }
                ],
                root: {
                    expanded: true,
                    children: [
                        {
                            text: 'Trees',
                            leaf: false,
                            expanded: true,
                            children: [
                                {
                                    text: 'Oak',
                                    leaf: true
                                },
                                {
                                    text: 'Pine',
                                    leaf: true
                                }
                            ]
                        }
                    ]
                }
            })
        },
        {
            xtype: 'cycle',
            x: 840,
            y: 450,
            showText: true,
            menu: {
                xtype: 'menu',
                width: 120,
                items: [
                    {
                        xtype: 'menucheckitem',
                        text: 'Menu Item',
                        focusable: true
                    },
                    {
                        xtype: 'menucheckitem',
                        text: 'Menu Item',
                        focusable: true
                    },
                    {
                        xtype: 'menucheckitem',
                        text: 'Menu Item',
                        focusable: true
                    }
                ]
            }
        },
        {
            xtype: 'splitbutton',
            x: 840,
            y: 490,
            text: 'Split Button'
        },
        {
            xtype: 'button',
            x: 840,
            y: 570,
            ui: 'confirm',
            text: 'ui: confirm'
        },
        {
            xtype: 'button',
            x: 840,
            y: 610,
            ui: 'back',
            text: 'ui: back'
        },
        {
            xtype: 'button',
            x: 840,
            y: 680,
            ui: 'forward',
            text: 'ui: forward'
        },
        {
            xtype: 'button',
            x: 980,
            y: 440,
            ui: 'round',
            text: 'round: small'
        },
        {
            xtype: 'button',
            x: 980,
            y: 470,
            glyph: '88@Spotifinder',
            scale: 'medium',
            ui: 'round',
            text: 'round: medium'
        },
        {
            xtype: 'button',
            x: 980,
            y: 510,
            scale: 'large',
            ui: 'round',
            text: 'round: large'
        },
        {
            xtype: 'button',
            x: 980,
            y: 640,
            ui: 'gray',
            text: 'gray: small'
        },
        {
            xtype: 'button',
            x: 980,
            y: 670,
            glyph: '88@Spotifinder',
            scale: 'medium',
            ui: 'gray',
            text: 'gray: medium'
        },
        {
            xtype: 'button',
            x: 980,
            y: 710,
            scale: 'large',
            ui: 'gray',
            text: 'large: large'
        },
        {
            xtype: 'button',
            x: 1180,
            y: 640,
            ui: 'roundorange',
            text: 'roundorange: small'
        },
        {
            xtype: 'button',
            x: 1180,
            y: 670,
            glyph: '88@Spotifinder',
            scale: 'medium',
            ui: 'roundorange',
            text: 'roundorange: medium'
        },
        {
            xtype: 'button',
            x: 1180,
            y: 710,
            scale: 'large',
            ui: 'roundorange',
            text: 'roundorgange: large'
        },
        {
            xtype: 'panel',
            x: 10,
            y: 870,
            height: 500,
            width: 500,
            title : 'BorderLayout Panel',
            tools: [
                {type:'close'},
                {type:'minimize'},
                {type:'maximize'},
                {type:'restore'},
                {type:'gear'},
                {type:'pin'},
                {type:'unpin'},
                {type:'right'},
                {type:'left'},
                {type:'down'},
                {type:'refresh'},
                {type:'minus'},
                {type:'plus'},
                {type:'help'},
                {type:'search'},
                {type:'save'},
                {type:'print'}
            ],
            layout: {
                type: 'border'
            },
            collapsible: true,

            defaults: {
                collapsible: true,
                split      : true
            },

            items: [
                {
                    title  : 'North',
                    region : 'north',
                    html   : 'North',
                    height      : 100
                },
                {
                    title       : 'South',
                    region      : 'south',
                    html        : 'South',
                    collapseMode: 'mini',
                    height      : 100
                },
                {
                    title       : 'West',
                    region      : 'west',
                    html        : 'West',
                    collapseMode: 'mini',
                    width       : 150
                },
                {
                    title  : 'East',
                    region : 'east',
                    html   : 'East',
                    width  : 150
                },
                {
                    title      : 'Center',
                    region     : 'center',
                    collapsible: false,
                    html       : 'Center'
                }
            ]
        }, {
            x: 520,
            y: 870,
            xtype: 'panel',

            title : 'Accordion',
            collapsible: true,

            layout: 'accordion',

            items: [
                {
                    title: 'Item 1',
                    html: 'Some content'
                }, {
                    title: 'Item 2',
                    html : 'Some content'
                }, {
                    title: 'Item 3',
                    html: 'Some content'
                }
            ]
        }, {
            xtype: 'component',
            x: 520,
            y: 1100,
            style: 'background:transparent;overflow:hidden;',
            html: '<div style="margin:20px">Resizable handles</div>',
            resizable: {
                handles: 'all',
                pinned: true
            }
        },
        {
            xtype: 'multislider',
            x: 520,
            y: 1200,
            width: 400,
            fieldLabel: 'Multi Slider',
            values: [
                10,
                40
            ]
        }
    ]
});
