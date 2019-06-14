import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  fGroup: FormGroup;
  post: any;
  desc: string;
  name: string;
  titleAlert: string = 'This field is required';

  constructor(private fb: FormBuilder) {
    this.fGroup = fb.group({
      name: [null, Validators.required],
      desc: [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      validate: '',
    });
  }

  addPost(post) {
    this.desc = post.desc;
    this.name = post.name;
  }

  ngOnInit() {
    this.fGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == 1) {
          this.fGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "specify 3 chars";
        } else {
          this.fGroup.get('name').setValidators(Validators.required);
        }
        this.fGroup.get('name').updateValueAndValidity();
      }
    )
  }

  log(x) {
    console.log(x);
  }

}
