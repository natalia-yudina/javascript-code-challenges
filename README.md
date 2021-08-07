### Example

1. Create an object of **Book** class:

const GoodToGreat = new Book("Good To Great", "Jim Collins", "662099", 4)

**availability** method returns "Low stock", because the number of available copies is less than 10.

2. Add 10 to the number of total copies by **restock** method.

**availability** method returns "In stock", because the number of available copies is 10 or greater.

3. Subtract 14 from the number of copies by **sell** method.

**availability** method returns "Out of stock", because the number of available copies is zero. 

<br>


<p align="center">
  <img alt="Example Available Books" src="../main/images/01_01_Available_Books.gif">
</p>
