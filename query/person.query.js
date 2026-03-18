// ==============================
// MongoDB Aggregation Practice
// ==============================

import { Person } from '../models/person.model'

// Q1
// Return all persons older than 25.

// Your pipeline below
Person.aggregate([{
    $match : {age: {$gt: 25}}
}])

// Q2
// Return only the name and age fields of every person.

// Your pipeline below
Person.aggregate([{
    $project : {
        _id: {
            name: 1,
            age: 1
        }
    }
}])


// Q3
// Sort all persons by age in descending order.

// Your pipeline below
Person.aggregate([{
    $sort : {age: -1}
}])


// Q4
// Return the first 5 persons in the collection.

// Your pipeline below
Person.aggregate([{
    $limit : 5
}])


// Q5
// Count how many persons exist in the collection.

// Your pipeline below
Person.aggregate([{
    $count : 'totalPersons'
}])


// Q6
// Find all persons whose age is between 20 and 30.

// Your pipeline below



// Q7
// Group persons by gender and count how many persons belong to each gender.

// Your pipeline below



// Q8
// Find the average age of all persons.

// Your pipeline below



// Q9
// Group persons by country and return the total number of persons per country.

// Your pipeline below



// Q10
// Find the youngest person in the collection.

// Your pipeline below



// Q11
// Find the oldest person in the collection.

// Your pipeline below



// Q12
// Return the total number of persons per age.

// Example output:
// { age: 21, count: 4 }

// Your pipeline below



// Q13
// Find the average age per country.

// Your pipeline below



// Q14
// Return the top 3 oldest persons.

// Your pipeline below



// Q15
// Add a new field called "isAdult" that is true if age >= 18 and false otherwise.

// Your pipeline below



// Q16
// Create a field called "ageCategory":
// "Young" if age < 18
// "Adult" if age 18 - 60
// "Senior" if age > 60

// Your pipeline below



// Q17
// Group persons by country and calculate:
// - total persons
// - average age

// Your pipeline below



// Q18
// Return only countries that have more than 5 persons.

// Your pipeline below



// Q19
// Sort countries by the number of persons in descending order.

// Your pipeline below



// Q20
// Create a leaderboard of countries with the highest average age.
// Sort from highest to lowest.

// Your pipeline below