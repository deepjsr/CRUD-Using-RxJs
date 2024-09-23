import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin-service.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  usersSubject = new BehaviorSubject<any[]>([]);
  users: any;
  adminCount: any;
  userCount: any;
  totalCount: any;
  delIcon = faTrash;
  editIcon = faEdit;
  constructor(private _adminService: AdminService) {}
  all_user_data: any;
  ngOnInit(): void {
    this.getAllUser();
    this.userCountUpdate();
  }
  getAllUser() {
    this._adminService.getAllUser().subscribe((data) => {
      console.log(data);
      this.all_user_data = data;
      this.usersSubject.next(data);
    });
  }
  deleteUser(id: number) {
    let conf = confirm('Are You Sure Deleting This User id:' + id);
    if (conf) {
      this._adminService.deleteUser(id).subscribe(
        (data) => {
          console.log('Deleted Successful', data);
          this.getAllUser();
        },
        (error) => {
          console.error('Error deleting data');
        }
      );
    } else {
      alert('Canceled...!');
    }
  }

  userCountUpdate() {
    this.users = this.usersSubject.asObservable();
    console.log(this.users);

    this.adminCount = this.users.pipe(
      map(
        (users: any) =>
          users.filter((user: { role: string }) => user.role === 'admin').length
      )
    );
    this.userCount = this.users.pipe(
      map(
        (users: any) =>
          users.filter((user: { role: string }) => user.role === 'user').length
      )
    );
    this.totalCount = this.users.pipe(map((users: any) => users.length));
  }
}
