import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { QueriesComponent } from './queries/queries.component';
import { StudentsComponent } from './students/students.component';
import { TrainersComponent } from './trainers/trainers.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'queries', component: QueriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}