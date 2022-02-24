rivets.binders.cloak = {
    priority: -1000,
    bind: function (el) {
        el.setAttribute('rv-cloak', 'uncloak');
    }
}

rivets.binders['cloak-child'] = {
    priority: -1000,
    bind: function (el) {
        el.setAttribute('rv-cloak-child', 'uncloak');
    }
}