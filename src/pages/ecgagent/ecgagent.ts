import { Component } from '@angular/core';
import { Http } from "@angular/http";
import {FormBuilder, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Ecgagent page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ecgagent',
  templateUrl: 'ecgagent.html',
})
export class Ecgagent {

  searchResults: AgentSearchItem[];
  public searchForm = this.fb.group({
      searchText: ["", Validators.required]
  })

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public fb: FormBuilder, private http: Http) {
   // console.log("Search form " + this.searchForm.searchText.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ecgagent');
  }

  performSimpleSearch() {
    console.log("Performing simple search on " + this.searchForm.controls.searchText.value);
    //event.preventDefault();
    this.http.get("http://localhost:3000/agents")
      .subscribe((response) => { this.searchResults = response.json(); console.log(response.json()); });
  }

}

class AgentSearchItem {
    id: number;
    hostname: string;
    username: string;
    state: string;
    port: number;
    heartBeatDate: string;
}

enum AgentState {
  INACTIVE = 0,
  ACTIVE,
  OFFLINE
}
