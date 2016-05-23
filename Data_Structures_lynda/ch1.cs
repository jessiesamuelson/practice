// First book
string BookTitle = "Dark and Sotrmy Night";
double bookPrice = 12.95;
bool bookPublished = true;


// Instead we can define a struct
// Define the struct
struct Book {
  string title;
  double price;
  bool isPublished;
  bool isHardback;
};

// Create a variable with that struct type
Book first;
// Set member variables
first.title = "Dark and Stormy Night";
first.price = 12.95;
first.isPublished = true;
first.isHardback = false;


// Jagged array
int[][] ticketSales = new int[12][]
for each month in ticketSales
  if april, june, september, november
    create array of 30 elements
  else if february and leap year
    create array of 29 elements
  else if february and not leap year
    create array of 28 elements 
  else
    create array of 31 elements
  end if
  add array to ticketSales[month]
end for