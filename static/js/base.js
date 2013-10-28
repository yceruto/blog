// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//Init bootstrap tooltip
function InitTooltip() {
    $('a[data-toggle="tooltip"], button[data-toggle="tooltip"], th[data-toggle="tooltip"], td[data-toggle="tooltip"], input[data-toggle="tooltip"], li[data-toggle="tooltip"]').each(function(){
        $(this).tooltip({
            container: 'body'
        });
    });
}

!function ($) {
    
}(window.jQuery);

// Place any jQuery/helper plugins in here.