import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../modules/auth/services/auth.service'
import { ProjectService } from '../../../modules/project/services/project.service'
import { User } from '../../../models/usuario.model'
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'Juan German',
    lastName: 'Zambrano',
    mail: 'jagzao@gmail.com',
    password: '',
    role: ''
  };
  projects: Project[] = []

  constructor(private userService: AuthService, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.userService.getUser('jagzao').subscribe(
      (user: User) => {
        this.user = user
      },
      (error) => {
        console.log(error)
      }
    );

    this.projectService.getProjects().subscribe(
      (projects: Project[]) => {
        this.projects = projects;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
