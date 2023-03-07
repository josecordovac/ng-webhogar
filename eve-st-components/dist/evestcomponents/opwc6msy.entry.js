const e=window.evestcomponents.h;class t{constructor(){this.checked=!1,this.errors=""}getClasses(){return{"eve-input-checkbox":!0,checkmark:!0,"success-checkbox":"success"===this.color,"info-checkbox":"info"===this.color,"warning-checkbox":"warning"===this.color,"danger-checkbox":"danger"===this.color}}getStyles(){return{"background-color":this.customcolor,"border-color":this.customcolor,color:this.customcolor}}getClassesError(){return{"error-message":!!this.errors.length}}getStylesError(){return{color:this.customcolorerror}}elementClickHandler(){!1===this.disabled&&this.onChange.emit(!this.checked)}render(){return e("label",{class:"eve-ng-checkbox"},this.label,e("input",{id:this.name,name:this.name,type:"checkbox"}),e("span",{class:this.getClasses(),style:this.getStyles()}),e("div",{class:this.getClassesError(),style:this.getStylesError()},this.errors))}static get is(){return"eve-st-checkbox"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0},color:{type:String,attr:"color"},customcolor:{type:String,attr:"customcolor"},customcolorerror:{type:String,attr:"customcolorerror"},disabled:{type:Boolean,attr:"disabled"},errors:{type:String,attr:"errors"},label:{type:String,attr:"label"},name:{type:String,attr:"name"}}}static get events(){return[{name:"onChange",method:"onChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"elementClickHandler"}]}static get style(){return"::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}::-webkit-scrollbar{width:3px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}:host{height:22px}.eve-ng-checkbox{position:relative;height:20px;padding-left:28px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.eve-ng-checkbox .error-message{color:#e24d4d;font-size:12px}.eve-ng-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:0;left:0;height:22px;width:22px;background-color:#eee;border-radius:4px}.eve-ng-checkbox:hover input~.checkmark{background-color:#ccc}.eve-ng-checkbox input:checked~.checkmark{background-color:main-color(500)}.eve-ng-checkbox input:checked~.checkmark.success-checkbox{background:#5bc500}.eve-ng-checkbox input:checked~.checkmark.info-checkbox{background:#00a9e0}.eve-ng-checkbox input:checked~.checkmark.warning-checkbox{background:#ffb74d}.eve-ng-checkbox input:checked~.checkmark.danger-checkbox{background:#e24d4d}.checkmark:after{content:\"\";position:absolute;display:none}.eve-ng-checkbox input:checked~.checkmark:after{display:block}.eve-ng-checkbox .checkmark:after{left:7px;top:1px;width:6px;height:14px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}"}}export{t as EveStCheckbox};