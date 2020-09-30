import {NgModule } from '@angular/core'
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


const modules = [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
]
@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule {}