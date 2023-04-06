import { Component, OnInit } from '@angular/core';
import {methodserviceService} from "../../service/methodservice.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {data} from "../../modules/data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public names: String[] | undefined;
  public massiv: String[][] | undefined;
  public st: String | undefined;
  form!: FormGroup;

  // weight?: string;
  // price?: string;
  // maxW?: number;
  // name?: string;

  constructor(
    private methodservice: methodserviceService, private formBuilder: FormBuilder,){

  }

  ngOnInit() {
    // this.getname();
    // this.getmassiv();
  }

  public getname(): void {
    this.methodservice.getname().subscribe(
      (response: String[]) => {
        this.names = response;
        this.st = this.names[0]
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }


  public getmassiv(): void {
    this.methodservice.getmassiv().subscribe(
      (response: String[][]) => {
        this.massiv = response;
        console.log(this.massiv)
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }


  datas?: data
  public onSubmit(myForm: NgForm): void {

    this.methodservice.senddata(myForm.value).subscribe(
      (response: data) => {
        console.log(response+"22");
        this.datas = response
        // this.getname();
        // myForm.reset();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        // myForm.reset();
      }
    );
  }






}
