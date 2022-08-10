function calc()
{
    var field1 = parseFloat(document.getElementById('field1').value);
    var field2 = parseFloat(document.getElementById('field2').value);
    
    var calcu = document.getElementById('calculators').value;
    
    if(calcu === '+')
    {
        document.getElementById('result').value = field1+field2;
    }
    
    if(calcu === '-')
    {
        document.getElementById('result').value = field1-field2;
    }
    
    if(calcu === '/')
    {
        document.getElementById('result').value = field1/field2;
    }
    
    if(calcu === 'X')
    {
        document.getElementById('result').value = field1*field2;
    }
    console.log(result. value)
}