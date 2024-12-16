import { AsyncPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';

import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShadowDirective } from '../directives/shadow.directive';
import { MatIconModule } from '@angular/material/icon';
import { EditedUser, User, UserForm } from '../interfaces/user.interface';
import { Store } from '@ngrx/store';
import { UsersActions } from './store/users.actions';
import { selectUsers } from './store/users.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    MatSnackBarModule,
    UserCardComponent,
    AsyncPipe,
    MatButtonModule,
    MatCardModule,
    ShadowDirective,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);
  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);
  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers);

  @Input()
  user: User[] = [];

  constructor() {
    this.usersApiService.getUsers().subscribe((responce: User[]) => {
      this.store.dispatch(UsersActions.set({ users: responce }));
    });
  }

  public createUser(formData: UserForm) {
    this.store.dispatch(
      UsersActions.create({
        user: {
          id: new Date().getTime(),
          name: formData.name,
          email: formData.email,
          website: formData.website,
          company: {
            name: formData.company.name,
          },
          phone: formData.phone,
        },
      })
    );

    this.showSnackbar('Пользователь успешно добавлен');
  }

  deleteUser(id: number) {
    // this.usersService.deleteUser(id);
    this.store.dispatch(UsersActions.delete({ id }));
    this.showSnackbar('Пользователь успешно удален');
  }

  editUser(user: EditedUser) {
    this.store.dispatch(UsersActions.edit({ user }));
    this.showSnackbar('Пользователь отредактирован');
  }

  openCreateDialog(): void {
    const dialogCreateRef = this.dialog.open(CreateUserDialogComponent, {
      data: { user: this.user },
    });

    dialogCreateRef.afterClosed().subscribe((createdResult) => {
      if (createdResult) {
        this.createUser(createdResult);
      }
    });
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Закрыть', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar'],
    });
  }
}
