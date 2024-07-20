import { Routes } from '@angular/router';
import {AccountComponent} from "./pages/account/account.component";
import {FinanceComponent} from "./pages/finance/finance.component";

export const routes: Routes = [
  // {path: '', pathMatch: "full", component: FinanceComponent},
  { path: 'pages/account', component: AccountComponent },
  { path: 'pages/finance', component: FinanceComponent },
];
