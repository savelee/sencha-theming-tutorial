/**
 * A form to add feeds.
 */
Ext.define('FeedViewer.view.main.FeedForm', {
    extend: 'Ext.form.Panel',
    xtype: 'feedform',

    requires: [
        'Ext.Button',
        'Ext.field.Select',
        'Ext.form.FieldSet',
        'Ext.Toolbar'
    ],

    title: 'New RSS Feed',

    items: [{
        xtype: 'fieldset',
        items: [
            {
                xtype: 'selectfield',
                label: 'Select a new feed',
                labelAlign: 'top',
                allowBlank: false,
                name: 'feedUrl',
                options: [
                    {value : 'http://rssfeeds.usatoday.com/usatoday-NewsTopStories', text : 'USA Today Top Stories'},
                    {value : 'http://sports.espn.go.com/espn/rss/news', text : 'ESPN Top News'},
                    {value : 'http://news.google.com/news?ned=us&topic=t&output=rss', text : 'Sci\/Tech - Google News'},
                    {value : 'http://rss.news.yahoo.com/rss/software', text : 'Yahoo Software News'}
                ]
            }
        ]
    },{
        xtype: 'toolbar',
        docked: 'bottom',
        items: [{
            xtype: 'button',
            reference: 'savebutton',
            action: 'save',
            ui: 'action',
            text: 'Add'
        }]
    }]
});
