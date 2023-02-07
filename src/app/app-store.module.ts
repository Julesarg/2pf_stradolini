import { isDevMode, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersStoreModule } from './pages/users/users-store.module';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(appReducer, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    UsersStoreModule
  ]
})
export class AppStoreModule { }
