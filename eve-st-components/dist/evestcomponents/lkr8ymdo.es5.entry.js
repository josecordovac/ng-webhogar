evestcomponents.loadBundle("lkr8ymdo",["exports"],function(t){var e=window.evestcomponents.h,r=function(){function t(){this.listitems=[{}],this.color="",this.customcolor="",this.customcolorerror="",this.errors="",this.imageleftturl="",this.imagerightturl="",this.paddingright="0",this.paddingleft="0",this.elFocus=!1,this.elOpen=!1,this.getPlaceHolder()}return t.prototype.getClasses=function(){return{"eve-dropdown":!0,active:this.elOpen,success:"success"===this.color,info:"info"===this.color,warning:"warning"===this.color,danger:"danger"===this.color,white:"white"===this.color,purple:"purple"===this.color}},t.prototype.getLabelClasses=function(){return{success:"success"===this.color,info:"info"===this.color,warning:"warning"===this.color,danger:"danger"===this.color,white:"white"===this.color,purple:"purple"===this.color,label_fade:!this.elFocus}},t.prototype.getStyles=function(){return{"border-color":this.customcolor,color:this.customcolor}},t.prototype.getDisplayClasses=function(){return{"display ":!0,white:"white"===this.color}},t.prototype.getBarClasses=function(){return{"bar ":!0,success:"success"===this.color,info:"info"===this.color,warning:"warning"===this.color,danger:"danger"===this.color,white:"white"===this.color,purple:"purple"===this.color}},t.prototype.getBarStyles=function(){return{"border-color":this.customcolor,color:this.customcolor}},t.prototype.getClassesError=function(){return{"error-message":!0}},t.prototype.getStylesError=function(){return{color:this.customcolor}},t.prototype.toggle=function(t){t.stopPropagation(),this.elOpen=!this.elOpen},t.prototype.onInputChanged=function(t){this.value=t.target&&t.target.value},t.prototype.onInputBlur=function(t){this.elFocus=!1,this.value=t.target&&t.target.value},t.prototype.onInputFocus=function(t){this.elFocus=!0,this.value=t.target&&t.target.value},t.prototype.getPlaceHolder=function(){return this.elFocus?"":this.placeholder},t.prototype.renderIconLeft=function(){if(this.imagerightturl.length||this.imageleftturl.length){var t="";return this.paddingright="",this.paddingleft="",this.imagerightturl.length&&(t="input_icon_right",this.paddingright="32px"),this.imageleftturl.length&&(t="",t="input_icon_left",this.paddingleft="32px"),e("img",{class:t,src:"assets/images/avatar.png",width:"16",height:"16"})}return null},t.prototype.getArrowClasses=function(){return{arrow:!0,success:"success"===this.color,info:"info"===this.color,warning:"warning"===this.color,danger:"danger"===this.color,white:"white"===this.color,purple:"purple"===this.color}},t.prototype.rendeIconArrow=function(){console.log(this.elOpen);var t=this.elOpen?"arrow-up":"arrow-down";return e("ion-icon",{class:this.getArrowClasses(),name:t,style:{height:"24px"}})},t.prototype.onElementClickEvent=function(t,e){t.stopPropagation(),this.selectedValue=e.label,this.onChange.emit(e),this.elOpen=!1},t.prototype.render=function(){var t=this;return e("div",{class:"eve-ng-dropdown"},e("label",{class:this.getLabelClasses(),style:this.getStyles()},this.label),e("div",{class:this.getClasses(),onClick:function(e){return t.toggle(e)}},e("div",{class:"input-wraper"},e("div",{class:this.getDisplayClasses()},this.selectedValue||this.placeholder),this.rendeIconArrow()),e("ul",{class:"dropdown"},this.listitems.map(function(r){return e("li",{onClick:function(e){return t.onElementClickEvent(e,r)}},r.label)}))),e("div",{class:this.getBarClasses(),style:this.getBarStyles()}),e("div",{class:this.getClassesError(),style:this.getStylesError()},this.errors))},t.prototype.click=function(t){t.stopPropagation(),this.el.blur(),this.elOpen=!1},Object.defineProperty(t,"is",{get:function(){return"eve-st-dropdown"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},customcolor:{type:String,attr:"customcolor"},customcolorerror:{type:String,attr:"customcolorerror"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},elFocus:{state:!0},elOpen:{state:!0},errors:{type:String,attr:"errors"},imageleftturl:{type:String,attr:"imageleftturl"},imagerightturl:{type:String,attr:"imagerightturl"},label:{type:String,attr:"label"},listitems:{type:"Any",attr:"listitems"},name:{type:String,attr:"name"},paddingleft:{state:!0},paddingright:{state:!0},placeholder:{type:String,attr:"placeholder"},selectedValue:{state:!0},value:{type:"Any",attr:"value",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onChange",method:"onChange",bubbles:!0,cancelable:!0,composed:!0},{name:"onBlur",method:"onBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:click",method:"click"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}::-webkit-scrollbar{width:3px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}:host{width:100%}:host .eve-ng-dropdown{position:relative;width:100%}:host .eve-ng-dropdown .input-grapper{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;width:100%}:host .eve-ng-dropdown .input-grapper .display{font-size:16px;font-family:Josefin Sans,sans-serif;line-height:16px;color:#f0f0f0;width:100%}:host .eve-ng-dropdown .input-grapper .display.white{color:#fff}:host .eve-ng-dropdown .error-message{color:#e24d4d;margin-top:4px;height:8px;font-size:14px}:host .eve-ng-dropdown label{display:block;border:0;font-size:16px;font-family:Josefin Sans,sans-serif;line-height:16px;color:main-color(500);opacity:1}:host .eve-ng-dropdown label.success{color:#5bc500}:host .eve-ng-dropdown label.info{color:#00a9e0}:host .eve-ng-dropdown label.warning{color:#ffb74d}:host .eve-ng-dropdown label.danger{color:#e24d4d}:host .eve-ng-dropdown label.white{color:#fff}:host .eve-ng-dropdown label.purple{color:#954897}:host .eve-ng-dropdown .bar{height:1px;background-color:main-color(500);position:relative;display:block;width:100%}:host .eve-ng-dropdown .bar.success{background-color:#5bc500}:host .eve-ng-dropdown .bar.info{background-color:#00a9e0}:host .eve-ng-dropdown .bar.warning{background-color:#ffb74d}:host .eve-ng-dropdown .bar.danger{background-color:#e24d4d}:host .eve-ng-dropdown .bar.white{background-color:#fff}:host .eve-ng-dropdown .bar.purple{background-color:#954897}:host .eve-ng-dropdown .eve-dropdown{position:relative;width:100%;height:29px;margin:0 auto;padding-left:0;padding-top:6px;padding-bottom:0;background:#fff;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;cursor:pointer;outline:none;background-color:transparent;font-size:16px;font-family:Josefin Sans,sans-serif}:host .eve-ng-dropdown .eve-dropdown.success{color:#5bc500}:host .eve-ng-dropdown .eve-dropdown.info{color:#00a9e0}:host .eve-ng-dropdown .eve-dropdown.warning{color:#ffb74d}:host .eve-ng-dropdown .eve-dropdown.danger{color:#e24d4d}:host .eve-ng-dropdown .eve-dropdown.white{color:#fff!important}:host .eve-ng-dropdown .eve-dropdown .arrow{position:absolute;top:16px;right:8px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translateY(-6px);transform:translateY(-6px)}:host .eve-ng-dropdown .eve-dropdown .dropdown{padding-left:0;position:absolute;top:72%;left:0;right:0;z-index:2;background:#fff;border-radius:5px;border:1px solid #e8e6e5;-webkit-box-shadow:none;box-shadow:none;font-weight:400;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;list-style:none;overflow-y:scroll;max-height:120px;opacity:0;pointer-events:none}:host .eve-ng-dropdown .eve-dropdown .dropdown li{display:block;padding-left:19px;padding-top:6px;padding-bottom:3px;text-decoration:none;color:#6e6259;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}:host .eve-ng-dropdown .eve-dropdown .dropdown li:hover{color:#666c7e;background:#f5f5f5}:host .eve-ng-dropdown .eve-dropdown .dropdown li:first-of-type{border-radius:4px 4px 0 0}:host .eve-ng-dropdown .eve-dropdown .dropdown li:last-of-type{border-radius:0 0 4px 4px;border:none}:host .eve-ng-dropdown .eve-dropdown.active .dropdown{opacity:1;pointer-events:auto}"},enumerable:!0,configurable:!0}),t}();t.EveStDropdown=r,Object.defineProperty(t,"__esModule",{value:!0})});