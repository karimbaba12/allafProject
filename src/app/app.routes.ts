import { Routes } from '@angular/router';
import { HomePageLayoutComponent } from '../components/home-page-layout/home-page-layout.component';
import { BiFoldingDoorsComponent } from '../components/Doors/bi-folding-doors/bi-folding-doors.component';
import { CasementDoorsComponent } from '../components/Doors/casement-doors/casement-doors.component';
import { ConcealTrackDoorsComponent } from '../components/Doors/conceal-track-doors/conceal-track-doors.component';
import { LiftSlideDoorsComponent } from '../components/Doors/lift-slide-doors/lift-slide-doors.component';
import { SlimlineSlidingDoorsComponent } from '../components/Doors/slimline-sliding-doors/slimline-sliding-doors.component';
import { BlindsBetweenGlassComponent } from '../components/Unique/blinds-between-glass/blinds-between-glass.component';
import { MotorizedSystemComponent } from '../components/Unique/motorized-system/motorized-system.component';
import { SlimlineSystemComponent } from '../components/Unique/slimline-system/slimline-system.component';
import { SunroomComponent } from '../components/Unique/sunroom/sunroom.component';
import { CasementWindowComponent } from '../components/Windows/casement-window/casement-window.component';
import { CurtainWallWindowComponent } from '../components/Windows/curtain-wall-window/curtain-wall-window.component';
import { MotorizedWindowComponent } from '../components/Windows/motorized-window/motorized-window.component';
import { ParallelWindowComponent } from '../components/Windows/parallel-window/parallel-window.component';
import { SlidingWindowComponent } from '../components/Windows/sliding-window/sliding-window.component';import { CasementWindow2Component } from '../components/Windows/casement-window2/casement-window2.component';
export const routes: Routes = [
     {
        path: '',
        redirectTo :'/Dashboard',
        pathMatch: 'full'
    },
    {
        path :'Dashboard',
        component : HomePageLayoutComponent
    },

    {
        path : "Casement-Window",
        component: CasementWindowComponent
    },
    
    {
        path : "BiFolding-Door",
        component:BiFoldingDoorsComponent
    },
    {
        path : "Casement-Door",
        component : CasementDoorsComponent
    }
    ,
    {
        path : "Conceal-track-Doors",
        component : ConcealTrackDoorsComponent
    },
     {
        path : "Lift-Slide-Doors",
        component : LiftSlideDoorsComponent
    },
     {
        path : "Slimline-Sliding-Doors",
        component : SlimlineSlidingDoorsComponent
    },

     {
        path : "Blinds-Between-Glass",
        component : BlindsBetweenGlassComponent
    },
     {
        path : "Motorized-System",
        component : MotorizedSystemComponent
    },
     {
        path : "Pergola",
        component : ConcealTrackDoorsComponent
    },
     {
        path : "Slimline-System",
        component : SlimlineSystemComponent
    },
     {
        path : "Sunroom",
        component : SunroomComponent
    },
     {
        path : "Casement-Window",
         loadComponent: () => 
            import('../components/Windows/casement-window/casement-window.component')
                .then(m => m.CasementWindowComponent)
    },
     {
        path : "Curtain-Wall-Window",
        component : CurtainWallWindowComponent
    },
     {
        path : "Motorized-Window",
        component : MotorizedWindowComponent
    },
     {
        path : "Parallel-Window",
        component : ParallelWindowComponent
    },
     {
        path : "Sliding-Window",
        component : SlidingWindowComponent
    }
   
];
