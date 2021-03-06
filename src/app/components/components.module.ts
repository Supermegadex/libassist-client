import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from './material-components.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { MarkdownModule } from 'ngx-markdown';
import { ExampleComponent } from './example/example.component';
import { EditorComponent } from './editor/editor.component';
import { AceModule } from 'ngx-ace-wrapper';

const components: any[] = [
  SidebarComponent,
  MainComponent,
  ExampleComponent,
  EditorComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    MaterialComponentsModule,
    CommonModule,
    FormsModule,
    MarkdownModule.forChild(),
    AceModule,
  ],
})
export class ComponentsModule {}
