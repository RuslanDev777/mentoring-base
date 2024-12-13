import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UpperCasePipe } from '@angular/common';
import { CustomUpperCasePipe } from 'src/app/pipes/upper-case.pipe';
import { ClearNumberPipe } from 'src/app/pipes/clear-number.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    CustomUpperCasePipe,
    ClearNumberPipe,
    MatTooltipModule,
  ],
})
export class UserCardComponent {
  readonly dialog = inject(MatDialog);
  @Input()
  user: any;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }

  openDeleteConfirmationDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onDeleteUser(id);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.editUser.emit(editResult);
      }
      console.log('Модалка закрылась', editResult);
    });
  }
}
