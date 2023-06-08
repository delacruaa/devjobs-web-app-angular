import { Component, OnInit } from '@angular/core';
import { animation } from 'src/animation';
import { FilterService } from 'src/app/services/filter.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations:[animation]
})
export class FilterComponent  {
  public filterLocation =''
  public filterTitle =''
  public isCheck =false 
  public isOpenModal=false
  constructor(private filterService:FilterService,private modalService: ModalService) {}
  
  ngOnInit(): void {
    this.modalService.getIsOpenModal().subscribe((data) => {
      this.isOpenModal = data;
    });
  }

  openModal() {
    this.modalService.isOpenModal.next(true);
  }
  onInputChangeFilterLocation() {
    this.filterService.filterLocation.next(this.filterLocation)
  }

  onInputChangeFilterTitle() {
    this.filterService.filterTitle.next(this.filterTitle)
  }

  onChangeIsCheck() {
    this.isCheck=!this.isCheck
    this.filterService.isCheck.next(this.isCheck)
  }
}
