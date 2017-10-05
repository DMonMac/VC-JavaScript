# Libraries and Frameworks

## Libraries
 - Organized collection of useful functions to handle strings, dates, HTML DOM elements, events, cookies, animations, network requests, and more. These are codes that have already been written by other developers.
 - Usually focus on a single piece of functionality that you access using an Application Program Interface (API). You call a library function, it executes some code and then the control is returned to your code.
 - Can be implemented however you choose. Think of it like a selection of car components: you’re free to use any to help construct a working vehicle but you must build the engine yourself.
- A library could cut development time by 20% because you don’t have to worry about the finer details.
    - Downsides:
        - A bug within a library can be difficult to locate and fix.
        - There’s no guarantee the development team will release a patch quickly.
        - A patch could change the API and incur significant changes to your code.

## Framework
- All the control flow is already there and there are many predefined white spots that should be filled out with code.
- Requires you to approach software design in a specific way and insert your own logic at certain points. Using the car analogy, a framework provides a working chassis, body, and engine. You can add, remove or tinker with some components presuming the vehicle remains operational.
- Normally provides a higher level of abstraction than a library and will help you rapidly build the first 80% of your project.
- A framework can contain libraries. A framework will usually include many libraries to make your work easier.
    - Downsides:
        - The last 20% can be tough going if your application moves beyond the confines of the framework.
        - Framework updates can be difficult – if not impossible.
        - Core framework code and concepts rarely age well. Developers will always discover a better way to do the same thing.


# JS Libraries
[![Datejs](https://camo.githubusercontent.com/5e54f09cc38ce9071403ca237b6121c3051b6529/687474703a2f2f646174656a732e636f6d2f696d616765732f676f6f676c65636f64652d6865616465722e6a7067)](https://github.com/datejs/Datejs)

Datejs is an open source JavaScript Date library for parsing, formatting and processing.

### Example (native JavaScript, without Datejs)
```
 var temp = new Date();
 temp.setHours(0);
 temp.setMinutes(0);
 temp.setSeconds(0);
 temp.setMilliseconds(0);

 var today = new Date(someDate.getTime()); // clone original instance so we don't actually change the original date.
 var today.setHours(0);
 var today.setMinutes(0);
 var today.setSeconds(0);
 var today.setMilliseconds(0);

 (today == temp); // true|false
```

### Example (with Datejs)

```
// with Datejs
someDate.clone().clearTime().equals(Date.today());

```

## Polymer
[![](https://www.polymer-project.org/images/logos/p-logo.png)](https://www.polymer-project.org/)

The Polymer library provides a set of features for creating custom elements. These features are designed to make it easier and faster to make custom elements that work like standard DOM elements. Similar to standard DOM elements, Polymer elements can be:

Instantiated using a constructor or document.createElement.
Configured using attributes or properties.
Populated with internal DOM inside each instance.
Responsive to property and attribute changes.
Styled with internal defaults or externally.
Responsive to methods that manipulate its internal state.

A basic Polymer element definition looks like this:

````
<dom-module id="x-custom">
      <!-- Optional shadow DOM template -->
      <template>
        <style>
          /* CSS rules for your element */
        </style>

        <!-- shadow DOM for your element -->

        <div>{{greeting}}</div> <!-- data bindings in local DOM -->
      </template>

      <script>
        // Define the element's API using an ES2015 class
        class XCustom extends Polymer.Element {

          static get is() { return 'x-custom'; }

          // Declare properties for the element's public API
          static get properties() {
            return {
              greeting: {
                type: String,
                value: "Hello!"
              }
            }
          }

          // Add methods to the element's public API
          greetMe() {
            console.log(this.greeting);
          }

        }

        // Register the x-custom element with the browser
        customElements.define(XCustom.is, XCustom);
      </script>

    </dom-module>
````

## [![mousetrap](https://user-images.githubusercontent.com/29721601/31208301-734c227a-a9b6-11e7-8b67-3a533af7150d.png "mousetrap")](https://craig.is/killing/mice)

### A simple library for handling keyboard shortcuts in Javascript.

````
// single keys
Mousetrap.bind('4', function() { highlight(2); });
Mousetrap.bind('x', function() { highlight(3); }, 'keyup');

// combinations
Mousetrap.bind('command+shift+k', function(e) {
    highlight([6, 7, 8, 9]);
    return false;
});

Mousetrap.bind(['command+k', 'ctrl+k'], function(e) {
    highlight([11, 12, 13, 14]);
    return false;
});

// gmail style sequences
Mousetrap.bind('g i', function() { highlight(17); });
Mousetrap.bind('* a', function() { highlight(18); });

// konami code!
Mousetrap.bind('up up down down left right left right b a enter', function() {
    highlight([21, 22, 23]);
});
````
