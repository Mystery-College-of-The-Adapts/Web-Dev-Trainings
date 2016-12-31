In Angular, a filter provides a way to format the data we display to the user.

Angular gives us several built-in filters as well as an easy way to create our own.

**We invoke filters in HTML with the | ( pipe ) character inside the template binding characters { { } }**

- for example: to capitalize a string, we can either change all the characters in a string to be capitalized, or we can use a filter.

     - **{ { name | uppercase } }**


 - examples of built-in filters:
  - Currency Filter:
  { { 150 | currency } }

  - Date Filter:
    - { { today | date:'medium' } }    *Aug 09, 2013 12:09:02 PM*
    - { { today | date:'short' } }   *8/9/13 12:09 PM*
    - { { today | date:'fullDate' } }    *Thursday, August 09, 2013 *
    - { { today | date:'longDate' } }    *August 09, 2013*
    - { { today | date:'mediumDate' } }    *Aug 09, 2013*
    - { { today | date:'shortDate' } }   *8/9/13*
    - { { today | date:'mediumTime' } }    *12:09:02 PM*
    - { { today | date:'shortTime' } }   *12:09 PM*

  - Year Formatting:
    - Four-digit year: { { today  | date:'yyyy' } }     *2013*
    - Two-digit padded year: { { today |  date: 'yy' } }      *13*

  - Month Formatting

  - Day Formatting

  - Hour Formatting

  - Minute Formatting

  - Second Formatting

  - 
