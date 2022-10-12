import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signUpform: NgForm;
  defaultQuestion: string = "pet";
  answer: string = "";
  genders: string[] = ["male", "female"];
  submitted: boolean = false;
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signUpform.setValue({
    //   userData: {
    //     username: suggestedName, //name attribute
    //     email: "",
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male",
    // });
    this.signUpform.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signUpform.value.userData.username;
    this.user.email = this.signUpform.value.userData.email;
    this.user.secretQuestion = this.signUpform.value.userData.secret;
    this.user.answer = this.signUpform.value.questionAnswer;
    this.user.gender = this.signUpform.value.gender;
    this.signUpform.reset();
  }
}
