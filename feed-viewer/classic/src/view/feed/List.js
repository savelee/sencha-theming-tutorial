/**
 * Shows a list of available feeds. Also has the ability to add/remove and load feeds.
 */
Ext.define('FeedViewer.view.feed.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'feedlist',
    controller: 'feedlist',

    requires : [
        'Ext.toolbar.Toolbar',
        'Ext.grid.column.Action',
        'Ext.button.Button'
    ],

    layout: 'fit',
    viewModel: {
        stores: {
            feeds: {
                type: 'feeds',
                autoLoad: true,
                listeners: {
                    load: 'selectFirstFeed',
                    remove: 'selectFirstFeed',
                    delay: 1 // let the drop clear the selection first
                }
            }
        }
    },

    tbar: [
        {
            handler: 'onAddFeedClick',
            text: 'Add',
            iconCls: 'feed-add x-fa fa-plus'
        },
        {
            handler: 'onRemoveFeedClick',
            text: 'Remove',
            iconCls: 'feed-remove x-fa fa-minus',
            bind: {
                disabled: '{!feedGrid.selection}'
            }
        }
    ],

    items: [
        {
            xtype: 'grid',
            reference: 'feedGrid',
            selModel: {
                mode: 'SINGLE',
                listeners: {
                    select: 'onFeedSelection'
                }
            },
            bind: {
                selection: '{main.currentFeed}',
                store: '{feeds}'
            },

            cls: 'feed-list',
            hideHeaders: true,
            columns: [{
                text: 'Feed',
                dataIndex: 'title',
                flex: 1
            }, {
                xtype: 'actioncolumn',
                width: 25,
                stopSelection: true,
                items: [{
                    iconCls: 'feed-remove',
                    handler: 'onRemoveFeedClick'
                }]
            }]
        }
    ]
});
