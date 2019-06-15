function styleSelectedText(textarea, string) {
    $start = textarea.prop('selectionStart');
    $end = textarea.prop('selectionEnd');
    $content = textarea.val();
    $content = $content.slice(0, $start) + string + $content.slice($start, $end) + string +  $content.slice($end, $content.length);
    textarea.val($content);
    textarea.focus();
    textarea.prop('selectionStart', $end + string.length * 2);
    textarea.prop('selectionEnd', $end + string.length * 2);
} // styleSelectedText

$(document).keydown(function(e) {
    if($(document.activeElement).hasClass('wiki-edit')) {
        if(e.ctrlKey || e.metaKey) {
            // CTRL/CMD + B
            if(e.keyCode == 66) {
                styleSelectedText($(document.activeElement), '**');
                e.preventDefault();
            // CTRL/CMD + S
            } else if(e.keyCode == 83) {
                styleSelectedText($(document.activeElement), '~~');
                e.preventDefault();
            // CTRL/CMD + I
            } else if(e.keyCode == 73) {
                styleSelectedText($(document.activeElement), '*');
                e.preventDefault();
            // CTRL/CMD + ENTER
            } else if(e.keyCode == 13) {
                $(document.activeElement).closest('form').submit();
                e.preventDefault();
            // CTRL+S+A
            } else if(e.keyCode == 83 && e.keyCode == 65) {
                $('#issue-form').submit();
                e.preventDefault();
            }
        } // if
    } // if
});
