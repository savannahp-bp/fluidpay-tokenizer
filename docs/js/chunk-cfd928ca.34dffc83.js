(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfd928ca"],{"06f2":function(e,n,t){},"27a0":function(e,n,t){"use strict";t("06f2")},"60b4":function(e,n,t){"use strict";t.r(n);var s=t("7a23"),o={class:"threeds"},a=Object(s["f"])("pre",null,[Object(s["e"])("      "),Object(s["f"])("code",{class:"language-javascript"},'\n        // Tokenizer\n        var tokenizer = new Tokenizer({\n          // url: Optional - used only when the domain does not match\n          apikey: "api_12345",\n          settings: {\n            paay: {\n              sandbox: false,       // Set to true for testing purposes.\n              forceDisabled: false, // Force not running paay\n              rejectChallenges: []  // Statuses to reject from submission\n                                    // https://docs.3dsintegrator.com/docs/3ds-response-table-of-content\n            }\n          },\n          container: document.querySelector(".tokenizer-container"),\n          submission: (response) => {\n            // set the response\n            state.response = response\n          }\n        })\n\n        // Submit\n        var submit = function() {\n          // submit off to the tokenizer with the dollar amount\n          tokenizer.submit("1.00")\n        }\n      '),Object(s["e"])("\n    ")],-1),i={class:"playground example"},u={class:"line-item"},c=Object(s["f"])("label",{class:"label"},"Amount",-1),r={ref:"example",class:"payment"};function l(e,n,t,l,b,d){return Object(s["o"])(),Object(s["d"])("div",o,[a,Object(s["f"])("div",i,[Object(s["f"])("div",u,[c,Object(s["A"])(Object(s["f"])("input",{"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.amount=n}),class:"input",type:"text"},null,512),[[s["x"],e.amount]])]),Object(s["f"])("div",r,null,512),Object(s["f"])("button",{id:"submit",type:"button",class:"button",onClick:n[2]||(n[2]=function(n){return e.submit(e.amount)})}," Checkout "),Object(s["f"])("pre",null,Object(s["v"])(e.response),1)])])}var b=t("5967"),d=t("afd7"),m=Object(s["g"])({name:"Threeds",data:function(){return{example:{},amount:"1.00",response:null}},mounted:function(){var e=this;this.example=new b["a"]({apikey:d["a"],container:this.$refs.example,settings:{paay:{sandbox:!0,rejectChallenges:[]}},submission:function(n){var t=document.getElementById("submit");t.disabled=!1,e.response=n}})},methods:{submit:function(e){var n=document.getElementById("submit");n.disabled=!0,this.example.submit(e)}}});t("27a0");m.render=l;n["default"]=m}}]);
//# sourceMappingURL=chunk-cfd928ca.34dffc83.js.map