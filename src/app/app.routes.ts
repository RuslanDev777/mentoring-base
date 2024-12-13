import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './guards/admin-guard';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'todos',
    component: TodosListComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
];
