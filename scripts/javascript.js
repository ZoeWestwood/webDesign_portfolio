//Hamburger Menu 
$(function()
{
	$('button').click(function()
	{
  	$(this).toggleClass('expanded').siblings('div').slideToggle();
	});
});

//Form Validation
function validate()
{
    var form = document.querySelector('.contactForm');
    form.addEventListener("submit", validateForm)
}

function validateForm()
{
	var myform = document.querySelector('.contactForm');
	
	if (myform.firstName.value == "")
	{
		formValid = false;
        document.querySelector('.firstName').style.backgroundColor = "#ff6666";
		event.preventDefault();
	}
	
	else
	{
        document.querySelector('.firstName').style.backgroundColor = "#b3ffb3";
	}
	
	if(myform.lastName.value == "")
	{
		formValid = false;
        document.querySelector('.lastName').style.backgroundColor = "#ff6666";
		event.preventDefault();
	}
	
	else
	{
        document.querySelector('.lastName').style.backgroundColor = "#b3ffb3";
	}
    
    
    if(myform.email.value == "")
    {
        formValid = false;
        document.querySelector('.email').style.backgroundColor = "#ff6666";
        event.preventDefault();
    }
    
    else
	{
        document.querySelector('.email').style.backgroundColor = "#b3ffb3";
	}

    
    if(myform.message.value == "")
    {
        formValid = false;
        document.querySelector('.message').style.backgroundColor = "#ff6666";
        event.preventDefault();
    }
    
    else
	{
        document.querySelector('.message').style.backgroundColor = "#b3ffb3";
	}
    
}
//End Form Validation

//Slideshow

var mainImage;
function main()
{
    mainImage = document.querySelector('.mainImage');
	var image1 = document.querySelector('.image1Link');
	var image2 = document.querySelector('.image2Link');
	var image3 = document.querySelector('.image3Link');
	var image4 = document.querySelector('.image4Link');
	
	image1.addEventListener("click", image1Clicked);
	image2.addEventListener("click", image2Clicked);
	image3.addEventListener("click", image3Clicked);
	image4.addEventListener("click", image4Clicked);
}   

function image1Clicked() 
{
   mainImage.src = "images/slide1.jpg";
}

function image2Clicked() 
{
   mainImage.src = "images/slide2.jpg";
}

function image3Clicked() 
{
	mainImage.src = "images/slide3.jpg";
}

function image4Clicked()
{
	mainImage.src = "images/slide4.jpg";
}