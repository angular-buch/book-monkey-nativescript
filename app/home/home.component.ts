import { Component } from '@angular/core';

@Component({
  selector: 'bm-home',
  template: `
    <StackLayout>
      <Label class="heading" text="Home"></Label>
      <Label text="Das ist der BookMonkey"></Label>
      <Button nsRouterLink="../books" text="Buchliste ansehen" class="ui red button"></Button>
    </StackLayout>
  `
})
export class HomeComponent { }