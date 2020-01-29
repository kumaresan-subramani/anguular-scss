import { Component, OnInit } from '@angular/core';
import { data } from './data';

@Component({
    selector: 'app-root',
    template: `<div id="check" class="checking">
    <ejs-grid id="comp" [dataSource]='data'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                </e-columns>
                </ejs-grid>
                </div>
                <button (click)='addTheme()'>Theme_Change</button>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }

    public addTheme() {
        let ele = document.getElementById('check');
        ele.classList.add('checking');
        let ele2 = document.getElementById('comp');
        ele2.classList.add('checking');
    }
}