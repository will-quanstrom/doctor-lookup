# _Doctor Lookup_

#### _Webpage takes in medical condition and returns local specialists, 11.22.2019_

#### By _**Will Quanstrom**_

## Description

_This webpage takes in user input and then queries an API to find local doctors that fit the criteria of the search_

## Setup/Installation Requirements

* _Clone from Github_
* _Install NPM modules_
* _Open webpage in browser_
* _Enter search_

_Specifications
User will search a medical condition and receive a list of specialists
User will search a name and receive a list of doctors matching the name
The list will include all doctor's first names, last names, address, phone number, website, and whether doctor is accepting new patients
User will search resulting in 0 API matches and webpage will tell them there are no matches
API query will not work and error will display _
| Specifications                                                               | Input Example       | Output Example                                                                                          |
|------------------------------------------------------------------------------|:--------------------|:--------------------------------------------------------------------------------------------------------|
| Search medical condition, receive list of specialists                        | 'Sore throat'       | "Anderson, Sarah, 1212 Evergreen Lane, 206-444-4444, sarahanderson.com, currently taking new patients"  |
| Search doctor name and receive list of matches                               | 'Anderson'          | "Anderson, Sarah, 1212 Evergreen Lane, 206-444-4444, sarahanderson.com, currently taking new patients"  |
| Include doctor's first/last names, address, phone, website, and availability | successful search   | "Anderson, Sarah, 1212 Evergreen Lane, 206-444-4444, sarahanderson.com, currently taking new patients"  |
| Error API queries will result in error message                               | failed GET request  | "There was an error, try again or contact support for more details"                                     |
| User told if no doctor matches search                                        | 'ajdlsj;fsdf'       | "Sorry, there are no local doctors that fit your needs"                                                 |
## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_jQuery, JavaScript, and BetterDoctor API_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2019 **_Will Quanstrom, thanks to BetterDoctor API_**
