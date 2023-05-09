import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Intervention, InterventionService } from '../intervention';
import { techniciennes } from '../techniciennes';
import { PointLumineux, ProductService } from '../products';

@Component({
  selector: 'app-intervention-form',
  templateUrl: './intervention-form.component.html',
  styleUrls: ['./intervention-form.component.css']
})
export class InterventionFormComponent implements OnInit {

  interventionForm!: FormGroup;
  // techniciennes = techniciennes;
  // pointLumineuxList = PointLumineux;

  constructor(
    private fb: FormBuilder,
    private interventionService: InterventionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.interventionForm = this.fb.group({
      type: ['', Validators.required],
      intitule_Intervention: ['', Validators.required],
      dure_Intervention: [null, [Validators.required, Validators.min(1)]],
      etat_intervention: [0, [Validators.required, Validators.min(0), Validators.max(1)]],
      date_intervention: ['', Validators.required],
      techniciennes: ['', Validators.required],
      pointLumineuxList: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.interventionForm.valid) {
      const formData = this.interventionForm.value;
      //this.interventionService.AddIntervention(formData).subscribe(() => {
        this.router.navigate(['/interventions']);
     // });
    }
  }
}
