import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { BasicformComponent } from './forms/basicform/basicform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtextinputComponent } from './forms/atextinput/atextinput.component';
import { DomManipulationComponent } from './dom-manipulation/dom-manipulation.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    RootComponent,
    BasicformComponent,
    AtextinputComponent,
    DomManipulationComponent,
  ],
  bootstrap: [RootComponent],
})
export class RootModule {}
