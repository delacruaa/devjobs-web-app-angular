import { Component, OnInit } from '@angular/core';
import { animation } from 'src/animation';
import { IJobs } from 'src/app/models/IJobs';
import { FilterService } from 'src/app/services/filter.service';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
  animations:[animation]
})
export class JobsListComponent implements OnInit {
  public  jobs:IJobs[]=[]
  public filtered:IJobs[]=[]
  public filterLocation =''
  public filterTitle =''
  public isCheck =false 
  public loading: boolean = false;
  public errorMessage: string = '';
  constructor(private jobsService:JobsService, private filterService:FilterService){

  }
  ngOnInit(): void {
    this.loading = true;
    this.jobsService.getAllCountry().subscribe((data)=> {
      this.jobs=data;
      this.filtered=data;
      this.loading = false;
      this.filterService.getFilterLocation().subscribe(data=>{
        this.filterLocation=data
        this.filtered=this.jobs.filter(item=> {
            if(data=='') {
              
              return item
            }else {
              return item.location.toLowerCase().includes(this.filterLocation.toLowerCase())
            }
          })
        })
      this.filterService.getFilterTitle().subscribe(data=>{
        this.filterTitle=data
        this.filtered=this.jobs.filter(item=> {
          if(data=='') {
            return item
          }else {
            return item.position.toLowerCase().includes(this.filterTitle.toLowerCase())
          }
        })
      })
      this.filterService.getIsCheck().subscribe(data=>{
        this.isCheck=data
        this.filtered=this.jobs.filter(item=> {
          if(data==false) {
            return item
          }else {
            return item.contract.toLowerCase().includes('full time')
          }
        })
      })
    },
    (error)=> {
      this.errorMessage = error;
      this.loading = false;
    })
    

   
  }

  
}
