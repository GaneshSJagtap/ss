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
  selector: "app-bincount",
  templateUrl: "./bincount.component.html",
  styleUrls: ["./bincount.component.scss"]
})
export class BincountComponent implements OnInit {
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
    let chart = am4core.create("binCount", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        totalBinStatus: "Facility 01",
        totalBinStatusCount: 100
      },
      {
        totalBinStatus: "Facility 02",
        totalBinStatusCount: 120
      },
      {
        totalBinStatus: "Facility 03",
        totalBinStatusCount: 150
      },
      {
        totalBinStatus: "Facility 04",
        totalBinStatusCount: 100
      },
      {
        totalBinStatus: "Facility 05",
        totalBinStatusCount: 140
      },
      {
        totalBinStatus: "Facility 06",
        totalBinStatusCount: 100.3
      }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "totalBinStatusCount";
    pieSeries.dataFields.category = "totalBinStatus";
    pieSeries.innerRadius = am4core.percent(65);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.labels.template.maxHeight = 25;
    pieSeries.labels.template.text = "{totalBinStatus}";
    pieSeries.slices.template.tooltipText = "{totalBinStatus}";

    pieSeries.colors.list = [
      am4core.color("#c541ab"),
      am4core.color("#b568be"),
      am4core.color("#80ceff"),
      am4core.color("#b568be"),
      am4core.color("#d2249c"),
      am4core.color("#91b8e6")
    ];

    pieSeries.labels.template.text = "{totalBinStatus}";

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
