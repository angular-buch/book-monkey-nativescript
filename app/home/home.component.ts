import { Component } from '@angular/core';

@Component({
  selector: 'bm-home',
  template: `
<TEX>\boldline</TEX>    <StackLayout>
      <<TEX>\bfseries Label</TEX> class="heading" text="Home"></<TEX>\bfseries Label</TEX>>
      <<TEX>\bfseries Label</TEX> text="Das ist der BookMonkey"></<TEX>\bfseries Label</TEX>>
      <<TEX>\bfseries Button</TEX> nsRouterLink="../books" text="Buchliste ansehen" class="ui red button"></<TEX>\bfseries Button</TEX>>
<TEX>\boldline</TEX>    </StackLayout>
  `
})
export class HomeComponent { }