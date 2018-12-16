import { Component } from "@angular/core";
import { removeDebugNodeFromIndex } from "@angular/core/src/debug/debug_node";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    //styleUrls: ["./server.component.css"]     //external template css
    //internal css
    styles: [`
        p 
        { 
            color: blue; 
        } 
    `]
})
export class ServerComponent{

}