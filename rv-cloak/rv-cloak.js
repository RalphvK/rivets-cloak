rivets.binders.cloak = {
    priority: -1000,
    bind: function (el) {
        el.setAttribute('rv-cloak', 'uncloak');
    }
}

rivets.binders['cloak-children'] = {
    priority: -1000,
    bind: function (el) {
        el.setAttribute('rv-cloak-children', 'uncloak');
    }
}