import{s as D,c as R,S as c,a as x}from"./index-3101605f.js";import{o8 as h,o9 as H,ax as E,d as F,au as I,r as C,o as M,nJ as P,z as A,g as U,R as v,aA as $}from"./index-6f18c032.js";function b(n,t,r){n=h(n),t=H(t);var a=t?D(n):0;return t&&a<t?R(t-a,r)+n:n}var y=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function L(n,t){var r=n,a=/\[[^\]]*]/g,d=(t.match(a)||[]).map(function(i){return i.slice(1,-1)}),o=t.replace(a,"[]"),m=y.reduce(function(i,l){var w=E(l,2),p=w[0],u=w[1];if(i.indexOf(p)!==-1){var e=Math.floor(r/u);return r-=e*u,i.replace(new RegExp("".concat(p,"+"),"g"),function(f){var g=f.length;return b(e.toString(),g,"0")})}return i},o),s=0;return m.replace(a,function(){var i=d[s];return s+=1,i})}function N(n,t){var r=t.format,a=r===void 0?"":r,d=new Date(n).getTime(),o=Date.now(),m=Math.max(d-o,0);return L(m,a)}var O=1e3/30;function T(n){return new Date(n).getTime()}var _=function(){return v(v({},x()),{},{value:[Number,String,Object],format:String,onFinish:Function,onChange:Function})};const j=F({compatConfig:{MODE:3},name:"AStatisticCountdown",props:I(_(),{format:"HH:mm:ss"}),setup:function(t,r){var a=r.emit,d=r.slots,o=C(),m=C(),s=function(){var e=t.value,f=T(e);f>=Date.now()?i():l()},i=function(){if(!o.value){var e=T(t.value);o.value=setInterval(function(){m.value.$forceUpdate(),e>Date.now()&&a("change",e-Date.now()),s()},O)}},l=function(){var e=t.value;if(o.value){clearInterval(o.value),o.value=void 0;var f=T(e);f<Date.now()&&a("finish")}},w=function(e){var f=e.value,g=e.config,S=t.format;return N(f,v(v({},g),{},{format:S}))},p=function(e){return e};return M(function(){s()}),P(function(){s()}),A(function(){l()}),function(){var u=t.value;return U(c,v({ref:m},v(v({},$(t,["onFinish","onChange"])),{},{value:u,valueRender:p,formatter:w})),d)}}});c.Countdown=j;c.install=function(n){return n.component(c.name,c),n.component(c.Countdown.name,c.Countdown),n};c.Countdown;
//# sourceMappingURL=index-c26c73cb.js.map