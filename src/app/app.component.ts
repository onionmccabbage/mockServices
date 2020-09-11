import { Component } from '@angular/core'
import { PlaceholderService } from './services/placeholder.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Using a Mock API'
  result = ''
  whichCategory = 'albums'
  whichId = 1
  sampleData = [{ composedBy: 'Frédéric Chopin', title:'Nocturne in G minor' },
                { composedBy: 'Antônio Carlos Jobim, Vinícius de Moraes, Norman Gimbel', title:'The Girl from Ipanema' },
                { composedBy: 'Bill Danoff, Taffy Nivert, and John Denver', title:'Take Me Home, Country Roads' }]

  constructor(private placeholderService:PlaceholderService) { }
  simplePOST() {
    this.placeholderService.doPOST(this.sampleData)
    .subscribe( (result)=>{
      // NB the response includes an id:101 as a fingerprint that the server has done something
      this.result = result
    } )
  }
  simpleGET() {
    this.placeholderService.doGET(this.whichCategory, this.whichId)
    .subscribe( (result)=>{
      // NB the response includes an id:101 as a fingerprint that the server has done something
      this.result = result
    } )
  }
}
