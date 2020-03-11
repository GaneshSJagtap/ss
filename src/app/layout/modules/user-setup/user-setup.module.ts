import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserSetupComponent } from './user-setup.component';

const routes: Routes = [
    {
      path: '',
      component: UserSetupComponent
    }
  ];

@NgModule({
    declarations: [
      UserSetupComponent    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    entryComponents: [
    ],
    exports: [],

})
export class UserSetupModule { }