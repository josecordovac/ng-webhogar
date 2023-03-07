export class AppHome {
    render() {
        return h("div", null,
            h("ion-grid", null,
                h("ion-row", null,
                    h("ion-col", { "size-sm-8": true, "offset-sm-2": true, "sixe-sm": true, "sixe-xs": true },
                        h("p", { class: "sub_title" }, "TDP - Proceso de Transformaci\u00F3n Digital Tel\u00E9fornica"))),
                h("ion-row", null,
                    h("ion-col", { "size-12": true },
                        h("eve-st-textbox", { color: "success", name: "Success", label: "Usuario", placeholder: "Usuario" }),
                        h("eve-st-textbox", { color: "success", name: "Success", label: "Clave", placeholder: "Clave" }))),
                h("ion-row", null,
                    h("ion-col", { "size-sm-8": true, "offset-sm-2": true, "sixe-sm": true, "sixe-xs": true },
                        h("eve-st-button", { label: "Registrar", color: "info", type: "outline", borderradius: "26px" })),
                    h("ion-col", { "size-sm": "4", "sixe-sm": true, "sixe-xs": true },
                        h("eve-st-button", { label: "Entrar", color: "success", type: "outline", borderradius: "26px" })))));
    }
    static get is() { return "eve-st-login-standard"; }
    static get style() { return "/**style-placeholder:eve-st-login-standard:**/"; }
}
