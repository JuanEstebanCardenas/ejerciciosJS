function CalcularGPA(promedio, maxCalif)
{
    const porcentaje = promedio * 100/maxCalif;
    const GPA = (porcentaje/20) - 1;
    console.log("su porcentaje es " + porcentaje)
    console.log(" su GPA es " + GPA)

}