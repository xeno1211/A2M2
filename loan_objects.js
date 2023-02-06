var borrowers = []
var borrower = {
    id: 1,
    customerName: "Jeremy Heiner",
    phoneNumber: "555-555-5555",
    address: "123 Main Street",
    loanAmount: 250000,
    interest: 2.0,
    loanTermYears: 30,
    loanType: "Housing",
    description: "House loan",
    active: true,
    calculatedLoanAmount: function(){
        return this.loanAmount*(1+(this.interest/100)*this.loanTermYears)
                
        
    }
}
var borrower2 = {
    id: 2,
    customerName: "Spongebob",
    phoneNumber: "555-555-5555",
    address: "123 Main Street",
    loanAmount: 15000,
    interest: 25.0,
    loanTermYears: 5,
    loanType: "Auto",
    description: "New Boat car",
    active: true,
    calculatedLoanAmount: function(){
        return this.loanAmount*(1+(this.interest/100)*this.loanTermYears)
                
        
    }
}
var borrower3 = {
    id: 3,
    customerName: "Elon Musk",
    phoneNumber: "555-555-5555",
    address: "123 Main Street",
    loanAmount: 44000000000,
    interest: 5.0,
    loanTermYears: 10,
    loanType: "Crazy",
    description: "Buying Twitter",
    active: true,
    calculatedLoanAmount: function(){
        return this.loanAmount*(1+(this.interest/100)*this.loanTermYears)
                
        
    }
}
var borrower4 = {
    id: 4,
    customerName: "Jane Doe",
    phoneNumber: "555-555-5555",
    address: "123 Main Street",
    loanAmount: 25,
    interest: 50.0,
    loanTermYears: 0.5,
    loanType: "Random",
    description: "Cup 'o Sugar",
    active: true,
    calculatedLoanAmount: function(){
        return this.loanAmount*(1+(this.interest/100)*this.loanTermYears)
                
        
    }
}
var borrower5 = {
    id: 5,
    customerName: "John Doe",
    phoneNumber: "555-555-5555",
    address: "123 Main Street",
    loanAmount: 1000,
    interest: 25.0,
    loanTermYears: 0.25,
    loanType: "Education",
    description: "Student Loan",
    active: true,
    calculatedLoanAmount: function(){
        return this.loanAmount*(1+(this.interest/100)*this.loanTermYears)
                
        
    }
}
borrowers.push(borrower)
borrowers.push(borrower2)
borrowers.push(borrower3)
borrowers.push(borrower4)
borrowers.push(borrower5)
borrowers.forEach((item)=> console.log("ID: "+item.id+"\n"+"Name: "+item.customerName+"\n"+
 "Phone: "+item.phoneNumber+"\n"+  "Address: " + item.address +
  "\n"+ "Loan Amount: "+ item.loanAmount + "\nInterest: " + item.interest+
 "\nTerm: " + item.loanTermYears + "\nType: " + item.loanType +
  "\nDescription: "+ item.description + "\nTotal Loan: "+item.calculatedLoanAmount()))
