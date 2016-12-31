## Data Binding in AngularJS
*MVC is a software architecture pattern that separates representation from user interaction.*
-  Model  consists of application Data and Functions that interact with it.

- The View presents this data to the user.

- The Controller mediates between the two

### 1. Simple Data Binding

In Hello-worldApp, We just bind the "name" attribute to the input field using the ng-model directive on the containing model object ($scope).

- The $scope object is simply a Javascript object whose properties are all available to the view and with which the controller can interact

- Bi-directional in this context means that if the view changes the value, the model observes the change through dirty checking, and if the model changes the value, the view update with the change.

### 2. Modules

A module is the main way to define an AngularJS app. The module of an app is where we will contain all our application code.

An app can contain several modules, each one containing code that pertains to specific functionality.

** Avantages of using modules **

- Keeping our global namespace clean.

- Making Test easier to write and keeping them clean so as to more easily target isolated functionality.

- Allowing our app to load different parts of the code in any order.

### 3. Scopes

*Scopes are objects that contain functionality and data to use when rendering the view.
It is the single source of truth for all views. You can think of scopes as view models.*

** What can Scopes do? **

- They provide observers to watch for model changes.

- They provide the ability to propagate model changes through the application as well as outside the system to other components.


- Can be nested such they can isolate functionality and model properties.

- Provide an execution environment in which expressions are evaluated

### 4. Controllers

*Controllers exist to augment the view of an application.*

A controller is a function that adds additional functionality to the scope of the view.

we use it to set up an initial state and to add custom behavior to the scope object.
