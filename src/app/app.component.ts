import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", { static: false }) signUpForm: NgForm;
  isValid: boolean = true;
  onSubmit() {
    !this.signUpForm.valid && this.signUpForm.touched
      ? (this.isValid = false)
      : (this.isValid = true);
    console.log(this.signUpForm.valid);
    console.log(this.signUpForm.value.userData);
  }
}
