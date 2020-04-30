import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-user-setup",
  templateUrl: "./user-setup.component.html",
  styleUrls: ["./user-setup.component.scss"]
})
export class UserSetupComponent implements OnInit {
  title = "User Setup";
  public href: string = "";
  faSearch = faSearch;
  status = false;
  hasActionButtons: boolean = true;
  hasActions: boolean = true;

  columns: Array<any> = [
    { title: "Full Name", key: "fullNae", sortable: true, filter: true },
    { title: "User Name", key: "userName", sortable: true, filter: true },
    { title: "Email", key: "email", sortable: true, link: true, filter: true },
    { title: "Company", key: "company", sortable: true, filter: true },
    { title: "Role", key: "role", sortable: true, filter: true }
  ];
  userSetups = [
    {
      fullNae: "Susan White",
      userName: "susan.white",
      email: "susan.white@exelaonrine.com",
      company: "Walmart",
      role: "Standard User"
    },
    {
      fullNae: "John Doe",
      userName: "john.doe",
      email: "john.doe@exelaonrine.com",
      company: "AT&T",
      role: "Standard User"
    },
    {
      fullNae: "Peter Wigiurn",
      userName: "peter.wigiurn",
      email: "peter.wigiurn@exelaonrine.com",
      company: "Microsoft",
      role: "Standard User"
    },
    {
      fullNae: "Alex Gaol",
      userName: "alex.gaol",
      email: "alex.gaol@exelaonrine.com",
      company: "General Motars",
      role: "Standard User"
    },
    {
      fullNae: "John Morris",
      userName: "john.morris",
      email: "john.morris@exelaonrine.com",
      company: "Chevron",
      role: "Standard User"
    },
    {
      fullNae: "Brian Paul",
      userName: "Brian.Paul",
      email: "brian.paul@exelaonrine.com",
      company: "Deg Technologies",
      role: "Standard User"
    },
    {
      fullNae: "Stanley Foster",
      userName: "stanley.foster",
      email: "stanley.foster@exelaonrine.com",
      company: "General Motars",
      role: "Standard User"
    },
    {
      fullNae: "Susan White",
      userName: "susan.white",
      email: "susan.white@exelaonrine.com",
      company: "Walmart",
      role: "Standard User"
    },
    {
      fullNae: "John Doe",
      userName: "john.doe",
      email: "john.doe@exelaonrine.com",
      company: "AT&T",
      role: "Standard User"
    },
    {
      fullNae: "Peter Wigiurn",
      userName: "peter.wigiurn",
      email: "peter.wigiurn@exelaonrine.com",
      company: "Microsoft",
      role: "Standard User"
    }
  ];

  // public policys
  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  toggleDropdown() {
    this.status = !this.status;
  }
  onClickedOutside(e: Event) {
    this.status = false;
  }
}
