import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-paleta',
  templateUrl: './reporte-paleta.component.html',
  styleUrls: ['./reporte-paleta.component.css']
})
export class ReportePaletaComponent implements OnInit {

  dataTable = [{no :  1 , 
                fecha : "21/9/2018, 11:08:10 p. m." , 
                imagen1 : "assets/screenshots/paleta/paleta1.png",
                imagen2 : "assets/screenshots/paleta/paleta2.png",
                imagen3 : "assets/screenshots_resultados/diff_paleta1.png"
              },
              {no :  2 , 
                fecha : "21/9/2018, 08:52:10 a. m." , 
                imagen1 : "assets/screenshots/paleta/paleta2.png",
                imagen2 : "assets/screenshots/paleta/paleta3.png",
                imagen3 : "assets/screenshots_resultados/diff_paleta2.png"
              }
            ]

  constructor() { }

  ngOnInit() {  
    
  }

  addFile(){
    let rango = this.dataTable.length;
    let indice = Math.floor((Math.random() * 1) + 1);

    //alert( new Date().toLocaleString() );
    let item = { "no" :  rango + 1 , 
      "fecha" : new Date().toLocaleString() , 
      "imagen1" : this.dataTable[ indice ].imagen1 ,
      "imagen2" : this.dataTable[ indice ].imagen2,
      "imagen3" : this.dataTable[ indice ].imagen3
    } ;
    this.dataTable.push( item  );                        
  }


}
