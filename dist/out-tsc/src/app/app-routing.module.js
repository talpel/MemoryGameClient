var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../app/main/main.component';
import { AboutComponent } from '../app/about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { GameComponent } from './game/game.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
var routes = [
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'feedback',
        component: FeedbackComponent
    },
    {
        path: 'top-rated',
        component: TopRatedComponent
    },
    {
        path: 'game',
        component: GameComponent
    },
    {
        path: 'add-feedback',
        component: AddFeedbackComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes)
            ],
            exports: [
                RouterModule
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map