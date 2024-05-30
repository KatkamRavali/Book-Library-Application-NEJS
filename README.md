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
DELETE : Delete user details by using id >> Before deleteing
(check if he / she still have any issued books with them or not)
&&
(check if he / she still have any fine to be paid or not)

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

------------------------- Weekly Subscription --------------------

> > If the subscription type is weekly && if the subscription date is 30-05-2024
> > => then it is valid till 05-06-2024

## Fines for subscription :

withIn subscription date
=> If u miss the subscription >> 20/-
=> if we miss the subscription and renewal >> 20 \* per day

## Example :-

### Renewal Fine + Subscription Fine

> > Book1 : Name
> > week : Subscription Type
> > 30-05-2024 : Subscription Date
> > 31-05-2024 : Borrowed a book from library
> > 06-06-2024 : Return date
> > 15-06-2024 : Return date execed for : 2 days
> > 20 + (2 \* 5) = 30/-

------------------------- Basic Subscription [ Monthly ] --------------------

> > If the subscription type is Basic && if the subscription date is 30-05-2024
> > => then it is valid till 30-06-2024

## Fines for subscription :

    withIn subscription date

=> if we miss the renewal >> 25/-
=> if we miss the subscription >> 50/-
=> if we miss the subscription and renewal >> 50 + 25 \* per day

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

withIn subscription date
=> if we miss the renewal >> 100/-
=> if we miss the subscription >> 150/-
=> if we miss the subscription and renewal >> 150 + 100 \* per day

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

=> if we miss the renewal >> 150/-
=> if we miss the subscription >> 200/-
=> if we miss the subscription and renewal >> 200 + 150 \* per day

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

## /user/subscription-details/{id}

GET : User subscription details >> Data subscription >> Vaild Till >> Fines

## /books

GET : Get all the books details
POST : Update new book details

## /books/{id}

GET : Get book details by book id
PUT : Update a book by id

## /books/issuedBook

GET : Get details of issed books

## /books/issuedBook/withFine

GET : Get all issued books with their fines
