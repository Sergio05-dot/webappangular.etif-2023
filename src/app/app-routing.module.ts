import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from "./shared/header/header.component";
export class Approutingmodule {}
const app_routes: Routes = [
    { path: 'about', component:AboutComponent },
    { path: 'footer', component:FooterComponent },
    { path: 'header', component:HeaderComponent },
    RouterModule
    ];

    @NgModule ({
        imports: [
        RouterModule.forRoot( app_routes),
    HeaderComponent,
    FooterComponent,
    AboutComponent
        ]
        });

        export class AppRoutingModule {
        }