function validateForm() 
{
    const Title = document.forms["addBook"]["Title"].value;
    const Author = document.forms["addBook"]["Author"].value;
    const Category = document.forms["addBook"]["Category"].value;
    const publishedYear = document.forms["addBook"]["publishedDate"].value;
    const Quantity = document.forms["addBook"]["Quantity"].value;
    if 
    (
        (Title === "") || 
        (Author === "") ||
        (Category === "") || 
        (publishedYear === "") ||
        (Quantity === "")
    ) 
    {
        alert("One or more input field is left empty");
        return false;
    }
}