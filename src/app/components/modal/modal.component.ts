import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public filterLocation =''
  public isCheck =false 
  constructor(private filterService:FilterService,private modalService: ModalService) {}
  ngOnInit(): void {
    this.filterService.getFilterLocation().subscribe(data=> {
      this.filterLocation=data
    })
    this.filterService.getIsCheck().subscribe(data=> {
      this.isCheck=data
    })
  }
  closeModal() {
    this.modalService.isOpenModal.next(false);
  }

  stopProp(event: Event) {
    event.stopPropagation();
  }

  onInputChangeFilterLocation() {
    this.filterService.filterLocation.next(this.filterLocation)
  }

  onChangeIsCheck() {
    this.isCheck=!this.isCheck
    this.filterService.isCheck.next(this.isCheck)
  }
}
