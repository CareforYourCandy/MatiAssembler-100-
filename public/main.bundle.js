webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/detalle-orden/detalle-orden.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/detalle-orden/detalle-orden.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gerente.rol==4\">\r\n<!-- Top Bar -->\r\n<nav class=\"navbar\">\r\n    <div class=\"container-fluid bg-deep-orange\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" style=\"cursor:pointer\" onclick=\"openNav()\">&#9776; MATI ASSEMBLER - MECÁNICO</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- Call Search -->\r\n                <li>\r\n                    <a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\">\r\n                        <i class=\"material-icons\">search</i>\r\n                    </a>\r\n                </li>\r\n                <!-- #END# Call Search -->\r\n\r\n                <li class=\"pull-right\">\r\n                    <a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\">\r\n                        <i class=\"material-icons\">more_vert</i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- #Top Bar -->\r\n    <section>\r\n        <!-- Left Sidebar -->\r\n        <aside id=\"leftsidebar\" class=\"sidebar\">\r\n            <!-- User Info -->\r\n            <div class=\"user-info\">\r\n                <div class=\"info-container\">\r\n                    <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{gerente.nombre}}</div>\r\n                    <div class=\"email\">{{gerente.correo}}</div>\r\n                </div>\r\n                <div><a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a></div>\r\n            </div>\r\n            <!-- #User Info -->\r\n            <!-- Menu -->\r\n            <div class=\"menu\">\r\n                <ul class=\"list\">\r\n                    <li class=\"header active\">MENU PRINCIPAL</li>\r\n                    <li>\r\n                        <a (click)=\"goBack()\" >\r\n                            <i class=\"material-icons\">keyboard_return</i>\r\n                            <span style=\"cursor:pointer\">Volver</span>\r\n                        </a>\r\n                    </li>\r\n                <div *ngIf=\"vista == 2\">\r\n                    <li>\r\n                        <a (click)=\"setVista(1)\" >\r\n                            <i class=\"material-icons\">home</i>\r\n                            <span style=\"cursor:pointer\">Detalles Orden</span>\r\n                        </a>\r\n                    </li>                    \r\n                </div>\r\n                    <li>\r\n                        <a (click)=\"logout()\" >\r\n                            <i class=\"material-icons\">not_interested</i>\r\n                            <span style=\"cursor:pointer\">Cerrar sesión</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- #Menu -->\r\n            <!-- Footer -->\r\n            <div class=\"legal\">\r\n                <div class=\"copyright\">\r\n                    &copy; 2018\r\n                    <a href=\"javascript:void(0);\">MatiAssembler</a>.\r\n                </div>\r\n                <div class=\"version\">\r\n                    <b>Version: </b> 1.0.0\r\n                </div>\r\n            </div>\r\n            <!-- #Footer -->\r\n        </aside>\r\n        <!-- #END# Left Sidebar -->\r\n\r\n    </section>\r\n\r\n<section id=\"main\" class=\"content\">\r\n\r\n          <div *ngIf=\"mostrarAlerta\">\r\n            <div class=\"alert alert-success alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"mostrarAlerta2\">\r\n            <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta2()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"mostrarAlerta3\">\r\n            <div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta3()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n                 \r\n    <div *ngIf=\"vista == 1\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row clearfix\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header bg-cyan\">\r\n                        <h2>\r\n                            DETALLE DE LA ORDEN\r\n                        </h2>\r\n                    </div>\r\n                    <div class=\"body\">\r\n                        <form  action=\"/\" (submit)=\"modificarOrden()\" id=\"frmFileUpload\"  method=\"post\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                            N° Orden\r\n                                            </span>\r\n                                    <div class=\"form-line disabled\">\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"idOrden\" name=\"idOrden\" placeholder=\"N° Orden\" disabled>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                                Mecanico \r\n                                            </span>\r\n                                    <div class=\"form-line disabled\">\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mecanico\" name=\"mecanico\" placeholder=\"Mecanico asignado\" disabled>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                                Modelo\r\n                                            </span>\r\n                                    <div class=\"form-line disabled\">\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelo\" name=\"modelo\" placeholder=\"Modelo\" disabled>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                                Año\r\n                                            </span>\r\n                                    <div class=\"form-line disabled\">\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ano\" name=\"ano\" placeholder=\"Año\" disabled>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                                Placa\r\n                                            </span>\r\n                                    <div class=\"form-line disabled\">\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"placa\" name=\"placa\" placeholder=\"Placa\" disabled>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                                Motivo\r\n                                            </span>\r\n                                    <div class=\"form-line disabled\">\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"motivo\" name=\"motivo\" placeholder=\"Motivo\" disabled>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                                Fecha\r\n                                            </span>\r\n                                    <div class=\"form-line disabled\">\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fechaAdmision\" name=\"fechaAdmision\" placeholder=\"Fecha Admision\" disabled>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                                 Diagnostico\r\n                                            </span>\r\n                                    <div class=\"form-line\">\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"diagnostico\" name=\"diagnostico\" placeholder=\"Diagnostico\" required autofocus>\r\n                                    </div>\r\n                                </div>\r\n                            </div>  \r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                                Procedimiento\r\n                                            </span>\r\n                                    <div class=\"form-line\">\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"procedimiento\" name=\"procedimiento\" placeholder=\"Procedimiento\" required autofocus>\r\n                                    </div>\r\n                                </div>\r\n                            </div>   \r\n                            <div >                                            \r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                                <i class=\"material-icons\">thumbs_up_down</i> Estado:\r\n                                            </span>\r\n                                    <div class=\"btn-group\">\r\n                                        \r\n                                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> \r\n                                                {{obtenerEstado()}}<span class=\"caret\"></span>\r\n                                              </button>\r\n                                        <ul class=\"dropdown-menu\">\r\n                                            <li><a (click)= \"setEstado(1)\" >En curso</a></li>\r\n                                            <li><a (click)= \"setEstado(2)\" >Finalizada</a></li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-block btn-lg bg-pink waves-effect\" (click) = \"actualizarOrden()\" type=\"button\" >MODIFICAR</button> <br><br>\r\n\r\n                            <span class=\"input-group-addon\"><i class=\"material-icons\">build</i> Repuestos: \r\n                            </span> <br>\r\n\r\n                            <div class=\"demo-checkbox\"> \r\n                                <div *ngFor=\"let repuesto of repuestosOrden\">    \r\n                                        <input type=\"checkbox\" id={{repuesto.idRepuesto}} class=\"chk-col-light-blue\" checked disabled/>\r\n                                        <label for={{repuesto.idRepuesto}}>{{repuesto.pieza}}</label>    \r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-block btn-lg bg-pink waves-effect\" (click) = \"modificarRepuestos()\" type=\"button\" >MODIFICAR</button> <br><br>\r\n\r\n\r\n                            <span class=\"input-group-addon\"> <i class=\"material-icons\">settings</i> Accesorios: </span> <br> \r\n                            <div class=\"demo-checkbox\">     \r\n                                    <div *ngIf=\"accesorios.cauchoRepuesto\"> \r\n                                        <input type=\"checkbox\" id=\"acc1\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                        <label for=\"acc1\" >Caucho Repuesto</label>    \r\n                                    </div>\r\n                                    <div *ngIf=\"accesorios.cauchoRepuesto==false\"> \r\n                                        <input type=\"checkbox\" id=\"acc1\" class=\"chk-col-light-blue\" disabled/>\r\n                                        <label for=\"acc1\" >Caucho Repuesto</label>    \r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"accesorios.llaves\">\r\n                                        <input type=\"checkbox\" id=\"acc2\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                        <label for=\"acc2\" >Llaves</label>\r\n                                    </div> \r\n                                    <div *ngIf=\"accesorios.llaves==false\">\r\n                                        <input type=\"checkbox\" id=\"acc2\" class=\"chk-col-light-blue\" disabled/>\r\n                                        <label for=\"acc2\" >Llaves</label>\r\n                                    </div> \r\n\r\n                                    <div *ngIf=\"accesorios.gato\">\r\n                                        <input type=\"checkbox\" id=\"acc3\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                        <label for=\"acc3\" >Gato</label>\r\n                                    </div>\r\n                                    <div *ngIf=\"accesorios.gato==false\">\r\n                                        <input type=\"checkbox\" id=\"acc3\" class=\"chk-col-light-blue\" disabled/>\r\n                                        <label for=\"acc3\" >Gato</label>\r\n                                    </div> \r\n\r\n                                    <div *ngIf=\"accesorios.herramientas\">\r\n                                        <input type=\"checkbox\" id=\"acc4\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                        <label for=\"acc4\" >Herramientas</label>\r\n                                    </div> \r\n                                    <div *ngIf=\"accesorios.herramientas==false\">\r\n                                        <input type=\"checkbox\" id=\"acc4\" class=\"chk-col-light-blue\" disabled/>\r\n                                        <label for=\"acc4\" >Herramientas</label>\r\n                                    </div> \r\n\r\n                                    <div *ngIf=\"accesorios.equipodeSonido\">\r\n                                        <input type=\"checkbox\" id=\"acc5\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                        <label for=\"acc5\" >Equipo de Sonido</label>\r\n                                    </div>  \r\n                                    <div *ngIf=\"accesorios.equipodeSonido==false\">\r\n                                        <input type=\"checkbox\" id=\"acc5\" class=\"chk-col-light-blue\" disabled/>\r\n                                        <label for=\"acc5\" >Equipo de Sonido</label>\r\n                                    </div>                                                     \r\n\r\n                                    <div *ngIf=\"accesorios.desperfectoCarroceria\">\r\n                                        <input type=\"checkbox\" id=\"acc6\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                        <label for=\"acc6\" >Desperfecto Carroceria: {{accesorios.desperfectoCarroceria}}</label>\r\n                                    </div>  \r\n                                    <div *ngIf=\"accesorios.desperfectoCarroceria==null\">\r\n                                        <input type=\"checkbox\" id=\"acc6\" class=\"chk-col-light-blue\" disabled/>\r\n                                        <label for=\"acc6\" >Desperfecto Carroceria</label>\r\n                                    </div>\r\n                                   \r\n                            </div>                                                      \r\n                        </form>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class= \"card\">\r\n                <div class=\"header bg-cyan\">\r\n                        <h2>\r\n                            CÓDIGO QR\r\n                        </h2>\r\n                    </div> \r\n                    <div style=\"text-align: center\"> \r\n        <img src=\"{{qr}}\"> \r\n                    </div>\r\n        </div>\r\n        \r\n            <div class=\"card\">\r\n                <div class=\"header bg-deep-purple\">\r\n                    <h2>FOTOS</h2>\r\n                </div>\r\n                <div class=\"body\">\r\n<div *ngIf=\"primeraImagen != undefined\">\r\n                <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        \r\n                    <div class=\"carousel-inner\" role=\"listbox\">\r\n                            <div class=\"item active\" >\r\n                                    <img [src]=\"primeraImagen.imagen\" />\r\n                            </div>\r\n                        <div class=\"item\" *ngFor=\"let imagen of imagenes\">\r\n                            <img [src]=\"imagen.imagen\"/>\r\n                        </div>\r\n                        \r\n                    </div>\r\n\r\n                 \r\n                    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n                        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n                        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                \r\n                </div>\r\n </div>\r\n                </div>\r\n            </div>\r\n    </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"vista == 2\">\r\n        <div class=\"card\">\r\n            <div class=\"header\">\r\n                <h2>ACTUALIZAR REPUESTOS DE ORDEN DE REPARACIÓN</h2>\r\n            </div>\r\n            <div class=\"body\">\r\n                <form  action=\"/\" id=\"frmFileUpload\"  method=\"post\">\r\n                    <div class=\"demo-radio-button\">\r\n                        <div *ngFor=\"let repuesto of repuestos\">\r\n                            <input (click)=\"sumarRepuesto(repuesto.idRepuesto)\" type=\"radio\" id={{repuesto.idRepuesto}} class=\"with-gap radio-col-light-blue\"/>\r\n                            <label for={{repuesto.idRepuesto}}>{{repuesto.pieza}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <button class=\"btn btn-block btn-lg bg-pink waves-effect\" (click) = \"actualizarRepuestos()\" type=\"button\" >MODIFICAR</button> <br><br>\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"gerente.rol==3\">\r\n    <!-- Top Bar -->\r\n    <nav class=\"navbar\">\r\n        <div class=\"container-fluid bg-deep-orange\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" style=\"cursor:pointer\" onclick=\"openNav()\">&#9776; MATI ASSEMBLER - GERENTE</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <!-- Call Search -->\r\n                    <li>\r\n                        <a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\">\r\n                            <i class=\"material-icons\">search</i>\r\n                        </a>\r\n                    </li>\r\n                    <!-- #END# Call Search -->\r\n\r\n                    <li class=\"pull-right\">\r\n                        <a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\">\r\n                            <i class=\"material-icons\">more_vert</i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <!-- #Top Bar -->\r\n        <section>\r\n            <!-- Left Sidebar -->\r\n            <aside id=\"leftsidebar\" class=\"sidebar\">\r\n                <!-- User Info -->\r\n                <div class=\"user-info\">\r\n                    <div class=\"info-container\">\r\n                        <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{gerente.nombre}}</div>\r\n                        <div class=\"email\">{{gerente.correo}}</div>\r\n                    </div>\r\n                    <div><a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a></div>\r\n                </div>\r\n                <!-- #User Info -->\r\n                <!-- Menu -->\r\n                <div class=\"menu\">\r\n                    <ul class=\"list\">\r\n                        <li class=\"header active\">MENU PRINCIPAL</li>\r\n                        <li>\r\n                            <a (click)=\"goBack()\" >\r\n                                <i class=\"material-icons\">keyboard_return</i>\r\n                                <span style=\"cursor:pointer\">Volver</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a (click)=\"logout()\" >\r\n                                <i class=\"material-icons\">not_interested</i>\r\n                                <span style=\"cursor:pointer\">Cerrar sesión</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- #Menu -->\r\n                <!-- Footer -->\r\n                <div class=\"legal\">\r\n                    <div class=\"copyright\">\r\n                        &copy; 2018\r\n                        <a href=\"javascript:void(0);\">MatiAssembler</a>.\r\n                    </div>\r\n                    <div class=\"version\">\r\n                        <b>Version: </b> 1.0.0\r\n                    </div>\r\n                </div>\r\n                <!-- #Footer -->\r\n            </aside>\r\n            <!-- #END# Left Sidebar -->\r\n\r\n        </section>\r\n\r\n    <section id=\"main\" class=\"content\">\r\n        <div class=\"container-fluid\">\r\n \r\n            <div class=\"row clearfix\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"header bg-cyan\">\r\n                            <h2>\r\n                                DETALLE DE LA ORDEN\r\n                            </h2>\r\n                        </div>\r\n                        <div class=\"body\">\r\n                            <form  action=\"/\" (submit)=\"modificarOrden()\" id=\"frmFileUpload\"  method=\"post\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                                N° Orden\r\n                                                </span>\r\n                                        <div class=\"form-line disabled\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"idOrden\" name=\"idOrden\" placeholder=\"N° Orden\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                                    Mecanico \r\n                                                </span>\r\n                                        <div class=\"form-line disabled\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mecanico\" name=\"mecanico\" placeholder=\"Mecanico asignado\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                                    Modelo\r\n                                                </span>\r\n                                        <div class=\"form-line disabled\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelo\" name=\"modelo\" placeholder=\"Modelo\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                                    Año\r\n                                                </span>\r\n                                        <div class=\"form-line disabled\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ano\" name=\"ano\" placeholder=\"Año\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                                    Placa\r\n                                                </span>\r\n                                        <div class=\"form-line disabled\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"placa\" name=\"placa\" placeholder=\"Placa\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                                    Serial\r\n                                                </span>\r\n                                        <div class=\"form-line disabled\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"serialMotor\" name=\"serialMotor\" placeholder=\"Serial Motor\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                                    Fecha\r\n                                                </span>\r\n                                        <div class=\"form-line disabled\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fechaAdmision\" name=\"fechaAdmision\" placeholder=\"Fecha Admision\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                                     Diagnostico\r\n                                                </span>\r\n                                        <div class=\"form-line  disabled\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"diagnostico\" name=\"diagnostico\" placeholder=\"Diagnostico\"  disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>  \r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                                    Procedimiento\r\n                                                </span>\r\n                                        <div class=\"form-line disabled\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"procedimiento\" name=\"procedimiento\" placeholder=\"Procedimiento\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>   \r\n                                <div >                                            \r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                                    <i class=\"material-icons\">thumbs_up_down</i> Estado:\r\n                                                </span>\r\n                                        <div class=\"btn-group\">\r\n                                            \r\n                                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"  disabled> \r\n                                                    {{obtenerEstado()}}<span class=\"caret\"></span>\r\n                                                  </button>\r\n                                            <ul class=\"dropdown-menu\">\r\n                                                <li><a (click)= \"setEstado(1)\" >En curso</a></li>\r\n                                                <li><a (click)= \"setEstado(2)\" >Finalizada</a></li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <span class=\"input-group-addon\"><i class=\"material-icons\">build</i> Repuestos: \r\n                                </span> <br>\r\n\r\n                                <div class=\"demo-checkbox\"> \r\n                                    <div *ngFor=\"let repuesto of repuestosOrden\">    \r\n                                            <input type=\"checkbox\" id={{repuesto.idRepuesto}} class=\"chk-col-light-blue\" checked disabled/>\r\n                                            <label for={{repuesto.idRepuesto}}>{{repuesto.pieza}}</label>    \r\n                                    </div>\r\n                                </div>\r\n\r\n                                <span class=\"input-group-addon\"> <i class=\"material-icons\">settings</i> Accesorios: </span> <br> \r\n                                <div class=\"demo-checkbox\">     \r\n                                        <div *ngIf=\"accesorios.cauchoRepuesto\"> \r\n                                            <input type=\"checkbox\" id=\"acc1\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                            <label for=\"acc1\" >Caucho Repuesto</label>    \r\n                                        </div>\r\n                                        <div *ngIf=\"accesorios.cauchoRepuesto==false\"> \r\n                                            <input type=\"checkbox\" id=\"acc1\" class=\"chk-col-light-blue\" disabled/>\r\n                                            <label for=\"acc1\" >Caucho Repuesto</label>    \r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"accesorios.llaves\">\r\n                                            <input type=\"checkbox\" id=\"acc2\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                            <label for=\"acc2\" >Llaves</label>\r\n                                        </div> \r\n                                        <div *ngIf=\"accesorios.llaves==false\">\r\n                                            <input type=\"checkbox\" id=\"acc2\" class=\"chk-col-light-blue\" disabled/>\r\n                                            <label for=\"acc2\" >Llaves</label>\r\n                                        </div> \r\n\r\n                                        <div *ngIf=\"accesorios.gato\">\r\n                                            <input type=\"checkbox\" id=\"acc3\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                            <label for=\"acc3\" >Gato</label>\r\n                                        </div>\r\n                                        <div *ngIf=\"accesorios.gato==false\">\r\n                                            <input type=\"checkbox\" id=\"acc3\" class=\"chk-col-light-blue\" disabled/>\r\n                                            <label for=\"acc3\" >Gato</label>\r\n                                        </div> \r\n\r\n                                        <div *ngIf=\"accesorios.herramientas\">\r\n                                            <input type=\"checkbox\" id=\"acc4\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                            <label for=\"acc4\" >Herramientas</label>\r\n                                        </div> \r\n                                        <div *ngIf=\"accesorios.herramientas==false\">\r\n                                            <input type=\"checkbox\" id=\"acc4\" class=\"chk-col-light-blue\" disabled/>\r\n                                            <label for=\"acc4\" >Herramientas</label>\r\n                                        </div> \r\n\r\n                                        <div *ngIf=\"accesorios.equipodeSonido\">\r\n                                            <input type=\"checkbox\" id=\"acc5\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                            <label for=\"acc5\" >Equipo de Sonido</label>\r\n                                        </div>  \r\n                                        <div *ngIf=\"accesorios.equipodeSonido==false\">\r\n                                            <input type=\"checkbox\" id=\"acc5\" class=\"chk-col-light-blue\" disabled/>\r\n                                            <label for=\"acc5\" >Equipo de Sonido</label>\r\n                                        </div>                                                     \r\n                                        <div *ngIf=\"accesorios.desperfectoCarroceria\">\r\n                                            <input type=\"checkbox\" id=\"acc6\" class=\"chk-col-light-blue\" checked disabled/>\r\n                                            <label for=\"acc6\" >Desperfecto Carroceria: {{accesorios.desperfectoCarroceria}}</label>\r\n                                        </div>  \r\n                                        <div *ngIf=\"accesorios.desperfectoCarroceria==null\">\r\n                                            <input type=\"checkbox\" id=\"acc6\" class=\"chk-col-light-blue\" disabled/>\r\n                                            <label for=\"acc6\" >Desperfecto Carroceria</label>\r\n                                        </div>\r\n                                </div>                                                      \r\n                            </form>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>           \r\n            <div class= \"card\">\r\n                    <div class=\"header bg-cyan\">\r\n                            <h2>\r\n                                CÓDIGO QR\r\n                            </h2>\r\n                        </div> \r\n                        <div style=\"text-align: center\"> \r\n            <img src=\"{{qr}}\"> \r\n                        </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"header bg-deep-purple\">\r\n                    <h2>FOTOS</h2>\r\n                </div>\r\n                <div class=\"body\">\r\n\r\n                    <div *ngIf=\"primeraImagen != undefined\">\r\n                        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                \r\n                            <div class=\"carousel-inner\" role=\"listbox\">\r\n                                    <div class=\"item active\" >\r\n                                            <img [src]=\"primeraImagen.imagen\" />\r\n                                    </div>\r\n                                <div class=\"item\" *ngFor=\"let imagen of imagenes\">\r\n                                    <img [src]=\"imagen.imagen\"  style=\"max-height: 300px\"/>\r\n                                </div>\r\n                                \r\n                            </div>\r\n        \r\n                         \r\n                            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n                                <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n                                <span class=\"sr-only\">Previous</span>\r\n                            </a>\r\n                            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n                                <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                                <span class=\"sr-only\">Next</span>\r\n                            </a>\r\n                        \r\n                        </div>\r\n         </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </section>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/Components/detalle-orden/detalle-orden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleOrdenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_qr_service__ = __webpack_require__("./src/app/services/qr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetalleOrdenComponent = (function () {
    function DetalleOrdenComponent(authService, validateService, qrService, router, location) {
        this.authService = authService;
        this.validateService = validateService;
        this.qrService = qrService;
        this.router = router;
        this.location = location;
        this.vista = 1;
        this.marcas = Array;
        this.diagnostico = "";
        this.procedimiento = "";
        this.mecanicos = [];
        this.elementType = 'url';
        this.repuestosTemp = [];
        this.repuestosOrden = [];
        //Alertas
        this.mostrarAlerta = false;
        this.mostrarAlerta2 = false;
        this.mostrarAlerta3 = false;
    }
    DetalleOrdenComponent.prototype.ngOnInit = function () {
        this.obtenerMecanicos();
        this.gerente = JSON.parse(localStorage.getItem("user"));
        this.vehiculo = JSON.parse(localStorage.getItem("vehiculo"));
        this.orden = JSON.parse(localStorage.getItem("orden"));
        this.estado = this.orden.activada;
        this.obtenerRepuestosOrden();
        this.obtenerAccesorios();
        this.obtenerDatos();
        var qr2 = this.qrService.generarQR(this.orden.idOrden.toString());
        this.qr = qr2;
        this.getImagenesOrden();
    };
    DetalleOrdenComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate['login'];
    };
    DetalleOrdenComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetalleOrdenComponent.prototype.cerrarAlerta = function () {
        this.mostrarAlerta = false;
        this.mensajeAlerta = "";
    };
    DetalleOrdenComponent.prototype.cerrarAlerta2 = function () {
        this.mostrarAlerta2 = false;
        this.mensajeAlerta = "";
    };
    DetalleOrdenComponent.prototype.cerrarAlerta3 = function () {
        this.mostrarAlerta3 = false;
        this.mensajeAlerta = "";
    };
    DetalleOrdenComponent.prototype.obtenerMecanicos = function () {
        var _this = this;
        this.authService.getUsers().subscribe(function (datos) {
            var usuarios = datos.users;
            _this.mecanicos = usuarios.filter(function (user) {
                if (user.rol == 4) {
                    return user;
                }
            });
        });
    };
    DetalleOrdenComponent.prototype.getMarcas = function () {
        var _this = this;
        this.authService.getMarcas().subscribe(function (data) {
            _this.marcas = data.marcas;
        });
    };
    DetalleOrdenComponent.prototype.getImagenesOrden = function () {
        var _this = this;
        this.authService.getImagenesOrden(this.orden.idOrden).subscribe(function (datos) {
            _this.imagenes = datos.imagenesOrden;
            _this.primeraImagen = _this.imagenes[0];
            _this.imagenes.shift();
        });
    };
    DetalleOrdenComponent.prototype.getLinkImagen = function (imagen) {
        return imagen.imagen;
    };
    DetalleOrdenComponent.prototype.setMarcaVista = function (idMarca) {
        return this.marcas[idMarca - 1].marca;
    };
    DetalleOrdenComponent.prototype.obtenerAccesorios = function () {
        var _this = this;
        this.authService.getAccesorios(this.orden.idOrden).subscribe(function (data) {
            _this.accesorios = data.accesorios;
        });
    };
    DetalleOrdenComponent.prototype.setBoolean = function (variable) {
        if (variable) {
            return "si";
        }
        else {
            return "no";
        }
    };
    DetalleOrdenComponent.prototype.obtenerDatos = function () {
        this.idOrden = this.orden.idOrden;
        this.mecanico = this.orden.idMecanico;
        this.modelo = this.vehiculo.modelo;
        this.ano = this.vehiculo.ano;
        this.placa = this.vehiculo.placa;
        //this.serialMotor = this.vehiculo.serialMotor;
        this.fechaAdmision = this.orden.fecha;
        if (this.orden.diagnostico != null) {
            this.diagnostico = this.orden.diagnostico;
        }
        if (this.orden.procedimiento != null) {
            this.procedimiento = this.orden.procedimiento;
        }
        this.motivo = this.orden.motivo;
    };
    DetalleOrdenComponent.prototype.setEstado = function (numero) {
        this.estado = numero;
    };
    DetalleOrdenComponent.prototype.obtenerEstado = function () {
        //console.log(this.estado);
        if (this.estado == 1) {
            return "En curso";
        }
        if (this.estado == 2) {
            return "Finalizada";
        }
    };
    DetalleOrdenComponent.prototype.actualizarOrden = function () {
        var _this = this;
        this.cerrarAlerta();
        var orden = {
            idOrden: this.idOrden,
            diagnostico: this.diagnostico,
            procedimiento: this.procedimiento,
            activada: this.estado
        };
        if (!this.validateService.validarDiagnostico(orden.diagnostico)) {
            this.mensajeAlerta = "Diagnóstico demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta2 = true;
            return false;
        }
        if (!this.validateService.validarProcedimiento(orden.procedimiento)) {
            this.mensajeAlerta = "Procedimiento demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta2 = true;
            return false;
        }
        this.cerrarAlerta2();
        this.authService.actualizarOrden(orden).subscribe(function (data) {
            _this.authService.getOrden(orden.idOrden).subscribe(function (data) {
                if (data.success) {
                    _this.ordenTemp = data.orden;
                    _this.authService.almacenarOrdenLS(_this.ordenTemp);
                    _this.mensajeAlerta = "Orden modificada correctamente!";
                    _this.mostrarAlerta = true;
                }
            });
        });
    };
    DetalleOrdenComponent.prototype.obtenerRepuestosOrden = function () {
        var _this = this;
        this.authService.obtenerRepuestosOrden(this.orden).subscribe(function (datos) {
            _this.repuestosOrdenAux = datos.repuestosOrden;
            for (var i = 0; i < _this.repuestosOrdenAux.length; i++) {
                _this.authService.obtenerRepuesto(_this.repuestosOrdenAux[i].idRepuesto).subscribe(function (datos) {
                    _this.repuestosOrden.push(datos.repuesto);
                });
            }
        });
    };
    //------ FUNCIONES PARA AÑADIR REPUESTOS
    DetalleOrdenComponent.prototype.modificarRepuestos = function () {
        this.obtenerRepuestos();
        this.vista = 2;
        this.cerrarAlerta();
        this.cerrarAlerta2();
        this.cerrarAlerta3();
    };
    DetalleOrdenComponent.prototype.setVista = function (id) {
        this.vista = id;
        this.cerrarAlerta();
        this.cerrarAlerta2();
        this.cerrarAlerta3();
    };
    DetalleOrdenComponent.prototype.obtenerRepuestos = function () {
        var _this = this;
        var data = this.authService.obtenerRepuestos().subscribe(function (datos) {
            _this.repuestos = datos.repuestos;
        });
    };
    DetalleOrdenComponent.prototype.sumarRepuesto = function (idRepuesto) {
        for (var i = 0; i < this.repuestosTemp.length; i++) {
            if (this.repuestosTemp[i] == idRepuesto) {
                return;
            }
        }
        this.repuestosTemp.push(idRepuesto);
    };
    DetalleOrdenComponent.prototype.actualizarRepuestos = function () {
        var _this = this;
        if (!this.validarRepuestos()) {
            this.mensajeAlerta = "La orden ya tiene alguno de los repuestos seleccionados.";
            this.mostrarAlerta2 = true;
            this.repuestosTemp = [];
            this.vista = 1;
            return false;
        }
        this.cerrarAlerta2();
        var _loop_1 = function (i) {
            var repOrden = {
                idOrden: this_1.orden.idOrden,
                idRepuesto: this_1.repuestosTemp[i]
            };
            this_1.authService.addRepuestosOrden(repOrden).subscribe(function (data) {
                if (data.success) {
                    for (var i_1 = 0; i_1 < _this.repuestos.length; i_1++) {
                        if (_this.repuestos[i_1].idRepuesto == repOrden.idRepuesto) {
                            _this.repuestosOrden.push(_this.repuestos[i_1]);
                        }
                    }
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.repuestosTemp.length; i++) {
            _loop_1(i);
        }
        this.repuestosTemp = [];
        this.vista = 1;
    };
    DetalleOrdenComponent.prototype.validarRepuestos = function () {
        for (var i = 0; i < this.repuestosOrden.length; i++) {
            for (var j = 0; j < this.repuestosTemp.length; j++) {
                if (this.repuestosTemp[j] == this.repuestosOrden[i].idRepuesto) {
                    return false;
                }
            }
        }
        return true;
    };
    DetalleOrdenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detalle-orden',
            template: __webpack_require__("./src/app/Components/detalle-orden/detalle-orden.component.html"),
            styles: [__webpack_require__("./src/app/Components/detalle-orden/detalle-orden.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_qr_service__["a" /* QrService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]])
    ], DetalleOrdenComponent);
    return DetalleOrdenComponent;
}());



/***/ }),

/***/ "./src/app/Components/detalle-vehiculo/detalle-vehiculo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/detalle-vehiculo/detalle-vehiculo.component.html":
/***/ (function(module, exports) {

module.exports = "<div> \r\n    <!-- Top Bar -->\r\n    <nav class=\"navbar\">\r\n        <div class=\"container-fluid\">\r\n             <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" style=\"cursor:pointer\" onclick=\"openNav()\">&#9776; MATI ASSEMBLER - GERENTE</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <!-- Call Search -->\r\n                    <li>\r\n                        <a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\">\r\n                            <i class=\"material-icons\">search</i>\r\n                        </a>\r\n                    </li>\r\n                    <!-- #END# Call Search -->\r\n\r\n                    <li class=\"pull-right\">\r\n                        <a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\">\r\n                            <i class=\"material-icons\">more_vert</i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <!-- #Top Bar -->\r\n    <section>\r\n        <!-- Left Sidebar -->\r\n        <aside id=\"leftsidebar\" class=\"sidebar\">\r\n            <!-- User Info -->\r\n            <div class=\"user-info\">\r\n                <div class=\"info-container\">\r\n                    <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{gerente.nombre}}</div>\r\n                    <div class=\"email\">{{gerente.correo}}</div>\r\n                </div>\r\n                <div><a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a></div>\r\n            </div>\r\n            <!-- #User Info -->\r\n            <!-- Menu -->\r\n            <div class=\"menu\">\r\n                <ul class=\"list\">\r\n                    <li class=\"header active\">MENU PRINCIPAL</li>\r\n                    <li>\r\n                        <a (click)=\"goBack()\" >\r\n                            <i class=\"material-icons\">keyboard_return</i>\r\n                            <span  style=\"cursor:pointer\">Volver</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"logout()\" >\r\n                            <i class=\"material-icons\">not_interested</i>\r\n                            <span  style=\"cursor:pointer\">Cerrar sesión</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- #Menu -->\r\n            <!-- Footer -->\r\n            <div class=\"legal\">\r\n                <div class=\"copyright\">\r\n                    &copy; 2018\r\n                    <a href=\"javascript:void(0);\">MatiAssembler</a>.\r\n                </div>\r\n                <div class=\"version\">\r\n                    <b>Version: </b> 1.0.0\r\n                </div>\r\n            </div>\r\n            <!-- #Footer -->\r\n        </aside>\r\n        <!-- #END# Left Sidebar -->\r\n\r\n    </section>\r\n\r\n    <section id=\"main\" class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row clearfix\">\r\n\r\n    <!-- DATOS -->\r\n              <div class=\"block-header\">\r\n                  <h2>DETALLE DEL VEHÍCULO</h2>\r\n              </div>\r\n                <div class=\"col-xs-12 col-sm-6\">\r\n                  <div class=\"info-box bg-pink hover-expand-effect\">\r\n                      <div class=\"icon\">\r\n                          <i class=\"material-icons\">person</i>\r\n                      </div>\r\n                      <div class=\"content\">\r\n                          <div class=\"text\">MARCA</div>\r\n                          <p class=\"lead\">{{setMarcaVista(vehiculo.marca)}}</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6\">\r\n                  <div class=\"info-box bg-purple hover-expand-effect\">\r\n                      <div class=\"icon\">\r\n                          <i class=\"material-icons\">person</i>\r\n                      </div>\r\n                      <div class=\"content\">\r\n                          <div class=\"text\">MODELO</div>\r\n                          <p class=\"lead\">{{vehiculo.modelo}}</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6\">\r\n                  <div class=\"info-box bg-indigo hover-expand-effect\">\r\n                      <div class=\"icon\">\r\n                          <i class=\"material-icons\">confirmation_number</i>\r\n                      </div>\r\n                      <div class=\"content\">\r\n                          <div class=\"text\">AÑO</div>\r\n                          <div class=\"lead\"> {{vehiculo.ano}} </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6\">            \r\n                  <div class=\"info-box bg-cyan hover-expand-effect\">\r\n                      <div class=\"icon\">\r\n                          <i class=\"material-icons\">email</i>\r\n                      </div>\r\n                      <div class=\"content\">\r\n                          <div class=\"text\">PLACA</div>\r\n                          <p class=\"lead\">{{vehiculo.placa}}</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6\">\r\n                  <div class=\"info-box bg-light-green hover-expand-effect\">\r\n                      <div class=\"icon\">\r\n                          <i class=\"material-icons\">local_phone</i>\r\n                      </div>\r\n                      <div class=\"content\">\r\n                          <div class=\"text\">SERIAL MOTOR</div>\r\n                          <div class=\"lead\">{{vehiculo.serialMotor}}</div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-6\">\r\n                  <div class=\"info-box bg-orange hover-expand-effect\">\r\n                      <div class=\"icon\">\r\n                          <i class=\"material-icons\">directions</i>\r\n                      </div>\r\n                      <div class=\"content\">\r\n                          <div class=\"text\">PROPIETARIO</div>\r\n                          <p class=\"lead\">{{vehiculo.propietario}}</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-xs-12 col-sm-12\">\r\n                    <div class=\"info-box bg-red hover-expand-effect\">\r\n                      <div class=\"icon\">\r\n                          <i class=\"material-icons\">directions</i>\r\n                      </div>\r\n                      <div class=\"content\">\r\n                          <div class=\"text\">FECHA REGISTRO</div>\r\n                          <p class=\"lead\">{{vehiculo.fechaRegistro}}</p>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          <!-- #END# DATOS -->\r\n\r\n            <div  class=\"row clearfix\">\r\n                <div class=\"card\">\r\n                    <div class=\"header bg-deep-purple\">\r\n                        <h2>FOTOS</h2>\r\n                    </div>\r\n                    <div class=\"body\">\r\n                        \r\n                        <!--\r\n                        <ui-carousel [infinite]=\"true\" [fade]=\"false\" [speed]=\"200\" >\r\n                                <ui-carousel-item *ngFor=\"let imagen of imagenes\">\r\n                                        <div style=\"text-align: center; background:#551a8b\" >\r\n                                        <img [ui-lazy-load]=\"getLinkImagen(imagen)\" style=\"\">\r\n                                        </div>\r\n                                </ui-carousel-item>\r\n                        </ui-carousel>\r\n                    -->\r\n                        \r\n                    <div *ngIf=\"primeraImagen != undefined\">\r\n                        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                \r\n                            <div class=\"carousel-inner\" role=\"listbox\">\r\n                                    <div class=\"item active\" >\r\n                                            <img [src]=\"primeraImagen.imagen\" />\r\n                                    </div>\r\n                                <div class=\"item\" *ngFor=\"let imagen of imagenes\">\r\n                                    <img [src]=\"imagen.imagen\"  style=\"max-height: 300px\"/>\r\n                                </div>\r\n                                \r\n                            </div>\r\n        \r\n                         \r\n                            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n                                <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n                                <span class=\"sr-only\">Previous</span>\r\n                            </a>\r\n                            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n                                <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                                <span class=\"sr-only\">Next</span>\r\n                            </a>\r\n                        \r\n                        </div>\r\n         </div>\r\n                    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n\r\n        <br>\r\n\r\n        <div class=\"row clearfix\">\r\n            <div >\r\n                <div class=\"card\">\r\n                    <div class=\"header bg-cyan\">\r\n                        <h2>\r\n                            HISTORIAL\r\n                        </h2>\r\n                    </div>\r\n                    <div class=\"body table-responsive\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>ORDEN</th>\r\n                                    <th>FECHA ADMISIÓN</th>\r\n                                    <th>MECÁNICO</th>\r\n                                    <th>DIAGNÓSTICO</th>\r\n                                    <th>VER DETALLE</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let orden of historial\" >\r\n                                    <td>{{orden.idOrden}}</td>\r\n                                    <td>{{orden.fecha}}</td>\r\n                                    <td>{{orden.idMecanico}}</td>\r\n                                    <td>{{orden.diagnostico}}</td>\r\n                                    <td> <button type=\"button\" (click)=\"verDetalleOrden(orden.idOrden)\" class=\"btn btn-default waves-effect\">\r\n                                        <i class=\"material-icons\">visibility</i>\r\n                                    </button></td> \r\n\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Components/detalle-vehiculo/detalle-vehiculo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleVehiculoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalleVehiculoComponent = (function () {
    function DetalleVehiculoComponent(authService, router, location) {
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.marcas = Array;
    }
    DetalleVehiculoComponent.prototype.ngOnInit = function () {
        this.getMarcas();
        this.gerente = JSON.parse(localStorage.getItem("user"));
        this.vehiculo = JSON.parse(localStorage.getItem("vehiculo"));
        this.obtenerHistorial();
        this.obtenerImagenes();
    };
    DetalleVehiculoComponent.prototype.getLinkImagen = function (imagen) {
        console.log("LINK IMAGEN", imagen.imagen);
        return imagen.imagen;
    };
    DetalleVehiculoComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    DetalleVehiculoComponent.prototype.home = function () {
        this.router.navigate(['']);
    };
    DetalleVehiculoComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetalleVehiculoComponent.prototype.obtenerImagenes = function () {
        var _this = this;
        this.authService.getImagenesVehiculo(this.vehiculo.idVehiculo).subscribe(function (datos) {
            _this.imagenes = datos.imagenesVehiculo;
            _this.primeraImagen = _this.imagenes[0];
            _this.imagenes.shift();
            console.log("LA PRIMERA IMAGEN ES", _this.primeraImagen);
            console.log("EL ARRAY DE LAS IMAAGENES ES ", _this.imagenes);
        });
    };
    DetalleVehiculoComponent.prototype.obtenerHistorial = function () {
        var _this = this;
        this.authService.obtenerOrdenesVehiculo(this.vehiculo).subscribe(function (datos) {
            _this.ordenes = datos.ordenes;
            _this.historial = _this.ordenes.filter(function (orden) {
                if (orden.activada == 0) {
                    return orden;
                }
            });
        });
    };
    DetalleVehiculoComponent.prototype.verDetalleOrden = function (idOrden) {
        var _this = this;
        this.authService.getOrden(idOrden).subscribe(function (data) {
            _this.ordenTemp = data.orden;
            _this.authService.almacenarOrdenLS(_this.ordenTemp);
            _this.router.navigate(['detalle-orden']);
        });
    };
    DetalleVehiculoComponent.prototype.getMarcas = function () {
        var _this = this;
        this.authService.getMarcas().subscribe(function (data) {
            _this.marcas = data.marcas;
        });
    };
    DetalleVehiculoComponent.prototype.setMarcaVista = function (idMarca) {
        return this.marcas[idMarca - 1].marca;
    };
    DetalleVehiculoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detalle-vehiculo',
            template: __webpack_require__("./src/app/Components/detalle-vehiculo/detalle-vehiculo.component.html"),
            styles: [__webpack_require__("./src/app/Components/detalle-vehiculo/detalle-vehiculo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]])
    ], DetalleVehiculoComponent);
    return DetalleVehiculoComponent;
}());



/***/ }),

/***/ "./src/app/Components/leer-qr/leer-qr.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/leer-qr/leer-qr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix\">\n  \n    \n    \n      <qr-scanner class=\"card\"\n      [debug]=\"false\"\n   \n      [stopAfterScan]=\"false\" \n      [updateTime]=\"500\"> \n      \n  </qr-scanner>\n  \n    \n    \n \n  \n</div> \n"

/***/ }),

/***/ "./src/app/Components/leer-qr/leer-qr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeerQrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_qrscanner__ = __webpack_require__("./node_modules/angular2-qrscanner/esm5/angular2-qrscanner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeerQrComponent = (function () {
    function LeerQrComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LeerQrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qrScannerComponent.getMediaDevices().then(function (devices) {
            console.log(devices);
            var videoDevices = [];
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0) {
                var choosenDev = void 0;
                for (var _a = 0, videoDevices_1 = videoDevices; _a < videoDevices_1.length; _a++) {
                    var dev = videoDevices_1[_a];
                    if (dev.label.includes('front')) {
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    _this.qrScannerComponent.chooseCamera.next(choosenDev);
                }
                else {
                    _this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });
        this.qrScannerComponent.capturedQr.subscribe(function (result) {
            console.log(result);
            var idOrden = parseInt(result);
            if (isNaN(idOrden)) {
                console.log("No se paso un código QR válido ");
                _this.vista = 500;
            }
            _this.authService.getOrden(idOrden).subscribe(function (data) {
                console.log(data);
                _this.ordenTemp = data.orden;
                _this.authService.almacenarOrdenLS(_this.ordenTemp);
                _this.authService.getVehiculo(data.orden.idVehiculo).subscribe(function (data) {
                    console.log(data);
                    _this.vehiculoTemp = data.vehiculo;
                    _this.authService.almacenarVehiculoLS(_this.vehiculoTemp);
                    _this.router.navigate(['detalle-orden']);
                });
            });
        });
        /*
        const camera = navigator.mediaDevices;
        const permisos =navigator.mediaDevices.getUserMedia;
        if (camera && permisos) {
          navigator.mediaDevices.getUserMedia({video:true}).then(stream => {
            this.video.nativeElement.src = window.URL.createObjectURL(stream);
            this.video.nativeElement.play();
          }).catch(err => console.log(err));
    
          }
          */
    };
    LeerQrComponent.prototype.picture = function () {
        /*
        this.context = this.canvas.nativeElement.getContext('2d');
  
        this.context.drawImage(this.video.nativeElement,0,0,400,400).then( context => {
          this.qr = this.canvas.nativeElemement.toDataURL('img/png');
  
        });
        */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LeerQrComponent.prototype, "vista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_qrscanner__["b" /* QrScannerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_qrscanner__["b" /* QrScannerComponent */])
    ], LeerQrComponent.prototype, "qrScannerComponent", void 0);
    LeerQrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leer-qr',
            template: __webpack_require__("./src/app/Components/leer-qr/leer-qr.component.html"),
            styles: [__webpack_require__("./src/app/Components/leer-qr/leer-qr.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LeerQrComponent);
    return LeerQrComponent;
}());



/***/ }),

/***/ "./src/app/Components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"fondo\">\r\n<div class=\"login-page\">\r\n    <div class=\"login-box\">\r\n        <div class=\"logo\">\r\n            <a href=\"javascript:void(0);\">Mati\r\n                <b>ASSEMBLER</b>\r\n            </a>\r\n            <small>Su taller de siempre, ahora mejor que nunca</small>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div *ngIf=\"mostrarAlerta\">\r\n                <div class=\"alert alert-success alert-dismissible\" role=\"alert\">\r\n                    <button (click)=\"cerrarAlerta()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"mostrarAlerta2\">\r\n                <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n                    <button (click)=\"cerrarAlerta2()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"mostrarAlerta3\">\r\n                <div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\r\n                    <button (click)=\"cerrarAlerta3()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n                </div>\r\n            </div>\r\n            <div class=\"body\">\r\n                <form (submit)= \"onLoginSubmit()\">\r\n                    <div class=\"msg\">Inicie sesión</div>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                            <i class=\"material-icons\">person</i>\r\n                        </span>\r\n                        <div class=\"form-line\">\r\n                            <input type=\"text\" [(ngModel)]='email' class=\"form-control\" name=\"email\" placeholder=\"Correo\" required autofocus>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                            <i class=\"material-icons\">lock</i>\r\n                        </span>\r\n                        <div class=\"form-line\">\r\n                            <input type=\"password\"  [(ngModel)] = 'password' class=\"form-control\" name=\"password\" placeholder=\"Contraseña\" required>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <button class=\"btn btn-block btn-lg bg-pink waves-effect\" type=\"submit\">INGRESAR</button> \r\n\r\n                    <div class=\"row m-t-15 m-b--20\">\r\n                        <div class=\"col-xs-12\">\r\n                            <a>No tienes cuenta?</a>\r\n                            <button type=\"button\" data-toggle=\"modal\" data-target=\"#defaultModal\" (click)=\"Registrar(1)\" data-type=\"basic\" class=\"btn btn-lg bg-cyan waves-effect\">Registrate Ahora!</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<!-- MODAL REGISTRAR --> \r\n    <div class=\"modal fade\" id=\"defaultModal\" tabindex=\"-1\" role=\"dialog\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\" id=\"defaultModalLabel\">Registro - Cliente</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div *ngIf=\"nuevoRegistro\">\r\n                        <app-register [Vista]=vistaTemp> </app-register> \r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-link waves-effect\" data-dismiss=\"modal\">CLOSE</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</body>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FlashMessagesService } from 'angular2-flash-messages';
var LoginComponent = (function () {
    function LoginComponent(authService, router, validateService) {
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
        this.nuevoRegistro = false;
        //Alertas
        this.mostrarAlerta = false;
        this.mostrarAlerta2 = false;
        this.mostrarAlerta3 = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.obtenerUsuarios();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            correo: this.email,
            contraseña: this.password
        };
        if (!this.validateService.validarLogin(user)) {
            this.mostrarAlerta3 = true;
            this.mensajeAlerta = "Ingrese usuario y contraseña";
            return false;
        }
        if (!this.validarCorreo(user.correo)) {
            this.mostrarAlerta3 = true;
            this.mensajeAlerta = "Este correo no esta registrado, intente nuevamente.";
            return false;
        }
        //this.cerrarAlerta3();
        this.authService.authenticateUser(user).subscribe(function (data) {
            //console.log(data);	
            if (data.success) {
                _this.mostrarAlerta3 = false;
                _this.authService.storeUserData(data.token, data.user);
                //this.flashMessage.show('¡Bienvenido, ${data.user.nombre}!', { cssClass: 'custom-success', timeout: 6000 });
                if (data.user.rol == 1) {
                    _this.router.navigate(['profile-cliente']);
                }
                if (data.user.rol == 2) {
                    _this.router.navigate(['profile-administrador']);
                }
                if (data.user.rol == 3) {
                    _this.router.navigate(['profile-gerente']);
                }
                if (data.user.rol == 4) {
                    _this.router.navigate(['profile-mecanico']);
                }
            }
            else {
                _this.mostrarAlerta3 = true;
                _this.mensajeAlerta = "Usuario/Contraseña incorrectos. Intentelo de Nuevo";
            }
        });
    };
    LoginComponent.prototype.Registrar = function (id) {
        this.nuevoRegistro = true;
        this.vistaTemp = id;
    };
    LoginComponent.prototype.cerrarAlerta = function () {
        this.mostrarAlerta = false;
        this.mensajeAlerta = "";
    };
    LoginComponent.prototype.cerrarAlerta2 = function () {
        this.mostrarAlerta2 = false;
        this.mensajeAlerta = "";
    };
    LoginComponent.prototype.cerrarAlerta3 = function () {
        this.mostrarAlerta3 = false;
        this.mensajeAlerta = "";
    };
    LoginComponent.prototype.validarCorreo = function (correo) {
        for (var i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].correo == correo) {
                return true;
            }
        }
        return false;
    };
    LoginComponent.prototype.obtenerUsuarios = function () {
        var _this = this;
        var data = this.authService.getUsers().subscribe(function (datos) {
            _this.usuarios = datos.users;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/Components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/Components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Components/profile-administrador/profile-administrador.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/profile-administrador/profile-administrador.component.html":
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"admin.rol == 2\" > \r\n  <!-- Search Bar -->\r\n  <div class=\"search-bar\">\r\n      <div class=\"search-icon\">\r\n          <i class=\"material-icons\">search</i>\r\n      </div>\r\n      <input type=\"text\" placeholder=\"START TYPING...\">\r\n      <div class=\"close-search\">\r\n          <i class=\"material-icons\">close</i>\r\n      </div>\r\n  </div>\r\n  <!-- #END# Search Bar -->\r\n  \r\n<!-- Top Bar -->\r\n<nav class=\"navbar\">\r\n    <div class=\"container-fluid bg-deep-orange\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" style=\"cursor:pointer\" onclick=\"openNav()\">&#9776; MATI ASSEMBLER - ADMINISTRADOR</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- Call Search -->\r\n                <li>\r\n                    <a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\">\r\n                        <i class=\"material-icons\">search</i>\r\n                    </a>\r\n                </li>\r\n                <!-- #END# Call Search -->\r\n\r\n                <li class=\"pull-right\">\r\n                    <a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\">\r\n                        <i class=\"material-icons\">more_vert</i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- #Top Bar -->\r\n<section>\r\n        <!-- Left Sidebar -->\r\n        <aside id=\"leftsidebar\" class=\"sidebar\">\r\n            <!-- User Info -->\r\n            <div class=\"user-info bg-light-green\">\r\n                <div class=\"info-container\">\r\n                    <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{admin.nombre}}</div>\r\n                    <div class=\"email\">{{admin.correo}}</div>\r\n                </div>\r\n                <div><a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a></div>                \r\n            </div>\r\n            <!-- #User Info -->\r\n            <!-- Menu -->\r\n            <div class=\"menu\">\r\n                <ul class=\"list\">\r\n                    <li class=\"header active\">MENU PRINCIPAL</li>\r\n                    <li>\r\n                        <a (click)=\"setVista(1)\">\r\n                            <i class=\"material-icons\">person</i>\r\n                            <span style=\"cursor:pointer\">Usuarios</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"setVista(2)\">\r\n                            <i class=\"material-icons\">settings</i>\r\n                            <span style=\"cursor:pointer\">Repuestos</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a  (click)=\"logout()\" >\r\n                            <i class=\"material-icons\">not_interested</i>\r\n                            <span style=\"cursor:pointer\">Cerrar sesión</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- #Menu -->\r\n            <!-- Footer -->\r\n            <div class=\"legal\">\r\n                <div class=\"copyright\">\r\n                    &copy; 2018\r\n                    <a href=\"javascript:void(0);\">MatiAssembler</a>.\r\n                </div>\r\n                <div class=\"version\">\r\n                    <b>Version: </b> 1.0.0\r\n                </div>\r\n            </div>\r\n            <!-- #Footer -->\r\n        </aside>\r\n        <!-- #END# Left Sidebar -->\r\n </section>\r\n\r\n  <section id=\"main\" class=\"content\">\r\n    \r\n\r\n          <div *ngIf=\"mostrarAlerta\">\r\n            <div class=\"alert alert-success alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"mostrarAlerta2\">\r\n            <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta2()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"mostrarAlerta3\">\r\n            <div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta3()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n   <div class=\"container-fluid\">\r\n    <!-- LISTA USUARIOS -->\r\n    <div  *ngIf=\"vista == 1\">\r\n      <div class=\"row clearfix\">\r\n          <div>\r\n              <div class=\"card\">\r\n                  <div class=\"header bg-pink\">\r\n                      <h2>\r\n                          LISTA DE USUARIOS\r\n                      </h2>\r\n                  </div>\r\n                  <div class=\"body table-responsive\" >\r\n                      <table class=\"table table-hover dashboard-task-infos\">\r\n                          <thead>\r\n                              <tr>\r\n                                  <th>NOMBRE</th>\r\n                                  <th>APELLIDO</th>\r\n                                  <th>CÉDULA</th>\r\n                                  <th>ROL</th>\r\n                                  <th>MODIFICAR</th>\r\n                              </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                              <tr *ngFor= 'let user of usuarios' >\r\n                                  <td>{{user.nombre}}</td>\r\n                                  <td>{{user.apellido}}</td>\r\n                                  <td>{{user.cedula}}</td>\r\n                                  <td>{{obtenerRol(user.rol)}}</td>\r\n                                  <td>\r\n                                  <button type=\"button\" (click)=\"modificarUsuario(user.idUsuario)\" class=\"btn btn-default waves-effect\">\r\n                                    <i class=\"material-icons\">settings</i>\r\n                                </button>\r\n                            </td>\r\n                              </tr>\r\n                             \r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n                  <div class=\"align-center\">\r\n                      <button type=\"button\" (click)=\"setVista(4)\" class=\"btn bg-cyan waves-effect\">AGREGAR USUARIO</button>\r\n                  </div>\r\n                  <br>\r\n\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <!-- #END# LISTA USUARIOS -->\r\n    <!-- LISTA REPUESTOS -->\r\n    <div  *ngIf=\"vista == 2\">\r\n      <div class=\"row clearfix\">\r\n          <div>\r\n              <div class=\"card\">\r\n                  <div class=\"header bg-deep-purple\">\r\n                      <h2>\r\n                          LISTA DE REPUESTOS\r\n                      </h2>\r\n                  </div>\r\n                  <div class=\"body table-responsive\">\r\n                      <table class=\"table table-hover\">\r\n                          <thead>\r\n                              <tr>\r\n                                  <th>NOMBRE</th>\r\n                                  <th>MARCA</th>\r\n                                  <th>MODELO</th>\r\n                              </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                              <tr *ngFor = \"let repuesto of repuestos\" >\r\n                                  <td>{{repuesto.pieza}}</td>\r\n                                  <td>{{setMarcaVista(repuesto.marca)}} </td>\r\n                                  <td>{{setModeloVista(repuesto.modelo)}} </td>\r\n                              </tr>\r\n                              \r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n                  <div class=\"align-center\">\r\n                          <button type=\"button\" class=\"btn bg-cyan waves-effect\" (click) =\"setVista(5)\" >AGREGAR REPUESTO</button>\r\n                      </div>\r\n                      <br>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <!-- #END# LISTA VEHICULOS -->\r\n    <!-- MODIFICAR USUARIOS -->\r\n    <div  *ngIf=\"vista == 3\">\r\n      <div class=\"overlay\"></div>\r\n      <div class=\"signup-box\">\r\n          <div class=\"logo\">\r\n              <a href=\"javascript:void(0);\">Mati<b>ASSEMBLER</b></a>\r\n              <small>Su taller de siempre, ahora mejor que nunca</small>\r\n          </div>\r\n          <div class=\"card\">\r\n              <div class=\"body\">\r\n                  <form  action=\"/\" (submit)=\"modificarUsuarioSubmit()\" id=\"frmFileUpload2\"  method=\"post\">\r\n                      <div class=\"msg\">Modifique el usuario</div>\r\n                      <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                                      <i class=\"material-icons\">person</i>\r\n                                  </span>\r\n                          <div class=\"form-line\">\r\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Nombre\" required autofocus>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                                      <i class=\"material-icons\">person</i>\r\n                                  </span>\r\n                          <div class=\"form-line\">\r\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastname\" name=\"lastname\" placeholder=\"Apellido\" required autofocus>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                                      <i class=\"material-icons\">person</i>\r\n                                  </span>\r\n                          <div class=\"form-line\">\r\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cedula\" name=\"cedula\" placeholder=\"Cédula\" required autofocus>\r\n                          </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                                      <i class=\"material-icons\">email</i>\r\n                                  </span>\r\n                          <div class=\"form-line\">\r\n                              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required>\r\n                          </div>\r\n                      </div> \r\n                      <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                                      <i class=\"material-icons\">person</i>\r\n                                  </span>\r\n                          <div class=\"btn-group\">\r\n\r\n                              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{obtenerRolSubmit()}}<span class=\"caret\"></span>\r\n                                    </button>\r\n                              <ul class=\"dropdown-menu\">\r\n                                  <li><a (click)= \"setRol(1)\" >Cliente</a></li>\r\n                                  <li><a (click)= \"setRol(2)\" >Administrador</a></li>\r\n                                  <li><a (click)= \"setRol(3)\">Gerente</a></li>\r\n                                  <li><a (click)= \"setRol(4)\">Mecanico</a></li>\r\n\r\n                              </ul>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                                  <i class=\"material-icons\">person</i>\r\n                              </span>\r\n                          <div class=\"form-line\">\r\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"telefono\" name=\"telefono\" placeholder=\"telefono\" required autofocus>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                                  <i class=\"material-icons\">person</i>\r\n                              </span>\r\n                          <div class=\"form-line\">\r\n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"direccion\" name=\"direccion\" placeholder=\"direccion\" required autofocus>\r\n                          </div>\r\n                          <button class=\"btn btn-block btn-lg bg-pink waves-effect\"  type=\"submit\">MODIFICAR</button>\r\n                      </div>\r\n                  </form>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- AGREGAR USUARIOS -->\r\n    <div  *ngIf=\"vista == 4\">\r\n        <div class=\"signup-box\">\r\n          <div class=\"logo\">\r\n            <a href=\"javascript:void(0);\">Mati<b>ASSEMBLER</b></a>\r\n            <small>Su taller de siempre, ahora mejor que nunca</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"body\">\r\n                <form action=\"/\" (submit) = \"onRegisterSubmit()\" id=\"frmFileUpload\"  method=\"post\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                            <i class=\"material-icons\">person</i>\r\n                        </span>\r\n                        <div class=\"form-line\">\r\n                            <input id=\"myInput4\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Nombre\" required autofocus>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                            <i class=\"material-icons\">person</i>\r\n                        </span>\r\n                        <div class=\"form-line\">\r\n                            <input id=\"myInput5\" type=\"text\" class=\"form-control\"  [(ngModel)]=\"lastname\" name=\"lastname\" placeholder=\"Apellido\" required autofocus>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                            <i class=\"material-icons\">person</i>\r\n                        </span>\r\n                        <div class=\"form-line\">\r\n                            <input id=\"myInput6\" type=\"text\" class=\"form-control\"  [(ngModel)] = \"cedula\" name=\"cedula\" placeholder=\"Cédula\" required autofocus>\r\n                        </div>\r\n                    </div>  \r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                            <i class=\"material-icons\">email</i>\r\n                        </span>\r\n                        <div class=\"form-line\">\r\n                            <input id=\"myInput7\" type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                            <i class=\"material-icons\">lock</i>\r\n                        </span>\r\n                        <div class=\"form-line\">\r\n                            <input id=\"myInput8\" type=\"password\" class=\"form-control\" [(ngModel)] = \"password\" name=\"password\" minlength=\"6\" placeholder=\"Contraseña\" required>\r\n                        </div>\r\n                    </div>\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                                  <i class=\"material-icons\">person</i>\r\n                      </span>\r\n                      <div class=\"btn-group\">\r\n\r\n                          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                    {{obtenerRolSubmit()}}<span class=\"caret\"></span>\r\n                                </button>\r\n                          <ul class=\"dropdown-menu\">\r\n                              <li><a (click)= \"setRol(1)\" >Cliente</a></li>\r\n                              <li><a (click)= \"setRol(2)\" >Administrador</a></li>\r\n                              <li><a (click)= \"setRol(3)\">Gerente</a></li>\r\n                              <li><a (click)= \"setRol(4)\">Mecánico</a></li>\r\n                          </ul>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">person</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input id=\"myInput9\" type=\"text\" class=\"form-control\" [(ngModel)]=\"telefono\" name=\"telefono\" placeholder=\"Telefono\" required autofocus>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">person</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input id=\"myInput10\" type=\"text\" class=\"form-control\" [(ngModel)]=\"direccion\" name=\"direccion\" placeholder=\"Direccion\" required autofocus>\r\n                      </div>\r\n                  </div>\r\n\r\n                    <button class=\"btn btn-block btn-lg bg-pink waves-effect\" type=\"submit\">REGISTRAR</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- AGREGAR REPUESTO -->\r\n    <div  *ngIf=\"vista == 5\">     \r\n      <div class=\"card\">\r\n          <div class=\"header\">\r\n              <h2>REGISTRAR NUEVO REPUESTO</h2>\r\n          </div> \r\n          <div class=\"body\">\r\n              <form  action=\"/\" (submit)=\"registrarRepuesto()\" id=\"frmFileUpload\" method=\"post\">\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">confirmation_number</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input id=\"myInput\" type=\"text\" class=\"form-control\" [(ngModel)]=\"pieza\" name=\"pieza\" placeholder=\"Nombre de pieza\">\r\n                      </div>\r\n                  </div>\r\n                <div  *ngIf=\"selecciono\">\r\n                  <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                                <i class=\"material-icons\">confirmation_number</i>\r\n                            </span>\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            Marca: {{marcaNuevo.marca}} <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul   class=\"dropdown-menu\">\r\n                            <li *ngFor = \"let marca of marcas\"><a (click)= \"setMarcaNuevo(marca)\">{{marca.marca}}</a></li>\r\n                            \r\n                        </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div  *ngIf=\"!selecciono\">\r\n                  <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                                <i class=\"material-icons\">confirmation_number</i>\r\n                            </span>\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            Marca: (opcional)<span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul   class=\"dropdown-menu\">\r\n                            <li *ngFor = \"let marca of marcas\"><a (click)= \"setMarcaNuevo(marca)\">{{marca.marca}}</a></li>\r\n                            \r\n                        </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">directions_car</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input id=\"myInput3\" type=\"text\" class=\"form-control\"  [(ngModel)]=\"modelo\" name=\"modelo\" placeholder=\"Modelo (opcional)\" >\r\n                      </div>\r\n                  </div>\r\n                  <button class=\"btn btn-block btn-lg bg-pink waves-effect\" type=\"submit\">AÑADIR REPUESTO</button>\r\n    \r\n              </form>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  </div>               \r\n</section>\r\n\r\n</div>\r\n<div *ngIf=\"admin.rol != 2\"> \r\n    <body class=\"five-zero-zero\">\r\n        <div class=\"five-zero-zero-container\">\r\n            <div class=\"error-code\">Error</div>\r\n            <div class=\"error-message\">No tiene acceso a esta página</div>\r\n        </div>\r\n    </body> \r\n</div>"

/***/ }),

/***/ "./src/app/Components/profile-administrador/profile-administrador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileAdministradorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileAdministradorComponent = (function () {
    function ProfileAdministradorComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.vista = 1;
        this.rol = 1;
        this.selecciono = false;
        this.modelo = undefined;
        this.marcas = Array;
        //Alertas
        this.mostrarAlerta = false;
        this.mostrarAlerta2 = false;
        this.mostrarAlerta3 = false;
    }
    ProfileAdministradorComponent.prototype.ngOnInit = function () {
        this.getMarcas();
        this.admin = JSON.parse(localStorage.getItem("user"));
        console.log(this.admin, JSON.parse(localStorage.getItem("user")));
        this.obtenerRepuestos();
        this.obtenerUsuarios();
    };
    ProfileAdministradorComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    ProfileAdministradorComponent.prototype.setVista = function (id) {
        this.vista = id;
        this.setearCampos();
        this.cerrarAlerta();
        this.cerrarAlerta2();
        this.cerrarAlerta3();
    };
    ProfileAdministradorComponent.prototype.obtenerRepuestos = function () {
        var _this = this;
        var data = this.authService.obtenerRepuestos().subscribe(function (datos) {
            _this.repuestos = datos.repuestos;
        });
    };
    ProfileAdministradorComponent.prototype.obtenerUsuarios = function () {
        var _this = this;
        var data = this.authService.getUsers().subscribe(function (datos) {
            _this.usuarios = datos.users;
        });
    };
    ProfileAdministradorComponent.prototype.modificarUsuario = function (id) {
        var _this = this;
        var user;
        this.setearCampos();
        this.authService.getUserById(id).subscribe(function (datos) {
            user = datos.usuario;
            _this.usuario = user;
            _this.obtenerDatos(_this.usuario);
            _this.cerrarAlerta();
            _this.vista = 3;
        });
    };
    ProfileAdministradorComponent.prototype.obtenerRol = function (rol) {
        if (rol == 1) {
            return "Cliente";
        }
        if (rol == 2) {
            return "Administrador";
        }
        if (rol == 3) {
            return "Gerente";
        }
        if (rol == 4) {
            return "Mecanico";
        }
    };
    //------------ FUNCIONES PARA MODIFICAR USUARIO -------------
    ProfileAdministradorComponent.prototype.obtenerDatos = function (user) {
        this.id = user.idUsuario;
        this.name = user.nombre;
        this.lastname = user.apellido;
        this.email = user.correo;
        this.rol = user.rol;
        this.password = user.contraseña;
        this.cedula = user.cedula;
        this.direccion = user.direccion;
        this.telefono = user.telefono;
    };
    ProfileAdministradorComponent.prototype.modificarUsuarioSubmit = function () {
        var _this = this;
        var usuario = {
            idUsuario: this.id,
            nombre: this.name,
            apellido: this.lastname,
            correo: this.email,
            rol: this.rol,
            contraseña: this.password,
            cedula: this.cedula,
            telefono: this.telefono,
            direccion: this.direccion
        };
        //Validar nombre
        if (!this.validateService.validarNombre(usuario.nombre)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Nombre demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar apellido
        if (!this.validateService.validarApellido(usuario.apellido)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Apellido demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar correo
        if (!this.validateService.validarCorreo(usuario.correo)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Correo demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar cedula
        if (!this.validateService.validarCedula(usuario.cedula)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Cedula demasiado larga, ingrese una mas corta.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar direccion
        if (!this.validateService.validarDireccion(usuario.direccion)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Direccion demasiado larga, ingrese una mas corta.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar telefono
        if (!this.validateService.validarTelefono(usuario.telefono)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Telefono demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Required fields
        if (!this.validateService.validateRegister(usuario)) {
            this.cerrarAlerta3();
            this.mensajeAlerta = "Por favor rellene todos los campos";
            this.mostrarAlerta2 = true;
            return false;
        }
        //Validar formato email
        if (!this.validateService.validateEmail(usuario.correo)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Correo inválido, por favor ingrese correctamente.";
            this.mostrarAlerta3 = true;
            return false;
        }
        this.cerrarAlerta2();
        this.cerrarAlerta3();
        this.authService.actualizarUsuario(usuario).subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < _this.usuarios.length; i++) {
                    if (_this.usuarios[i].idUsuario == usuario.idUsuario) {
                        _this.usuarios[i] = usuario;
                    }
                }
                _this.setearCampos();
                _this.vista = 1;
                _this.mensajeAlerta = "Usuario modificado correctamente";
                _this.mostrarAlerta = true;
            }
            _this.router.navigate['profile-administrador'];
        });
    };
    ProfileAdministradorComponent.prototype.setRol = function (numero) {
        this.rol = numero;
    };
    ProfileAdministradorComponent.prototype.obtenerRolSubmit = function () {
        if (this.rol == 1) {
            return "Cliente";
        }
        if (this.rol == 2) {
            return "Administrador";
        }
        if (this.rol == 3) {
            return "Gerente";
        }
        if (this.rol == 4) {
            return "Mecanico";
        }
    };
    //------------ FUNCION PARA AGREGAR USUARIO -------------
    ProfileAdministradorComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.cerrarAlerta();
        var user = {
            nombre: this.name,
            apellido: this.lastname,
            correo: this.email,
            contraseña: this.password,
            rol: this.rol,
            cedula: this.cedula,
            direccion: this.direccion,
            telefono: this.telefono,
        };
        //Validar nombre
        if (!this.validateService.validarNombre(user.nombre)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Nombre demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar apellido
        if (!this.validateService.validarApellido(user.apellido)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Apellido demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar correo
        if (!this.validateService.validarCorreo(user.correo)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Correo demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar contraseña
        if (!this.validateService.validarPassword(user.contraseña)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Contraseña demasiado larga, ingrese una mas corta.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar cedula
        if (!this.validateService.validarCedula(user.cedula)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Cedula demasiado larga, ingrese una mas corta.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar direccion
        if (!this.validateService.validarDireccion(user.direccion)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Direccion demasiado larga, ingrese una mas corta.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar telefono
        if (!this.validateService.validarTelefono(user.telefono)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Telefono demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar usuario existente por correo electronico
        if (!this.validarUsuario(user)) {
            this.mensajeAlerta = "Este correo ya esta registrado, por favor ingrese otro.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Required fields
        if (!this.validateService.validateRegister(user) && !this.validateService.validateEmail(user.correo)) {
            this.mensajeAlerta = "Por favor rellene todos los campos, con un correo válido";
            this.mostrarAlerta2 = true;
            return false;
        }
        if (!this.validateService.validateRegister(user)) {
            this.cerrarAlerta3();
            this.mensajeAlerta = "Por favor rellene todos los campos";
            this.mostrarAlerta2 = true;
            return false;
        }
        //Validar formato email
        if (!this.validateService.validateEmail(user.correo)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Correo inválido, por favor ingrese correctamente.";
            this.mostrarAlerta3 = true;
            return false;
        }
        this.cerrarAlerta2();
        this.cerrarAlerta3();
        //Registrar usuario
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                var usuarioNuevo = data.user;
                _this.usuarios.push(usuarioNuevo);
                _this.mensajeAlerta = "Usuario registrado correctamente";
                _this.mostrarAlerta = true;
            }
        });
        this.setearCampos();
        this.vista = 1;
        //this.router.navigate['profile-administrador'];             
    };
    //--------- FUNCION AGREGAR REPUESTO -----------------
    ProfileAdministradorComponent.prototype.registrarRepuesto = function () {
        var _this = this;
        if (this.pieza == undefined || this.pieza == "") {
            this.mensajeAlerta = "El campo pieza está vacío, por favor ingrese un valor.";
            this.mostrarAlerta3 = true;
        }
        else {
            //this.cerrarAlerta3();      
            if (!this.validateService.validarPieza(this.pieza)) {
                this.mensajeAlerta = "Campo Pieza demasiado largo, ingrese uno mas corto.";
                this.mostrarAlerta3 = true;
                return false;
            }
            if (this.modelo != undefined) {
                if (!this.validateService.validarModeloRep(this.modelo)) {
                    this.mensajeAlerta = "Campo Modelo demasiado largo, ingrese uno mas corto.";
                    this.mostrarAlerta3 = true;
                    return false;
                }
            }
            if (this.marcaNuevo == undefined || this.modelo == undefined) {
                this.mensajeAlerta = "Campos marca o modelo vacios";
                this.mostrarAlerta3 = true;
                return false;
            }
            var repuesto_1 = {
                pieza: this.pieza,
                modelo: this.modelo,
                marca: this.marcaNuevo.idMarca
            };
            this.cerrarAlerta3();
            this.authService.registerRepuesto(repuesto_1).subscribe(function (data) {
                _this.repuestos.push(repuesto_1);
                _this.pieza = "";
                _this.marcaNuevo = undefined;
                _this.modelo = undefined;
                //this.router.navigate(['/profile-administrador']);
                _this.mensajeAlerta = "Repuesto registrado correctamente";
                _this.mostrarAlerta = true;
                _this.vista = 2;
            });
        }
    };
    ProfileAdministradorComponent.prototype.cerrarAlerta = function () {
        this.mostrarAlerta = false;
        this.mensajeAlerta = "";
    };
    ProfileAdministradorComponent.prototype.cerrarAlerta2 = function () {
        this.mostrarAlerta2 = false;
        this.mensajeAlerta = "";
    };
    ProfileAdministradorComponent.prototype.cerrarAlerta3 = function () {
        this.mostrarAlerta3 = false;
        this.mensajeAlerta = "";
    };
    ProfileAdministradorComponent.prototype.setearCampos = function () {
        this.name = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
        this.cedula = "";
        this.direccion = "";
        this.telefono = "";
        this.rol = 1;
    };
    ProfileAdministradorComponent.prototype.getMarcas = function () {
        var _this = this;
        this.authService.getMarcas().subscribe(function (data) {
            _this.marcas = data.marcas;
        });
    };
    ProfileAdministradorComponent.prototype.setMarcaVista = function (idMarca) {
        if (idMarca != null) {
            return this.marcas[idMarca - 1].marca;
        }
        else {
            return "-----";
        }
    };
    ProfileAdministradorComponent.prototype.setModeloVista = function (modelo) {
        if (modelo != null) {
            return modelo;
        }
        else {
            return "-----";
        }
    };
    ProfileAdministradorComponent.prototype.setMarcaNuevo = function (marca) {
        this.marcaNuevo = marca;
        this.selecciono = true;
    };
    ProfileAdministradorComponent.prototype.validarUsuario = function (newUsuario) {
        for (var i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].correo == newUsuario.correo) {
                return false;
            }
        }
        return true;
    };
    ProfileAdministradorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-administrador',
            template: __webpack_require__("./src/app/Components/profile-administrador/profile-administrador.component.html"),
            styles: [__webpack_require__("./src/app/Components/profile-administrador/profile-administrador.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ProfileAdministradorComponent);
    return ProfileAdministradorComponent;
}());



/***/ }),

/***/ "./src/app/Components/profile-cliente/profile-cliente.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/profile-cliente/profile-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"user.rol == 1\"> \r\n\r\n<!-- Search Bar -->\r\n<div class=\"search-bar\">\r\n  <div class=\"search-icon\">\r\n      <i class=\"material-icons\">search</i>\r\n  </div>\r\n  <input type=\"text\" placeholder=\"START TYPING...\">\r\n  <div class=\"close-search\">\r\n      <i class=\"material-icons\">close</i>\r\n  </div>\r\n</div>\r\n<!-- #END# Search Bar -->\r\n\r\n\r\n<!-- Top Bar -->\r\n<nav class=\"navbar\">\r\n    <div class=\"container-fluid bg-deep-orange\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" style=\"cursor:pointer\" onclick=\"openNav()\">&#9776; MATI ASSEMBLER - CLIENTE</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- Call Search -->\r\n                <li>\r\n                    <a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\">\r\n                        <i class=\"material-icons\">search</i>\r\n                    </a>\r\n                </li>\r\n                <!-- #END# Call Search -->\r\n\r\n                <li class=\"pull-right\">\r\n                    <a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\">\r\n                        <i class=\"material-icons\">more_vert</i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- #Top Bar -->\r\n<section>\r\n        <!-- Left Sidebar -->\r\n        <aside id=\"leftsidebar\" class=\"sidebar\">\r\n            <!-- User Info -->\r\n            <div class=\"user-info bg-light-green\">\r\n                <div class=\"info-container\">\r\n                    <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{user.nombre}}</div>\r\n                    <div class=\"email\">{{user.correo}}</div>\r\n                </div>\r\n                <div><a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a></div>\r\n            </div>\r\n            <!-- #User Info -->\r\n            <!-- Menu -->\r\n            <div class=\"menu\">\r\n                <ul class=\"list\">\r\n                    <li class=\"header active\">MENU PRINCIPAL</li>\r\n                    <li>\r\n                        <a (click)=\"setVista(1)\">\r\n                            <i class=\"material-icons\">home</i>\r\n                            <span style=\"cursor:pointer\">Home</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"setVista(2)\">\r\n                            <i class=\"material-icons\">directions_car</i>\r\n                            <span style=\"cursor:pointer\">Registrar vehículo</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a  (click)=\"logout()\" >\r\n                            <i class=\"material-icons\">not_interested</i>\r\n                            <span style=\"cursor:pointer\">Cerrar sesión</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- #Menu -->\r\n            <!-- Footer -->\r\n            <div class=\"legal\">\r\n                <div class=\"copyright\">\r\n                    &copy; 2018\r\n                    <a href=\"javascript:void(0);\">MatiAssembler</a>.\r\n                </div>\r\n                <div class=\"version\">\r\n                    <b>Version: </b> 1.0.0\r\n                </div>\r\n            </div>\r\n            <!-- #Footer -->\r\n        </aside>\r\n        <!-- #END# Left Sidebar -->\r\n </section>\r\n\r\n<section id=\"main\" class=\"content\">\r\n\r\n  <div class=\"container-fluid\">\r\n            <div *ngIf=\"mostrarAlerta3\">\r\n                <div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\r\n                    <button (click)=\"cerrarAlerta3()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n                </div>\r\n            </div>\r\n<div  *ngIf=\"vista == 1\">\r\n      <div class=\"block-header\">\r\n          <h2>USUARIO</h2>\r\n      </div>\r\n\r\n      <!-- DATOS -->\r\n      <div class=\"row clearfix\">\r\n\r\n          <div class=\"col-xs-12 col-sm-6\">\r\n              <div class=\"info-box bg-pink hover-expand-effect\">\r\n                  <div class=\"icon\">\r\n                      <i class=\"material-icons\">person</i>\r\n                  </div>\r\n                  <div class=\"content\">\r\n                      <div class=\"text\">NOMBRE</div>\r\n                      <p class=\"lead\">{{user.nombre}}</p>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-xs-12 col-sm-6\">\r\n              <div class=\"info-box bg-purple hover-expand-effect\">\r\n                  <div class=\"icon\">\r\n                      <i class=\"material-icons\">person</i>\r\n                  </div>\r\n                  <div class=\"content\">\r\n                      <div class=\"text\">APELLIDO</div>\r\n                      <p class=\"lead\">{{user.apellido}}</p>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-xs-12 col-sm-6\">\r\n              <div class=\"info-box bg-indigo hover-expand-effect\">\r\n                  <div class=\"icon\">\r\n                      <i class=\"material-icons\">confirmation_number</i>\r\n                  </div>\r\n                  <div class=\"content\">\r\n                      <div class=\"text\">CÉDULA</div>\r\n                      <div class=\"lead\"> {{user.cedula}} </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-xs-12 col-sm-6\">            \r\n              <div class=\"info-box bg-cyan hover-expand-effect\">\r\n                  <div class=\"icon\">\r\n                      <i class=\"material-icons\">email</i>\r\n                  </div>\r\n                  <div class=\"content\">\r\n                      <div class=\"text\">CORREO ELECTRÓNICO</div>\r\n                      <p class=\"lead\">{{user.correo}}</p>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-xs-12 col-sm-6\">\r\n              <div class=\"info-box bg-light-green hover-expand-effect\">\r\n                  <div class=\"icon\">\r\n                      <i class=\"material-icons\">local_phone</i>\r\n                  </div>\r\n                  <div class=\"content\">\r\n                      <div class=\"text\">TELEFÓNO</div>\r\n                      <div class=\"lead\">{{user.telefono}}</div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-xs-12 col-sm-6\">\r\n              <div class=\"info-box bg-orange hover-expand-effect\">\r\n                  <div class=\"icon\">\r\n                      <i class=\"material-icons\">directions</i>\r\n                  </div>\r\n                  <div class=\"content\">\r\n                      <div class=\"text\">DIRECCIÓN</div>\r\n                      <p class=\"lead\">{{user.direccion}}</p>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n          <!-- #END# DATOS -->\r\n\r\n      <div class=\"row clearfix\">\r\n          <!-- VEHICULOS -->\r\n          <div >\r\n    <!--ALERTAS-->              \r\n    <div *ngIf=\"mostrarAlerta\">\r\n        <div class=\"alert alert-success alert-dismissible\" role=\"alert\">\r\n            <button (click)=\"cerrarAlerta()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"mostrarAlerta2\">\r\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n            <button (click)=\"cerrarAlerta2()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n        </div>\r\n    </div>\r\n    <!--FIN ALERTAS-->             \r\n              <div class=\"card\">\r\n                  <div class=\"header\">\r\n                      <h2>VEHÍCULOS REGISTRADOS</h2>\r\n                  </div>\r\n                  <div class=\"body\">\r\n                      <div class=\"table-responsive\">\r\n                          <table class=\"table table-hover dashboard-task-infos\">\r\n                              <thead>\r\n                                  <tr>\r\n                                      <th>Marca</th>\r\n                                      <th>Modelo</th>\r\n                                      <th>Año</th>\r\n                                      <th>Placa</th>\r\n                                      <th>Serial del motor</th>\r\n                                      <th>Estado</th>\r\n                                      <th>Fecha Registro</th>\r\n                                      <th>Solicitar Cita</th>\r\n                                      <th>Desactivar</th>\r\n                                  </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                  \r\n                                  <tr *ngFor=\"let vehiculo of vehiculos\" >\r\n                                       \r\n                                      <td>{{setMarcaVista(vehiculo.marca)}}</td>\r\n                                      <td>{{vehiculo.modelo}}</td>\r\n                                      <td>{{vehiculo.ano}}</td>\r\n                                      <td>{{vehiculo.placa}}</td>\r\n                                      <td>{{vehiculo.serialMotor}}</td>\r\n                                      <td>{{setActivado(vehiculo.activado)}}</td>\r\n                                      <td>{{vehiculo.fechaRegistro}}</td>\r\n                                      <td>\r\n                                          <button (click)=\"solicitarCita(vehiculo.idVehiculo)\" type=\"button\" class=\"btn bg-indigo waves-effect\">\r\n                                              <i class=\"material-icons\">date_range</i>\r\n                                          </button>\r\n                                      </td>\r\n                                      <td>\r\n                                          <button type=\"button\" class=\"btn bg-indigo waves-effect\" (click)=\"desactivarVehiculo(vehiculo)\">\r\n                                              <i class=\"material-icons\">close</i>\r\n                                          </button>\r\n                                      </td>                                      \r\n                                  </tr>\r\n                              </tbody>\r\n                          </table>\r\n                      </div>\r\n                  </div>\r\n\r\n              </div>\r\n          </div>\r\n          <!-- #END# VEHICULOS -->\r\n      </div>\r\n  </div>\r\n\r\n\r\n<div  *ngIf=\"vista == 2\">\r\n  <div class=\"row clearfix\">\r\n    <div>\r\n      <div class=\"card\">\r\n          <div class=\"header\">\r\n              <h2>REGISTRAR NUEVO VEHICULO</h2>\r\n          </div>\r\n          <div class=\"body\">\r\n              <form action=\"/\" (submit)=\"vehiculoSubmit()\" id=\"frmFileUpload\"  method=\"post\" enctype=\"multipart/form-data\">\r\n                <div *ngIf=\"selecciono\">\r\n                  <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                                <i class=\"material-icons\">confirmation_number</i>\r\n                            </span>\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            Marca: {{marcaNuevo.marca}} <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul   class=\"dropdown-menu\">\r\n                            <li *ngFor = \"let marca of marcas\"><a (click)= \"setMarcaNuevo(marca)\">{{marca.marca}}</a></li>\r\n                            \r\n                        </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"!selecciono\">\r\n                  <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                                <i class=\"material-icons\">confirmation_number</i>\r\n                            </span>\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            Marca: <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul   class=\"dropdown-menu\">\r\n                            <li *ngFor = \"let marca of marcas\"><a (click)= \"setMarcaNuevo(marca)\">{{marca.marca}}</a></li>\r\n                            \r\n                        </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">directions_car</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input id=\"myInput\" type=\"email\" class=\"form-control\"[(ngModel)]=\"modelo\" name=\"modelo\" placeholder=\"Modelo\" required>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">confirmation_number</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input id=\"myInput2\" type=\"text\" class=\"form-control\" name=\"ano\" [(ngModel)]=\"ano\"  placeholder=\"Año\" required>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">confirmation_number</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input id=\"myInput3\" type=\"text\" class=\"form-control\" name=\"confirm\" [(ngModel)]=\"serialMotor\" placeholder=\"serialMotor\" required>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">confirmation_number</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input id=\"myInput4\" type=\"text\" class=\"form-control\" [(ngModel)]=\"placa\" name=\"placa\" placeholder=\"Placa\" required autofocus>\r\n                      </div>\r\n                  </div>\r\n                   <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">confirmation_number</i>\r\n                      </span>\r\n                      <div class=\"form-line\">                      \r\n                        <label for=\"fileItem\">Elegir imagen a cargar</label>\r\n                        <input type=\"file\" id=\"fileItem\" [(ngModel)]=\"file\" name=\"file\" accept=\".png, .jpg, .jpeg\" multiple>\r\n                      </div>\r\n                  </div>                 \r\n                  <button class=\"btn btn-block btn-lg bg-pink waves-effect\" type=\"submit\">REGISTRAR VEHÍCULO</button>\r\n\r\n              </form>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</section>\r\n\r\n</div>\r\n<div *ngIf=\"user.rol != 1\"> \r\n    <body class=\"five-zero-zero\">\r\n        <div class=\"five-zero-zero-container\">\r\n            <div class=\"error-code\">Error</div>\r\n            <div class=\"error-message\">No tiene acceso a esta página</div>\r\n        </div>\r\n    </body> \r\n</div>"

/***/ }),

/***/ "./src/app/Components/profile-cliente/profile-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_upload_file_service__ = __webpack_require__("./src/app/services/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileClienteComponent = (function () {
    function ProfileClienteComponent(http, validateService, authService, router, location, datePipe, uploadService) {
        this.http = http;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.datePipe = datePipe;
        this.uploadService = uploadService;
        this.selecciono = false;
        this.vehiculos = []; //Contiene los vehiculos de un cliente
        this.vehiculos2 = [];
        //Marcas 
        this.marcas = Array;
        this.vista = 1;
        //Alertas
        this.mostrarAlerta = false;
        this.mostrarAlerta2 = false;
        this.mostrarAlerta3 = false;
    }
    ProfileClienteComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.getMarcas();
        this.recuperarVehiculos();
        this.obtenerVehiculosTaller();
        this.obtenerCitas();
        this.obtenerOrdenes();
    };
    ProfileClienteComponent.prototype.ngAfterInit = function () {
        this.getMarcas();
        this.recuperarVehiculos();
    };
    ProfileClienteComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    ProfileClienteComponent.prototype.home = function () {
        this.router.navigate(['']);
    };
    ProfileClienteComponent.prototype.setVista = function (id) {
        this.vista = id;
        this.cerrarAlerta();
        this.cerrarAlerta2();
        this.cerrarAlerta3();
        this.setearCampos();
    };
    ProfileClienteComponent.prototype.setMarcaNuevo = function (marca) {
        this.marcaNuevo = marca;
        this.selecciono = true;
    };
    ProfileClienteComponent.prototype.obtenerVehiculosTaller = function () {
        var _this = this;
        this.authService.obtenerListaVehiculos().subscribe(function (datos) {
            _this.vehiculosTaller = datos.vehiculos;
        });
    };
    ProfileClienteComponent.prototype.recuperarVehiculos = function () {
        var _this = this;
        var data = this.authService.obtenerVehiculos(this.user).subscribe(function (datos) {
            _this.vehiculos2 = datos.vehiculos;
            _this.vehiculos = _this.vehiculos2.filter(function (vehiculo) {
                if (vehiculo.activado == 1) {
                    return vehiculo;
                }
            });
        });
    };
    ProfileClienteComponent.prototype.desactivarVehiculo = function (carro) {
        var _this = this;
        this.cerrarAlerta();
        if (!this.validarCitaPendiente(carro.idVehiculo)) {
            this.mensajeAlerta = "No puede desactivarse, tiene citas por asignar";
            this.mostrarAlerta2 = true;
            return false;
        }
        if (!this.validarSolicitudCita(carro.idVehiculo)) {
            this.mensajeAlerta = "No puede desactivarse, tiene una orden de reparación en proceso";
            this.mostrarAlerta2 = true;
            return false;
        }
        this.cerrarAlerta2();
        this.authService.desactivarVehiculo(carro).subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < _this.vehiculos.length; i++) {
                    if (_this.vehiculos[i].idVehiculo == carro.idVehiculo) {
                        _this.vehiculos.splice(i, 1);
                    }
                }
            }
        });
    };
    ProfileClienteComponent.prototype.setActivado = function (id) {
        if (id == 1) {
            return "Activado";
        }
        if (id == 0) {
            return "Desactivado";
        }
    };
    ProfileClienteComponent.prototype.solicitarCita = function (idVehiculo) {
        var _this = this;
        this.cerrarAlerta();
        this.fechatemp = new Date();
        this.fechaRegistro = this.datePipe.transform(this.fechatemp);
        var cita = {
            vehiculoCita: idVehiculo,
            fechaSolicitud: this.fechaRegistro
        };
        if (!this.validarCitaPendiente(idVehiculo)) {
            this.mensajeAlerta = "Este vehiculo ya tiene una cita solicitada";
            this.mostrarAlerta2 = true;
            return false;
        }
        if (!this.validarSolicitudCita(idVehiculo)) {
            this.mensajeAlerta = "Este vehiculo ya tiene una orden de reparación en proceso";
            this.mostrarAlerta2 = true;
            return false;
        }
        this.cerrarAlerta2();
        this.authService.solicitarCita(cita).subscribe(function (data) {
            if (data.success) {
                var citaNueva = data.citaNueva;
                _this.citas.push(citaNueva);
                _this.mensajeAlerta = "Solicitud de cita procesada exitosamente!";
                _this.mostrarAlerta = true;
            }
        });
    };
    ProfileClienteComponent.prototype.vehiculoSubmit = function () {
        var _this = this;
        this.fechatemp = new Date();
        this.fechaRegistro = this.datePipe.transform(this.fechatemp);
        var fileInput = document.getElementById('fileItem').attributes;
        var inputFile = document.getElementById('fileItem').files;
        var file;
        console.log(inputFile);
        console.log(file);
        ;
        //this.fechaRegistro=this.fechatemp.getFullYear()+"-"+(this.fechatemp.getMonth()+1)+"-"+this.fechatemp.getDate();
        if (this.selecciono) {
            this.marcaNuevo = this.marcaNuevo.idMarca;
        }
        var vehiculo = {
            placa: this.placa,
            marca: this.marcaNuevo,
            modelo: this.modelo,
            ano: this.ano,
            serialMotor: this.serialMotor,
            activado: true,
            propietario: this.user.idUsuario,
            fechaRegistro: this.fechaRegistro
        };
        //Required fields
        if (!this.validateService.validateRegisterVehiculo(vehiculo)) {
            this.mensajeAlerta = "Por favor rellene todos los campos";
            this.mostrarAlerta3 = true;
            return false;
        }
        else if (!this.validarRegistroVehiculo(vehiculo)) {
            this.mensajeAlerta = "Ya existe un vehiculo con esta placa o serial";
            this.mostrarAlerta3 = true;
            return false;
        }
        else if (!this.validateService.validarPlaca(vehiculo)) {
            this.mensajeAlerta = "Campo Placa demasiado largo, ingrese uno más corto";
            this.mostrarAlerta3 = true;
            return false;
        }
        else if (!this.validateService.validarModelo(vehiculo)) {
            this.mensajeAlerta = "Campo Modelo demasiado largo, ingrese uno más corto";
            this.mostrarAlerta3 = true;
            return false;
        }
        else if (!this.validateService.validarSerial(vehiculo)) {
            this.mensajeAlerta = "Campo Serial demasiado largo, ingrese uno más corto";
            this.mostrarAlerta3 = true;
            return false;
        }
        else if (!this.validateService.validarYear(vehiculo)) {
            this.mensajeAlerta = "Campo Año inválido o demasiado largo";
            this.mostrarAlerta3 = true;
            return false;
        }
        else if (!this.validateService.validateRegisterVehiculo(vehiculo)) {
            this.mensajeAlerta = "Por favor rellene todos los campos";
            this.mostrarAlerta3 = true;
            return false;
        }
        this.cerrarAlerta3();
        if (this.registroInactivo(vehiculo)) {
            this.authService.activarVehiculo(vehiculo).subscribe(function (data) {
                if (data.success) {
                    _this.vehiculos.push(_this.vehiculoActivar);
                    _this.vehiculosTaller.push(_this.vehiculoActivar);
                    for (var i = 0; i < inputFile.length; i++) {
                        file = inputFile.item(i);
                        _this.uploadService.uploadfile(file, _this.vehiculoActivar.idVehiculo, 1, _this.authService);
                    }
                    _this.mensajeAlerta = "Vehiculo registrado exitosamente!";
                    _this.mostrarAlerta = true;
                    _this.vista = 1;
                }
                else {
                    _this.router.navigate(['profile-cliente']);
                }
            });
        }
        else {
            //Registrar vehiculo
            this.authService.registerVehiculo(vehiculo).subscribe(function (data) {
                var vehiculoNuevo = data.vehiculo;
                if (data.success) {
                    _this.vehiculos.push(vehiculoNuevo);
                    _this.vehiculosTaller.push(vehiculoNuevo);
                    _this.vista = 1;
                    for (var i = 0; i < inputFile.length; i++) {
                        file = inputFile.item(i);
                        _this.uploadService.uploadfile(file, vehiculoNuevo.idVehiculo, 1, _this.authService);
                    }
                    _this.mensajeAlerta = "Vehiculo registrado exitosamente!";
                    _this.mostrarAlerta = true;
                    _this.setearCampos();
                    _this.vista = 1;
                }
                else {
                    _this.router.navigate(['profile-cliente']);
                }
            });
        }
    };
    ProfileClienteComponent.prototype.getMarcas = function () {
        var _this = this;
        this.authService.getMarcas().subscribe(function (data) {
            _this.marcas = data.marcas;
        });
    };
    ProfileClienteComponent.prototype.setMarcaVista = function (idMarca) {
        return this.marcas[idMarca - 1].marca;
    };
    ProfileClienteComponent.prototype.cerrarAlerta = function () {
        this.mostrarAlerta = false;
        this.mensajeAlerta = "";
    };
    ProfileClienteComponent.prototype.cerrarAlerta2 = function () {
        this.mostrarAlerta2 = false;
        this.mensajeAlerta = "";
    };
    ProfileClienteComponent.prototype.cerrarAlerta3 = function () {
        this.mostrarAlerta3 = false;
        this.mensajeAlerta = "";
    };
    ProfileClienteComponent.prototype.setearCampos = function () {
        this.placa = undefined;
        this.marcaNuevo = undefined;
        this.modelo = undefined;
        this.ano = undefined;
        this.serialMotor = undefined;
    };
    //-------- VALIDACIONES
    ProfileClienteComponent.prototype.validarRegistroVehiculo = function (newVehiculo) {
        for (var i = 0; i < this.vehiculosTaller.length; i++) {
            if (this.vehiculosTaller[i].placa == newVehiculo.placa || this.vehiculosTaller[i].serialMotor == newVehiculo.serialMotor) {
                if (this.vehiculosTaller[i].activado) {
                    return false;
                }
            }
        }
        return true;
    };
    ProfileClienteComponent.prototype.registroInactivo = function (newVehiculo) {
        for (var i = 0; i < this.vehiculosTaller.length; i++) {
            if (this.vehiculosTaller[i].placa == newVehiculo.placa) {
                if (!this.vehiculosTaller[i].activado) {
                    this.vehiculoActivar = this.vehiculosTaller[i];
                    this.vehiculoActivar.activado = 1;
                    return true;
                }
            }
        }
        return false;
    };
    ProfileClienteComponent.prototype.validarSolicitudCita = function (idVehiculo) {
        var ordenesVehiculo = [];
        for (var i = 0; i < this.ordenes.length; i++) {
            if (this.ordenes[i].idVehiculo == idVehiculo) {
                ordenesVehiculo.push(this.ordenes[i]);
            }
        }
        //Buscar si hay ordenes activas de este vehículo
        for (var i = 0; i < ordenesVehiculo.length; i++) {
            if (ordenesVehiculo[i].activada == 1 || ordenesVehiculo[i].activada == 2) {
                return false;
            }
        }
        return true;
    };
    ProfileClienteComponent.prototype.validarCitaPendiente = function (idVehiculo) {
        var citasVehiculo = [];
        for (var i = 0; i < this.citas.length; i++) {
            if (this.citas[i].vehiculoCita == idVehiculo) {
                citasVehiculo.push(this.citas[i]);
            }
        }
        if (citasVehiculo.length > 0) {
            return false;
        }
        return true;
    };
    ProfileClienteComponent.prototype.obtenerCitas = function () {
        var _this = this;
        this.authService.obtenerCitas().subscribe(function (datos) {
            _this.citas = datos.rcitas;
        });
    };
    ProfileClienteComponent.prototype.obtenerOrdenes = function () {
        var _this = this;
        this.authService.getOrdenes().subscribe(function (datos) {
            if (datos.success) {
                _this.ordenes = datos.ordenes;
            }
        });
    };
    ProfileClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-cliente',
            template: __webpack_require__("./src/app/Components/profile-cliente/profile-cliente.component.html"),
            styles: [__webpack_require__("./src/app/Components/profile-cliente/profile-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_4__services_upload_file_service__["a" /* UploadFileService */]])
    ], ProfileClienteComponent);
    return ProfileClienteComponent;
}());



/***/ }),

/***/ "./src/app/Components/profile-gerente/profile-gerente.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/profile-gerente/profile-gerente.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.rol == 3\"> \r\n<!-- Top Bar -->\r\n<nav class=\"navbar\">\r\n    <div class=\"container-fluid bg-deep-orange\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" style=\"cursor:pointer\" onclick=\"openNav()\">&#9776; MATI ASSEMBLER - GERENTE</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- Call Search -->\r\n                <li>\r\n                    <a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\">\r\n                        <i class=\"material-icons\">search</i>\r\n                    </a>\r\n                </li>\r\n                <!-- #END# Call Search -->\r\n\r\n                <li class=\"pull-right\">\r\n                    <a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\">\r\n                        <i class=\"material-icons\">more_vert</i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- #Top Bar -->\r\n    <section>\r\n        <!-- Left Sidebar -->\r\n        <aside id=\"leftsidebar\" class=\"sidebar\">\r\n            <!-- User Info -->\r\n            <div class=\"user-info\">\r\n                <div class=\"info-container\">\r\n                    <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{user.nombre}}</div>\r\n                    <div class=\"email\">{{user.correo}}</div>\r\n                </div>\r\n                <div><a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a></div>\r\n            </div>\r\n            <!-- #User Info -->\r\n            <!-- Menu -->\r\n            <div class=\"menu\">\r\n                <ul class=\"list\">\r\n                    <li class=\"header active\">MENU PRINCIPAL</li>\r\n                    <li>\r\n                        <a (click)=\"setVista(1)\">\r\n                            <i class=\"material-icons\">person</i>\r\n                            <span style=\"cursor:pointer\">Ver mecanicos y clientes</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"setVista(2)\">\r\n                            <i class=\"material-icons\">directions_car</i>\r\n                            <span style=\"cursor:pointer\">Ver vehículos</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"setVista(3)\">\r\n                            <i class=\"material-icons\">event_available</i>\r\n                            <span style=\"cursor:pointer\">Citas y órdenes</span>\r\n                        </a>\r\n                    </li> \r\n                    <li class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"material-icons\">assignment</i>\r\n                            <span>Reportes</span>\r\n                         <b class=\"caret\"></b>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\">\r\n                          <li><a (click)= \"setVista(4)\">Cliente</a></li>\r\n                          <li><a (click)=\"setVista(5)\">Vehículo</a></li>\r\n                          <li><a (click)=\"setVista(6)\">Mecánico</a></li>\r\n                          <li><a (click)=\"setVista(7)\">Modelo de vehículo</a></li>\r\n                        </ul>\r\n                    </li> \r\n                    <li>\r\n                        <a (click)=\"setVista(10)\">\r\n                            <i class=\"material-icons\">camera</i>\r\n                            <span style=\"cursor:pointer\">Escanear QR</span>\r\n                        </a>\r\n                    </li>                 \r\n                    <li>\r\n                        <a (click)=\"logout()\" >\r\n                            <i class=\"material-icons\">not_interested</i>\r\n                            <span style=\"cursor:pointer\">Cerrar sesión</span>\r\n                        </a>\r\n                    </li>\r\n\r\n \r\n                </ul>\r\n            </div>\r\n            <!-- #Menu -->\r\n            <!-- Footer -->\r\n            <div class=\"legal\">\r\n                <div class=\"copyright\">\r\n                    &copy; 2018\r\n                    <a href=\"javascript:void(0);\">MatiAssembler</a>.\r\n                </div>\r\n                <div class=\"version\">\r\n                    <b>Version: </b> 1.0.0\r\n                </div>\r\n            </div>\r\n            <!-- #Footer -->\r\n        </aside>\r\n        <!-- #END# Left Sidebar -->\r\n\r\n    </section>\r\n\r\n<section id=\"main\" class=\"content\">\r\n\r\n          <div *ngIf=\"mostrarAlerta\">\r\n            <div class=\"alert alert-success alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"mostrarAlerta2\">\r\n            <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta2()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"mostrarAlerta3\">\r\n            <div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta3()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n    <div class=\"container-fluid\">\r\n            <div  *ngIf=\"vista == 1\">\r\n            <!-- LISTA CLIENTES -->\r\n            <div class=\"row clearfix\">\r\n                    <div>\r\n                        <div class=\"card\">\r\n                            <div class=\"header bg-pink\">\r\n                                <h2>\r\n                                    LISTA DE CLIENTES\r\n                                </h2>\r\n                            </div>\r\n                            <div class=\"body table-responsive\">\r\n                                <table class=\"table table-hover\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                          <th>NOMBRE</th>\r\n                                          <th>APELLIDO</th>\r\n                                          <th>CÉDULA</th>\r\n                                          <th>MODIFICAR</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor= 'let user of clientes' >\r\n                                          <td>{{user.nombre}}</td>\r\n                                          <td>{{user.apellido}}</td>\r\n                                          <td>{{user.cedula}}</td>\r\n                                          <td> \r\n                                            <button type=\"button\" (click)=\"modificarCliente(user.idUsuario)\" class=\"btn btn-default waves-effect\">\r\n                                                <i class=\"material-icons\">settings</i>\r\n                                            </button>\r\n                                          </td>\r\n                                         </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n                <!-- #END# LISTA CLIENTES -->\r\n\r\n\r\n                <!-- LISTA MECANICOS -->\r\n                    <div>\r\n                        <div class=\"card\">\r\n                            <div class=\"header bg-pink\">\r\n                                <h2>\r\n                                    LISTA DE MECÁNICOS\r\n                                </h2>\r\n                            </div>\r\n                            <div class=\"body table-responsive\">\r\n                                <table class=\"table table-hover\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>NOMBRE</th>\r\n                                            <th>APELLIDO</th>\r\n                                            <th>CÉDULA</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor= 'let user of mecanicos' >\r\n                                          <td>{{user.nombre}}</td>\r\n                                          <td>{{user.apellido}}</td>\r\n                                          <td>{{user.cedula}}</td>\r\n                                         </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n                <!-- #END# LISTA MECANICOS -->\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"vista == 2\">\r\n        <!-- LISTA VEHICULOS -->\r\n            <div class=\"row clearfix\">\r\n                    <div class=\"card\">\r\n                        <div class=\"header bg-cyan\">\r\n                            <h2>\r\n                                LISTA DE VEHICULOS\r\n                            </h2>\r\n                        </div>\r\n                        <div class=\"body table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>MARCA</th>\r\n                                        <th>MODELO</th>\r\n                                        <th>AÑO</th>\r\n                                        <th>PLACA</th>\r\n                                        <th>SERIAL</th>\r\n                                        <th>Dueño</th>\r\n                                        <th>FECHA REGISTRO</th>\r\n                                        <th>Ver</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let vehiculo of vehiculos\" >\r\n                                       \r\n                                      <td>{{setMarcaVista(vehiculo.marca)}}</td>\r\n                                      <td>{{vehiculo.modelo}}</td>\r\n                                      <td>{{vehiculo.ano}}</td>\r\n                                      <td>{{vehiculo.placa}}</td>\r\n                                      <td>{{vehiculo.serialMotor}}</td>\r\n                                      <td>{{vehiculo.propietario}}</td>\r\n                                      <td>{{vehiculo.fechaRegistro}}</td> \r\n                                      <td> <button type=\"button\" (click)=\"verDetalle(vehiculo.idVehiculo)\" class=\"btn btn-default waves-effect\">\r\n                                            <i class=\"material-icons\">pageview</i>\r\n                                        </button></td>          \r\n                                    </tr>\r\n                               \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n    <!-- #END# LISTA VEHICULOS -->\r\n\r\n        <div *ngIf=\"vista == 3\">\r\n            <!-- COLA DE ESPERA -->\r\n        <div class=\"row clearfix\">\r\n                <div >\r\n                    <div class=\"card\">\r\n                        <div class=\"header bg-light-green\">\r\n                            <h2>\r\n                                    COLA DE ESPERA\r\n                            </h2>\r\n                        </div>\r\n                        <div class=\"body table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                            <th>MODELO</th>\r\n                                            <th>AÑO</th>\r\n                                            <th>PLACA</th>\r\n                                            <th>SERIAL</th>\r\n                                            <th>FECHA SOLICITUD</th>\r\n                                            <th>ASIGNAR FECHA</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let carro of carrosCitas\">\r\n                                        <td>{{carro.modelo}}</td>\r\n                                        <td>{{carro.ano}}</td>\r\n                                        <td>{{carro.placa}}</td>\r\n                                        <td>{{carro.serialMotor}}</td>\r\n                                        <td> {{carro.fecha}}</td>\r\n                                        <td><button type=\"button\" class=\"btn bg-cyan waves-effect\"\r\n                                            (click) =\"agregarOrden(carro.idVehiculo, carro.idCita)\">ASIGNAR FECHA</button></td>\r\n                                    </tr>\r\n                                   \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            \r\n\r\n            <!-- #END# Hover Rows -->\r\n\r\n             <!-- ÓRDENES EN REPARACIÓN -->\r\n\r\n                <div >\r\n                    <div class=\"card\">\r\n                        <div class=\"header bg-orange\">\r\n                            <h2>\r\n                                    ÓRDENES EN REPARACIÓN\r\n                            </h2>\r\n                        </div>\r\n                        <div class=\"body table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                            <th>ORDEN</th>\r\n                                            <th>MODELO</th>\r\n                                            <th>AÑO</th>\r\n                                            <th>PLACA</th>\r\n                                            <th>SERIAL</th>\r\n                                            <th>ESTADO</th>\r\n                                            <th>CERRAR ORDEN</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor = \"let orden of ordenesActivas\" >\r\n                                        <td>{{orden.idOrden}}</td>\r\n                                        <td>{{orden.vehiculo.modelo}}</td>\r\n                                        <td>{{orden.vehiculo.ano}}</td>\r\n                                        <td>{{orden.vehiculo.placa}}</td>\r\n                                        <td>{{orden.vehiculo.serialMotor}}</td>\r\n                                        <td>{{setEstado(orden.activada)}}</td>\r\n                                        <td>\r\n                                                <button type=\"button\" class=\"btn bg-indigo waves-effect\" (click)=\"cerrarOrden(orden)\">\r\n                                                    <i class=\"material-icons\">close</i>\r\n                                                </button>\r\n                                            </td>\r\n                                    </tr>\r\n                                   \r\n                                    \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"vista == 4\"> \r\n            <app-reporte-cliente [clientes]= \"clientes\"  [marcas] = \"marcas\" > </app-reporte-cliente>\r\n        </div>\r\n        <div *ngIf=\"vista == 5\"> \r\n            <app-reporte-vehiculo> </app-reporte-vehiculo>\r\n        </div>\r\n        <div *ngIf=\"vista == 6\"> \r\n            <app-reporte-mecanico [mecanicos] = \"mecanicos\" [vehiculos] = \"vehiculos\" > </app-reporte-mecanico>\r\n        </div>\r\n       <div *ngIf=\"vista == 7\"> \r\n           <app-reporte-modelo [vehiculos] = \"vehiculos\" > </app-reporte-modelo>\r\n       </div>\r\n    <!-- MODIFICAR USUARIOS -->\r\n        <div  *ngIf=\"vista == 8\">\r\n          <div class=\"overlay\"></div>\r\n          <div class=\"signup-box\">\r\n              <div class=\"logo\">\r\n                  <a href=\"javascript:void(0);\">Mati<b>ASSEMBLER</b></a>\r\n                  <small>Su taller de siempre, ahora mejor que nunca</small>\r\n              </div>\r\n              <div class=\"card\">\r\n                  <div class=\"body\">\r\n                      <form  action=\"/\" (submit)=\"modificarClienteSubmit()\" id=\"frmFileUpload2\"  method=\"post\">\r\n                          <div class=\"msg\">Modifique el usuario</div>\r\n                          <div class=\"input-group\">\r\n                              <span class=\"input-group-addon\">\r\n                                          <i class=\"material-icons\">person</i>\r\n                                      </span>\r\n                              <div class=\"form-line\">\r\n                                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Nombre\" required autofocus>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                              <span class=\"input-group-addon\">\r\n                                          <i class=\"material-icons\">person</i>\r\n                                      </span>\r\n                              <div class=\"form-line\">\r\n                                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastname\" name=\"lastname\" placeholder=\"Apellido\" required autofocus>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                              <span class=\"input-group-addon\">\r\n                                          <i class=\"material-icons\">person</i>\r\n                                      </span>\r\n                              <div class=\"form-line\">\r\n                                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cedula\" name=\"cedula\" placeholder=\"Cédula\" required autofocus>\r\n                              </div>\r\n                          </div>\r\n\r\n\r\n                          <div class=\"input-group\">\r\n                              <span class=\"input-group-addon\">\r\n                                          <i class=\"material-icons\">email</i>\r\n                                      </span>\r\n                              <div class=\"form-line\">\r\n                                  <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required>\r\n                              </div>\r\n                          </div> \r\n                          <div class=\"input-group\">\r\n                              <span class=\"input-group-addon\">\r\n                                          <i class=\"material-icons\">person</i>\r\n                                      </span>\r\n                              <div class=\"btn-group\">\r\n\r\n                                  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"  disabled>\r\n                                            {{obtenerRolSubmit()}}<span class=\"caret\"></span>\r\n                                        </button>\r\n                                  <ul class=\"dropdown-menu\">\r\n                                      <li><a (click)= \"setRol(1)\" >Cliente</a></li>\r\n                                      <li><a (click)= \"setRol(2)\" >Administrador</a></li>\r\n                                      <li><a (click)= \"setRol(3)\">Gerente</a></li>\r\n                                      <li><a (click)= \"setRol(4)\">Mecanico</a></li>\r\n\r\n                                  </ul>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                              <span class=\"input-group-addon\">\r\n                                      <i class=\"material-icons\">person</i>\r\n                                  </span>\r\n                              <div class=\"form-line\">\r\n                                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"telefono\" name=\"telefono\" placeholder=\"telefono\" required autofocus>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"input-group\">\r\n                              <span class=\"input-group-addon\">\r\n                                      <i class=\"material-icons\">person</i>\r\n                                  </span>\r\n                              <div class=\"form-line\">\r\n                                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"direccion\" name=\"direccion\" placeholder=\"direccion\" required autofocus>\r\n                              </div>\r\n                              <button class=\"btn btn-block btn-lg bg-pink waves-effect\"  type=\"submit\">MODIFICAR</button>\r\n                          </div>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n       <div *ngIf=\"vista == 9\"> \r\n            <div class=\"card\">\r\n                <div class=\"header\">\r\n                    <h2>EMITIR ORDEN DE REPARACIÓN</h2>\r\n                </div>\r\n                <div class=\"body\">\r\n                    <form  action=\"/\" id=\"frmFileUpload\"  method=\"post\">\r\n                      \r\n                    \r\n                        <div class=\"input-group\">\r\n                            <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\"\r\n                            [(ngModel)]=\"model\" required></my-date-picker>\r\n                        </div>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\">\r\n                                <i class=\"material-icons\">check_circle</i>\r\n                            </span>\r\n                            <div class=\"form-line\">\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"motivo\" name=\"motivo\" placeholder=\"Motivo\" >\r\n                            </div>\r\n                        </div>\r\n                    <div *ngIf=\"selecciono\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\">\r\n                                <i class=\"material-icons\">person</i>\r\n                            </span>\r\n                            <div class=\"btn-group\">\r\n                                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Mecanico: {{mecanico.nombre}}<span class=\"caret\"></span></button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                    <li *ngFor = \"let mecanico of mecanicos\"><a (click)= \"seleccionarMecanico(mecanico)\">{{mecanico.nombre}}</a></li>                                    \r\n                                </ul>\r\n                              \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"selecciono==false\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\">\r\n                                <i class=\"material-icons\">person</i>\r\n                            </span>\r\n                            <div class=\"btn-group\">\r\n                                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Mecanico:<span class=\"caret\"></span></button>\r\n                                <ul class=\"dropdown-menu\">\r\n                                    <li *ngFor = \"let mecanico of mecanicos\"><a (click)= \"seleccionarMecanico(mecanico)\">{{mecanico.nombre}}</a></li>                                    \r\n                                </ul>\r\n                              \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                        <div class=\"input-group\"> \r\n                            <div>\r\n                            <span class=\"input-group-addon\" style=\"text-align: left\">\r\n                                <i class=\"material-icons\">settings</i>\r\n                                <label>Accesorios:</label>\r\n                            </span>            \r\n                            </div>          \r\n                            <div class=\"demo-checkbox\"> \r\n                            <div>\r\n                                    <input type=\"checkbox\" id=\"acc1\" [(ngModel)]=\"cauchoRepuesto\" name=\"cauchoRepuesto\" class=\"chk-col-light-blue\"/>\r\n                                    <label for=\"acc1\" >Caucho Repuesto</label>\r\n                            </div>    \r\n                            <div>\r\n                                    <input type=\"checkbox\" id=\"acc2\" [(ngModel)]=\"llaves\" name=\"llaves\" class=\"chk-col-light-blue\"/>\r\n                                    <label for=\"acc2\" >Llaves</label>                \r\n                            </div>                              \r\n                            <div>\r\n                                    <input type=\"checkbox\" id=\"acc3\" [(ngModel)]=\"gato\" name=\"gato\"  class=\"chk-col-light-blue\"/>\r\n                                    <label for=\"acc3\" >Gato</label>\r\n                            </div>                              \r\n                            <div>\r\n                                    <input type=\"checkbox\" id=\"acc4\" [(ngModel)]=\"herramientas\" name=\"herramientas\" class=\"chk-col-light-blue\"/>\r\n                                    <label for=\"acc4\" >Herramientas</label>\r\n                            </div> \r\n                            <div>\r\n                                    <input type=\"checkbox\" id=\"acc5\"  [(ngModel)]=\"equipodeSonido\" name=\"equipodeSonido\" class=\"chk-col-light-blue\"/>\r\n                                    <label for=\"acc5\" >Equipo de Sonido</label>\r\n                            </div>   \r\n                            </div>  \r\n                             <div class=\"form-line\">\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"desperfectoCarroceria\" name=\"desperfectoCarroceria\" placeholder=\"Desperfecto Carroceria (opcional)\">\r\n                            </div>                                 \r\n                        </div> \r\n                        <div class=\"input-group\">\r\n                            <div>\r\n                            <span class=\"input-group-addon\" style=\"text-align: left\">\r\n                                <i class=\"material-icons\">confirmation_number</i>\r\n                                <label>Elegir imagen a cargar (opcional)</label>\r\n                            </span>            \r\n                            </div>  \r\n                            <div class=\"form-line\">                      \r\n                              <input type=\"file\" id=\"fileItem\"  name=\"file\" accept=\".png, .jpg, .jpeg\" multiple>\r\n                            </div>\r\n                        </div> \r\n\r\n                        <button class=\"btn btn-block btn-lg bg-pink waves-effect\" (click) = \"registrarOrden()\" type=\"text\">AÑADIR ORDEN</button>\r\n          \r\n                    </form>\r\n                </div>\r\n            </div>\r\n       </div>\r\n    <!-- #END# Hover Rows -->\r\n    <div *ngIf=\"vista == 10\"> \r\n        <app-leer-qr [vista]=\"vista\"> </app-leer-qr>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"vista == 500\">\r\n    <body class=\"five-zero-zero\">\r\n        <div class=\"five-zero-zero-container\">\r\n            <div class=\"error-code\">Error</div>\r\n            <div class=\"error-message\">Qr inválido</div>\r\n            <div class=\"button-place\">\r\n                <a (click)=setVista(1) class=\"btn btn-default btn-lg waves-effect\">VOLVER </a>\r\n            </div>\r\n        </div>\r\n    </body> \r\n</div> \r\n</section>\r\n\r\n</div>\r\n<div *ngIf=\"user.rol != 3\"> \r\n    <body class=\"five-zero-zero\">\r\n        <div class=\"five-zero-zero-container\">\r\n            <div class=\"error-code\">Error</div>\r\n            <div class=\"error-message\">No tiene acceso a esta página</div>\r\n        </div>\r\n    </body> \r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/Components/profile-gerente/profile-gerente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileGerenteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_file_service__ = __webpack_require__("./src/app/services/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_qr_service__ = __webpack_require__("./src/app/services/qr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfileGerenteComponent = (function () {
    function ProfileGerenteComponent(http, validateService, authService, router, location, qrService, uploadService, datePipe) {
        this.http = http;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.qrService = qrService;
        this.uploadService = uploadService;
        this.datePipe = datePipe;
        this.vista = 1;
        this.selecciono = false;
        this.citas = [];
        this.carrosCitas = [];
        this.ordenes = [];
        this.ordenesActivas = [];
        this.vehiculos = [];
        //Marcas 
        this.marcas = Array;
        this.nuevoReporte = false;
        this.rol = 1;
        //Alertas
        this.mostrarAlerta = false;
        this.mostrarAlerta2 = false;
        this.mostrarAlerta3 = false;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'yyyy-mm-dd',
        };
        this.model = { date: { year: 2018, month: 10, day: 9 } };
    }
    ProfileGerenteComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.getMarcas();
        this.obtenerClientes();
        this.obtenerMecanicos();
        this.obtenerColaCitas();
        this.obtenerVehiculos();
        this.obtenerOrdenes();
    };
    ProfileGerenteComponent.prototype.setVista = function (id) {
        this.vista = id;
        this.setearCampos();
        this.cerrarAlerta();
        this.cerrarAlerta2();
        this.cerrarAlerta3();
    };
    ProfileGerenteComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    ProfileGerenteComponent.prototype.cerrarAlerta = function () {
        this.mostrarAlerta = false;
        this.mensajeAlerta = "";
    };
    ProfileGerenteComponent.prototype.cerrarAlerta2 = function () {
        this.mostrarAlerta2 = false;
        this.mensajeAlerta = "";
    };
    ProfileGerenteComponent.prototype.cerrarAlerta3 = function () {
        this.mostrarAlerta3 = false;
        this.mensajeAlerta = "";
    };
    ProfileGerenteComponent.prototype.setearCampos = function () {
        this.name = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
        this.cedula = "";
        this.direccion = "";
        this.telefono = "";
        this.rol = 1;
    };
    ProfileGerenteComponent.prototype.obtenerOrdenes = function () {
        var _this = this;
        this.ordenes = new Array();
        this.authService.getOrdenes().subscribe(function (datos) {
            _this.ordenes = datos.ordenes;
            _this.ordenesActivas = _this.ordenes.filter(function (orden) {
                if (orden.activada != 0) {
                    return orden;
                }
            });
            var _loop_1 = function (i) {
                var data2 = _this.authService.getVehiculo(_this.ordenesActivas[i].idVehiculo).subscribe(function (datos) {
                    _this.ordenesActivas[i].vehiculo = datos.vehiculo;
                });
            };
            for (var i = 0; i < _this.ordenesActivas.length; i++) {
                _loop_1(i);
            }
        });
    };
    ProfileGerenteComponent.prototype.obtenerVehiculos = function () {
        var _this = this;
        var data = this.authService.obtenerListaVehiculos().subscribe(function (datos) {
            _this.vehiculos = datos.vehiculos;
        });
    };
    ProfileGerenteComponent.prototype.obtenerClientes = function () {
        var _this = this;
        this.authService.getUsers().subscribe(function (datos) {
            var usuarios = datos.users;
            _this.clientes = usuarios.filter(function (user) {
                if (user.rol == 1) {
                    return user;
                }
            });
        });
    };
    ProfileGerenteComponent.prototype.obtenerMecanicos = function () {
        var _this = this;
        this.authService.getUsers().subscribe(function (datos) {
            var usuarios = datos.users;
            _this.mecanicos = usuarios.filter(function (user) {
                if (user.rol == 4) {
                    return user;
                }
            });
        });
    };
    ProfileGerenteComponent.prototype.obtenerColaCitas = function () {
        var _this = this;
        var data = this.authService.obtenerCitas().subscribe(function (datos) {
            _this.citas = datos.rcitas;
            var _loop_2 = function (i) {
                var data2 = _this.authService.getVehiculo(_this.citas[i].vehiculoCita).subscribe(function (datos) {
                    datos.vehiculo.idCita = _this.citas[i].idCita;
                    datos.vehiculo.fecha = _this.citas[i].fechaSolicitud;
                    _this.carrosCitas.push(datos.vehiculo);
                    _this.citas[i].vehiculo = datos.vehiculo;
                });
            };
            for (var i = 0; i < _this.citas.length; i++) {
                _loop_2(i);
            }
            //ARRAY FINALES:
            //console.log(this.citas);
            //console.log(this.carrosCitas); 
        });
    };
    ProfileGerenteComponent.prototype.getMarcas = function () {
        var _this = this;
        this.authService.getMarcas().subscribe(function (data) {
            _this.marcas = data.marcas;
        });
    };
    ProfileGerenteComponent.prototype.setMarcaVista = function (idMarca) {
        return this.marcas[idMarca - 1].marca;
    };
    ProfileGerenteComponent.prototype.verDetalle = function (idVehiculo) {
        var _this = this;
        this.authService.getVehiculo(idVehiculo).subscribe(function (data) {
            _this.vehiculoTemp = data.vehiculo;
            _this.authService.almacenarVehiculoLS(_this.vehiculoTemp);
            _this.router.navigate(['detalle-vehiculo']);
        });
    };
    ProfileGerenteComponent.prototype.verReporte = function (id) {
        this.mecanicoReporte = id;
        this.nuevoReporte = true;
    };
    ProfileGerenteComponent.prototype.cerrarOrden = function (orden) {
        var _this = this;
        this.cerrarAlerta();
        var id = orden.idOrden;
        if (orden.activada == 2) {
            this.authService.cerrarOrden(orden).subscribe(function (data) {
                for (var i = 0; i < _this.ordenesActivas.length; i++) {
                    if (_this.ordenesActivas[i].idOrden == id) {
                        _this.ordenesActivas.splice(i, 1);
                    }
                }
            });
        }
        else {
            //this.cerrarAlerta2(); 
            this.mensajeAlerta = "No se puede cerrar esta orden, sigue en proceso.";
            this.mostrarAlerta3 = true;
        }
    };
    ProfileGerenteComponent.prototype.setEstado = function (id) {
        if (id == 1) {
            return "En curso";
        }
        if (id == 2) {
            return "Finalizada";
        }
        if (id == 0) {
            return "Cerrada";
        }
    };
    //------------ FUNCIONES PARA MODIFICAR USUARIO -------------
    ProfileGerenteComponent.prototype.modificarCliente = function (id) {
        var _this = this;
        var user;
        this.setearCampos();
        //this.cerrarAlerta();       
        this.authService.getUserById(id).subscribe(function (datos) {
            user = datos.usuario;
            _this.usuario = user;
            _this.obtenerDatos(_this.usuario);
            _this.cerrarAlerta();
            _this.vista = 8;
        });
    };
    ProfileGerenteComponent.prototype.obtenerDatos = function (user) {
        this.id = user.idUsuario;
        this.name = user.nombre;
        this.lastname = user.apellido;
        this.email = user.correo;
        this.rol = user.rol;
        this.password = user.contraseña;
        this.cedula = user.cedula;
        this.direccion = user.direccion;
        this.telefono = user.telefono;
    };
    ProfileGerenteComponent.prototype.modificarClienteSubmit = function () {
        var _this = this;
        var usuario = {
            idUsuario: this.id,
            nombre: this.name,
            apellido: this.lastname,
            correo: this.email,
            rol: this.rol,
            contraseña: this.password,
            cedula: this.cedula,
            telefono: this.telefono,
            direccion: this.direccion
        };
        //Validar nombre
        if (!this.validateService.validarNombre(usuario.nombre)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Nombre demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar apellido
        if (!this.validateService.validarApellido(usuario.apellido)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Apellido demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar correo
        if (!this.validateService.validarCorreo(usuario.correo)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Correo demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar cedula
        if (!this.validateService.validarCedula(usuario.cedula)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Cedula demasiado larga, ingrese una mas corta.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar direccion
        if (!this.validateService.validarDireccion(usuario.direccion)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Direccion demasiado larga, ingrese una mas corta.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar telefono
        if (!this.validateService.validarTelefono(usuario.telefono)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Telefono demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Required fields
        if (!this.validateService.validateRegister(usuario)) {
            this.cerrarAlerta3();
            this.mensajeAlerta = "Por favor rellene todos los campos";
            this.mostrarAlerta2 = true;
            return false;
        }
        //Validar formato email
        if (!this.validateService.validateEmail(usuario.correo)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Correo inválido, por favor ingrese correctamente.";
            this.mostrarAlerta3 = true;
            return false;
        }
        this.cerrarAlerta2();
        this.cerrarAlerta3();
        this.authService.actualizarUsuario(usuario).subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < _this.clientes.length; i++) {
                    if (_this.clientes[i].idUsuario == usuario.idUsuario) {
                        _this.clientes[i] = usuario;
                    }
                }
                _this.setearCampos();
                _this.vista = 1;
                _this.mensajeAlerta = "Usuario modificado correctamente";
                _this.mostrarAlerta = true;
            }
        });
    };
    ProfileGerenteComponent.prototype.setRol = function (numero) {
        this.rol = numero;
    };
    ProfileGerenteComponent.prototype.obtenerRolSubmit = function () {
        if (this.rol == 1) {
            return "Cliente";
        }
        if (this.rol == 2) {
            return "Administrador";
        }
        if (this.rol == 3) {
            return "Gerente";
        }
        if (this.rol == 4) {
            return "Mecanico";
        }
    };
    //----------- FUNCIONES PARA EMITIR UNA ORDEN ---------------------
    ProfileGerenteComponent.prototype.agregarOrden = function (idVehiculo, idCita) {
        this.cerrarAlerta();
        this.idVehiculotemp = idVehiculo;
        this.idCitatemp = idCita;
        this.vista = 9;
    };
    ProfileGerenteComponent.prototype.seleccionarMecanico = function (meca) {
        this.mecanico = meca;
        this.selecciono = true;
    };
    ProfileGerenteComponent.prototype.registrarOrden = function () {
        var _this = this;
        this.validarAccesorios();
        var fechaOrdenFormateada = "";
        fechaOrdenFormateada += this.model.date.year + "-" + this.model.date.month + "-" + this.model.date.day;
        //Variables para comparar la fecha
        var fechatemp = new Date(); //Fecha actual
        //Fecha registrada -> this.model.date
        if (this.mecanico == undefined) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Debes seleccionar un mecánico";
            this.mostrarAlerta3 = true;
            return false;
        }
        var orden = {
            idVehiculo: this.idVehiculotemp,
            idMecanico: this.mecanico.idUsuario,
            diagnostico: this.diagnostico,
            fecha: fechaOrdenFormateada,
            motivo: this.motivo,
            activada: 1
        };
        var inputFile = document.getElementById('fileItem').files;
        var file;
        if (!this.validateService.validateOrden(orden)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Por favor rellene todos los campos.";
            this.mostrarAlerta3 = true;
            return false;
        }
        if (!this.validateService.validarFechaOrden(this.model.date, fechatemp)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "La fecha introducida es anterior a Hoy, ingresa nuevamente.";
            this.mostrarAlerta3 = true;
            return false;
        }
        if (!this.validateService.validarMotivo(orden)) {
            this.cerrarAlerta3();
            this.mensajeAlerta = "Motivo demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta2 = true;
            return false;
        }
        if (!this.validateService.validarDesperfecto(orden)) {
            this.cerrarAlerta3();
            this.mensajeAlerta = "Campo Desperfecto carrocería demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta2 = true;
            return false;
        }
        this.cerrarAlerta2();
        this.cerrarAlerta3();
        this.authService.registerOrden(orden).subscribe(function (data) {
            if (data.success) {
                var ordenRetornada_1 = data.orden;
                _this.authService.eliminarCita(_this.idCitatemp).subscribe(function (data2) {
                    _this.authService.getVehiculo(ordenRetornada_1.idVehiculo).subscribe(function (datos) {
                        ordenRetornada_1.vehiculo = datos.vehiculo;
                        _this.ordenesActivas.push(ordenRetornada_1);
                        for (var i_1 = 0; i_1 < _this.carrosCitas.length; i_1++) {
                            if (_this.carrosCitas[i_1].idCita == _this.idCitatemp) {
                                _this.carrosCitas.splice(i_1, 1);
                            }
                        }
                        for (var i = 0; i < inputFile.length; i++) {
                            file = inputFile.item(i);
                            _this.uploadService.uploadfile(file, ordenRetornada_1.idOrden, 2, _this.authService);
                        }
                        _this.mensajeAlerta = "La orden fue emitida exitosamente!";
                        _this.mostrarAlerta = true;
                        _this.vista = 3;
                    });
                });
                var accesoriosOrden = {
                    idOrden: ordenRetornada_1.idOrden,
                    cauchoRepuesto: _this.cauchoRepuesto,
                    llaves: _this.llaves,
                    gato: _this.gato,
                    herramientas: _this.herramientas,
                    equipodeSonido: _this.equipodeSonido,
                    desperfectoCarroceria: _this.desperfectoCarroceria
                };
                _this.authService.addAccesorios(accesoriosOrden).subscribe(function (data) {
                });
            }
        });
    };
    ProfileGerenteComponent.prototype.validarAccesorios = function () {
        if (this.cauchoRepuesto == undefined) {
            this.cauchoRepuesto = false;
        }
        if (this.llaves == undefined) {
            this.llaves = false;
        }
        if (this.gato == undefined) {
            this.gato = false;
        }
        if (this.herramientas == undefined) {
            this.herramientas = false;
        }
        if (this.equipodeSonido == undefined) {
            this.equipodeSonido = false;
        }
    };
    ProfileGerenteComponent.prototype.setearCamposOrden = function () {
        this.mecanico = undefined;
        //this.diagnostico=undefined;
        this.motivo = undefined;
    };
    ProfileGerenteComponent.prototype.setCamposAccesorios = function () {
        this.cauchoRepuesto = undefined;
        this.llaves = undefined;
        this.gato = undefined;
        this.herramientas = undefined;
        this.equipodeSonido = undefined;
        this.desperfectoCarroceria = undefined;
    };
    ProfileGerenteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-gerente',
            template: __webpack_require__("./src/app/Components/profile-gerente/profile-gerente.component.html"),
            styles: [__webpack_require__("./src/app/Components/profile-gerente/profile-gerente.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_7__services_qr_service__["a" /* QrService */],
            __WEBPACK_IMPORTED_MODULE_6__services_upload_file_service__["a" /* UploadFileService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]])
    ], ProfileGerenteComponent);
    return ProfileGerenteComponent;
}());



/***/ }),

/***/ "./src/app/Components/profile-mecanico/profile-mecanico.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/profile-mecanico/profile-mecanico.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Top Bar -->\r\n<nav class=\"navbar\">\r\n    <div class=\"container-fluid bg-deep-orange\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" style=\"cursor:pointer\" onclick=\"openNav()\">&#9776; MATI ASSEMBLER - MECÁNICO</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- Call Search -->\r\n                <li>\r\n                    <a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\">\r\n                        <i class=\"material-icons\">search</i>\r\n                    </a>\r\n                </li>\r\n                <!-- #END# Call Search -->\r\n\r\n                <li class=\"pull-right\">\r\n                    <a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\">\r\n                        <i class=\"material-icons\">more_vert</i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- #Top Bar -->\r\n<section>\r\n    <div >\r\n        <!-- Left Sidebar -->\r\n        <aside id=\"leftsidebar\" class=\"sidebar\">\r\n            <!-- User Info -->\r\n            <div class=\"user-info bg-light-green\">\r\n                <div class=\"info-container\">\r\n                    <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{user.nombre}}</div>\r\n                    <div class=\"email\">{{user.correo}}</div>\r\n                </div>\r\n                <div><a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a></div>\r\n\r\n            </div>\r\n            <!-- #User Info -->\r\n            <!-- Menu -->\r\n            <div class=\"menu\">\r\n                <ul class=\"list\">\r\n                    <li class=\"header active\">MENU PRINCIPAL</li>\r\n                    <li>\r\n                        <a  (click)=\"logout()\" >\r\n                            <i class=\"material-icons\">not_interested</i>\r\n                            <span style=\"cursor:pointer\">Cerrar sesión</span>\r\n                        </a>\r\n                    </li>\r\n\r\n\r\n \r\n                </ul>\r\n            </div>\r\n            <!-- #Menu -->\r\n            <!-- Footer -->\r\n            <div class=\"legal\">\r\n                <div class=\"copyright\">\r\n                    &copy; 2018\r\n                    <p >MatiAssembler</p>.\r\n                </div>\r\n                <div class=\"version\">\r\n                    <b>Version: </b> 1.0.0\r\n                </div>\r\n            </div>\r\n            <!-- #Footer -->\r\n        </aside>\r\n        <!-- #END# Left Sidebar -->\r\n    </div>\r\n</section>\r\n\r\n\r\n<div *ngIf=\"user.rol == 4\"> \r\n<section id=\"main\" class=\"content\">\r\n\r\n\r\n        <!-- ÓRDENES EN REPARACIÓN -->\r\n        <div class=\"row clearfix\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header bg-indigo\">\r\n                        <h2>\r\n                            ÓRDENES EN REPARACIÓN\r\n                        </h2>\r\n                    </div>\r\n                    <div class=\"body table-responsive\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>ORDEN</th>\r\n                                    <th>MODELO</th>\r\n                                    <th>AÑO</th>\r\n                                    <th>PLACA</th>\r\n                                    <th>SERIAL</th>\r\n                                    <th>Ver detalle</th>\r\n                                    \r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                \r\n                                    <tr *ngFor = \"let orden of ordenes\" >\r\n                                        <td>{{orden.idOrden}}</td>\r\n                                        <td>{{orden.vehiculo.modelo}}</td>\r\n                                        <td>{{orden.vehiculo.ano}}</td>\r\n                                        <td>{{orden.vehiculo.placa}}</td>\r\n                                        <td>{{orden.vehiculo.serialMotor}}</td>\r\n                                        <td> \r\n                                            <button type=\"button\" (click)=\"verDetalleOrden(orden)\" class=\"btn btn-default waves-effect\">\r\n                                                <i class=\"material-icons\">visibility</i>\r\n                                            </button>\r\n                                        </td> \r\n                                     \r\n                                    </tr>                        \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- #END# Hover Rows -->\r\n</section>\r\n</div>\r\n<div *ngIf=\"user.rol != 4\"> \r\n    <body class=\"five-zero-zero\">\r\n        <div class=\"five-zero-zero-container\">\r\n            <div class=\"error-code\">Error</div>\r\n            <div class=\"error-message\">No tiene acceso a esta página</div>\r\n        </div>\r\n    </body> \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/profile-mecanico/profile-mecanico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileMecanicoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileMecanicoComponent = (function () {
    function ProfileMecanicoComponent(http, validateService, authService, router) {
        this.http = http;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.ordenes = [];
    }
    ProfileMecanicoComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.obtenerOrdenes(this.user.idUsuario);
    };
    ProfileMecanicoComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    ProfileMecanicoComponent.prototype.obtenerOrdenes = function (id) {
        var _this = this;
        this.authService.getOrdenesMecanico(id).subscribe(function (data) {
            _this.datosOrdenes = data.ordenes;
            _this.ordenes = _this.datosOrdenes.filter(function (orden) {
                if (orden.activada == 1 || orden.activada == 2) {
                    return orden;
                }
            });
            var _loop_1 = function (i) {
                var data2 = _this.authService.getVehiculo(_this.ordenes[i].idVehiculo).subscribe(function (datos) {
                    _this.ordenes[i].vehiculo = datos.vehiculo;
                });
            };
            for (var i = 0; i < _this.ordenes.length; i++) {
                _loop_1(i);
            }
        });
    };
    ProfileMecanicoComponent.prototype.finalizarOrden = function (idOrden) {
        if (this.estado == 2) {
            this.authService.desactivarOrden(idOrden).subscribe(function (data) {
            });
        }
        if (this.estado == 1) {
            this.authService.activarOrden(idOrden).subscribe(function (data) {
            });
        }
        this.obtenerOrdenes(this.user.idUsuario);
    };
    ProfileMecanicoComponent.prototype.verDetalleOrden = function (orden) {
        var _this = this;
        this.authService.getOrden(orden.idOrden).subscribe(function (data) {
            _this.ordenTemp = data.orden;
            _this.authService.almacenarOrdenLS(_this.ordenTemp);
            _this.authService.getVehiculo(orden.idVehiculo).subscribe(function (data) {
                _this.vehiculoTemp = data.vehiculo;
                _this.authService.almacenarVehiculoLS(_this.vehiculoTemp);
                _this.router.navigate(['detalle-orden']);
            });
        });
    };
    ProfileMecanicoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-mecanico',
            template: __webpack_require__("./src/app/Components/profile-mecanico/profile-mecanico.component.html"),
            styles: [__webpack_require__("./src/app/Components/profile-mecanico/profile-mecanico.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ProfileMecanicoComponent);
    return ProfileMecanicoComponent;
}());



/***/ }),

/***/ "./src/app/Components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-box\">\r\n    <div class=\"logo\">\r\n        <a href=\"javascript:void(0);\">Mati<b>ASSEMBLER</b></a>\r\n        <small>Su taller de siempre, ahora mejor que nunca</small>\r\n    </div>\r\n              <div *ngIf=\"mostrarAlerta\">\r\n            <div class=\"alert alert-success alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"mostrarAlerta2\">\r\n            <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta2()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"mostrarAlerta3\">\r\n            <div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta3()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n          </div>\r\n\r\n    <div  *ngIf=\"Vista == 1\">\r\n        <div class=\"card\">\r\n            <div class=\"body\">\r\n                <form action=\"/\" (submit) = \"onRegisterSubmitCliente()\" id=\"frmFileUpload\"  method=\"post\">\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">person</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Nombre\" required autofocus>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">person</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"lastname\" name=\"lastname\" placeholder=\"Apellido\" required autofocus>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">person</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"cedula\" name=\"cedula\" placeholder=\"Cédula\" required autofocus>\r\n                      </div>\r\n                  </div>                            \r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">email</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">lock</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input type=\"password\" class=\"form-control\" [(ngModel)] = \"password\" name=\"password\" minlength=\"6\" placeholder=\"Contraseña\" required>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">person</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"telefono\" name=\"telefono\" placeholder=\"Telefono\" required autofocus>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                          <i class=\"material-icons\">person</i>\r\n                      </span>\r\n                      <div class=\"form-line\">\r\n                          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"direccion\" name=\"direccion\" placeholder=\"Direccion\" required autofocus>\r\n                      </div>\r\n                  </div>\r\n\r\n                    <button class=\"btn btn-block btn-lg bg-pink waves-effect\" (click) = \"onRegisterSubmitCliente()\" type=\"text\">REGISTRAR</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n  \r\n     \r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/Components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.rol = 1;
        //Alertas
        this.mostrarAlerta = false;
        this.mostrarAlerta2 = false;
        this.mostrarAlerta3 = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.obtenerUsuarios();
    };
    RegisterComponent.prototype.obtenerUsuarios = function () {
        var _this = this;
        var data = this.authService.getUsers().subscribe(function (datos) {
            _this.usuarios = datos.users;
        });
    };
    RegisterComponent.prototype.onRegisterSubmitCliente = function () {
        var _this = this;
        this.cerrarAlerta();
        var user = {
            nombre: this.name,
            apellido: this.lastname,
            correo: this.email,
            contraseña: this.password,
            rol: this.rol,
            cedula: this.cedula,
            direccion: this.direccion,
            telefono: this.telefono,
        };
        if (!this.validateService.validateRegister(user)) {
            this.cerrarAlerta3();
            this.mensajeAlerta = "Por favor rellene todos los campos.";
            this.mostrarAlerta2 = true;
            return false;
        }
        //Validar nombre
        if (!this.validateService.validarNombre(user.nombre)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Nombre demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar apellido
        if (!this.validateService.validarApellido(user.apellido)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Apellido demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar correo
        if (!this.validateService.validarCorreo(user.correo)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Correo demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar contraseña
        if (!this.validateService.validarPassword(user.contraseña)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Contraseña demasiado larga, ingrese una mas corta.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar cedula
        if (!this.validateService.validarCedula(user.cedula)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Cedula demasiado larga, ingrese una mas corta.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar direccion
        if (!this.validateService.validarDireccion(user.direccion)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Direccion demasiado larga, ingrese una mas corta.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar telefono
        if (!this.validateService.validarTelefono(user.telefono)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Telefono demasiado largo, ingrese uno mas corto.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Required fields
        if (!this.validateService.validateRegister(user) && !this.validateService.validateEmail(user.correo)) {
            this.mensajeAlerta = "Por favor rellene todos los campos, con un correo válido";
            this.mostrarAlerta2 = true;
            return false;
        }
        if (!this.validateService.validateRegister(user)) {
            this.cerrarAlerta3();
            this.mensajeAlerta = "Por favor rellene todos los campos.";
            this.mostrarAlerta2 = true;
            return false;
        }
        //Validar formato email
        if (!this.validateService.validateEmail(user.correo)) {
            this.cerrarAlerta2();
            this.mensajeAlerta = "Correo inválido, por favor ingrese correctamente.";
            this.mostrarAlerta3 = true;
            return false;
        }
        //Validar usuario existente por correo electronico
        if (!this.validarUsuario(user)) {
            this.mensajeAlerta = "Este correo ya esta registrado, por favor ingrese otro.";
            this.mostrarAlerta2 = true;
            return false;
        }
        this.cerrarAlerta2();
        this.cerrarAlerta3();
        //Registrar usuario
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.mensajeAlerta = "Usuario registrado correctamente";
                _this.mostrarAlerta = true;
                _this.setearCampos();
            }
            //this.router.navigate['login'];       
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            nombre: this.name,
            apellido: this.lastname,
            correo: this.email,
            contraseña: this.password,
            rol: this.rol,
            cedula: this.cedula,
            direccion: this.direccion,
            telefono: this.telefono,
        };
        //Required fields
        if (!this.validateService.validateRegister(user)) {
            return false;
        }
        //Validar email
        if (!this.validateService.validateEmail(user.correo)) {
            return false;
        }
        //Registrar usuario
        this.authService.registerUser(user).subscribe(function (data) {
            _this.router.navigate['profile-administrador'];
        });
    };
    RegisterComponent.prototype.setRol = function (numero) {
        this.rol = numero;
    };
    RegisterComponent.prototype.obtenerRol = function () {
        if (this.rol == 1) {
            return "Cliente";
        }
        if (this.rol == 2) {
            return "Administrador";
        }
        if (this.rol == 3) {
            return "Gerente";
        }
        if (this.rol == 4) {
            return "Mecanico";
        }
    };
    RegisterComponent.prototype.validarUsuario = function (newUsuario) {
        for (var i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].correo == newUsuario.correo) {
                return false;
            }
        }
        return true;
    };
    RegisterComponent.prototype.cerrarAlerta = function () {
        this.mostrarAlerta = false;
        this.mensajeAlerta = "";
    };
    RegisterComponent.prototype.cerrarAlerta2 = function () {
        this.mostrarAlerta2 = false;
        this.mensajeAlerta = "";
    };
    RegisterComponent.prototype.cerrarAlerta3 = function () {
        this.mostrarAlerta3 = false;
        this.mensajeAlerta = "";
    };
    RegisterComponent.prototype.setearCampos = function () {
        this.name = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
        this.cedula = "";
        this.direccion = "";
        this.telefono = "";
        this.rol = 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "Vista", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/Components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/Components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/Components/reporte-cliente/reporte-cliente.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/reporte-cliente/reporte-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix\">\r\n<div class=\"card\">\r\n  <div class=\"header bg-pink\">\r\n      <h2>\r\n          LISTA DE CLIENTES\r\n      </h2>\r\n  </div>\r\n  <div class=\"body table-responsive\">\r\n      <table class=\"table table-hover\">\r\n          <thead>\r\n              <tr>\r\n                <th>NOMBRE</th>\r\n                <th>APELLIDO</th>\r\n                <th>CÉDULA</th>\r\n                <th>VER VEHÍCULOS</th>\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr *ngFor= 'let user of clientes' >\r\n                <td>{{user.nombre}}</td>\r\n                <td>{{user.apellido}}</td>\r\n                <td>{{user.cedula}}</td>\r\n                <td> <button type=\"button\"  (click)=\"recuperarVehiculos(user)\" class=\"btn btn-default waves-effect\">\r\n                  <i class=\"material-icons\">settings</i> </button>\r\n                  </td>\r\n               </tr>\r\n          </tbody>\r\n      </table>\r\n  </div>\r\n</div>\r\n    <!-- VEHICULOS -->\r\n    \r\n    <div >\r\n        <div class=\"card\">\r\n            <div class=\"header bg-pink\">\r\n                <h2>VEHÍCULOS CLIENTE:  {{userSeleccionado.nombre}} {{userSeleccionado.apellido}}</h2>\r\n            </div>\r\n            <div class=\"body\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover dashboard-task-infos\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Marca</th>\r\n                                <th>Modelo</th>\r\n                                <th>Año</th>\r\n                                <th>Placa</th>\r\n                                <th>Serial del motor</th>\r\n                                <th> Activado </th>\r\n                                <th>Fecha Registro</th>\r\n                                <th>Ver ordenes </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            \r\n                            <tr *ngFor=\"let vehiculo of vehiculos\" >\r\n                                 \r\n                                <td>{{setMarcaVista(vehiculo.marca)}}</td>\r\n                                <td>{{vehiculo.modelo}}</td>\r\n                                <td>{{vehiculo.ano}}</td>\r\n                                <td>{{vehiculo.placa}}</td>\r\n                                <td>{{vehiculo.serialMotor}}</td>\r\n                                <td>{{setActivado(vehiculo.activado)}}</td>\r\n                                <td>{{vehiculo.fechaRegistro}}</td>\r\n                                <td>\r\n                                    <button (click)=\"verCitas(vehiculo)\" data-toggle=\"modal\" data-target=\"#largeModal\" type=\"button\" class=\"btn bg-indigo waves-effect\">\r\n                                        <i class=\"material-icons\">date_range</i>\r\n                                    </button>\r\n                                </td>\r\n                            \r\n                                \r\n                            </tr>\r\n                          \r\n                        \r\n                        </tbody>\r\n                    </table>\r\n                    <button type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"generarReporte()\">Generar Reporte</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <!-- #END# VEHICULOS -->\r\n  </div>\r\n\r\n  <!--MODAL HISTORIAL-->\r\n<div class=\"modal fade\" id=\"largeModal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"largeModalLabel\">Ordenes</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <!-- HISTORIAL --> \r\n                <div >\r\n                    <div class=\"card\">\r\n                        <div class=\"header bg-cyan\">\r\n                            <h2>\r\n                                ORDENES \r\n                            </h2>\r\n                        </div>\r\n                        <div class=\"body table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>ORDEN</th>\r\n                                        <th>FECHA ADMISIÓN</th>\r\n                                        <th>MECÁNICO</th>\r\n                                        <th>DIAGNÓSTICO</th>\r\n                                      \r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let orden of ordenes\" >\r\n                                        <td>{{orden.idOrden}}</td>\r\n                                        <td>{{orden.fecha}}</td>\r\n                                        <td>{{orden.idMecanico}}</td>\r\n                                        <td>{{orden.diagnostico}}</td>\r\n                                       \r\n    \r\n                                    </tr>\r\n                                 \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n    \r\n                    </div>\r\n                </div>\r\n                 <!--FIN HISTORIAL -->\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-link waves-effect\" data-dismiss=\"modal\">CLOSE</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--FIN MODAL HISTORIAL-->"

/***/ }),

/***/ "./src/app/Components/reporte-cliente/reporte-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReporteClienteComponent = (function () {
    function ReporteClienteComponent(http, validateService, authService, router, location, datePipe) {
        this.http = http;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.datePipe = datePipe;
        this.clientes = [];
        this.marcas = [];
        this.vehiculos = [];
        this.ordenes = [];
    }
    ReporteClienteComponent.prototype.ngOnInit = function () {
        this.obtenerMecanicos();
    };
    ReporteClienteComponent.prototype.recuperarVehiculos = function (user) {
        var _this = this;
        this.userSeleccionado = user;
        var data = this.authService.obtenerVehiculos(user).subscribe(function (datos) {
            _this.vehiculos = datos.vehiculos;
            _this.vehiculos.forEach(function (vehiculo) {
                _this.verCitas(vehiculo);
            });
        });
    };
    ReporteClienteComponent.prototype.verCitas = function (vehiculo) {
        var _this = this;
        this.ordenes = null;
        this.authService.obtenerOrdenesVehiculo(vehiculo).subscribe(function (datos) {
            _this.ordenes = datos.ordenes;
            var ordenesTemp = [];
            ordenesTemp = _this.ordenes.filter(function (orden) {
                if (orden.idVehiculo == vehiculo.idVehiculo) {
                    return orden;
                }
            });
            _this.ordenes = ordenesTemp;
            vehiculo.ordenes = ordenesTemp;
        });
    };
    ReporteClienteComponent.prototype.setMarcaVista = function (idMarca) {
        return this.marcas[idMarca - 1].marca;
    };
    ReporteClienteComponent.prototype.generarReporte = function () {
        var _this = this;
        var fechaActual = new Date();
        //let fechaReporte= this.datePipe.transform(fechatemp);
        var yearActual = fechaActual.getFullYear();
        var monthActual = (fechaActual.getMonth() + 1);
        var dayActual = fechaActual.getDate();
        //Nombre del archivo 
        var filename = "";
        filename += "" + this.userSeleccionado.apellido + this.userSeleccionado.nombre + "Reporte" + ".csv";
        var reporte = "";
        reporte += "Cliente:," + this.userSeleccionado.apellido + " " + this.userSeleccionado.nombre + "\r\n";
        reporte += "Fecha Reporte:," + dayActual + "-" + monthActual + "-" + yearActual + "\r\n" + "\r\n";
        this.vehiculos.forEach(function (vehiculo) {
            reporte += "\r\n" + vehiculo.modelo + " " + vehiculo.ano + " " + "\r\n";
            reporte += "Numero Orden,Fecha Admision,Mecanico,Diagnostico,Procedimiento" + "\r\n";
            vehiculo.ordenes.forEach(function (orden) {
                reporte += orden.idOrden + "," + orden.fecha + "," + _this.setNombreMecanico(orden.idMecanico) + "," + orden.diagnostico + "," + orden.procedimiento + "\r\n";
            });
        });
        var blob = new Blob([reporte]);
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveBlob(blob, filename);
        else {
            var a = window.document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = filename;
            document.body.appendChild(a);
            a.click(); // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
            document.body.removeChild(a);
        }
    };
    ReporteClienteComponent.prototype.obtenerMecanicos = function () {
        var _this = this;
        var data = this.authService.getUsers().subscribe(function (datos) {
            var usuarios = datos.users;
            _this.mecanicos = usuarios.filter(function (user) {
                if (user.rol == 4) {
                    return user;
                }
            });
        });
    };
    ReporteClienteComponent.prototype.setNombreMecanico = function (idMecanico) {
        for (var i = 0; i < this.mecanicos.length; i++) {
            if (this.mecanicos[i].idUsuario == idMecanico) {
                return this.mecanicos[i].nombre;
            }
        }
    };
    ReporteClienteComponent.prototype.setActivado = function (id) {
        if (id == 1) {
            return "Activado";
        }
        if (id == 0) {
            return "Desactivado";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReporteClienteComponent.prototype, "clientes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReporteClienteComponent.prototype, "marcas", void 0);
    ReporteClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte-cliente',
            template: __webpack_require__("./src/app/Components/reporte-cliente/reporte-cliente.component.html"),
            styles: [__webpack_require__("./src/app/Components/reporte-cliente/reporte-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]])
    ], ReporteClienteComponent);
    return ReporteClienteComponent;
}());



/***/ }),

/***/ "./src/app/Components/reporte-mecanico/reporte-mecanico.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/reporte-mecanico/reporte-mecanico.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n\r\n    <div *ngIf=\"mostrarAlerta3\">\r\n            <div class=\"alert alert-warning alert-danger\" role=\"alert\">\r\n                    <button (click)=\"cerrarAlerta3()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                   <strong>{{mensajeAlerta}}</strong>\r\n                </div>\r\n    </div> \r\n    <div class=\"card\">\r\n\r\n        <div class=\"header bg-orange\">\r\n            <h2>\r\n                    MECANICO   {{mecanico.nombre}} {{mecanico.apellido}}\r\n            </h2>\r\n        </div>\r\n        <div *ngIf=\"selecciono\">\r\n            <div class=\"input-group\">\r\n                <div class=\"btn-group\">\r\n            \r\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    {{obtenerNombre()}}<span class=\"caret\"></span>\r\n                </button> \r\n                <ul   class=\"dropdown-menu\">\r\n                    <li *ngFor = \"let mecanico of mecanicos\"><a (click)= \"seleccionarMecanico(mecanico)\">{{mecanico.nombre}}</a></li>\r\n                    \r\n                </ul>                               \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"selecciono==false\">\r\n            <div class=\"input-group\">\r\n                <div class=\"btn-group\">           \r\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Mecanicos<span class=\"caret\"></span>\r\n                </button> \r\n                <ul   class=\"dropdown-menu\">\r\n                    <li *ngFor = \"let mecanico of mecanicos\"><a (click)= \"seleccionarMecanico(mecanico)\">{{mecanico.nombre}}</a></li>\r\n                    \r\n                </ul>\r\n                </div>  \r\n            </div>\r\n        </div>\r\n        <div class=\"input-group\">\r\n            <my-date-picker name=\"fechaInicio\" [options]=\"myDatePickerOptions\"\r\n            [(ngModel)]=\"fechaInicio\" required></my-date-picker>\r\n        </div>\r\n        <div class=\"input-group\">\r\n            <my-date-picker name=\"fechaFin\" [options]=\"myDatePickerOptions2\"\r\n            [(ngModel)]=\"fechaFinal\" required></my-date-picker>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-warning waves-effect\" (click)=\"obtenerOrdenes()\">Obtener Ordenes </button>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n            <div class=\"header bg-orange\">\r\n                <h2>\r\n                        ÓRDENES ASIGNADAS\r\n                </h2>\r\n            </div>\r\n            <div class=\"body table-responsive\">\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                                <th>ORDEN</th>\r\n                                <th>MODELO</th>\r\n                                <th>AÑO</th>\r\n                                <th>PLACA</th>\r\n                                <th>SERIAL</th>\r\n                                <th>ESTADO</th>\r\n               \r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor = \"let orden of ordenes\" >\r\n                            <td>{{orden.idOrden}}</td>\r\n                            <td>{{orden.vehiculo.modelo}}</td>\r\n                            <td>{{orden.vehiculo.ano}}</td>\r\n                            <td>{{orden.vehiculo.placa}}</td>\r\n                            <td>{{orden.vehiculo.serialMotor}}</td>\r\n                            <td>{{setEstado(orden.activada)}}</td>\r\n                         \r\n                        </tr>\r\n                       \r\n                        \r\n                    </tbody>\r\n                </table>\r\n                <button type=\"button\" class=\"btn btn-warning waves-effect\" (click)=\"generarReporte()\">Generar Reporte</button>\r\n            </div>\r\n         \r\n        </div>"

/***/ }),

/***/ "./src/app/Components/reporte-mecanico/reporte-mecanico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteMecanicoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReporteMecanicoComponent = (function () {
    function ReporteMecanicoComponent(http, validateService, authService, router) {
        this.http = http;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.ordenes = [];
        this.selecciono = false;
        //Alertas
        this.mostrarAlerta = false;
        this.mostrarAlerta2 = false;
        this.mostrarAlerta3 = false;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'yyyy.mm.dd',
        };
        this.myDatePickerOptions2 = {
            // other options...
            dateFormat: 'yyyy.mm.dd',
        };
        this.fechaInicio = { date: { year: 2018, month: 10, day: 9 } };
        this.fechaFinal = { date: { year: 2018, month: 10, day: 9 } };
    }
    ReporteMecanicoComponent.prototype.ngOnInit = function () {
    };
    ReporteMecanicoComponent.prototype.ngOnChanges = function (changes) {
        if (changes['idMecanico']) {
            this.obtenerVehiculos(this.idMecanico);
        }
    };
    ReporteMecanicoComponent.prototype.obtenerOrdenes = function () {
        var _this = this;
        this.ordenes = null;
        this.ordenes = [];
        var fechaI = "";
        fechaI += this.fechaInicio.date.year + "." + this.fechaInicio.date.month + "." + this.fechaInicio.date.day;
        var fechaF = "";
        fechaF += this.fechaFinal.date.year + "." + this.fechaFinal.date.month + "." + this.fechaFinal.date.day;
        this.fechaIF = fechaI;
        this.fechaFF = fechaF;
        var fechas = {
            fechaInicio: fechaI,
            fechaFinal: fechaF
        };
        if (this.selecciono == false) {
            this.mensajeAlerta = "Debes seleccionar un mecánico.";
            this.mostrarAlerta3 = true;
            return false;
        }
        if (!this.validateService.validarFechas(this.fechaInicio.date, this.fechaFinal.date)) {
            this.mensajeAlerta = "La fecha final es anterior a la inicial";
            this.mostrarAlerta3 = true;
            return false;
        }
        this.cerrarAlerta3();
        this.authService.getOrdenesFecha(fechas).subscribe(function (datos) {
            _this.ordenes = [];
            var todasOrdenes = datos.ordenes;
            for (var i = 0; i < todasOrdenes.length; i++) {
                if (todasOrdenes[i].idMecanico == _this.mecanico.idUsuario) {
                    _this.ordenes.push(todasOrdenes[i]);
                }
            }
            if (_this.ordenes.length == 0) {
                _this.mensajeAlerta = "Este mecánico no tiene ordenes asignadas";
                _this.mostrarAlerta3 = true;
                return false;
            }
            _this.cerrarAlerta3();
            _this.ordenes.forEach(function (orden) {
                _this.vehiculos.forEach(function (vehiculo) {
                    if (vehiculo.idVehiculo == orden.idVehiculo) {
                        orden.vehiculo = vehiculo;
                    }
                });
            });
        });
    };
    ReporteMecanicoComponent.prototype.obtenerMecanicos = function () {
        var _this = this;
        var data = this.authService.getUsers().subscribe(function (datos) {
            _this.mecanicos = datos.users;
            _this.mecanicos = _this.mecanicos.filter(function (user) {
                if (user.rol == 4) {
                    return user;
                }
            });
        });
    };
    ReporteMecanicoComponent.prototype.generarReporte = function () {
        var filename = "";
        filename += "" + this.mecanico.idUsuario + " " + this.mecanico.apellido + " " + this.mecanico.nombre + ".csv";
        //DEFINICION DEL REPOTE
        var reporte = "" + this.mecanico.nombre + " " + this.mecanico.apellido + ", " + this.fechaIF + "-" + this.fechaFF + " " + "\r\n";
        reporte += "Ordenes totales: " + this.ordenes.length + "\r\n" + "\r\n";
        reporte += "Orden" + "," + "Modelo" + "," + "Año" + "," + "Diagnóstico" + "," + "Procedimiento" + "\r\n";
        this.ordenes.forEach(function (orden) {
            reporte += orden.idOrden + "," + orden.vehiculo.modelo + "," + orden.vehiculo.ano + "," + orden.diagnostico + "," + orden.procedimiento + "\r\n";
        });
        var blob = new Blob([reporte]);
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveBlob(blob, filename);
        else {
            var a = window.document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = filename;
            document.body.appendChild(a);
            a.click(); // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
            document.body.removeChild(a);
        }
    };
    ReporteMecanicoComponent.prototype.seleccionarMecanico = function (meca) {
        this.mecanico = meca;
        this.selecciono = true;
    };
    ReporteMecanicoComponent.prototype.obtenerVehiculos = function (id) {
        var _this = this;
        this.authService.getOrdenesMecanico(id).subscribe(function (data) {
            _this.ordenes = data.ordenes;
            var _loop_1 = function (i) {
                var data2 = _this.authService.getVehiculo(_this.ordenes[i].idVehiculo).subscribe(function (datos) {
                    _this.ordenes[i].vehiculo = datos.vehiculo;
                });
            };
            for (var i = 0; i < _this.ordenes.length; i++) {
                _loop_1(i);
            }
        });
    };
    ReporteMecanicoComponent.prototype.obtenerNombre = function () {
        if (this.mecanico != undefined) {
            return this.mecanico.nombre;
        }
        var vari = "Mecanicos";
        return vari;
    };
    ReporteMecanicoComponent.prototype.setEstado = function (id) {
        if (id == 1) {
            return "En curso";
        }
        if (id == 2) {
            return "Finalizada";
        }
        if (id == 0) {
            return "Cerrada";
        }
    };
    ReporteMecanicoComponent.prototype.cerrarAlerta3 = function () {
        this.mostrarAlerta3 = false;
        this.mensajeAlerta = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReporteMecanicoComponent.prototype, "idMecanico", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReporteMecanicoComponent.prototype, "mecanicos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReporteMecanicoComponent.prototype, "vehiculos", void 0);
    ReporteMecanicoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte-mecanico',
            template: __webpack_require__("./src/app/Components/reporte-mecanico/reporte-mecanico.component.html"),
            styles: [__webpack_require__("./src/app/Components/reporte-mecanico/reporte-mecanico.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ReporteMecanicoComponent);
    return ReporteMecanicoComponent;
}());



/***/ }),

/***/ "./src/app/Components/reporte-modelo/reporte-modelo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/reporte-modelo/reporte-modelo.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mostrarAlerta3\">\r\n        <div class=\"alert alert-warning alert-danger\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta3()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n               <strong>{{mensajeAlerta}}</strong>\r\n            </div>\r\n</div> \r\n<div class=\"card\">\r\n  <div class=\"header bg-orange\">\r\n      <h2>\r\n              Seleccionar fechas \r\n      </h2>\r\n  </div>\r\n\r\n  <div class=\"input-group\">\r\n      Desde: \r\n      <my-date-picker name=\"fechaInicio\" [options]=\"myDatePickerOptions\"\r\n      [(ngModel)]=\"fechaInicio\" required></my-date-picker>\r\n  </div>\r\n  <div class=\"input-group\">\r\n      Hasta: \r\n      <my-date-picker name=\"fechaFin\" [options]=\"myDatePickerOptions2\"\r\n      [(ngModel)]=\"fechaFinal\" required></my-date-picker>\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-warning waves-effect\" (click) = \"obtenerVistaPrevia() \">Obtener Vista Previa  </button>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"header bg-orange\">\r\n      <h2>\r\n              Modelos Atentidos\r\n      </h2>\r\n  </div>\r\n  <div class=\"body table-responsive\">\r\n      <table class=\"table table-hover\">\r\n          <thead>\r\n              <tr>\r\n                      <th>MODELO</th>\r\n                      <th>CANTIDAD</th>\r\n                    \r\n     \r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr *ngFor = \"let modelo of modelos\" >\r\n                  <td>{{modelo.modelo}}</td>\r\n                  <td>{{modelo.cantidad}}</td>\r\n                  \r\n               \r\n              </tr>\r\n             \r\n              \r\n          </tbody>\r\n      </table>\r\n      <button type=\"button\" class=\"btn btn-warning waves-effect\" (click)=\"generarReporte()\">Generar Reporte</button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/Components/reporte-modelo/reporte-modelo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteModeloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReporteModeloComponent = (function () {
    function ReporteModeloComponent(http, validateService, authService, router) {
        this.http = http;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.ordenes = [];
        this.modelos = [];
        //Alertas
        this.mostrarAlerta3 = false;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'yyyy.mm.dd',
        };
        this.myDatePickerOptions2 = {
            // other options...
            dateFormat: 'yyyy.mm.dd',
        };
        this.fechaInicio = { date: { year: 2018, month: 10, day: 9 } };
        this.fechaFinal = { date: { year: 2018, month: 10, day: 9 } };
    }
    ReporteModeloComponent.prototype.ngOnInit = function () {
    };
    ReporteModeloComponent.prototype.cerrarAlerta3 = function () {
        this.mostrarAlerta3 = false;
        this.mensajeAlerta = "";
    };
    ReporteModeloComponent.prototype.obtenerVistaPrevia = function () {
        var _this = this;
        this.ordenes = null;
        this.modelos = null;
        this.modelos = [];
        this.ordenes = [];
        var fechaI = "";
        fechaI += this.fechaInicio.date.year + "." + this.fechaInicio.date.month + "." + this.fechaInicio.date.day;
        var fechaF = "";
        fechaF += this.fechaFinal.date.year + "." + this.fechaFinal.date.month + "." + this.fechaFinal.date.day;
        this.fechaIF = fechaI;
        this.fechaFF = fechaF;
        var fechas = {
            fechaInicio: fechaI,
            fechaFinal: fechaF
        };
        if (!this.validateService.validarFechas(this.fechaInicio.date, this.fechaFinal.date)) {
            this.mensajeAlerta = "La fecha final es anterior a la inicial";
            this.mostrarAlerta3 = true;
            return false;
        }
        this.cerrarAlerta3();
        this.authService.getOrdenesFecha(fechas).subscribe(function (datos) {
            _this.ordenes = datos.ordenes;
            _this.ordenes.forEach(function (orden) {
                _this.vehiculos.forEach(function (vehiculo) {
                    if (vehiculo.idVehiculo == orden.idVehiculo) {
                        orden.vehiculo = vehiculo;
                    }
                });
            });
            var existe = false;
            _this.ordenes.forEach(function (orden) {
                existe = false;
                for (var i = 0; i < _this.modelos.length; i++) {
                    if (orden.vehiculo.modelo == _this.modelos[i].modelo) {
                        existe = true;
                        _this.modelos[i].cantidad++;
                    }
                }
                if (!existe) {
                    var modelo = {
                        modelo: orden.vehiculo.modelo,
                        cantidad: 1
                    };
                    _this.modelos.push(modelo);
                }
            });
        });
    };
    ReporteModeloComponent.prototype.generarReporte = function () {
        var filename = "";
        filename += "" + this.fechaIF + "" + this.fechaFF + "" + "ReporteModelos" + ".csv";
        var reporte = "";
        reporte += this.fechaIF + "-" + this.fechaFF + "\r\n" + "\r\n";
        reporte += "modelo,cantidad" + "\r\n";
        this.modelos.forEach(function (modelo) {
            reporte += "\r\n" + modelo.modelo + "," + modelo.cantidad + "\r\n";
        });
        var blob = new Blob([reporte]);
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveBlob(blob, filename);
        else {
            var a = window.document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = filename;
            document.body.appendChild(a);
            a.click(); // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
            document.body.removeChild(a);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReporteModeloComponent.prototype, "vehiculos", void 0);
    ReporteModeloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte-modelo',
            template: __webpack_require__("./src/app/Components/reporte-modelo/reporte-modelo.component.html"),
            styles: [__webpack_require__("./src/app/Components/reporte-modelo/reporte-modelo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ReporteModeloComponent);
    return ReporteModeloComponent;
}());



/***/ }),

/***/ "./src/app/Components/reporte-vehiculo/reporte-vehiculo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/reporte-vehiculo/reporte-vehiculo.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mostrarAlerta\">\r\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n                <button (click)=\"cerrarAlerta()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n               <strong>El vehículo no posee ordenes</strong>\r\n            </div>\r\n</div> \r\n<div class=\"card\">\r\n    <div class=\"header\">\r\n        <h2>VEHÍCULOS REGISTRADOS</h2>\r\n    </div>\r\n    <div class=\"body\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover dashboard-task-infos\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Marca</th>\r\n                        <th>Modelo</th>\r\n                        <th>Año</th>\r\n                        <th>Placa</th>\r\n                        <th>Serial del motor</th>\r\n                        <th>Activado</th>\r\n                        <th>Fecha Registro</th>\r\n                        <th>Generar Reporte</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    \r\n                    <tr *ngFor=\"let vehiculo of vehiculos\" >                         \r\n                        <td>{{setMarcaVista(vehiculo.marca)}}</td>\r\n                        <td>{{vehiculo.modelo}}</td>\r\n                        <td>{{vehiculo.ano}}</td>\r\n                        <td>{{vehiculo.placa}}</td>\r\n                        <td>{{vehiculo.serialMotor}}</td>\r\n                        <td>{{setActivado(vehiculo.activado)}}</td>\r\n                        <td>{{vehiculo.fechaRegistro}}</td>\r\n                        <td>\r\n                            <button (click)=\"generarReporte(vehiculo)\" type=\"button\" class=\"btn bg-indigo waves-effect\">\r\n                                <i class=\"material-icons\">date_range</i>\r\n                            </button>\r\n                        </td>                       \r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/reporte-vehiculo/reporte-vehiculo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteVehiculoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReporteVehiculoComponent = (function () {
    function ReporteVehiculoComponent(http, validateService, authService, router, location) {
        this.http = http;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.vehiculos = [];
        this.mostrarAlerta = false;
    }
    ReporteVehiculoComponent.prototype.ngOnInit = function () {
        this.getMarcas();
        this.obtenerVehiculos();
        this.obtenerMecanicosyClientes();
    };
    ReporteVehiculoComponent.prototype.getMarcas = function () {
        var _this = this;
        this.authService.getMarcas().subscribe(function (data) {
            _this.marcas = data.marcas;
        });
    };
    ReporteVehiculoComponent.prototype.obtenerVehiculos = function () {
        var _this = this;
        var data = this.authService.obtenerListaVehiculos().subscribe(function (datos) {
            _this.vehiculos = datos.vehiculos;
        });
    };
    ReporteVehiculoComponent.prototype.generarReporte = function (vehiculo) {
        var _this = this;
        this.ordenes = null;
        this.authService.obtenerOrdenesVehiculo(vehiculo).subscribe(function (datos) {
            _this.ordenes = datos.ordenes;
            var ordenesTemp = [];
            ordenesTemp = _this.ordenes.filter(function (orden) {
                if (orden.idVehiculo == vehiculo.idVehiculo) {
                    return orden;
                }
            });
            _this.ordenes = ordenesTemp;
            var filename = "";
            filename += "Reporte " + _this.setNombreCliente(vehiculo.propietario) + " " + vehiculo.modelo + " " + vehiculo.ano + ".csv";
            //DEFINICION DEL REPOTE
            var reporte = "" + vehiculo.modelo + " " + vehiculo.ano + "\r\n" + "\r\n";
            reporte += "Fecha" + "," + "idMecanico" + "," + "Diagnostico" + "," + "Procedimiento" + "\r\n";
            if (_this.ordenes !== undefined && _this.ordenes.length > 0) {
                _this.mostrarAlerta = false;
                _this.ordenes.forEach(function (orden) {
                    reporte += orden.fecha + "," + _this.setNombreMecanico(orden.idMecanico) + "," + orden.diagnostico + "," + orden.procedimiento + "\r\n";
                });
                var blob = new Blob([reporte]);
                if (window.navigator.msSaveOrOpenBlob)
                    window.navigator.msSaveBlob(blob, filename);
                else {
                    var a = window.document.createElement("a");
                    a.href = window.URL.createObjectURL(blob);
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click(); // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
                    document.body.removeChild(a);
                }
            }
            else {
                console.log("Error. El vehículo no tiene ordenes");
                _this.mostrarAlerta = true;
            }
        });
    };
    ReporteVehiculoComponent.prototype.setMarcaVista = function (idMarca) {
        return this.marcas[idMarca - 1].marca;
    };
    ReporteVehiculoComponent.prototype.cerrarAlerta = function () {
        this.mostrarAlerta = false;
    };
    ReporteVehiculoComponent.prototype.obtenerMecanicosyClientes = function () {
        var _this = this;
        var data = this.authService.getUsers().subscribe(function (datos) {
            var usuarios = datos.users;
            _this.mecanicos = usuarios.filter(function (user) {
                if (user.rol == 4) {
                    return user;
                }
            });
            _this.clientes = usuarios.filter(function (user) {
                if (user.rol == 1) {
                    return user;
                }
            });
        });
    };
    ReporteVehiculoComponent.prototype.setNombreMecanico = function (idMecanico) {
        for (var i = 0; i < this.mecanicos.length; i++) {
            if (this.mecanicos[i].idUsuario == idMecanico) {
                return this.mecanicos[i].nombre;
            }
        }
    };
    ReporteVehiculoComponent.prototype.setNombreCliente = function (idCliente) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].idUsuario == idCliente) {
                return this.clientes[i].nombre;
            }
        }
    };
    ReporteVehiculoComponent.prototype.setActivado = function (id) {
        if (id == 1) {
            return "Activado";
        }
        if (id == 0) {
            return "Desactivado";
        }
    };
    ReporteVehiculoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte-vehiculo',
            template: __webpack_require__("./src/app/Components/reporte-vehiculo/reporte-vehiculo.component.html"),
            styles: [__webpack_require__("./src/app/Components/reporte-vehiculo/reporte-vehiculo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]])
    ], ReporteVehiculoComponent);
    return ReporteVehiculoComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n-->\n\n<router-outlet> </router-outlet> \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_qr_service__ = __webpack_require__("./src/app/services/qr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mydatepicker__ = __webpack_require__("./node_modules/mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_profile_cliente_profile_cliente_component__ = __webpack_require__("./src/app/Components/profile-cliente/profile-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Components_register_register_component__ = __webpack_require__("./src/app/Components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Components_login_login_component__ = __webpack_require__("./src/app/Components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Components_profile_administrador_profile_administrador_component__ = __webpack_require__("./src/app/Components/profile-administrador/profile-administrador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Components_profile_gerente_profile_gerente_component__ = __webpack_require__("./src/app/Components/profile-gerente/profile-gerente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Components_profile_mecanico_profile_mecanico_component__ = __webpack_require__("./src/app/Components/profile-mecanico/profile-mecanico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Components_detalle_vehiculo_detalle_vehiculo_component__ = __webpack_require__("./src/app/Components/detalle-vehiculo/detalle-vehiculo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Components_detalle_orden_detalle_orden_component__ = __webpack_require__("./src/app/Components/detalle-orden/detalle-orden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Components_reporte_vehiculo_reporte_vehiculo_component__ = __webpack_require__("./src/app/Components/reporte-vehiculo/reporte-vehiculo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Components_reporte_mecanico_reporte_mecanico_component__ = __webpack_require__("./src/app/Components/reporte-mecanico/reporte-mecanico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Components_reporte_cliente_reporte_cliente_component__ = __webpack_require__("./src/app/Components/reporte-cliente/reporte-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Components_reporte_modelo_reporte_modelo_component__ = __webpack_require__("./src/app/Components/reporte-modelo/reporte-modelo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_upload_file_service__ = __webpack_require__("./src/app/services/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Components_leer_qr_leer_qr_component__ = __webpack_require__("./src/app/Components/leer-qr/leer-qr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_qrscanner__ = __webpack_require__("./node_modules/angular2-qrscanner/esm5/angular2-qrscanner.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// Pipes








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__Components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile-cliente', component: __WEBPACK_IMPORTED_MODULE_10__Components_profile_cliente_profile_cliente_component__["a" /* ProfileClienteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile-gerente', component: __WEBPACK_IMPORTED_MODULE_17__Components_profile_gerente_profile_gerente_component__["a" /* ProfileGerenteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile-mecanico', component: __WEBPACK_IMPORTED_MODULE_18__Components_profile_mecanico_profile_mecanico_component__["a" /* ProfileMecanicoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__Components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__Components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile-administrador', component: __WEBPACK_IMPORTED_MODULE_14__Components_profile_administrador_profile_administrador_component__["a" /* ProfileAdministradorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile-gerente', component: __WEBPACK_IMPORTED_MODULE_17__Components_profile_gerente_profile_gerente_component__["a" /* ProfileGerenteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'detalle-vehiculo', component: __WEBPACK_IMPORTED_MODULE_19__Components_detalle_vehiculo_detalle_vehiculo_component__["a" /* DetalleVehiculoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'detalle-orden', component: __WEBPACK_IMPORTED_MODULE_20__Components_detalle_orden_detalle_orden_component__["a" /* DetalleOrdenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Components_profile_cliente_profile_cliente_component__["a" /* ProfileClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__Components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__Components_profile_administrador_profile_administrador_component__["a" /* ProfileAdministradorComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Components_profile_gerente_profile_gerente_component__["a" /* ProfileGerenteComponent */],
                __WEBPACK_IMPORTED_MODULE_18__Components_profile_mecanico_profile_mecanico_component__["a" /* ProfileMecanicoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__Components_detalle_vehiculo_detalle_vehiculo_component__["a" /* DetalleVehiculoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__Components_detalle_orden_detalle_orden_component__["a" /* DetalleOrdenComponent */],
                __WEBPACK_IMPORTED_MODULE_22__Components_reporte_vehiculo_reporte_vehiculo_component__["a" /* ReporteVehiculoComponent */],
                __WEBPACK_IMPORTED_MODULE_23__Components_reporte_mecanico_reporte_mecanico_component__["a" /* ReporteMecanicoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__Components_reporte_cliente_reporte_cliente_component__["a" /* ReporteClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_25__Components_reporte_modelo_reporte_modelo_component__["a" /* ReporteModeloComponent */],
                __WEBPACK_IMPORTED_MODULE_27__Components_leer_qr_leer_qr_component__["a" /* LeerQrComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_28_angular2_qrscanner__["a" /* NgQrScannerModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_26__services_upload_file_service__["a" /* UploadFileService */], __WEBPACK_IMPORTED_MODULE_6__services_qr_service__["a" /* QrService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            /*this.authService.getProfile().subscribe(profile => {
                this.rol = profile.user.rol;
            }, err => {
                console.log('Error while getting the profile: ', err);
                return false;
            });

            if (this.rol == 2){
                this.router.navigate(['/profile-administrador']);
            } else if(this.rol == 1){
                this.router.navigate(['/profile-cliente']);
            } else {
                this.router.navigate(['/login']);
                
            }*/
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getMecanicos = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getMecanicos', Object(), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getMarcas = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getMarcas', Object(), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAccesorios = function (ID) {
        var idOrden = { ID: ID };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getAccesorios', idOrden, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.actualizarUsuario = function (usuario) {
        console.log("Hola aqui en actualizar usuario");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/modificarUsuario', usuario, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerRepuesto = function (repuesto) {
        console.log("Hola");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/registerRepuesto', repuesto, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerOrden = function (orden) {
        console.log("Hola aqui en registrar orden");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/registerOrden', orden, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addAccesorios = function (accesorios) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/addAccesorios', accesorios, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.actualizarOrden = function (orden) {
        console.log("Hola aqui en actualizar orden");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/modificarOrden', orden, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserById = function (ID) {
        var idUsuario = { ID: ID };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getUser', idUsuario, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUsers = function () {
        console.log("Hola2");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getUsers', Object(), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.obtenerCitas = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getCitas', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getOrdenes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getOrdenes', Object(), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getVehiculo = function (ID) {
        var idVehiculo = { ID: ID };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getVehiculo', idVehiculo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getOrden = function (ID) {
        var idOrden = { ID: ID };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getOrden', idOrden, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.obtenerRepuestos = function () {
        console.log("Hola2");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/obtenerRepuestos', Object(), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.obtenerRepuesto = function (ID) {
        var idRepuesto = { ID: ID };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/obtenerRepuesto', idRepuesto, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.obtenerRepuestosOrden = function (orden) {
        console.log("Hola repuestos orden");
        //let idOrden = {ID} 		
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/obtenerRepuestosOrden', orden, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addRepuestosOrden = function (repOrden) {
        //let ids = {IDREP,IDORDEN};	
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/addRepuestosOrden', repOrden, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        //console.log(user); //Para registrar un usuario
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerVehiculo = function (carro) {
        //Para registrar un vehiculo
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/registerVehiculo', carro, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.desactivarVehiculo = function (vehiculo) {
        console.log("entro en servicio");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/desactivarVehiculo', vehiculo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.activarVehiculo = function (vehiculo) {
        console.log("entro en servicio");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/activarVehiculo', vehiculo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.solicitarCita = function (cita) {
        //Para registrar una cita
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/registerCita', cita, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.eliminarCita = function (idCita) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/eliminarCita', { idCita: idCita }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.eliminarRepuesto = function (idRepuesto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/eliminarRepuesto', { idRepuesto: idRepuesto }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.obtenerVehiculos = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getVehiculos', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.obtenerOrdenesVehiculo = function (vehiculo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getOrdenesVehiculo', vehiculo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getOrdenesMecanico = function (idMecanico) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getOrdenesMecanico', { idMecanico: idMecanico }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getImagenesVehiculo = function (idVehiculo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/obtenerImagenesVehiculo', { idVehiculo: idVehiculo }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addImagenesVehiculo = function (imagenVehiculo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/addImagenesVehiculo', imagenVehiculo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getImagenesOrden = function (idOrden) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/obtenerImagenesOrden', { idOrden: idOrden }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addImagenesOrden = function (imagenOrden) {
        console.log("imagenOrden es", imagenOrden);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/addImagenesOrden', imagenOrden, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getOrdenesFecha = function (fechas) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getOrdenesFecha', { fechas: fechas }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.desactivarOrden = function (idOrden) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/desactivarOrden', { idOrden: idOrden }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.activarOrden = function (idOrden) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/activarOrden', { idOrden: idOrden }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.cerrarOrden = function (orden) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/cerrarOrden', orden, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.obtenerListaVehiculos = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getVehiculos2', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.vehiculo = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.almacenarVehiculoLS = function (vehiculo) {
        localStorage.setItem('vehiculo', JSON.stringify(vehiculo));
        this.vehiculo = vehiculo;
    };
    AuthService.prototype.almacenarOrdenLS = function (orden) {
        localStorage.setItem('orden', JSON.stringify(orden));
        this.orden = orden;
    };
    AuthService.prototype.almacenarNuevoLS = function (nuevo) {
        localStorage.setItem('nuevo', JSON.stringify(nuevo));
        this.nuevo = nuevo;
        ;
    };
    AuthService.prototype.borrarNuevoLS = function () {
        localStorage.removeItem('nuevo');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/qr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QrService = (function () {
    function QrService() {
    }
    QrService.prototype.generarQR = function (string) {
        var URL = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURI(string) + "&size=200x200";
        return URL;
    };
    QrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], QrService);
    return QrService;
}());



/***/ }),

/***/ "./src/app/services/upload-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3__ = __webpack_require__("./node_modules/aws-sdk/clients/s3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadFileService = (function () {
    function UploadFileService() {
        this.FOLDER = 'jsa-s3/';
    }
    UploadFileService.prototype.uploadfile = function (file, id, identificador, authService) {
        var bucket = new __WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3__({
            accessKeyId: 'AKIAJTOIL2JOG5VHSOXQ',
            secretAccessKey: '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',
            region: 'us-east-1'
        });
        var params = {
            Bucket: 'matiassembler',
            Key: this.FOLDER + file.name,
            Body: file
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
            }
            console.log('Successfully uploaded file.', data);
            if (identificador == 1) {
                var imagenesVehiculo = {
                    idVehiculo: id,
                    imagen: data.Location
                };
                authService.addImagenesVehiculo(imagenesVehiculo).subscribe(function (datos) {
                    return true;
                });
            }
            if (identificador == 2) {
                console.log("EL IDENTIFICADOR ES 2");
                var imagenesOrden = {
                    idOrden: id,
                    imagen: data.Location
                };
                authService.addImagenesOrden(imagenesOrden).subscribe(function (datos) {
                    return true;
                });
            }
        });
    };
    UploadFileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validarLogin = function (user) {
        if (user.correo == undefined || user.contraseña == undefined) {
            return false;
        }
        else if (user.correo == "" || user.contraseña == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRegister = function (user) {
        if (user.nombre == undefined || user.cedula == undefined || user.apellido == undefined || user.correo == undefined || user.contraseña == undefined || user.direccion == undefined || user.telefono == undefined) {
            return false;
        }
        else if (user.nombre == "" || user.cedula == "" || user.apellido == "" || user.correo == "" || user.contraseña == "" || user.direccion == "" || user.telefono == "") {
            return false;
        }
        else {
            return true;
        }
    };
    //Validaciones longitud de campos al registrar usuarios
    ValidateService.prototype.validarNombre = function (nombre) {
        if (nombre.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarApellido = function (apellido) {
        if (apellido.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarCorreo = function (correo) {
        if (correo.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarPassword = function (password) {
        if (password.length > 10) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarCedula = function (cedula) {
        if (cedula.length > 11) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarDireccion = function (direccion) {
        if (direccion.length > 200) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarTelefono = function (telefono) {
        if (telefono.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    //Validar registro de vehiculo
    ValidateService.prototype.validateRegisterVehiculo = function (carro) {
        if (carro.placa == undefined || carro.marca == undefined || carro.modelo == undefined || carro.serialMotor == undefined || carro.ano == undefined) {
            return false;
        } /*else if(carro.placa == "" || carro.modelo == "" || carro.serialMotor == ""|| carro.ano == ""){
          return false;
        }*/
        else {
            return true;
        }
    };
    //Validaciones longitud de campos al registrar vehiculos
    /*validateLongitudCamposVehiculo(carro){
       if(carro.placa.length>45 || carro.modelo.length>45 || carro.serialMotor.length>45 || carro.ano.length>11){
        return false;
      } else {
        return true;
      }
    }*/
    ValidateService.prototype.validarPlaca = function (carro) {
        if (carro.placa.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarModelo = function (carro) {
        if (carro.modelo.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarSerial = function (carro) {
        if (carro.serialMotor.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarYear = function (carro) {
        if (carro.ano.length > 11) {
            return false;
        }
        else if (carro.ano < 1920 || carro.ano > 2018) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    //Validar ordenes
    ValidateService.prototype.validateOrden = function (orden) {
        if (orden.idVehiculo == undefined || orden.idMecanico == undefined || orden.motivo == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarFechaOrden = function (fechaIngresada, fechaActual) {
        var yearIng = fechaIngresada.year;
        var monthIng = fechaIngresada.month;
        var dayIng = fechaIngresada.day;
        var yearActual = fechaActual.getFullYear();
        var monthActual = (fechaActual.getMonth() + 1);
        var dayActual = fechaActual.getDate();
        if (yearIng < yearActual) {
            //alert ("La fecha introducida es anterior a Hoy");
            return false;
        }
        else {
            if (yearIng == yearActual && monthIng < monthActual) {
                return false;
            }
            else {
                if (yearIng == yearActual && monthIng == monthActual && dayIng < dayActual) {
                    return false;
                }
                else {
                    /*if (yearIng == yearActual && monthIng == monthActual && dayIng == dayActual){
                         alert ("Has introducido la fecha de Hoy");
                    }
                    else{
                        alert ("La fecha introducida es posterior a Hoy");
                    }*/
                    return true;
                }
            }
        }
    };
    //Validar longitud campos al ingresar ordenes
    ValidateService.prototype.validarMotivo = function (orden) {
        if (orden.motivo.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarDiagnostico = function (diagnostico) {
        if (diagnostico.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarProcedimiento = function (procedimiento) {
        if (procedimiento.length > 255) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarDesperfecto = function (desperfecto) {
        if (desperfecto.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarFechas = function (fechaInicio, fechaFinal) {
        var yearI = fechaInicio.year;
        var monthI = fechaInicio.month;
        var dayI = fechaInicio.day;
        var yearFin = fechaFinal.year;
        var monthFin = fechaFinal.month;
        var dayFin = fechaFinal.day;
        if (yearFin < yearI) {
            return false;
        }
        else {
            if (yearFin == yearI && monthFin < monthI) {
                return false;
            }
            else {
                if (yearFin == yearI && monthFin == monthI && dayFin < dayI) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    };
    ValidateService.prototype.validarPieza = function (pieza) {
        if (pieza.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validarModeloRep = function (modelo) {
        if (modelo.length > 45) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map