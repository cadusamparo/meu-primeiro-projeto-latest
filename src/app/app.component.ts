import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaiOuMaeComponent } from '@components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { ConsumeServiceComponent } from '@components/consume-service/consume-service.component';
import { ContentComponent } from '@components/content/content.component';
import { ReactiveFormsComponent } from '@components/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from '@components/forms/template-driven-forms/template-driven-forms.component';
import { HostElementsComponent } from '@components/host-elements/host-elements.component';
import { LifeCycleComponent } from '@components/life-cycle/life-cycle.component';

// Components
import { NewComponentComponent } from '@components/new-component/new-component.component';
import { AngularPipesComponent } from '@components/pipes/angular-pipes/angular-pipes.component';
import { SignalsComponent } from '@components/signals/signals.component';
import { TemplateBindingComponent } from '@components/template/template-binding/template-binding.component';
import { TemplateControlFlowComponent } from '@components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from '@components/template/template-deferrable-views/template-deferrable-views.component';
import { TemplateVariablesComponent } from '@components/template/template-variables/template-variables.component';
import { TranslateComponent } from '@components/translate/translate.component';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewComponentComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent,
    SignalsComponent,
    PaiOuMaeComponent,
    AngularPipesComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    ContentComponent,
    HostElementsComponent,
    LifeCycleComponent,
    ConsumeServiceComponent,
    TranslateComponent
  ],
  styles: [``],
  template: `
     <router-outlet></router-outlet>
    <h1>Curso de Angular</h1>
    <!-- <div class="theme-red">
    <<app-new-component />
    </div> -->
    <!-- <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-control-flow /> -->
    <!-- <app-template-deferrable-views /> -->
    <!--<app-signals /> -->
    <!-- <app-pai-ou-mae /> -->
    <!-- <app-angular-pipes /> -->
    <!-- <app-template-driven-forms />-->
    <!-- <app-reactive-forms /> -->
    <!-- <app-content>
      <header id="header">
       <p>Header</p>
      </header>
        <p text>Text</p>
        <p text>Text</p>
        <footer class="footer">
         <p>Footer</p>
        </footer>
    </app-content> -->
    <!-- <app-host-elements /> -->
    <!-- @if(boolean) {
      <app-life-cycle [inputMyNumber]="number()">
        <p #text>Text</p>
      </app-life-cycle>
      }

      <button (click)="boolean = !boolean">Destroy Component</button> -->
      <!--<app-consume-service /> -->
      <!-- <router-outlet></router-outlet> -->

      <app-translate />

  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

}



