evestcomponents.loadBundle("l2m6nalv",["exports"],function(e){var t=window.evestcomponents.h,n=function(){function e(){this.line=""}return e.prototype.getClass=function(){return{"eve-item":!0,"line-divider":"simple"===this.line}},e.prototype.render=function(){return t("div",{class:this.getClass()},t("slot",{name:"item-left"}),t("slot",null),t("slot",{name:"item-right"}))},Object.defineProperty(e,"is",{get:function(){return"eve-st-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},line:{type:String,attr:"line"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}::-webkit-scrollbar{width:3px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.eve-item{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;min-height:47px}.eve-item.line-divider{border-bottom:1px solid #ddd}.eve-item .item-align-center{-ms-flex-align:center;align-items:center}.eve-item .item-justify-center{-ms-flex-pack:center;justify-content:center}"},enumerable:!0,configurable:!0}),e}();e.EveStItem=n,Object.defineProperty(e,"__esModule",{value:!0})});