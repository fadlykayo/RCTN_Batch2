(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),i=(n(13),n(1)),l=n(2),u=n(4),s=n(3),p=n(5),m=(n(15),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"navbar"},c.a.createElement("p",null,"Header"),c.a.createElement("p",null,"People: ",this.props.people),c.a.createElement("button",{onClick:function(){return e.props.onClick()},style:{backgroundColor:"pink",padding:10}},"Change People")))}}]),t}(a.Component)),h=(n(17),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"Footer"))}}]),t}(a.Component)),d=(n(19),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"innerContent"},c.a.createElement("p",null,this.props.location),c.a.createElement("p",null,this.props.date),c.a.createElement("button",{onClick:function(){return e.props.onClick()},style:{backgroundColor:"orange",padding:10}},"Change Place")))}}]),t}(a.Component)),b=(n(21),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={people:"Budi",tempat:"Pacific Place",tanggal:"19 November 2018"},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleClickHeader",value:function(){this.setState({people:"Andi"})}},{key:"handleClickContent",value:function(){this.setState({tempat:"Kota Tua",tanggal:"20 November 2019"})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(m,{people:this.state.people,onClick:function(){return e.handleClickHeader()}}),c.a.createElement(d,{location:this.state.tempat,date:this.state.tanggal,onClick:function(){return e.handleClickContent()}}),c.a.createElement(h,null))}}]),t}(a.Component)),f=(n(23),a.Component,n(25),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(b,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.70dc9939.chunk.js.map