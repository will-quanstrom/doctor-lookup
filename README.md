# _Doctor Lookup_

#### _Webpage takes in medical condition and returns local specialists, 11.22.2019_

#### By _**Will Quanstrom**_

## Description

_This webpage takes in user input and then queries an API to find local doctors that fit the criteria of the search_

## Setup/Installation Requirements

* _Clone from Github_
* _Install NPM modules_
*_Visit BetterDoctor API and sign up for a free API KEY_
*_Place API KEY in a .env file in your .gitignore file. Then download npm dotenv_
* _Open webpage in browser_
* _Enter search_

| Specifications                                                               | Input Example       | Output Example                                                                                          |
|------------------------------------------------------------------------------|:--------------------|:--------------------------------------------------------------------------------------------------------|
| Search medical condition, receive list of specialists                        | 'Sore throat'       | "Anderson, Sarah, 1212 Evergreen Lane, 206-444-4444, sarahanderson.com, currently taking new patients"  |
| Search doctor name and receive list of matches                               | 'Anderson'          | "Anderson, Sarah, 1212 Evergreen Lane, 206-444-4444, sarahanderson.com, currently taking new patients"  |
| Include doctor's first/last names, address, phone, website, and availability | successful search   | "Anderson, Sarah, 1212 Evergreen Lane, 206-444-4444, sarahanderson.com, currently taking new patients"  |
| Error API queries will result in error message                               | failed GET request  | "There was an error, try again or contact support for more details"                                     |
| User told if no doctor matches search                                        | 'ajdlsj;fsdf'       | "Sorry, there are no local doctors that fit your needs"                                                 |
## Known Bugs

_There are no known bugs at this time_

## Support and contact details

_wquanstr215@gmail.com_

## Technologies Used

_jQuery, JavaScript, and BetterDoctor API_


Copyright (c) 2019 **_Will Quanstrom, thanks to BetterDoctor API_**
