import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
    MatNativeDateModule,
    DateAdapter,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatChipsModule
} from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
    imports: [
        MatInputModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatCardModule,
        MatSelectModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatTabsModule
    ],
    declarations: [

    ],
    exports: [
        MatInputModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatCardModule,
        MatSelectModule,
        MatDialogModule,
        MatDatepickerModule,
        MatRadioModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatTabsModule

    ],
    entryComponents: [

    ],
    providers: [
        MatNativeDateModule
    ]
})
export class MaterialModule { }
