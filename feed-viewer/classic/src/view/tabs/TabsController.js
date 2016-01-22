Ext.define('FeedViewer.view.tabs.TabsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.feedtabs',

    listen: {
        controller: {
            feedlist: {
                feedselect: 'onFeedSelect'
            }
        },

        // These listeners "reach into" the sub-views to listen to their
        // toolbar buttons.
        component: {
            'feeddetail feedpost button[action=openInTab]': {
                click: 'onPostInTab'
            },
            'feeddetail button[action=openAll]': {
                click: 'onOpenAll'
            }
        }
    },

    /**
     * Reacts to a feed being selected.
     */
    onFeedSelect: function (controller, feed) {
        var feedDetails = this.getView().setActiveTab(0);
        feedDetails.setFeed(feed);
    },

    /**
    * This method inserts rss news items into the TabPanel (if not already present)
    * and sets the active tab to the first item processed or duplicated
    * @param {FeedViewer.model.RSSItem/FeedViewer.model.RSSItem[]} rssItems
    */
    postToTab: function (rssItems) {
        var items = [],
            parent = this.getView(),
            duplicate;

        if (!parent) {
            return;
        }

        Ext.each(Ext.Array.from(rssItems),
           function (rssItem) {
               var title = rssItem.get('title'),
                   link = rssItem.get('link'),
                   item = this.child('feedpost[link="' + link + '"]');

               if (!item) {
                   items.push({
                       xtype: 'feedpost',
                       title: title,
                       link: link,
                       closable: true,
                       rssItem: rssItem,
                       viewModel: {
                           data: {
                               inTab: true
                           }
                       }
                   });
               } else {
                   duplicate = duplicate || item;
               }
            },
            parent
        );

        Ext.suspendLayouts();

        if (items.length) {
            items = parent.insert(1, items);
        }
        parent.setActiveTab(items[0] || duplicate);

        Ext.resumeLayouts(true);
    },

    /**
     * Opens all unique RSS Feed items available in the grid into tabs
     * @param {Ext.button.Button} button
     */
    onOpenAll: function (button) {
        this.postToTab(
            this.getView().down('feedposts').getStore().getRange()
        );
    },

    /**
     * Loads the currently selected RSS Feed Item into a unique tab
     * @param button
     */
    onPostInTab: function(button) {
        var post = button.up('feedpost'),
            feedItem = post.getRssItem();

        this.postToTab(feedItem);
    }
});
