/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */
 
$(function () {
  $('<div />').addClass ('about').append (
    $('<h2 />').text ("關於 OA's Theta S 全景相簿")).append (
    $('<div />').html ("作者名稱 - <a href='http://www.ioa.tw/' target='_blank'>OA Wu</a>")).append (
    $('<div />').html ("E-mail - <a href='mailto:comdan66@gmail.com'>comdan66@gmail.com</a>")).append (
    $('<div />').html ("作品名稱 - <a href='http://comdan66.github.io/ThetaS/' target='_blank'>OA's ThetaS</a>")).append (
    $('<div />').html ("最新版本 - 1.1")).append (
    $('<div />').html ("GitHub - <a href='https://github.com/comdan66/ThetaS' target='_blank'>OA's ThetaS</a>")).append (
    $('<div />').html ("更新日期 - 2015/12/17")).prependTo (window.container);

  window.closeLoading ();
});