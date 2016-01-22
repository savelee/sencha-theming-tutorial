Ext.define('FeedViewer.view.feed.ListController',{
    extend: 'FeedViewer.view.feed.BaseListController',
    alias: 'controller.feedlist',

    requires: [
        'Ext.fx.Anim'
    ],

    /**
     * React to a feed being removed
     */
    onRemoveFeedClick: function (view, recordIndex, cellIndex, item, e, activeFeed) {
        var feedGrid = this.lookupReference('feedGrid');

        this.animateNode(feedGrid.getView().getNode(activeFeed), 1, 0, {
            afteranimate: function() {
                activeFeed.drop();
            }
        });

        this.fireViewEvent('feedremove', activeFeed.get('title'), activeFeed.get('url'));
    },

    /**
     * React to a feed attempting to be added
     */
    onAddFeedClick: function () {
        var me = this;

        Ext.create({
            xtype: 'feedadd',
            autoShow: true,
            closeAction: 'destroy',

            listeners: {
                addfeed: function (feedAdd, feed) {
                    var feedGrid = me.lookupReference('feedGrid');

                    me.addFeed(feed);  // see base class
                    me.animateNode(feedGrid.getView().getNode(feed), 0, 1, {
                        afteranimate: function() {
                            feedGrid.setSelection(feed);
                        }
                    });
                }
            }
        });
    },

    /**
     * Animate a node in the view when it is added/removed
     * @param {Mixed} el The element to animate
     * @param {Number} start The start opacity
     * @param {Number} end The end opacity
     * @param {Object} listeners (optional) Any listeners
     */
    animateNode: function (el, start, end, listeners) {
        Ext.create({
            xclass: 'Ext.fx.Anim',
            target: Ext.getDom(el),
            duration: 500,
            from: {
                opacity: start
            },
            to: {
                opacity: end
            },
            listeners: listeners
        });
    }
});
