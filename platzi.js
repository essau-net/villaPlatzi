var vp = document.getElementById("villa_platzi");
var papel = vp.getContext("2d");

vp.addEventListener("mousedown",activarMouse);


var nuevaVaca = document.getElementById("bVaca");
nuevaVaca.addEventListener("click",dibujarNuevaVaca);

var nuevoPollo = document.getElementById("bPollo");
nuevoPollo.addEventListener("click",dibujarNuevoPollo);

var nuevoCerdo = document.getElementById("bCerdo");
nuevoCerdo.addEventListener("click",dibujarNuevoCerdo);



var encontrado =10000;
var tipoAnimal = 0;

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var movimiento = 10;

var fondo = {
  URL: "tile.png",
  cargaOK: false
};

var vaca = {
  URL: "vaca.png",
  cargaOK: false,
};
vaca.position = [];

var pollo = {
  URL: "pollo.png",
  cargaOK: false
};
pollo.position = [];

var cerdo = {
  URL: "cerdo.png",
  cargaOK: false
};
cerdo.position = [];

var cantidad = 0;
var cantidadV = aleatorio (1,2);
var cantidadC = aleatorio (1,2);
var cantidadP = aleatorio (1,2);
var x,y;

alert("Para mover un animal con el mouse da un click para moverlo con las flechas haz doble click y despues teclea las felchas");
mayorMenor();
dibujarFondo();
dibujarVaca();
dibujarPollo();
dibujarCerdo();


function dibujarFondo ()
{
fondo.imagen = new Image();
fondo.imagen.src = fondo.URL;
fondo.imagen.addEventListener("load",cargarFondo);
}
function dibujarVaca ()
{
  vaca.imagen = new Image();
  vaca.imagen.src = vaca.URL;
  vaca.imagen.addEventListener("load",cargarVacas);
}

function dibujarNuevaVaca()
{
  x = aleatorio(0,5) * 80;
  y = aleatorio(0,5) * 80;
  vaca.position[vaca.position.length] = new Position(x,y);
  cantidadV += 1;
  mayorMenor();
  dibujarFondo();
  dibujarVaca();
  dibujarPollo();
  dibujarCerdo();
}

function dibujarPollo ()
{
  pollo.imagen = new Image();
  pollo.imagen.src = pollo.URL;
  pollo.imagen.addEventListener("load",cargarPollos);
}

function dibujarNuevoPollo()
{
  x = aleatorio(0,5) * 80;
  y = aleatorio(0,5) * 80;
  pollo.position[pollo.position.length] = new Position(x,y);
  cantidadP += 1;
  mayorMenor();
  dibujarFondo();
  dibujarVaca();
  dibujarPollo();
  dibujarCerdo();
}

function dibujarCerdo()
{
  cerdo.imagen = new Image();
  cerdo.imagen.src = cerdo.URL;
  cerdo.imagen.addEventListener("load",cargarCerdos);
}

function dibujarNuevoCerdo()
{
  x = aleatorio(0,5) * 80;
  y = aleatorio(0,5) * 80;
  cerdo.position[cerdo.position.length] = new Position(x,y);
  cantidadC += 1;
  mayorMenor();
  dibujarFondo();
  dibujarVaca();
  dibujarPollo();
  dibujarCerdo();
}

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  if ( vaca.position.length == 0)
  {
    for (var v = 0; v < cantidadV; v++)
    {
      x = aleatorio(0,5) * 80;
      y = aleatorio(0,5) * 80;
      vaca.position[v] = new Position(x,y);
    }
  }
    dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  if ( pollo.position.length == 0)
  {
    for (var v = 0; v < cantidadP; v++)
    {
      x = aleatorio(0,5) * 80;
      y = aleatorio(0,5) * 80;
      pollo.position[v] = new Position(x,y);
    }
  }
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  if ( cerdo.position.length == 0)
  {
    for (var v = 0; v < cantidadC; v++)
    {
      x = aleatorio(0,5) * 80;
      y = aleatorio(0,5) * 80;
      cerdo.position[v] = new Position(x,y);

    }
  }
  dibujar();
}

function dibujar ()
{

  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen,0,0);
  }
  if(vaca.cargaOK)
  {
    for (var v = 0; v < cantidadV; v++)
    {
      x = vaca.position[v].x;
  		y = vaca.position[v].y;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    for (var v = 0; v < cantidadP; v++)
    {
      x = pollo.position[v].x;
      y = pollo.position[v].y;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    for (var v = 0; v < cantidadC; v++)
    {
      x = cerdo.position[v].x;
      y = cerdo.position[v].y;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
}

function mayorMenor ()
{
  if(cantidadC > cantidadV)
  {
    if (cantidadC > cantidadP)
    {
    cantidad = cantidadC;
    }else {
      cantidad = cantidadP;
    }
  }
  else
    if (cantidadV > cantidadP)
    {
    cantidad = cantidadV;
    }else {
      cantidad = cantidadP
  }
}

function aleatorio (min,max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
function activarMouse(evento)
{
  var lugarClick = {
    x: evento.clientX,
    y: evento.clientY
  }

  if ( evento.detail == 1)
  {
    document.removeEventListener("keydown",mover);
    for(var buscando = 0; buscando < cantidad; buscando++)
    {
        if(buscando < cantidadV )
        {
          if ( ( vaca.position[buscando].x + 80 ) >= lugarClick.x && ( vaca.position[buscando].y + 100 ) >= lugarClick.y && vaca.position[buscando].x <= lugarClick.x && ( vaca.position[buscando].y + 70) <= lugarClick.y )
          {
            encontrado = buscando;
            vp.addEventListener("mousemove",dibujarMouse);
            vp.addEventListener("mouseup",parar);
            tipoAnimal = 1;
            break;
          }
        }
        if(buscando < cantidadP )
        {
          if( ( pollo.position[buscando].x + 80 ) >= lugarClick.x && ( pollo.position[buscando].y + 100 ) >= lugarClick.y &&  pollo.position[buscando].x <= lugarClick.x && pollo.position[buscando].y + 70  <= lugarClick.y )
          {
            encontrado = buscando;
            vp.addEventListener("mousemove",dibujarMouse);
            vp.addEventListener("mouseup",parar);
            tipoAnimal = 2;
            break;
          }
        }
        if( buscando < cantidadC )
        {
          if( ( cerdo.position[buscando].x + 80 ) >= lugarClick.x && ( cerdo.position[buscando].y + 100 ) >= lugarClick.y && cerdo.position[buscando].x <= lugarClick.x && cerdo.position[buscando].y + 70  <= lugarClick.y )
          {
            encontrado = buscando;
            vp.addEventListener("mousemove",dibujarMouse);
            vp.addEventListener("mouseup",parar);
            tipoAnimal = 3;
            break;
        }
      }
    }
      } else if ( evento.detail == 2)
      {
        activarTeclas(evento);
      }
}
function dibujarMouse(evento)
{

  if(tipoAnimal == 1)
  {
    vaca.position[encontrado].x = evento.clientX - 58;
    vaca.position[encontrado].y = evento.clientY - 90;
    dibujarFondo();
    dibujarVaca();
    dibujarPollo();
    dibujarCerdo();
  }
  else if (tipoAnimal == 2)
  {
    pollo.position[encontrado].x = evento.clientX - 45 ;
    pollo.position[encontrado].y = evento.clientY - 90;
    dibujarFondo();
    dibujarVaca();
    dibujarPollo();
    dibujarCerdo();
  }
  else if (tipoAnimal == 3)
  {
    cerdo.position[encontrado].x = evento.clientX - 45 ;
    cerdo.position[encontrado].y = evento.clientY - 90;
    dibujarFondo();
    dibujarVaca();
    dibujarPollo();
    dibujarCerdo();
  }
}
function parar ()
{
  vp.removeEventListener("mousemove",dibujarMouse);
}

function activarTeclas (evento)
{
    var lugarClick = {
      x: evento.clientX,
      y: evento.clientY
    }
    for(var buscando = 0; buscando < cantidad; buscando++)
    {

        if(  cantidadV > buscando )
        {
          if(  ( vaca.position[buscando].x + 80 ) >= lugarClick.x  && ( vaca.position[buscando].y + 100 ) >= lugarClick.y &&  vaca.position[buscando].x <= lugarClick.x && vaca.position[buscando].y <= lugarClick.y )
          {
            encontrado = buscando;
            animal = vaca.position;
            tipoAnimal = 1;
            document.addEventListener("keydown",mover);
          }
        }
        if (cantidadP > buscando)
        {
          if ( ( pollo.position[buscando].x + 80 ) >= lugarClick.x && ( pollo.position[buscando].y + 100 ) >= lugarClick.y && pollo.position[buscando].x <= lugarClick.x && pollo.position[buscando].y <= lugarClick.y )
          {
            encontrado = buscando;
            tipoAnimal = 2;
            animal = pollo.position;
            document.addEventListener("keydown",mover);
          }
        }
        if (cantidadC > buscando)
        {
          if ( ( cerdo.position[buscando].x + 80 ) >= lugarClick.x && ( cerdo.position[buscando].y + 100 ) >= lugarClick.y && cerdo.position[buscando].x <= lugarClick.x && cerdo.position[buscando].y <= lugarClick.y )
          {
            encontrado = buscando;
            tipoAnimal = 3;
            animal = cerdo.position;
            document.addEventListener("keydown",mover);
          }
        }

      }
}
function mover (evento)
{
  switch (evento.keyCode)
  {
    case teclas.UP:
      animal[encontrado].y -= movimiento;
      if( tipoAnimal == 1)
      {
        vaca.position = animal;
      }
      else if ( tipoAnimal == 2)
      {
        pollo.position = animal;
      }
      else if ( tipoAnimal == 3)
      {
        cerdo.position = animal;
      }
      dibujarFondo();
      dibujarVaca();
      dibujarPollo();
      dibujarCerdo();
      break;
    case teclas.DOWN:
      animal[encontrado].y += movimiento;
      if( tipoAnimal == 1)
      {
        vaca.position = animal;
      }
      else if ( tipoAnimal == 2)
      {
        pollo.position = animal;
      }
      else if ( tipoAnimal == 3)
      {
        cerdo.position = animal;
      }
      dibujarFondo();
      dibujarVaca();
      dibujarPollo();
      dibujarCerdo();
      break;
    case teclas.RIGHT:
      animal[encontrado].x += movimiento;
      if( tipoAnimal == 1)
      {
        vaca.position = animal;
      }
      else if ( tipoAnimal == 2)
      {
        pollo.position = animal;
      }
      else if ( tipoAnimal == 3)
      {
        cerdo.position = animal;
      }
      dibujarFondo();
      dibujarVaca();
      dibujarPollo();
      dibujarCerdo();
      break;
    case teclas.LEFT:
      animal[encontrado].x -= movimiento;
      if( tipoAnimal == 1)
      {
        vaca.position = animal;
      }
      else if ( tipoAnimal == 2)
      {
        pollo.position = animal;
      }
      else if ( tipoAnimal == 3)
      {
        cerdo.position = animal;
      }
      dibujarFondo();
      dibujarVaca();
      dibujarPollo();
      dibujarCerdo();
      break;
    default:
      alert("Oprime una flecha");
  }
}

class Position
{
  constructor(x,y)
  {

    this.x = parseInt(x);
    this.y = parseInt(y);
  }
}
