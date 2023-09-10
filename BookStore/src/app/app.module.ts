import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { HomeComponent } from './Components/Home/Home.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminBookListComponent } from './Components/Admin/AdminBookList/AdminBookList.component';
import { EditBookDetailsComponent } from './Components/Admin/EditBookDetails/EditBookDetails.component';
import { AddBookComponent } from './Components/Admin/AddBook/AddBook.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { BookByCatComponent } from './Components/BookByCat/BookByCat.component';
import { RegisterPageComponent } from './Components/RegisterPage/RegisterPage.component';
import { LoginComponent } from './Components/Login/Login.component';
import { UserService } from './services/User.service';
import { AuthInterceptor } from './Auth/auth.interceptor';
import { CartComponent } from './Components/Cart/Cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminBookListComponent,
    EditBookDetailsComponent,
    AddBookComponent,
    BookDetailsComponent,
    BookByCatComponent,
    RegisterPageComponent,
    LoginComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
