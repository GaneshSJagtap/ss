import { Component, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

interface Facilities {
  facility: string;
}
interface Buildings {
  building: string;
}
interface Floors {
  floor: string;
}
interface Bins {
  bin: string;
}

@Component({
  selector: "app-binstatus",
  templateUrl: "./binstatus.component.html",
  styleUrls: ["./binstatus.component.scss"]
})
export class BinstatusComponent implements OnInit {
  constructor() {}

  facilities: Facilities[] = [
    { facility: "Facility 1" },
    { facility: "Facility 2" },
    { facility: "Facility 3" },
    { facility: "Facility 4" },
    { facility: "Facility 5" }
  ];
  buildings: Buildings[] = [
    { building: "Building 1" },
    { building: "Building 2" },
    { building: "Building 3" },
    { building: "Building 4" },
    { building: "Building 5" }
  ];
  floors: Floors[] = [
    { floor: "Floor 1" },
    { floor: "Floor 2" },
    { floor: "Floor 3" },
    { floor: "Floor 4" },
    { floor: "Floor 5" }
  ];

  ngOnInit() {
    // Create chart instance
    let chart = am4core.create("binStatus", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        binStatus: "About to Fill",
        binStatusCount: 101.9
      },
      {
        binStatus: "Bin Full",
        binStatusCount: 125.9
      },
      {
        binStatus: "Low Battery",
        binStatusCount: 200.1
      },
      {
        binStatus: "Offline",
        binStatusCount: 75.8
      },
      {
        binStatus: "Critical Temperature",
        binStatusCount: 85.9
      },
      {
        binStatus: "High Humidity",
        binStatusCount: 128.3
      }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "binStatusCount";
    pieSeries.dataFields.category = "binStatus";
    pieSeries.innerRadius = am4core.percent(65);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.labels.template.text = "{binStatus}";
    pieSeries.slices.template.tooltipText = "{binStatus}";

    pieSeries.colors.list = [
      am4core.color("#c541aa"),
      am4core.color("#b568be"),
      am4core.color("#80ceff"),
      am4core.color("#d2249c"),
      am4core.color("#a292d3"),
      am4core.color("#91b8e6")
    ];

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.fontSize = 13;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.maxHeight = 10;
    marker.maxWidth = 10;
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 7;
    markerTemplate.height = 7;
  }
}
