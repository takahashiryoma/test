$(document).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
      $("#header").removeClass("topHeader");
  } else {
      $("#header").addClass("topHeader");
  }
});


var areaLinks = {
  1:"https://www.pref.hokkaido.lg.jp/",
  2:"https://www.pref.aomori.lg.jp/",
  3:"https://www.pref.hokkaido.lg.jp/",
  4:"https://www.pref.hokkaido.lg.jp/",
  5:"https://www.pref.hokkaido.lg.jp/",
  6:"https://www.pref.hokkaido.lg.jp/",
  7:"https://www.pref.hokkaido.lg.jp/",
  8:"https://www.pref.hokkaido.lg.jp/",
  9:"https://www.pref.hokkaido.lg.jp/",
  10:"https://www.pref.hokkaido.lg.jp/",
  11:"https://www.pref.hokkaido.lg.jp/",
  12:"https://www.pref.hokkaido.lg.jp/",
  13:"https://www.pref.hokkaido.lg.jp/",
  14:"https://www.pref.hokkaido.lg.jp/",
  15:"https://www.pref.hokkaido.lg.jp/",
  16:"https://www.pref.hokkaido.lg.jp/",
  17:"https://www.pref.hokkaido.lg.jp/",
  18:"https://www.pref.hokkaido.lg.jp/",
  19:"https://www.pref.hokkaido.lg.jp/",
  20:"https://www.pref.hokkaido.lg.jp/",
  21:"https://www.pref.hokkaido.lg.jp/",
  22:"https://www.pref.hokkaido.lg.jp/",
  23:"https://www.pref.hokkaido.lg.jp/",
  24:"https://www.pref.hokkaido.lg.jp/",
  25:"https://www.pref.hokkaido.lg.jp/",
  26:"https://www.pref.hokkaido.lg.jp/",
  27:"https://www.pref.hokkaido.lg.jp/",
  28:"https://www.pref.hokkaido.lg.jp/",
  29:"https://www.pref.hokkaido.lg.jp/",
  30:"https://www.pref.hokkaido.lg.jp/",
  31:"https://www.pref.hokkaido.lg.jp/",
  32:"https://www.pref.hokkaido.lg.jp/",
  33:"https://www.pref.hokkaido.lg.jp/",
  34:"https://www.pref.hokkaido.lg.jp/",
  35:"https://www.pref.hokkaido.lg.jp/",
  36:"https://www.pref.hokkaido.lg.jp/",
  37:"https://www.pref.hokkaido.lg.jp/",
  38:"https://www.pref.hokkaido.lg.jp/",
  39:"https://www.pref.hokkaido.lg.jp/",
  40:"https://www.pref.hokkaido.lg.jp/",
  41:"https://www.pref.hokkaido.lg.jp/",
  42:"https://www.pref.hokkaido.lg.jp/",
  43:"https://www.pref.hokkaido.lg.jp/",
  44:"https://www.pref.hokkaido.lg.jp/",
  45:"https://www.pref.hokkaido.lg.jp/",
  46:"https://www.pref.hokkaido.lg.jp/",
  47:"https://www.pref.hokkaido.lg.jp/",
};

var d = new jpmap.japanMap(document.getElementById("my-map"), {
areas: [
{code : 1, name: "北海道", color: "#7f7eda", hoverColor: "#b3b2ee", prefectures: [1]},
{code : 2, name: "青森", color: "#759ef4", hoverColor: "#98b9ff"},
{code : 3, name: "岩手", color: "#759ef4", hoverColor: "#98b9ff"},
{code : 4, name: "宮城", color: "#759ef4", hoverColor: "#98b9ff"},
{code : 5, name: "秋田", color: "#759ef4", hoverColor: "#98b9ff"},
{code : 6, name: "山形", color: "#759ef4", hoverColor: "#98b9ff"},
{code : 7, name: "福島", color: "#759ef4", hoverColor: "#98b9ff"},
{code : 8, name: "茨城", color: "#7ecfea", hoverColor: "#b7e5f4"},
{code : 9, name: "栃木", color: "#7ecfea", hoverColor: "#b7e5f4"},
{code : 10, name: "群馬", color: "#7ecfea", hoverColor: "#b7e5f4"},
{code : 11, name: "埼玉", color: "#7ecfea", hoverColor: "#b7e5f4"},
{code : 12, name: "千葉", color: "#7ecfea", hoverColor: "#b7e5f4"},
{code : 13, name: "東京", color: "#7ecfea", hoverColor: "#b7e5f4"},
{code : 14, name: "神奈川", color: "#7ecfea", hoverColor: "#b7e5f4"},
{code : 15, name: "新潟", color: "#7cdc92", hoverColor: "#aceebb"},
{code : 16, name: "富山", color: "#7cdc92", hoverColor: "#aceebb"},
{code : 17, name: "石川", color: "#7cdc92", hoverColor: "#aceebb"},
{code : 18, name: "福井", color: "#7cdc92", hoverColor: "#aceebb"},
{code : 19, name: "山梨", color: "#7cdc92", hoverColor: "#aceebb"},
{code : 20, name: "長野", color: "#7cdc92", hoverColor: "#aceebb"},
{code : 21, name: "岐阜", color: "#7cdc92", hoverColor: "#aceebb"},
{code : 22, name: "静岡", color: "#7cdc92", hoverColor: "#aceebb"},
{code : 23, name: "愛知", color: "#7cdc92", hoverColor: "#aceebb"},
{code : 24, name: "三重", color: "#ffe966", hoverColor: "#fff19c"},
{code : 25, name: "滋賀", color: "#ffe966", hoverColor: "#fff19c"},
{code : 26, name: "京都", color: "#ffe966", hoverColor: "#fff19c"},
{code : 27, name: "大阪", color: "#ffe966", hoverColor: "#fff19c"},
{code : 28, name: "兵庫", color: "#ffe966", hoverColor: "#fff19c"},
{code : 29, name: "奈良", color: "#ffe966", hoverColor: "#fff19c"},
{code : 30, name: "和歌山", color: "#ffe966", hoverColor: "#fff19c"},
{code : 31, name: "鳥取", color: "#ffcc66", hoverColor: "#ffe0a3"},
{code : 32, name: "島根", color: "#ffcc66", hoverColor: "#ffe0a3"},
{code : 33, name: "岡山", color: "#ffcc66", hoverColor: "#ffe0a3"},
{code : 34, name: "広島", color: "#ffcc66", hoverColor: "#ffe0a3"},
{code : 35, name: "山口", color: "#ffcc66", hoverColor: "#ffe0a3"},
{code : 36, name: "徳島", color: "#fb9466", hoverColor: "#ffbb9c"},
{code : 37, name: "香川", color: "#fb9466", hoverColor: "#ffbb9c"},
{code : 38, name: "愛媛", color: "#fb9466", hoverColor: "#ffbb9c"},
{code : 39, name: "高知", color: "#fb9466", hoverColor: "#ffbb9c"},
{code : 40, name: "福岡", color: "#ff9999", hoverColor: "#ffbdbd"},
{code : 41, name: "佐賀", color: "#ff9999", hoverColor: "#ffbdbd"},
{code : 42, name: "長崎", color: "#ff9999", hoverColor: "#ffbdbd"},
{code : 43, name: "熊本", color: "#ff9999", hoverColor: "#ffbdbd"},
{code : 44, name: "大分", color: "#ff9999", hoverColor: "#ffbdbd"},
{code : 45, name: "宮崎", color: "#ff9999", hoverColor: "#ffbdbd"},
{code : 46, name: "鹿児島", color: "#ff9999", hoverColor: "#ffbdbd"},
{code : 47, name: "沖縄", color: "#eb98ff", hoverColor: "#f5c9ff"},
],



showsPrefectureName: true, //都道府県名を表示させる
borderLineWidth: 0.25,
　drawsBoxLine : false,
　showsAreaName : true,
showsPrefectureName: true,
prefectureNameType: "short",
width: 1000,
movesIslands: true, //沖縄地方が地図の左上の分離されたスペースに移動する
lang: 'ja', //表示させている都道府県名を日本語にする
onSelect : function(data){
location.href = areaLinks[data.area.code];
     }
});
