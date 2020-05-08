$('#resoudre').on('click', function(){
    var a = $('#a').val();
    var b = $('#b').val();
    var c = $('#c').val();
    if(a==0)
    {
        if(b!=0)
        {
            $('#solution').html("C'est une équation du 1er dégre.<br> x = " + -c/b);
        }
        else
        {
            $('#solution').html('Votre équation est impossible.');
        }
    }
    else
    {
        var deltat = b*b - (4*a*c);
        if(deltat < 0)
        {
            $('#solution').html("Discriminant négatif, il n'y a pas de solution.");
        }
        else if (deltat > 0)
        {
            var x1 = -b-Math.sqrt(deltat)/(2*a);
            var x2 = -b+Math.sqrt(deltat)/(2*a);
            $('#solution').html('Discriminant posittif, il y a deux solution different.<br> x1 = ' + x1 +'<br>x2 = '+ x2);
        }
        else
        {
            var x1 = -b/2*a;
            $('#solution').html('Discriminant egale à 0, deux solution egaux.<br> x1 = x2 = '+ x1);
        }
    }
});