/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

function getPictures (url, done) {
  $.ajax ({
    url: url ? url : window.apis.getPicturesUrl,
    data: {},
    async: true, cache: false, dataType: 'json', type: 'GET',
    beforeSend: function () {}
  })
  .done (function (result) {
    done (!result.status ? { status: true, pictures: window.pictures, pagination: '' } : result);
  })
  .fail (function (result) {
    done ({ status: true, pictures: window.pictures, pagination: '' });
  })
  .complete (function (result) {});
}
function initPictures (url, $balls) {
  getPictures (url, function (result) {
    $balls.nextAll ('ul').remove ();
    $balls.empty ().append (result.pictures.map (function (t) {
          return $('<div />').addClass ('ball').append (
            $('<a />').addClass ('border').addClass ('i_c').attr ('href', window.url + 'content.html#' + t.token).append (
              $('<img />').addClass ('cover').attr ('src', t.cover)).imgLiquid ({verticalAlign: 'center'})).append (
            $('<div />').addClass ('btns').addClass ('n3').append (
              $('<a />').attr ('title', '取得鏈結網址').addClass ('icon-link').data ('url', window.url + 'content.html#' + t.token)).append (
              $('<a />').attr ('title', '檢視地圖位置').addClass ('icon-location').data ('url', window.url + 'location.html#' + t.token).attr ('disabled', t.location == 1 ? false : true)).append (
              $('<a />').attr ('title', '分享至臉書').addClass ('icon-share2').data ('url', window.url + 'content.html#' + t.token))).append (
            $('<div />').addClass ('views').addClass ('icon-eye2').text (t.pv)).append (
            t.rotated ? $('<div />').addClass ('rotate').addClass ('icon-3d_rotation') : null);
        })).add ($(result.pagination)).prependTo (window.container);
    window.hideLoading ();
  });
}

$(function () {
  var $url = $('<input />').attr ('type', 'text').addClass ('url').click (function () { $(this).select (); });
  var $copyMsg = $('<div />').addClass ('m').removeClass ('s');
  var $copyButton = $('<button />').addClass ('copy').text ('複製').click (function () {
    window.getSelection ().removeAllRanges ();
    var range = document.createRange ();
    range.selectNode ($url.get (0));
    window.getSelection ().addRange (range);

    try {
      if (document.execCommand ('copy'))
        $copyMsg.text ('已經複製囉！').addClass ('s');
      else throw 'GG.. 複製失敗..';
    } catch (err) {
      $copyMsg.text (err).addClass ('s');
    }
    window.getSelection ().removeAllRanges ();
  });
  var $cx = $('<div />').addClass ('icon-x').addClass ('d').click (function () {
    $linkPanel.removeClass ('s');
    $url.val ('');
    $copyMsg.text ('').removeClass ('s');
  });
  var $linkPanel = $('<div />').attr ('id', 'link_panel').append ($('<div />').addClass ('c').click (function () {
    $cx.click ();
  })).append ($('<div />').addClass ('pl').append ($('<div />').addClass ('l').append ($('<div />').append ($url).append ($copyButton)).append ($copyMsg)).append ($cx));
  window.container.append ($linkPanel);

  var $balls = $('<div />').addClass ('balls');
  initPictures ('', $balls);

  window.container.on ('click', '.pagination a', function () {
    window.showLoading ();
    initPictures ($(this).attr ('href'), $balls);
    return false;
  });
  window.container.on ('click', '.icon-link', function () {
    $linkPanel.addClass ('s');
    $url.val ($(this).data ('url'));
    $copyMsg.text ('已經複製囉！').removeClass ('s');
  });
  window.container.on ('click', '.icon-share2', function () {
    window.open ('https://www.facebook.com/sharer/sharer.php?u=' + $(this).data ('url'), '分享', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' + (window.screen ? Math.round(screen.width / 2 - 275) : 100));
  });
  window.container.on ('click', '.icon-location', function () {
    if (!$(this).attr ('disabled'))
      $.fancybox ({
          href: $(this).data ('url'),
          type: 'iframe',
          padding: 0,
          margin: 30,
          width: '100%',
          maxWidth: '1200',
      });
  });
});