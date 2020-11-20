# Project 2 - Self-List

A shopping item creating that allows you to keep track of what you need to buy, edit, delete, and update.

Can also create household List and Manage different list's

## Technolgies used
Node.js, Mongoose, Express and EJS
MVC file structure: Models, Views, Controllers
7 RESTful routes and full CRUD
sign up/log in with encrypted passwords and authorization
Used MVC File Structure
We have 1 model Schema

## Approach Taken

wireframing
server set up and working
create schema, models, seed data, and router
complete the 7 routes
Implement Household feature
Implement CSS

## Difficulties
- Tried adding a household input in the user schema and the shopping item schema. This would allow the user to create items for their own list and a household list, the difficulty came when passing the user sharedlist/household name and using that to pull from the mongo DB.

## Improvements
 Creating the household Authorization user with Admin responsabilities to delete and edit, to allow for edit hiarchy,
 exporting the data string to email or text to send to the purchasing party - looked into it and started messing with it, Curveball was the php code since mongo db can only export with as JSON or CSV file.
 - Need to look into PHP as the exporting language or a 3rd party that uses one of the major email servers.



