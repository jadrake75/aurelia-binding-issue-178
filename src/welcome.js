import {computedFrom, bindable} from 'aurelia-framework';

@bindable("selected")
export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App!';

  models = [];

  activate() {
    for(var i = 0; i < 50; i++ ) {
      let m = {
        id: i,
        name: "name-" + i,
        description: "this is a description",
        hasChild: i % 2 === 0
      }
      if( i % 2 === 0 ) {
        let c = {
          value: 5.0 + i,
          on: i % 4 === 0
        };
        m.child = c;
      }
      this.models.push(m);
    }
  }

  select(obj) {
    this.selected = obj;
  }

  @computedFrom("selected")
  get child() {
    if( this.selected.hasChild ) {
      return this.selected.child;
    }
    return undefined;
  }
}

