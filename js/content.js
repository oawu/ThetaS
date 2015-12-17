/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */
 
function inFailDemoData (token) {
  var picture = window.pictures.filter (function (t) {
    return t.token == token;
  });

  return picture[0] ? picture[0] : null;
}
function getPicture (token, done) {
  var picture = inFailDemoData (token);

  if (picture)
    return done ({ status: true, picture: picture });

  $.ajax ({
    url: window.apis.getPictureUrl,
    data: { token: token },
    async: true, cache: false, dataType: 'json', type: 'GET',
    beforeSend: function () {}
  })
  .done (function (result) {
    if (!result.status) window.location.assign (window.url);
    done (result);
  })
  .fail (function (result) {
    window.location.assign (window.url);
  })
  .complete (function (result) {});
}
$(function () {

  var $move = $('<div />').attr ('id', 'move').addClass ('icon-move').text ('試著用拖拉變更視角').prependTo (window.container).bind ('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () { $(this).remove (); });
  var $ball = $('<div />').attr ('id', 'ball');
  var ball = $ball.get (0);

  function initPicture (token, b) {
    getPicture (token, function (result) {
      $ball.empty ().nextAll ('#views, #share, #prev, #next').remove ();
      if (b !== 1) window.showLoading ();
      $ball.add ($('<div />').attr ('id', 'views').addClass ('icon-eye2').text (result.picture.pv))
           .add ($('<button />').attr ('id', 'share').addClass ('icon-share2').attr ('title', '分享至臉書').data ('url', window.url + 'content.html#' + result.picture.token))
           .add (result.picture.prev ? $('<a />').attr ('id', 'prev').addClass ('icon-chevron-left').attr ('title', '上一張').attr ('href', window.url + 'content.html#' + result.picture.prev) : null)
           .add (result.picture.next ? $('<a />').attr ('id', 'next').addClass ('icon-chevron-right').attr ('title', '下一張').attr ('href', window.url + 'content.html#' + result.picture.next) : null)
           .prependTo (window.container);


      ball.viewer = new ThetaViewer (ball, null, result.picture.position, '000000', 1, {max: 500, min: 100});
      ball.viewer.autoRotate = result.picture.rotated;
      ball.viewer.images = [result.picture.url];
      ball.viewer.load ();
      ball.viewer.position = result.picture.position;

      setTimeout (function () { $move.remove (); }, 3500);
      window.hideLoading ();
    });
  }
  window.onhashchange = function (b) {
    var hash = window.location.hash.trim ().slice (1);
    if (!hash)
      window.location.assign (window.url);
    initPicture (hash, b);
  };

  window.onhashchange (1);

  window.container.on ('click', '.icon-share2', function () {
    window.open ('https://www.facebook.com/sharer/sharer.php?u=' + $(this).data ('url'), '分享', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' + (window.screen ? Math.round(screen.width / 2 - 275) : 100));
  });
});