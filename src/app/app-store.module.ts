import { isDevMode, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(appReducer, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ]
})
export class AppStoreModule { }
