import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {ProjectService} from '../project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProjectService]
})

export class HomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;



  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(currentProject) {
    this.router.navigate(['projects', currentProject.$key])

  }

}
