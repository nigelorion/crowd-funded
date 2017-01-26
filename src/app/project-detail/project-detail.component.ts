import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from  '../project.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectKey: string;
  projectDisplay: FirebaseObjectObservable<any>;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectKey = urlParameters['id'];
    });
    this.projectDisplay = this.projectService.getProjectByKey(this.projectKey);

  }

}
