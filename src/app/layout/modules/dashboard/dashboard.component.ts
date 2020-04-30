import { Component, OnInit, NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
interface Month {
  monthName: string;
}
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
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  title = "Dashboard";

  months: Month[] = [
    { monthName: "Jan" },
    { monthName: "Feb" },
    { monthName: "Mar" },
    { monthName: "Apr" },
    { monthName: "May" },
    { monthName: "Jun" },
    { monthName: "Jul" },
    { monthName: "Aug" },
    { monthName: "Sep" },
    { monthName: "Oct" },
    { monthName: "Nov" },
    { monthName: "Dec" }
  ];
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
  bins: Bins[] = [
    { bin: "Bin 1" },
    { bin: "Bin 2" },
    { bin: "Bin 3" },
    { bin: "Bin 4" },
    { bin: "Bin 5" }
  ];

  private chart: am4charts.XYChart;

  barChart: string = "../../../assets/images/barChart.jpg";
  circleChart1: string = "../../../assets/images/circleChart1.jpg";
  circleChart2: string = "../../../assets/images/circleChart2.jpg";
  constructor(private zone: NgZone) {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.numberFormatter.numberFormat = "#.#'%'";

      chart.data = [
        {
          days: "1",
          usage: 10
        },
        {
          days: "2",
          usage: 90
        },
        {
          days: "3",
          usage: 30
        },
        {
          days: "4",
          usage: 10
        },
        {
          days: "5",
          usage: 55
        },
        {
          days: "6",
          usage: 40
        },
        {
          days: "7",
          usage: 25
        },
        {
          days: "8",
          usage: 40
        },
        {
          days: "9",
          usage: 10
        },
        {
          days: "10",
          usage: 100
        },
        {
          days: "11",
          usage: 70
        },
        {
          days: "12",
          usage: 30
        },
        {
          days: "13",
          usage: 10
        },
        {
          days: "14",
          usage: 40
        },
        {
          days: "15",
          usage: 20
        },
        {
          days: "16",
          usage: 15
        },
        {
          days: "17",
          usage: 15
        },
        {
          days: "18",
          usage: 10
        },
        {
          days: "19",
          usage: 30
        },
        {
          days: "20",
          usage: 70
        },
        {
          days: "21",
          usage: 40
        },
        {
          days: "22",
          usage: 70
        },
        {
          days: "25",
          usage: 25
        },
        {
          days: "26",
          usage: 10
        },
        {
          days: "27",
          usage: 20
        },
        {
          days: "28",
          usage: 15
        },
        {
          days: "29",
          usage: 10
        },
        {
          days: "30",
          usage: 18
        }
      ];

      chart.colors.list = [am4core.color("#a0daff")];

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "days";
      categoryAxis.renderer.minGridDistance = 10;
      categoryAxis.fontSize = 11;

      categoryAxis.renderer.grid.push(new am4charts.Grid()).disabled = true;
      categoryAxis.renderer.grid.template.strokeOpacity = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.max = 100;
      valueAxis.fontSize = 12;
      valueAxis.strictMinMax = true;
      valueAxis.renderer.minGridDistance = 15;
      valueAxis.renderer.grid.push(new am4charts.Grid()).disabled = true;
      valueAxis.renderer.grid.template.strokeOpacity = 0;

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "days";
      series.dataFields.valueY = "usage";
      series.columns.template.tooltipText = "{valueY.value}";
      series.columns.template.tooltipY = 0;
      series.columns.template.strokeOpacity = 0;
      // series.calculatePercent = true;
      // series.dataFields.valueYShow = "changePercent";

      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      // series.columns.template.adapter.add("fill", function(fill, target) {
      //   return chart.colors.getIndex(target.dataItem.index);
      // });
      let daysLabel = chart.createChild(am4core.Label);
      daysLabel.text = "Days";
      daysLabel.fontSize = 14;
      daysLabel.align = "center";

      let usageLabel = chart.createChild(am4core.Label);
      usageLabel.text = "Usage";
      usageLabel.fontSize = 14;
      usageLabel.align = "center";
      usageLabel.isMeasured = false;
      usageLabel.x = -10;
      usageLabel.y = 145;
      usageLabel.className = "usage";
      usageLabel.rotation = -90;

      // Create series
      function createSeries(field, name) {
        // Set up series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.name = name;
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "year";
        series.sequencedInterpolation = true;
        //series.cursorTooltipEnabled = false;

        // Make it stacked
        series.stacked = true;

        // Configure columns
        series.columns.template.width = am4core.percent(60);
        series.columns.template.tooltipText =
          "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

        // Configure legend
        series.legendSettings.valueText = "{valueY.close}M";
        series.legendSettings.itemValueText = "{valueY}M";

        // Add label
        var labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.text = "{valueY}";
        labelBullet.locationY = 0.5;
        labelBullet.label.fill = am4core.color("#fff");

        return series;
      }

      createSeries("europe", "Europe");
      createSeries("namerica", "North America");
      createSeries("asia", "Asia-Pacific");
      createSeries("lamerica", "Latin America");
      createSeries("meast", "Middle-East");
      createSeries("africa", "Africa");
    });
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  ngOnInit() {}
}
