import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  project: string;
  pledge: number;


  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
    }

    getProjects(){
      return this.projects;
    }

    // getPledged(){
    //   return this.angularFire.database.object('pledged')
    // }

    getProjectByKey(projectKey: string) {
      return this.angularFire.database.object('projects/' + projectKey)

    }

    // getProjectPledge(projectKey: string) {
    //   this.project = this.angularFire.database.object()
    // }

    // getProjectPledge()

    addDonation(thisProject, donation) {
      // var donateEntry = this.getProjectByKey(thisProject.$key);
      // var pledge = this.angularFire.database.object('pledged');
      // var newPledge = pledge + donation;
      // console.log(donateEntry);



      thisProject.update({pledged: donation});
    }
  }
