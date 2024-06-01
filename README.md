# Book-Library-Application-NEJS

FSWD

# Agenda for the Project

Server >> Stroing certain book data >> User Register >> Subscriber

# Roots

## /users

GET : Get all the users [Completed]
POST : Create a new user [Completed]

## /user/{id}

GET : Get user using id [Completed]
PUT : Update user by using id [Completed]
DELETE : Delete user details by using id [Completed] >> Before deleteing
(check if he / she still have any issued books with them or not)
&&
(check if he / she still have any fine to be paid or not)

## /user/subscription-details/{id}

GET : User subscription details >> Data subscription >> Vaild Till >> Fines

<!--  ----------------------------------------------------------------------------------------------------  -->

# Fine System

User : 30-05-2024 - 30-06-2024
User arrived at : 01-07-2024
For delay of one day fine is 20/-
he is delay for two day fine is 20\*2 = 40/-

# User Subsription

Week(Weekly)
1 Month(Basic)
3 Month(Quaterly)
6 Month(Standard)
12 Month(Premium)

------------------------- Basic Subscription [ Monthly ] --------------------

> > If the subscription type is Basic && if the subscription date is 30-05-2024
> > => then it is valid till 30-06-2024

## Fines for subscription :

    withIn subscription date

=> if we miss the renewal >> 50/-
=> if we miss the subscription >> 100/-
=> if we miss the subscription and renewal >> 100 + 50 \* per day

## Example :-

### Renewal Fine

> > Book1 : Name
> > Basic : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 13-06-2024 : Renewal date
> > 15-06-2024 : Renewal date execed for : 2 days
> > 25 \* 2 = 50/-

### Subscription Fine

> > Book1 : Name
> > Basic : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 31-06-2024 : Subscription End Date
> > 02-07-2024 : Subscription end date for : 2 days
> > 50 \* 2 = 100/-

### Renewal Fine + Subscription Fine

> > Book1 : Name
> > Basic : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 13-06-2024 : Renewal date
> > 15-06-2024 : Renewal date execed for : 2 days
> > 25 _ 2 = 50/-
> > 31-06-2024 : Subscription End Date
> > 02-07-2024 : Subscription end date for : 2 days
> > 50 + (no of day[2] _ renewal fine amount[25]) = 100/- : Total Subscription + Renewal Fine

------------------------- Ouaterly Subscription [ 3 Months ] --------------------

> > If the subscription type is Quaterly && if the subscription date is 30-05-2024
> > => then it is valid till 05-08-2024

## Fines for subscription :

    withIn subscription date

=> if we miss the renewal >> 50/-
=> if we miss the subscription >> 100/-
=> if we miss the subscription and renewal >> 100 + 50 \* per day

## Example :-

### Renewal Fine

> > Book1 : Name
> > Ouaterly : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 13-06-2024 : Renewal date
> > 15-06-2024 : Renewal date execed for : 2 days
> > 50 \* 2 = 100/-

### Subscription Fine

> > Book1 : Name
> > Ouaterly : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 31-08-2024 : Subscription End Date
> > 02-09-2024 : Subscription end date for : 2 days
> > 100 \* 2 = 200/-

### Renewal Fine + Subscription Fine

> > Book1 : Name
> > Ouaterly : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 13-06-2024 : Renewal date
> > 15-06-2024 : Renewal date execed for : 2 days
> > 50 _ 2 = 100/-
> > 31-08-2024 : Subscription End Date
> > 02-09-2024 : Subscription end date for : 2 days
> > 100 + (no of day[2] _ renewal fine amount[50]) = 200/- : Total Subscription + Renewal Fine

------------------------- Standard Subscription [ 6 Month ] --------------------

> > If the subscription type is Standard && if the subscription date is 30-05-2024
> > => then it is valid till 05-11-2024

## Fines for subscription :

=> if we miss the renewal >> 50/-
=> if we miss the subscription >> 100/-
=> if we miss the subscription and renewal >> 100 + 50 \* per day

## Example :-

### Renewal Fine

> > Book1 : Name
> > Standard : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 13-06-2024 : Renewal date
> > 15-06-2024 : Renewal date execed for : 2 days
> > 100 \* 2 = 200/-

### Subscription Fine

> > Book1 : Name
> > Ouaterly : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 30-11-2024 : Subscription End Date
> > 02-09-2024 : Subscription end date for : 2 days
> > 150 \* 2 = 350/- : Total Subscription + Renewal Fine

### Renewal Fine + Subscription Fine

> > Book1 : Name
> > Ouaterly : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 13-06-2024 : Renewal date
> > 15-06-2024 : Renewal date execed for : 2 days
> > 50 _ 2 = 100/-
> > 30-11-2024 : Subscription End Date
> > 02-09-2024 : Subscription end date for : 2 days
> > 150 + (no of day[2] _ renewal fine amount[100]) = 350/- : Total Subscription + Renewal Fine

------------------------- Premium Subscription [ 12 Month / 1 Year ] --------------------

> > If the subscription type is Premium && if the subscription date is 30-05-2024
> > => then it is valid till 30-05-2025

## Fines for subscription :

    withIn subscription date

=> if we miss the renewal >> 50/-
=> if we miss the subscription >> 100/-
=> if we miss the subscription and renewal >> 100 + 50 \* per day

## Example :-

### Renewal Fine

> > Book1 : Name
> > Premium: Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 13-06-2024 : Renewal date
> > 15-06-2024 : Renewal date execed for : 2 days
> > 150 \* 2 = 100/-

### Subscription Fine

> > Book1 : Name
> > Ouaterly : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 30-05-2025 : Subscription End Date
> > 02-06-2025 : Subscription end date for : 2 days
> > 200 \* 2 = 400/- : Total Subscription + Renewal Fine

### Renewal Fine + Subscription Fine

> > Book1 : Name
> > Ouaterly : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 13-06-2024 : Renewal date
> > 15-06-2024 : Renewal date execed for : 2 days
> > 50 _ 2 = 100/-
> > 30-05-2025 : Subscription End Date
> > 02-06-2025 : Subscription end date for : 2 days
> > 200 + (no of day[2] _ renewal fine amount[150]) = 500/- : Total Subscription + Renewal Fine

<!--  -----------------------------------------------------------------------------------------------  -->

## /books

GET : Get all the books details [Completed]
POST : Update new book details [Completed]

## /books/{id}

GET : Get book details by book id [Completed]
PUT : Update a book by id [Completed]

## /books/issuedBook

GET : Get all details of issed books [Completed]

## /books/issuedBook/withFine

GET : Get all issued books with their fines

---------------------------------------- Explanation ------------------------------------------------------

...each

## "name": "Jane",

## "surname": "Doe",

## "email": "user@email.com",

## "subscriptionType": "Premium",

## "subscriptionDate": "01/01/2022"

...data
"data": {

## "name": "rohan",

## "surname": "kinnal"

}

name: rohan
surname: kinnal
email: user@email.com
subscriptioType: "Premium"
"subscriptionDate": "01/01/2022"

## About Date :

date;
Sat Jun 01 2024 14:58:16 GMT+0530 (India Standard Time)
Math.floor(date / (1000*60*60*24));
19875
const dateInDays = new Date("01/01/2024");
undefined
dateInDays;
Mon Jan 01 2024 00:00:00 GMT+0530 (India Standard Time)
Math.floor(dateInDays / (1000*60*60*24));
19722
