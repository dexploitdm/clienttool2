(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{615:function(t,e,r){},621:function(t,e,r){"use strict";var n=r(615);r.n(n).a},634:function(t,e,r){"use strict";r.r(e);var n={middleware:["guest"],data:function(){return{token:this.$route.query.token?this.$route.query.token:null}},mounted:function(){var t=this;this.$auth.setToken("local","Bearer "+this.token),this.$auth.setStrategy("local"),this.$auth.fetchUser().then((function(){return t.$router.push("/")})).catch((function(e){return t.$auth.logout(),t.$router.push("/auth/".concat(t.$route.query.origin?t.$route.query.origin:"register","?error=1"))}))}},o=(r(621),r(12)),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"loader"}),this._v(" "),e("p",[this._v("Please wait while we're logging you in...")])])}],!1,null,"38d95fe3",null);e.default=component.exports}}]);