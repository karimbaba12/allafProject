import { Routes } from '@angular/router';
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
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '*', redirectTo: '', pathMatch: 'full' },
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
  { path: 'projects', component: ProjectComponent },
];
