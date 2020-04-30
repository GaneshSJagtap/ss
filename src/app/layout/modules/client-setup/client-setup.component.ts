import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-client-setup",
  templateUrl: "./client-setup.component.html",
  styleUrls: ["./client-setup.component.scss"]
})
export class ClientSetupComponent implements OnInit {
  title = "Client Setup";
  public logo;
  largLogo: string = "../../../assets/images/logo1.jpg";
  shortLogo: string = "../../../assets/images/small-logo-1.jpg";
  banner: string = "../../../assets/images/banner.jpg";

  // public form: {
  //   clientCode: string,
  //   clientName: string,
  //   clientEmail: string,
  //   clientPhone: string,
  //   clientFax: string,
  //   clientAddress: string,
  //   clientLogo: File | null,
  // }
  constructor() {
    // this.form = {
    //   clientCode: '',
    //   clientName: '',
    //   clientEmail: '',
    //   clientPhone: '',
    //   clientFax: '',
    //   clientAddress: '',
    //   clientLogo: null,
    // }
  }
  ngOnInit() {}
  uploadLogo(e) {
    this.logo = e.dataTransfer.files;
    console.log(this.logo);
  }
  // console.log(this.logo)
  activateDefaultTheme() {
    const body = document.getElementsByTagName("body")[0];
    body.removeAttribute("class");
  }
  activateTheme1() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("theme1");
    body.classList.remove("theme2");
  }
  activateTheme2() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("theme1");
    body.classList.add("theme2");
  }
}
