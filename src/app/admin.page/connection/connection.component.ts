import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {


  admins: Admin[] = [];

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.http.get<Admin[]>('https://localhost:7143/Admin').subscribe((data) => {this.admins = data;});
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    let adminValid = false;

    for (let i = 0; i < this.admins.length; i++) {
      const admin = this.admins[i];
      if (admin.email === email && admin.password === password) {
        adminValid = true;
        break;
      }
    }
    if (adminValid) {
      this.router.navigate(['/crud']);
    } else {
      console.log('Identifiants de connexion invalides');
      form.reset();
    }
  }

}
