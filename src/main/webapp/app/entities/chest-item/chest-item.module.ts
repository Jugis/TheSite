import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WienerSharedModule } from 'app/shared';
import {
    ChestItemComponent,
    ChestItemDetailComponent,
    ChestItemUpdateComponent,
    ChestItemDeletePopupComponent,
    ChestItemDeleteDialogComponent,
    chestItemRoute,
    chestItemPopupRoute
} from './';

const ENTITY_STATES = [...chestItemRoute, ...chestItemPopupRoute];

@NgModule({
    imports: [WienerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ChestItemComponent,
        ChestItemDetailComponent,
        ChestItemUpdateComponent,
        ChestItemDeleteDialogComponent,
        ChestItemDeletePopupComponent
    ],
    entryComponents: [ChestItemComponent, ChestItemUpdateComponent, ChestItemDeleteDialogComponent, ChestItemDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WienerChestItemModule {}
