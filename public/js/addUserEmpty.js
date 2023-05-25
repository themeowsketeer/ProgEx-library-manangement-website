function validateForm()
{
    const fullName = document.forms["addUser"]["fullName"].value;
    const userName = document.forms["addUser"]["userName"].value;
    const Age = document.forms["addUser"]["Age"].value;
    const Email = document.forms["addUser"]["Email"].value;
    if 
    (
        (fullName === "") || 
        (userName === "") ||
        (Age === "") || 
        (Email === "")
    ) 
    {
        alert("One or more input field is left empty");
        return false;
    }
}