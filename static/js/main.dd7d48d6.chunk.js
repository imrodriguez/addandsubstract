(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(8),o=n.n(r),c=n(9),l=n(3),i=n(12),u=n(10),m=n(13),h=n(39),d=(n(21),function(e){return a.a.createElement(h.a,{maxWidth:"md",className:"Operation"},e.numbers.num1," + ",e.numbers.num2,"=",e.result)}),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){n.detect(),n.calculeNumbers()},n.calculeNumbers=function(){n.setState({numbers:{num1:Math.floor(5*Math.random()),num2:Math.floor(5*Math.random())}})},n.checkResult=function(){var e=["zero","one","two","three","four","five","six","seven","eight","nine"].indexOf(n.state.result.label);n.state.numbers.num1+n.state.numbers.num2===e?n.setState({check:!0}):n.setState({check:!1})},n.detect=function(){console.log("detect");n.setState({classifier:window.ml5.soundClassifier("SpeechCommands18w",{probabilityThreshold:.7},n.modelReady)})},n.modelReady=function(){console.log("modelReady"),n.state.classifier.classify(n.gotResult)},n.gotResult=function(e,t){e?n.setState({error:{state:!0,message:e}}):(n.setState({result:t[0]}),n.checkResult())},n.state={error:{state:!1,message:""},classifier:"",result:"",numbers:{},check:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.error.state?a.a.createElement("div",null,a.a.createElement("h1",null,"Something went wrong."),a.a.createElement("p",null,this.state.error.message)):a.a.createElement("div",{className:"MainWrapper"},this.state.result,console.log(this.state.result),a.a.createElement(d,{numbers:this.state.numbers,result:this.state.result,check:this.state.check}))}}]),t}(s.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26);o.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.dd7d48d6.chunk.js.map