import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppContentComponent } from './app-content/app-content/app-content.component';
import { CompanySectionComponent } from './company-section/company-section.component';
import { BusinessSectionComponent } from './business-section/business-section.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { AppFooterComponent } from './app-footer/app-footer/app-footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [AppHeaderComponent, AppContentComponent, CompanySectionComponent, BusinessSectionComponent, AboutUsComponent, AppFooterComponent]
})
export class AppComponent {
  title = 'uzofin_ai_banking';

}
