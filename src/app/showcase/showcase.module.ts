import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent, SimpleTextEditorComponent} from './app.component';
import {PropertyGridModule} from '../components/property-grid';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatCheckboxModule,
    MatSlider,
    MatSliderModule,
    MatDatepickerModule,
    MatDatepicker,
    MatSlideToggleModule,
    MatSlideToggle, MatNativeDateModule, MatRadioModule, MatInputModule
} from '@angular/material';
import {MatCheckbox} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {NgxTemplateModule} from 'ngx-template';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule, FormsModule, NoopAnimationsModule, PropertyGridModule, NgxTemplateModule,
        NgxJsonViewerModule, BrowserAnimationsModule,
        MatCheckboxModule, MatSliderModule, MatDatepickerModule, MatSlideToggleModule,
        MatNativeDateModule, MatRadioModule, MatInputModule
    ],
    entryComponents: [SimpleTextEditorComponent, MatCheckbox, MatSlider, MatDatepicker, MatSlideToggle],
    declarations: [
        AppComponent, SimpleTextEditorComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class ShowcaseModule {
}
