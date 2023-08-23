import {Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import {methodserviceService} from "../../service/methodservice.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {data} from "../../modules/data";
import * as XLSX from 'xlsx';
import {dynamic} from "../../modules/dynamic";
import {dipdb} from "../../modules/dipdb";

interface Links {
  value: string;
  viewValue: string;
  buttonvalue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public names: String[] | undefined;
  public massiv: String[][] | undefined;
  public st: String | undefined;

  closeResult?:String;
  constructor(
    private methodservice: methodserviceService){
    this.d = {weight:"",price:"",maxWeight: "",names:""}
    this.heror = {id: 0,weight:"",price:"",maxw: "",names:"",resw:"",resp:"",resnab:"",method:""}
    this.resP = ""
    this.resW = ""
    this.objects = ""

  }

  text!: String
  ngOnInit() {
    this.cl = false
    this.text = "Добавить решение в избранное"
  }

  selected?: string;
  links: Links[] = [{value:"/dynamic", viewValue:"Метод динамического программирования", buttonvalue:"методом динамического программирования"},{value:"/zhad", viewValue:"Жадный алгоритм", buttonvalue:"жадным алгоритмом"},{value:"/methvetv", viewValue:"Метод ветвей и границ", buttonvalue:"методом ветвей и границ"},{value:"/genalg", viewValue:"Генетический алгоритм", buttonvalue:"генетическим алгоритмом"} ];


  datas?: String[]
  cl?: boolean
  resh?: String[][]
  table?: String[][]
  obr?: String[]
  image?: any
  image2?: any
  public onSubmit(myForm: NgForm): void {
    this.datas = []
    this.resh = []
    this.table = []
    this.obr = []
    this.ngOnInit()
    this.cl = true;

    this.methodservice.sendDataDyn(myForm.value).subscribe(
      (response: dynamic) => {
        console.log(response);
        this.datas = response.nabor
        this.objects = this.datas[0]
        this.resP = this.datas[1]
        this.resW = this.datas[2]
        this.resh = response.resh
        this.table = response.table
        this.obr = response.obr
        this.image = response.img
        this.image2 = response.img2

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );




  }

  data?: [][];
  d:data
  objects:String
  resP: String
  resW: String

  onFileChange(evt: any, myForm: NgForm) {
    const target : DataTransfer =  <DataTransfer>(evt.target);

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname : string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));


      this.cl = true;
      let x = this.data.slice(1);

      var i: number;

      for (i = 0; i <x.length;i++){
        this.d.weight += String( x[i].slice(0,1)+" ")
        this.d.price += String( x[i].slice(1,2)+" ")
        this.d.maxWeight += String( x[i].slice(2,3))
        this.d.names += String( x[i].slice(3,4)+" ")

      }
      console.log(this.d.weight)

      this.methodservice.sendDataDyn(this.d).subscribe(
        (response: dynamic) => {
          console.log(response);
          this.datas = response.nabor
          this.objects = this.datas[0]
          this.resP = this.datas[1]
          this.resW = this.datas[2]
          this.resh = response.resh
          this.table = response.table
          this.obr = response.obr
          this.image = response.img;
          this.image2 = response.img2;

          myForm.setValue({weight: this.d.weight, price: this.d.price, maxWeight: this.d.maxWeight, names: this.d.names})


        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );



    };


    reader.readAsBinaryString(target.files[0]);

  }

  public list?: dipdb[];
  heror:dipdb;
  public addHero(weight: string, price: string, maxw: string, names: string, resw: String, resp: String, resnab: String): void{
    this.heror.weight = weight
    this.heror.price = price
    this.heror.maxw = maxw
    this.heror.names = names
    this.heror.resw = resw
    this.heror.resp = resp
    this.heror.resnab = resnab
    this.heror.method = "Метод динамического программироования"
    this.methodservice.addSol(this.heror).subscribe(
      (response: dipdb) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
   this.text = "Добавлено в избранное"
  }



}
