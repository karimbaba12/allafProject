import { Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { CurtainWallWindowComponent } from './windows/curtain-wall-window/curtain-wall-window.component';
import { MotorizedLiftUpWindowComponent } from './windows/motorized-lift-up-window/motorized-lift-up-window.component';
import { ParallelWindowComponent } from './windows/parallel-window/parallel-window.component';
import { SlidingWindowComponent } from './windows/sliding-window/sliding-window.component';
import { CasementWindowComponent } from './windows/casement-window/casement-window.component';
import { BiFoldingDoorComponent } from './doors/bi-folding-door/bi-folding-door.component';
import { CasementDoorComponent } from './doors/casement-door/casement-door.component';
import { ConcealTrackSlimlineSlidingDoorComponent } from './doors/conceal-track-slimline-sliding-door/conceal-track-slimline-sliding-door.component';
import { SlimlineLiftSlideDoorComponent } from './doors/slimline-lift-slide-door/slimline-lift-slide-door.component';
import { SlimlineSlidingDoorComponent } from './doors/slimline-sliding-door/slimline-sliding-door.component';
import { BliindsBetweenGlassComponent } from './uniques/bliinds-between-glass/bliinds-between-glass.component';
import { MotorizedSystemComponent } from './uniques/motorized-system/motorized-system.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'casement-window', component: CasementWindowComponent },
  { path: 'curtain-wall-window', component: CurtainWallWindowComponent },
  {
    path: 'motorized-lift-up-window',
    component: MotorizedLiftUpWindowComponent,
  },
  { path: 'parallel-window', component: ParallelWindowComponent },
  { path: 'sliding-window', component: SlidingWindowComponent },
  { path: 'bi-folding-door', component: BiFoldingDoorComponent },
  { path: 'casement-door', component: CasementDoorComponent },
  {
    path: 'conceal-track-slimline-sliding-door',
    component: ConcealTrackSlimlineSlidingDoorComponent,
  },
  {
    path: 'slimline-lift-slide-door',
    component: SlimlineLiftSlideDoorComponent,
  },
  { path: 'slimline-sliding-door', component: SlimlineSlidingDoorComponent },
  { path: 'blinds-between-glass', component: BliindsBetweenGlassComponent },
  { path: 'motorized-system', component: MotorizedSystemComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'test', component: TestComponent },
=======
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
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { VideosComponent } from '../components/videos/videos.component';
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
        component: CasementWindowComponent
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
   
>>>>>>> 667df993ee86f11a32f22ec391b8ad440c13b248
];
