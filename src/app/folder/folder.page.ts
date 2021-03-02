import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  @ViewChild("movementCanvas") movementCanvas: ElementRef;

  private doughnutChart: Chart;
  private lineChart: Chart;
  private moveChart: Chart;
  public clients = ["Antonia Ruiz"
    , "Banesa Almera"
    , "Buenos Aires de los soles"
    , "Cairo Fernandez"
    , "Dhaka Unami"
    , "Estefania Luz"
    , "Geneva Geneva"
    , "Genoa"
    , "Hernesto Ruiz"
    , "Isabel Pantoja"
    , "Jaime"
    , "Leonardo DiCaprio"
    , "La Jenny"
    , "La Isabel"
    , "Lima 01 💕 "
    , "Maria Dolores"
    , "Manila"
    , "Olympia"
    , "Oslo"
    , "Patricia la de la tele"
    , "Philadelphia"
    , "San Francisco Javier"
    , "Tania"
    , "Tokio 🍑 "
    , "Uelzen"
    , "Washington Washington Washington"
    , "Xuntutu"];
    public items = [];
  public searchbar ;
  public isItemAvailable = false
  public paciente = "";
  public show = true;
  public showstats = false
  constructor(private activatedRoute: ActivatedRoute, public loadingController: LoadingController) { }
ngOnInit(){}
  ngAfterViewInit() {
   
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
        datasets: [
          {
            label: "Pulsaciones",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(30, 160, 234)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(30, 160, 234)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(30, 160, 234)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [45, 65, 75, 50, 120, 55, 60,65,59,40,50,60,66,100,120,130,130,90,85,84,70,70,70,65,65],
            spanGaps: false,

          },
          {
            label: "Saturación",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(238, 10, 10)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(238, 10, 10)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(238, 10, 10)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [95, 90, 70, 80, 81, 82, 86, 88, 84, 90, 90, 95, 94, 83, 85, 90, 100, 90, 89, 94, 84, 83, 83, 83, 81],
            spanGaps: false
          }
        ]
      }
    });


    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Estres", "Relax", "Dormir"],
        datasets: [
          {
            label: "# of Votes",
            data: [19, 12, 3,],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
    });

    this.moveChart = new Chart(this.movementCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
        datasets: [
          {
            label: "Porcentaje",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(0, 152, 70)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(0, 152, 70)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0, 152, 70)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [5, 10, 15, 5, 5, 5, 5, 15, 15, 20, 25, 25, 45, 50, 89, 100, 65, 80, 90, 55, 45, 40, 10, 5, 3],
            spanGaps: false,
            colors: ['', 'red', 'green', 'blue']
          }
        ]
      }
    });
  }

  getItems(ev: any, index) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.items = this.clients;
      this.isItemAvailable = true
      this.show = false
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
     this.isItemAvailable = false
     this.show = true
    }
  }

  async tabPaciente(i){
    this.isItemAvailable = false
    this.paciente = i;
    const loading = await this.loadingController.create({
      message: 'Cargando datos del paciente...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.showstats = true
  }
  

}
