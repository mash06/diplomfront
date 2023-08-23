import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {BootstrapModalModule} from "ng2-bootstrap-modal";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {methodserviceService} from "./service/methodservice.service";
import { ZhadComponent } from './components/zhad/zhad.component';
import { MethVetvComponent } from './components/meth-vetv/meth-vetv.component';
import { GenalgComponent } from './components/genalg/genalg.component';
import { TheoryComponent } from './components/theory/theory.component';
import { DynamictheoryComponent } from './components/dynamictheory/dynamictheory.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { MethodsComponent } from './components/methods/methods.component';
import { ZhadtheoryComponent } from './components/zhadtheory/zhadtheory.component';
import { MethvetvtheoryComponent } from './components/methvetvtheory/methvetvtheory.component';
import { GenalgtheoryComponent } from './components/genalgtheory/genalgtheory.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

const routes = [
  { path: 'dynamic', component: HomeComponent},
  { path: 'zhad', component: ZhadComponent},
  { path: 'methvetv', component: MethVetvComponent},
  { path: 'genalg', component: GenalgComponent},
  { path: '', component: TheoryComponent},
  { path: 'dynamictheory', component: DynamictheoryComponent },
  { path: 'db-solution', component: FavouriteComponent},
  { path: 'methods', component: MethodsComponent},
  { path: 'zhadtheory', component: ZhadtheoryComponent},
  { path: 'methvetvtheory', component: MethvetvtheoryComponent},
  { path: 'genalgtheory', component: GenalgtheoryComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZhadComponent,
    MethVetvComponent,
    GenalgComponent,
    TheoryComponent,
    DynamictheoryComponent,
    FavouriteComponent,
    MethodsComponent,
    ZhadtheoryComponent,
    MethvetvtheoryComponent,
    GenalgtheoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    ReactiveFormsModule, MatSelectModule, MatInputModule, MatDialogModule, MatButtonModule
  ],
  providers: [methodserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
