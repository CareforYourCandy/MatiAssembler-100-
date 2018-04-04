import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { QrService } from './services/qr.service';
import { tokenNotExpired } from 'angular2-jwt';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { ProfileClienteComponent } from './Components/profile-cliente/profile-cliente.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileAdministradorComponent } from './Components/profile-administrador/profile-administrador.component';
import { AgregarRepuestoComponent } from './Components/agregar-repuesto/agregar-repuesto.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ModificarUsuarioComponent } from './Components/modificar-usuario/modificar-usuario.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { ProfileGerenteComponent } from './Components/profile-gerente/profile-gerente.component';
import { ProfileMecanicoComponent } from './Components/profile-mecanico/profile-mecanico.component';
import { DetalleVehiculoComponent } from './Components/detalle-vehiculo/detalle-vehiculo.component';
import { DetalleOrdenComponent } from './Components/detalle-orden/detalle-orden.component';


// Pipes
import { DatePipe } from '@angular/common';
import { ReporteVehiculoComponent } from './Components/reporte-vehiculo/reporte-vehiculo.component';
import { ReporteMecanicoComponent } from './Components/reporte-mecanico/reporte-mecanico.component';
import { ReporteClienteComponent } from './Components/reporte-cliente/reporte-cliente.component';
import { EmitirOrdenComponent } from './Components/emitir-orden/emitir-orden.component';
import { ModificarRepuestoComponent } from './Components/modificar-repuesto/modificar-repuesto.component';
import { AgregarUsuarioComponent } from './Components/agregar-usuario/agregar-usuario.component';
import { ReporteModeloComponent } from './Components/reporte-modelo/reporte-modelo.component';
import { UploadFileService } from './services/upload-file.service';
import { LeerQrComponent } from './Components/leer-qr/leer-qr.component';
import { NgQrScannerModule } from 'angular2-qrscanner';


  const appRoutes: Routes = [ 
      { path: '', component:HomepageComponent},
      { path: 'profile-cliente', component:ProfileClienteComponent, canActivate:[AuthGuard]},
      { path: 'profile-gerente', component:ProfileGerenteComponent, canActivate:[AuthGuard]},
      { path: 'profile-mecanico', component:ProfileMecanicoComponent, canActivate:[AuthGuard]},
      { path: 'register', component:RegisterComponent},
      { path: 'login', component:LoginComponent},
      { path: 'profile-administrador', component:ProfileAdministradorComponent, canActivate:[AuthGuard]},
      { path: 'agregar-repuesto', component:AgregarRepuestoComponent},
      { path: 'profile-gerente', component: ProfileGerenteComponent, canActivate:[AuthGuard]}, 
      { path: 'detalle-vehiculo', component: DetalleVehiculoComponent, canActivate:[AuthGuard]},
      { path: 'detalle-orden', component: DetalleOrdenComponent, canActivate:[AuthGuard]},
      { path: 'modificar-usuario', component: ModificarUsuarioComponent, canActivate:[AuthGuard]},
      { path: 'emitir-orden', component: EmitirOrdenComponent, canActivate:[AuthGuard]},
      { path: 'modificar-repuesto', component:ModificarRepuestoComponent}

    ]
@NgModule({
  declarations: [
    AppComponent,
    ProfileClienteComponent,
    RegisterComponent,
    LoginComponent,
    ProfileAdministradorComponent,
    AgregarRepuestoComponent,
    HomepageComponent,
    ModificarUsuarioComponent,
    ProfileGerenteComponent,
    ProfileMecanicoComponent,
    DetalleVehiculoComponent,
    DetalleOrdenComponent,
    ReporteVehiculoComponent,
    ReporteMecanicoComponent,
    ReporteClienteComponent,
    EmitirOrdenComponent,
    ModificarRepuestoComponent,
    AgregarUsuarioComponent,
    ReporteModeloComponent,
    LeerQrComponent,
 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    MyDatePickerModule,
    NgQrScannerModule 
  ],
  
  providers: [ValidateService, AuthService, AuthGuard, DatePipe, UploadFileService, QrService ],
  bootstrap: [AppComponent], 
  
  
  
 
})

export class AppModule {

 
 }
