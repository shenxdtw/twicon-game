(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"0a2c":function(t,e,s){},1319:function(t,e,s){t.exports=s.p+"img/kumamon.de3002f6.png"},"1b43":function(t,e,s){"use strict";var n=s("310f"),a=s.n(n);a.a},2549:function(t,e,s){},"310f":function(t,e,s){},"714d":function(t,e,s){"use strict";var n=s("2549"),a=s.n(n);a.a},"7d36":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{mode:"out-in"}},[t.score.failed>0?s("failed",{attrs:{test:t.test}}):t._e()],1),0===t.score.failed?s("score",{staticClass:"score-container"}):t._e(),0===t.score.failed?s("flag",{staticClass:"flag-container",attrs:{code:t.currentFlag.code}}):t._e(),0===t.score.failed?s("guessing-buttons",{staticClass:"buttons-container",attrs:{flags:t.currentOptions,"correct-flag":t.currentFlag,"current-guess":t.currentGuess,"just-guessed":t.justGuessed},on:{guess:t.guessFlag},nativeOn:{click:function(e){t.failedIcon(t.currentFlag)}}}):t._e()],1)},a=[],r=s("be94"),c=s("2f62"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content_wrapper"},[s("i",{class:t.code})])},i=[],u=(s("3846"),{name:"Flag",props:{code:String},methods:{},computed:Object(r["a"])({},Object(c["c"])({flags:function(t){var e=t.flags;return e}}))}),l=u,d=(s("f599"),s("2877")),g=Object(d["a"])(l,o,i,!1,null,"e96db7ae",null);g.options.__file="Flag.vue";var f=g.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-content",t._l(t.flags,function(e){return s("md-button",{key:"guessbutton-"+e.code,staticClass:"btn_wording",class:{correct:t.justGuessed&&t.correctFlag.code===e.code,wrong:t.justGuessed&&t.currentGuess===e.code&&t.correctFlag.code!==e.code},attrs:{disabled:t.justGuessed},on:{click:function(s){t.onClick(e.code)}}},[t._v(t._s(e.name))])}))},_=[],v={name:"GuessingButtons",props:{flags:Array,justGuessed:Boolean,currentGuess:String,correctFlag:Object},methods:{onClick:function(t){this.$emit("guess",t)}}},b=v,h=(s("1b43"),Object(d["a"])(b,p,_,!1,null,"5168dec0",null));h.options.__file="GuessingButtons.vue";var m=h.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-table",[s("md-table-row",[s("md-table-head",{attrs:{"md-numeric":""}},[t._v("已連續答對")])],1),s("md-table-row",[s("md-table-head",{attrs:{"md-numeric":""}},[t._v(t._s(t.score.total))])],1)],1)},F=[],j={name:"Score",computed:Object(r["a"])({ratio:function(){return this.score.total>0?(100*this.score.success/this.score.total).toFixed(2):"0.00"}},Object(c["c"])({score:function(t){var e=t.score;return e}}))},C=j,O=(s("c390"),Object(d["a"])(C,w,F,!1,null,null,null));O.options.__file="Score.vue";var G=O.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("p",{staticClass:"score_wording"},[t._v(t._s(t.score.success)+" / "+t._s(t.flags.length))]),n("div",{staticClass:"slogan"},[0<=t.score.success&&t.score.success<=10?n("span",[t._v(t._s(t.slogan.low))]):t._e(),10<t.score.success&&t.score.success<=20?n("span",[t._v(t._s(t.slogan.medium))]):t._e(),20<t.score.success?n("span",[t._v(t._s(t.slogan.high))]):t._e()]),n("md-button",{staticClass:"restart_btn",attrs:{to:"/"}},[t._v("Restart")]),n("div",{staticClass:"failed_wrapper"},[n("span",[t._v("還有")]),n("i",{class:t.test.code}),n("span",[t._v("\n      我是 "),n("span",{staticClass:"keyword"},[t._v(t._s(t.test.name)+" ")]),t._v("啦\n    ")])]),n("div",{staticClass:"social_links"},[n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fweichiachang.github.io%2Ftwicon-game%2F%23%2F",target:"_blank",rel:"noopener","aria-label":"Facebook"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solid",attrs:{"aria-hidden":"true"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}})])]),t._v("Facebook\n      ")])]),n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"https://twitter.com/intent/tweet/?text=Taiwan%20Icon%20Font%20%E5%8F%B0%E7%81%A3%E5%9C%96%E6%A8%99%E5%AD%97%E5%9E%8B%E5%B0%8F%E9%81%8A%E6%88%B2&url=https%3A%2F%2Fweichiachang.github.io%2Ftwicon-game%2F%23%2F",target:"_blank",rel:"noopener","aria-label":"Twitter"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solid",attrs:{"aria-hidden":"true"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}})])]),t._v("Twitter\n      ")])])]),n("img",{attrs:{src:s("1319"),alt:""}})],1)},E=[],x=(s("cadf"),s("551c"),s("097d"),{name:"Failed",props:{test:{type:Object,default:function(){return{}}}},data:function(){return{slogan:{low:"已經是 .... 極限了嗎？",medium:"兄 day 加油好嗎？",high:"當台灣人還是很不錯的對吧"}}},computed:Object(r["a"])({},Object(c["c"])({score:function(t){var e=t.score;return e},flags:function(t){var e=t.flags;return e},currentFlag:function(t){var e=t.currentFlag;return e}}))}),B=x,A=(s("714d"),Object(d["a"])(B,k,E,!1,null,"2f3f01e7",null));A.options.__file="Failed.vue";var $=A.exports,y={name:"GameInfinite",data:function(){return{test:{}}},mounted:function(){this.setGameMode("infinite"),this.getRandomFlag(),this.getRandomOptions()},components:{Flag:f,GuessingButtons:m,Score:G,Failed:$},methods:Object(r["a"])({},Object(c["b"])(["guessFlag","setGameMode","getRandomFlag","getRandomOptions"]),{failedIcon:function(t){this.test=t}}),computed:Object(r["a"])({},Object(c["c"])({currentFlag:function(t){var e=t.currentFlag;return e},currentOptions:function(t){var e=t.currentOptions;return e},justGuessed:function(t){var e=t.justGuessed;return e},currentGuess:function(t){var e=t.currentGuess;return e},score:function(t){var e=t.score;return e}}))},R=y,S=(s("eb58"),Object(d["a"])(R,n,a,!1,null,"6e02891f",null));S.options.__file="Game.vue";e["default"]=S.exports},"887b":function(t,e,s){},c390:function(t,e,s){"use strict";var n=s("0a2c"),a=s.n(n);a.a},d971:function(t,e,s){},eb58:function(t,e,s){"use strict";var n=s("d971"),a=s.n(n);a.a},f599:function(t,e,s){"use strict";var n=s("887b"),a=s.n(n);a.a}}]);
//# sourceMappingURL=game.460fda49.js.map