import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SpeechService } from 'src/app/service/speech.service';
import { NotificationToasterService } from 'src/app/service/notification-toaster.service';

@Component({
  selector: 'app-speech-form',
  templateUrl: './speech-form.component.html',
  styleUrls: ['./speech-form.component.scss']
})
export class SpeechFormComponent implements OnInit, OnChanges {
  @Input() action: string;
  @Input() selectedSpeech: any;
  @Output() updateData: EventEmitter<any> = new EventEmitter<any>();


  public speechForm: any;
  public IsEditing: boolean;
  public email: string;
  public emailSendList = [];
  public emailForm: any;
  public modalConfirmationDetail = {
    titleHeader: '',
    bodayMessage: '',
    action: '',
  };

  constructor(private speechService: SpeechService, private notificationToasterService: NotificationToasterService) {
    this.speechForm = new FormGroup({
      title: new FormControl('', Validators.required),
      speech: new FormControl('', [Validators.required, Validators.minLength(15)]),
      author: new FormControl('', Validators.required),
      keyword: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });
    this.emailForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    });
   }

  ngOnChanges(changes: SimpleChanges): void {
    if ('action' in changes) {
      if (changes.action.currentValue) {
        this.setActionButtons(this.action);
      }
    }
    if ('selectedSpeech' in changes) {
      if (changes.selectedSpeech.currentValue) {
        this.setValueSelectedSpeech(this.selectedSpeech);
      }
    }
  }

  ngOnInit() {
  }

  public addEmailToSend(): void {
    if (!this.emailSendList.includes(this.emailForm.value.email)) {
      this.emailSendList.push(this.emailForm.value.email);
      this.emailForm.reset();
    }
  }

  public reloadData(data: any): void {
    this.updateData.emit(data);
  }

  public removeFormEmailSendList(index): void {
    const arr = this.emailSendList;
    for ( let i = 0; i < arr.length; i++) {
      if ( i === index) {
          arr.splice(i, 1);
          this.emailSendList = arr;
          break;
        }
      }
  }

  public deleteSpeech(): void {
    this.speechService.speechList = this.speechService.speechList.filter(speech => speech.id !== this.selectedSpeech.id);
    this.reloadData(this.speechService.speechList);
    this.notificationToasterService.alert('success', 'Done! Successfully Deleted.');
  }

  public updateSpeech(): void {
    this.speechService.speechList.find(speech => {
      if ( speech.id === this.selectedSpeech.id) {
        const keys = Object.keys(speech);
        for (const key of keys) {
          if (key !== 'addedBy' && key !== 'id') {
            speech[key] = this.speechForm.value[key];
          }
        }
      }
    });
    this.notificationToasterService.alert('success', 'Done! Successfully Updated Speech.');
  }

  public checkSpeechFormField(fieldName: string): boolean {
    return this.speechForm.get(fieldName).touched && this.speechForm.get(fieldName).hasError('required');
  }

  public checkFieldLength(fieldName: string) {
    return this.speechForm.get(fieldName).touched && this.speechForm.get(fieldName).hasError('minlength');
  }

  public checkEmailFormField(fieldName: string): boolean {
    return this.emailFieldTouched(fieldName) && this.emailForm.get(fieldName).hasError('required');
  }

  public isEmailAlreadyAdded(): boolean {
    return this.emailFieldTouched('email') && this.emailSendList.includes(this.emailForm.value.email);
  }

  public emailFieldTouched(fieldName: string): boolean {
    return this.emailForm.get(fieldName).touched;
  }

  public checkAddedby(): boolean {
    if (this.selectedSpeech) {
      return this.selectedSpeech.addedBy === 'Other';
    }
  }

  // public checkValidEmail(fieldName: string): boolean {
  //   return this.emailForm.get(fieldName).hasError('email');
  // }

  public shareSpeech(): void {
   this.notificationToasterService.alert('success', 'Done! Email Sent');
   this.clearEmailForm();
  }

  public clearEmailForm(): void {
    this.emailSendList = [];
    this.emailForm.reset();
  }

  public confirmationAction(action: string): void {
    switch (action) {
      case 'add': {
        this.modalConfirmationDetail = {
          titleHeader: 'Add Confirmation',
          bodayMessage: 'Add this Speech?',
          action: 'add',
        };
        break;
      }
      case 'update': {
        this.modalConfirmationDetail = {
          titleHeader: 'Update Confirmation',
          bodayMessage: 'Update this Speech?',
          action: 'update',
        };
        break;
      }
      case 'delete': {
        this.modalConfirmationDetail = {
          titleHeader: 'Delete Confirmation',
          bodayMessage: 'Are you sure you want to Delete this Speech?',
          action: 'delete',
        };
        break;
      }
      default:
          break;
    }
  }

  public setActionButtons(action: string): void {
    this.IsEditing = (action === 'showMySpeech');
  }

  public async addSpeech(): Promise<any> {
    this.speechForm.value.addedBy = 'You';
    this.speechForm.value.id = await this.generateId();
    this.speechService.speechList.push(this.speechForm.value);
    this.speechForm.reset();
    this.notificationToasterService.alert('success', 'Done! Successfully Added New Speech.');
  }

  private generateId(): any {
    const latestId = this.speechService.speechList.sort((a, b) => b.id - a.id)[0];
    const newId = latestId.id + 1;
    return newId;
  }

  public resetForm(): void {
    this.speechForm.reset();
  }

  private setValueSelectedSpeech(speech): void {
    const keys = Object.keys(speech);
    for (const key of keys) {
      if (key !== 'addedBy' && key !== 'id') {
        this.speechForm.controls[key].patchValue(speech[key]);
      }
    }
  }

}
