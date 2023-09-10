import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { AddBookComponent } from './Components/Admin/AddBook/AddBook.component';
import { AdminBookListComponent } from './Components/Admin/AdminBookList/AdminBookList.component';
import { EditBookDetailsComponent } from './Components/Admin/EditBookDetails/EditBookDetails.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { BookByCatComponent } from './Components/BookByCat/BookByCat.component';
import { CartComponent } from './Components/Cart/Cart.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { HomeComponent } from './Components/Home/Home.component';
import { LoginComponent } from './Components/Login/Login.component';
import { RegisterPageComponent } from './Components/RegisterPage/RegisterPage.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  //{path: 'Home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'Home', component: HomeComponent},
  {path:'Admin', component: AdminBookListComponent},
  {path:'Admin/BookDetails/:id', component: EditBookDetailsComponent},
  {path:'Admin/AddBook', component: AddBookComponent},
  {path:'bookDetails/:id', component: BookDetailsComponent},
  {path:'BookList/:Cat', component: BookByCatComponent},
  {path:'RegisterPage', component: RegisterPageComponent},
  {path:'login', component: LoginComponent},
  {path:'Cart', component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
