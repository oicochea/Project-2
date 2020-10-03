# Project 2 - Self-List

A shopping item creating that allows you to keep track of what you need to buy, edit, delete, and update.

## Technolgies used
Node.js, Mongoose, Express and JSX

Used MVC File Structure

We have 1 model with 7 RESTful routes and Full CRUD

## Difficulties
- Tried adding a household input in the user schema and the shopping item schema. This would allow the user to create items for their own list and a household list.
 Each user after would have to create an account with the same house hold item. Would then use the mondo find syntax to pull req.session.household and pull the data.

- Problem was tyring to pass the household name and then pulling it as we did for the username. I don't think I am far away from the issue, but it should take the app to the desired level of functionality.

## Improvements
 Creating the household Authorization user with Admin responsabilities to delete and edit, to allow for edit hiarchy,

 exporting the data string to email or text to send to the purchasing party - looked into it and started messing with it, Curveball was the php code since mongo db can only export with as JSON or CSV file.
 Figured PHP language can be thrown in with HTML and should be a couple of more days of research.

 

