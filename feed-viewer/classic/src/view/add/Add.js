/**
 * Shows a dialog for creating and validating a new feed.
 */
Ext.define('FeedViewer.view.add.Add', {
    extend: 'Ext.window.Window',
    xtype: 'feedadd',
    controller: 'feedadd',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],

    plain: true,
    resizable: false,
    modal: true,
    defaultFocus: 'form',
    defaultButton: 'addFeed',

    width: 500,
    title: 'Add Feed',
    iconCls: 'feed-edit',
    layout: 'fit',

    items : [
        {
            xtype: 'form',
            bodyPadding: '12 10 10',
            reference: 'feedForm',
            border: false,
            unstyled: true,
            defaultFocus: 'combo',
            defaultButton: 'addFeed',

            items: [{
                xtype: 'combo',
                anchor: '100%',
                reference: 'feedUrl',
                emptyText: 'Select or enter the URL of the feed to add',
                labelAlign: 'top',
                msgTarget: 'under',
                valueField: 'field1',
                allowBlank: false,
                store: [
                    ['http://rssfeeds.usatoday.com/usatoday-NewsTopStories', 'USA Today Top Stories'],
                    ['http://sports.espn.go.com/espn/rss/news', 'ESPN Top News'],
                    ['http://news.google.com/news?ned=us&topic=t&output=rss', 'Sci/Tech - Google News'],
                    ['http://rss.news.yahoo.com/rss/software', 'Yahoo Software News']
                ],
                getInnerTpl: function () {
                    return '<div class="feed-picker-url">{field1}</div><div class="feed-picker-title">{field2}</div>';
                }
            }],

            dockedItems: [{
              xtype: 'panel',
              dock: 'bottom',
              padding: 10,
              frame: true,
              items: [
                {
                    xtype: 'button',
                    text: 'Add Feed',
                    ui: 'round',
                    reference: 'addFeed',
                    formBind: true,
                    handler: 'onAddClick'
                }, {
                    xtype: 'button',
                    ui: 'round',
                    text: 'Cancel',
                    handler: 'onClose'
                }
              ]
            }]
        }
    ]
});
