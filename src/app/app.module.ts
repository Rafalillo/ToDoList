import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TareasComponent } from './tareas.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { NuevaTareaComponent } from './nueva-tarea.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

import { WebService } from './web.service';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    NavComponent,
    HomeComponent,
    NuevaTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
