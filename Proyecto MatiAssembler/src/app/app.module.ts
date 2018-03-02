import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';


import { AppComponent } from './app.component';
import { ProfileClienteComponent } from './Components/profile-cliente/profile-cliente.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileAdministradorComponent } from './Components/profile-administrador/profile-administrador.component';
import { AgregarRepuestoComponent } from './Components/agregar-repuesto/agregar-repuesto.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { VehiculoComponent } from './Components/vehiculo/vehiculo.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { ProfileGerenteComponent } from './Components/profile-gerente/profile-gerente.component';
import { ProfileMecanicoComponent } from './Components/profile-mecanico/profile-mecanico.component';


  const appRoutes: Routes = [ 
      { path: '', component:HomepageComponent},
      { path: 'profile-cliente', component:ProfileClienteComponent, canActivate:[AuthGuard]},
      { path: 'register', component:RegisterComponent},
      { path: 'login', component:LoginComponent},
      { path: 'profile-administrador', component:ProfileAdministradorComponent, canActivate:[AuthGuard]},
      { path: 'agregar-repuesto', component:AgregarRepuestoComponent},
      
    ]
@NgModule({
  declarations: [
    AppComponent,
    ProfileClienteComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProfileAdministradorComponent,
    AgregarRepuestoComponent,
    HomepageComponent,
    VehiculoComponent,
    ModificarUsuarioComponent,
    ProfileGerenteComponent,
    ProfileMecanicoComponent,

    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent], 
  
  
  
 
})

export class AppModule { }
