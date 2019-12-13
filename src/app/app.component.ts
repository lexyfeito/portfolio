import {Component} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
}                  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      first: [null, Validators.required],
      last: [null, Validators.required],
      email: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  contactMe() {
    if (this.contactForm.invalid) {
      return;
    }
    alert('Thank you for your message. I will get back to you as soon as possible');
    this.contactForm.reset();
  }
}
