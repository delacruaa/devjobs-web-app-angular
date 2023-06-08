
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animation } from 'src/animation';
import { IJobs } from 'src/app/models/IJobs';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss'],
  animations:[animation]
})
export class JobInfoComponent  implements OnInit{
  public loading: boolean = false;
  public job: IJobs = {} as IJobs;
  public errorMessage: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private jobsService:JobsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      this.getJobItem(id!);
     
    });

   
  }


  getJobItem(id:string) {
    this.loading = true;
    this.jobsService.getAllCountry().subscribe((data)=> {
      data.forEach(item=> {
        if(item.id==id) {
          this.job=item
        }
      
      })
      this.loading = false;
    },
    (error) => {
      this.errorMessage = error;
      this.loading = false;
    })
  }

  redirectToExternalSite(site:string) {
    window.location.href = site;
  }
}
