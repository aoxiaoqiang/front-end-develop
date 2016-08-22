$(function() {
	/*
	* 根据当前URL初始化当前的导航位置
	*/
    function initCurrentLink() {
        var current_url = window.location.href,
            nav_index = ['index', 'intopark', 'news', 'geology', 'research', 'travel'],
            current_index = 0;
        for (var i = 0; i < nav_index.length; i++) {
            if (current_url.indexOf(nav_index[i]) != -1) {
                current_index = i;
                break;
            }
        }
        $('.menu ul li').removeClass('current').eq(current_index).addClass('current');
    }

    /*
    * 添加导航链接鼠标经过事件效果
    */
    function addAnimation() {
        var $t, leftX, newWidth;

        $('.menu ul').append('<div class="block"></div>');
        var $block = $('.block');

        $block.width($(".current").width()).css('left', $('.current a').position().left).data('rightLeft', $block.position().left).data('rightWidth', $block.width());

        $('.menu ul li').find('a').hover(function() {
            $t = $(this);
            leftX = $t.position().left;
            newWidth = $t.parent().width();

            $block.stop().animate({
                left: leftX,
                width: newWidth
            }, 300);
        }, function() {
            $block.stop().animate({
                left: $block.data('rightLeft'),
                width: $block.data('rightWidth')
            }, 300)
        })
    }

    initCurrentLink();
    addAnimation();

})
