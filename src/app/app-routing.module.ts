import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { ItemComponent } from "./pages/item/item.component";
import { TerminosComponent } from "./pages/terminos/terminos.component";
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

const app_routes: Routes = [
{ path: '', component: PortfolioComponent}, 
{ path: 'about', component: AboutComponent},
{ path: 'item', component: ItemComponent},
{ path:  'terminos', component: TerminosComponent},
{ path: 'project', component: ProyectosComponent },
{ path: '**', pathMatch: 'full', redirectTo: ''},

];
@NgModule ({
imports: [RouterModule.forRoot(app_routes, {useHash: true})],
exports: [RouterModule],
})

export class AppRoutingModule {
}