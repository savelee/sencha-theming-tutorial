/**
 * Shows the detail of a feed post.
 */
Ext.define('FeedViewer.view.feed.Post', {
    extend: 'Ext.panel.Panel',
    xtype: 'feedpost',

    mixins: [
        'Ext.mixin.Responsive'
    ],

    requires : [
        'Ext.app.ViewModel',
        'Ext.toolbar.Toolbar'
    ],

    cls: 'feed-post preview',
    scrollable: true,

    config: {
        rssItem: null
    },

    viewModel: {
        data: {
            feed: null
        }
    },

    tabConfig: {
        cls: 'tab-feed-post'
    },

    bind: {
        data: '{feed}',
        inTab: false
    },

    listeners: {
        click: 'onLinkDelegate',
        element: 'body',
        delegate: 'a',
        scope: 'this'
    },

    tbar: {
        cls: 'navigation feed-post-toolbar',
        items: [{
            text: 'Go to post',
            iconCls: 'post-go x-fa fa-external-link',
            bind: {
                href: '{feed.link}'
            }
        }, {
            action: 'openInTab',
            text: 'View in new tab',
            iconCls: 'tab-new x-fa fa-binoculars',
            bind: {
                hidden: '{inTab}'
            }
        }]
    },

    tpl: [
        '<div class="post-data">',
            '<tpl if={publishedDate}><span class="post-date">{publishedDate:date("M j, Y, g:i a")}</span></tpl>',
            '<tpl if={title}><h3 class="post-title">{title}</h3></tpl>',
            '<tpl if={author}><h4 class="post-author">{author:this.defaultAuthor}</h4></tpl>',
        '</div>',
        '<div class="post-body">{content:stripScripts}</div>',
        {
            defaultAuthor: function(v) {
                return v ? 'By: ' + v : '';
            }
        }
    ],

    /**
     * Set the active RSSItem for the Templated output
     * @param {FeedViewer.model.RSSItem} rssItem The feed item
     * @param {FeedViewer.model.RSSItem} prevItem The previous feed item
     */
    updateRssItem: function (rssItem) {
        var scroll = this.getScrollable();
        if (rssItem && rssItem.isRssItem) {
            this.getViewModel().set('feed', rssItem);
            if (scroll) {
                scroll.scrollTo(0, 0);
            }
        }
    },

    /**
     * Ensure all click/tapped Feed content links are targeted to new browser tab
     * @param {Ext.event.Event} e
     * @param {HTMLElement} target
     */
    onLinkDelegate: function (e, target) {
        Ext.fly(target).set({target : '_blank'});
    }
});
