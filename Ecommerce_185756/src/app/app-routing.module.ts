import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchlistComponent } from 'src/app/Exam/searchlist.component';
import { ProductlistComponent } from 'src/app/Exam/productlist.component';


const routes: Routes = [
  {path:'search',component:SearchlistComponent},
  {path:'products',component:ProductlistComponent},
  {path:'',redirectTo:'/search', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
