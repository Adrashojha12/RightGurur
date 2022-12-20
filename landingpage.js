// Only allow number keys + number pad

$('input[name="bsb"]').keypress
(
    function(event)
    {
        if (event.keyCode == 46 || event.keyCode == 8)
        {
        //do nothing
        }
        else 
        {
            if (event.keyCode < 48 || event.keyCode > 57 ) 
            {
			    event.preventDefault();	
			}	
        }
    }
);