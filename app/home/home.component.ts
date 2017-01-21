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


/*
<!--
  <div class="ui container">
    <h1>Home</h1>
    <p>Das ist der BookMonkey.</p>
    <a routerLink="../books" class="ui red button">
      Buchliste ansehen
      <i class="right arrow icon"></i>
    </a>
  </div>
  -->
*/