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
  projectDisplay: Project;

  // console.log(this.projectPledged);
  // currentPledge: number  = this.projectDisplay.map('pledged');
  projectPledge: number;

  donateForm = null;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  newDonate() {
    this.donateForm = true;
  }

  submitDonation(thisProject, donation) {

    this.donateForm = null;
    this.projectService.addDonation(this.projectDisplay, donation);

  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectKey = urlParameters['id'];
    });
    // this.projectDisplay = this.projectService.getProjectByKey(this.projectKey);
    this.projectService.getProjectByKey(this.projectKey).subscribe(data => {
   this.projectDisplay = new Project (data.title, data.creator, data.description, data.backers, data.pledged, data.goal, data.days, data.img, data.id);

   })
  }


}
