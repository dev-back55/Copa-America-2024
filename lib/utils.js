import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function obtenerDiaDeLaSemana(fechaString) {
  // Convertir la cadena 'dd/mm/yyyy' a 'yyyy-mm-dd' para que el constructor Date la entienda
  const partes = fechaString.split('/');
  const fechaISO = `${partes[2]}-${partes[1]}-${partes[0]}`;

  // Crear un objeto Date con el ajuste de la zona horaria local
  const [year, month, day] = fechaISO.split('-').map(Number);
  const fecha = new Date(year, month - 1, day);

  // Obtener el día de la semana (0 es domingo, 6 es sábado)
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const diaDeLaSemana = fecha.getDay();

  // Retornar el nombre del día de la semana
  return diasSemana[diaDeLaSemana];
}

// Función para agrupar países por grupo
export function agruparPaisesPorGrupo(paises) {
  return paises.reduce((grupos, pais) => {
    const { grupo } = pais;
    if (!grupos[grupo]) {
      grupos[grupo] = [];
    }
    grupos[grupo].push(pais);
    return grupos;
  }, {});
}

export const paises = [
  {
    "grupo": "A",
    "pg": "0",
    "pt": "0",
    "pais": "Argentina",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/argentina.webp"
  },
  {
    "grupo": "A",
    "pg": "0",
    "pt": "0",
    "pais": "Canada",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/canada.webp"
  },
  {
    "grupo": "A",
    "pg": "0",
    "pt": "0",
    "pais": "Chile",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/chile.webp"
  },
  {
    "grupo": "A",
    "pg": "0",
    "pt": "0",
    "pais": "Peru",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/peru.webp"
  },
  {
    "grupo": "B",
    "pg": "0",
    "pt": "0",
    "pais": "Ecuador",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/ecuador.webp"
  },
  {
    "grupo": "B",
    "pg": "0",
    "pt": "0",
    "pais": "Jamaica",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/jamaica.webp"
  },
  {
    "grupo": "B",
    "pg": "0",
    "pt": "0",
    "pais": "Mexico",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/mexico.webp"
  },
  {
    "grupo": "B",
    "pg": "0",
    "pt": "0",
    "pais": "Venezuela",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/venezuela.webp"
  },
  {
    "grupo": "C",
    "pg": "0",
    "pt": "0",
    "pais": "Bolivia",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/bolivia.webp"
  },
  {
    "grupo": "C",
    "pg": "0",
    "pt": "0",
    "pais": "Estados Unidos",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/estadosunidos.webp"
  },
  {
    "grupo": "C",
    "pg": "0",
    "pt": "0",
    "pais": "Panama",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/panama.webp"
  },
  {
    "grupo": "C",
    "pg": "0",
    "pt": "0",
    "pais": "Uruguay",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/uruguay.webp"
  },
  {
    "grupo": "D",
    "pg": "0",
    "pt": "0",
    "pais": "Brasil",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/brasil.webp"
  },
  {
    "grupo": "D",
    "pg": "0",
    "pt": "0",
    "pais": "Colombia",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/colombia.webp"
  },
  {
    "grupo": "D",
    "pg": "0",
    "pt": "0",
    "pais": "Costa Rica",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/costarica.webp"
  },
  {
    "grupo": "D",
    "pg": "0",
    "pt": "0",
    "pais": "Paraguay",
    "pe": "0",
    "pj": "0",
    "bandera": "/images/paraguay.webp"
  }
]

export const faseGrupos = [
  {
    "pais1": "Argentina",
    "bandera1": "/images/argentina.webp",
    "gol1": "0",
    "pais2": "Canada",
    "bandera2": "/images/canada.webp",
    "gol2": "0",
    "fecha": "20/06/2024",
    "hora": "21:00",
    "estadio": "Mercedes Benz Stadium - Atlanta, GA",
    "grupo": "A"
  },
  {
    "pais1": "Peru",
    "bandera1": "/images/peru.webp",
    "gol1": "0",
    "pais2": "Chile",
    "bandera2": "/images/chile.webp",
    "gol2": "0",
    "fecha": "21/06/2024",
    "hora": "21:00",
    "estadio": "AT&T Stadium - Arlington, TX",
    "grupo": "A"
  },
{
    "pais1": "Ecuador",
    "bandera1": "/images/ecuador.webp",
    "gol1": "0",
    "pais2": "Venezuela",
    "bandera2": "/images/venezuela.webp",
    "gol2": "0",
    "fecha": "22/06/2024",
    "hora": "19:00",
    "estadio": "Levi's® Stadium - Santa Clara, CA",
    "grupo": "B"
  },
  {
    "pais1": "Mexico",
    "bandera1": "/images/mexico.webp",
    "gol1": "0",
    "pais2": "Jamaica",
    "bandera2": "/images/jamaica.webp",
    "gol2": "0",
    "fecha": "22/06/2024",
    "hora": "22:00",
    "estadio": "NRG Stadium - Houston, TX",
    "grupo": "B"
  },
  {
    "pais1": "Estados Unidos",
    "bandera1": "/images/estadosunidos.webp",
    "gol1": "0",
    "pais2": "Bolivia",
    "bandera2": "/images/bolivia.webp",
    "gol2": "0",
    "fecha": "23/06/2024",
    "hora": "19:00",
    "estadio": "AT&T Stadium - Arlington, TX",
    "grupo": "C"
  },
  {
    "pais1": "Uruguay",
    "bandera1": "/images/uruguay.webp",
    "gol1": "0",
    "pais2": "Panama",
    "bandera2": "/images/panama.webp",
    "gol2": "0",
    "fecha": "23/06/2024",
    "hora": "22:00",
    "estadio": "Hard Rock Stadium - Miami, FL",
    "grupo": "C"
  },
  {
    "pais1": "Colombia",
    "bandera1": "/images/colombia.webp",
    "gol1": "0",
    "pais2": "Paraguay",
    "bandera2": "/images/paraguay.webp",
    "gol2": "0",
    "fecha": "24/06/2024",
    "hora": "19:00",
    "estadio": "NRG Stadium - Houston, TX",
    "grupo": "D"
  },
  {
    "pais1": "Brasil",
    "bandera1": "/images/brasil.webp",
    "gol1": "0",
    "pais2": "Costa Rica",
    "bandera2": "/images/costarica.webp",
    "gol2": "0",
    "fecha": "24/06/2024",
    "hora": "22:00",
    "estadio": "SoFi Stadium - Inglewood, CA",
    "grupo": "D"
  },
  {
    "pais1": "Peru",
    "bandera1": "/images/peru.webp",
    "gol1": "0",
    "pais2": "Canada",
    "bandera2": "/images/canada.webp",
    "gol2": "0",
    "fecha": "25/06/2024",
    "hora": "19:00",
    "estadio": "Children's Mercy Park - Kansas City, KS",
    "grupo": "A"
  },
  {
    "pais1": "Argentina",
    "bandera1": "/images/argentina.webp",
    "gol1": "0",
    "pais2": "Chile",
    "bandera2": "/images/chile.webp",
    "gol2": "0",
    "fecha": "25/06/2024",
    "hora": "22:00",
    "estadio": "MetLife Stadium - East Rutherford, NJ",
    "grupo": "A"
  },
  {
    "pais1": "Ecuador",
    "bandera1": "/images/ecuador.webp",
    "gol1": "0",
    "pais2": "Jamaica",
    "bandera2": "/images/jamaica.webp",
    "gol2": "0",
    "fecha": "26/06/2024",
    "hora": "19:00",
    "estadio": "Allegiant Stadium - Las Vegas, NV",
    "grupo": "B"
  },
  {
    "pais1": "Venezuela",
    "bandera1": "/images/venezuela.webp",
    "gol1": "0",
    "pais2": "Mexico",
    "bandera2": "/images/mexico.webp",
    "gol2": "0",
    "fecha": "26/06/2024",
    "hora": "22:00",
    "estadio": "SoFi Stadium - Inglewood, CA",
    "grupo": "B"
  },
  {
    "pais1": "Panama",
    "bandera1": "/images/panama.webp",
    "gol1": "0",
    "pais2": "Estados Unidos",
    "bandera2": "/images/estadosunidos.webp",
    "gol2": "0",
    "fecha": "27/06/2024",
    "hora": "19:00",
    "estadio": "Mercedes Benz Stadium - Atlanta, GA",
    "grupo": "C"
  },
  {
    "pais1": "Uruguay",
    "bandera1": "/images/uruguay.webp",
    "gol1": "0",
    "pais2": "Bolivia",
    "bandera2": "/images/bolivia.webp",
    "gol2": "0",
    "fecha": "27/06/2024",
    "hora": "22:00",
    "estadio": "MetLife Stadium - East Rutherford, NJ",
    "grupo": "C"
  },
  {
    "pais1": "Colombia",
    "bandera1": "/images/colombia.webp",
    "gol1": "0",
    "pais2": "Costa Rica",
    "bandera2": "/images/costarica.webp",
    "gol2": "0",
    "fecha": "28/06/2024",
    "hora": "19:00",
    "estadio": "State Farm Stadium - Glendale, AZ",
    "grupo": "D"
  },
  {
    "pais1": "Paraguay",
    "bandera1": "/images/paraguay.webp",
    "gol1": "0",
    "pais2": "Brasil",
    "bandera2": "/images/brasil.webp",
    "gol2": "0",
    "fecha": "28/06/2024",
    "hora": "22:00",
    "estadio": "Allegiant Stadium - Las Vegas, NV",
    "grupo": "D"
  },
  {
    "pais1": "Argentina",
    "bandera1": "/images/argentina.webp",
    "gol1": "0",
    "pais2": "Peru",
    "bandera2": "/images/peru.webp",
    "gol2": "0",
    "fecha": "29/06/2024",
    "hora": "21:00",
    "estadio": "Hard Rock Stadium - Miami, FL",
    "grupo": "A"
  },
  {
    "pais1": "Canada",
    "bandera1": "/images/canada.webp",
    "gol1": "0",
    "pais2": "Chile",
    "bandera2": "/images/chile.webp",
    "gol2": "0",
    "fecha": "29/06/2024",
    "hora": "21:00",
    "estadio": "Inter&Co Stadium - Orlando, FL",
    "grupo": "A"
  },
  {
    "pais1": "Mexico",
    "bandera1": "/images/mexico.webp",
    "gol1": "0",
    "pais2": "Ecuador",
    "bandera2": "/images/ecuador.webp",
    "gol2": "0",
    "fecha": "30/06/2024",
    "hora": "21:00",
    "estadio": "State Farm Stadium - Glendale, AZ",
    "grupo": "B"
  },
  {
    "pais1": "Jamaica",
    "bandera1": "/images/jamaica.webp",
    "gol1": "0",
    "pais2": "Venezuela",
    "bandera2": "/images/venezuela.webp",
    "gol2": "0",
    "fecha": "30/06/2024",
    "hora": "21:00",
    "estadio": "Q2 Stadium - Austin, TX",
    "grupo": "B"
  },
  {
    "pais1": "Estados Unidos",
    "bandera1": "/images/estadosunidos.webp",
    "gol1": "0",
    "pais2": "Uruguay",
    "bandera2": "/images/uruguay.webp",
    "gol2": "0",
    "fecha": "01/07/2024",
    "hora": "22:00",
    "estadio": "GEHA Field at Arrowhead - Kansas City, MO",
    "grupo": "C"
  },
  {
    "pais1": "Bolivia",
    "bandera1": "/images/bolivia.webp",
    "gol1": "0",
    "pais2": "Panama",
    "bandera2": "/images/panama.webp",
    "gol2": "0",
    "fecha": "01/07/2024",
    "hora": "22:00",
    "estadio": "Inter&Co Stadium - Orlando, FL",
    "grupo": "C"
  },
  {
    "pais1": "Brasil",
    "bandera1": "/images/brasil.webp",
    "gol1": "0",
    "pais2": "Colombia",
    "bandera2": "/images/colombia.webp",
    "gol2": "0",
    "fecha": "02/07/2024",
    "hora": "22:00",
    "estadio": "Levi's® Stadium - Santa Clara, CA",
    "grupo": "D"
  },
  {
    "pais1": "Costa Rica",
    "bandera1": "/images/costarica.webp",
    "gol1": "0",
    "pais2": "Paraguay",
    "bandera2": "/images/paraguay.webp",
    "gol2": "0",
    "fecha": "02/07/2024",
    "hora": "22:00",
    "estadio": "Q2 Stadium - Austin, TX",
    "grupo": "D"
  },
]

export const cuartos = [
  {
    "pais1": "1A",
    "bandera1": "",
    "gol1": "0",
    "pais2": "2B",
    "bandera2": "",
    "gol2": "0",
    "fecha": "04/07/2024",
    "hora": "22:00",
    "estadio": "NRG Stadium - Houston, TX",
    "partido": "#25",
  },
  {
    "pais1": "1B",
    "bandera1": "",
    "gol1": "0",
    "pais2": "2A",
    "bandera2": "",
    "gol2": "0",
    "fecha": "05/07/2024",
    "hora": "22:00",
    "estadio": "AT&T Stadium - Arlington, TX",
    "partido": "#26",
  },
{
    "pais1": "1C",
    "bandera1": "",
    "gol1": "0",
    "pais2": "2B",
    "bandera2": "",
    "gol2": "0",
    "fecha": "06/07/2024",
    "hora": "22:00",
    "estadio": "Allegiant Stadium - Las Vegas, NV",
    "partido": "#27",
  },
  {
    "pais1": "1D",
    "bandera1": "",
    "gol1": "0",
    "pais2": "2C",
    "bandera2": "",
    "gol2": "0",
    "fecha": "06/07/2024",
    "hora": "19:00",
    "estadio": "State Farm Stadium - Glendale, AZ",
    "partido": "#28",
  }
]

export const semifinales = [
  {
    "pais1": "V25",
    "bandera1": "",
    "gol1": "0",
    "pais2": "V26",
    "bandera2": "",
    "gol2": "0",
    "fecha": "09/07/2024",
    "hora": "21:00",
    "estadio": "MetLife Stadium - East Rutherford, NJ",
    "partido": "#29",
  },
  {
    "pais1": "V27",
    "bandera1": "",
    "gol1": "0",
    "pais2": "V28",
    "bandera2": "",
    "gol2": "0",
    "fecha": "10/07/2024",
    "hora": "21:00",
    "estadio": "Bank of America Stadium - Charlotte, NC",
    "partido": "#30",
  }
]

export const final = [
  {
    "pais1": "P29",
    "bandera1": "",
    "gol1": "0",
    "pais2": "P30",
    "bandera2": "",
    "gol2": "0",
    "fecha": "13/07/2024",
    "hora": "21:00",
    "dia": "Sáb",
    "estadio": "Bank of America Stadium - Charlotte, NC",
    "partido": "#31",
    "puesto": "3º Puesto",
  },
  {
    "pais1": "V29",
    "bandera1": "",
    "gol1": "0",
    "pais2": "V30",
    "bandera2": "",
    "gol2": "0",
    "fecha": "14/07/2024",
    "hora": "21:00",
    "dia": "Dom",
    "estadio": "Hard Rock Stadium - Miami, FL",
    "partido": "#32",
    "puesto": "Final",
  }
]