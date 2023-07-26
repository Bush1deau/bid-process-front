import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,

    ) {
        // redirect to home if already logged in

    }

    ngOnInit() {
    }

    // convenience getter for easy access to form fields

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit

        // stop here if form is invalid

    }
}
