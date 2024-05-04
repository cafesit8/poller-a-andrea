// Pollos
import pollo_mega from '../../public/pollos/pollo_mega.webp'
import pollo_oferta from '../../public/pollos/pollo_oferta.webp'
import pollo_entero from '../../public/pollos/pollo_entero.webp'
import pollo_medio from '../../public/pollos/mediopollo.webp'
import pollo_cuarto from '../../public/pollos/pollo_cuarto.webp'

// Parrillas
import parrillas_familiar from '../../public/parrillas/parrilla_familiar.webp'
import parrilla_personal from '../../public/parrillas/parrilla_personal.webp'
import mollejitas from '../../public/parrillas/mollejitas.webp'
import lomo_fino from '../../public/parrillas/lomo_fino.webp'
import pollo from '../../public/parrillas/pollo.webp'
import bistec from '../../public/parrillas/bistec.webp'
import chuleta_al_chancho from '../../public/parrillas/chuelta_al_chancho.webp'
import anticucho from '../../public/parrillas/anticucho.webp'
import rachi from '../../public/parrillas/rachi.webp'
import salchi_papa from '../../public/parrillas/salchi_papa.webp'

// Combinado de Parrillas
import mollejita_mas_anticucho from '../../public/combinado_parrillas/mollejita_mas_anticucho.webp'
import anticucho_mas_rachi from '../../public/combinado_parrillas/anticucho_mas_rachi.webp'
import molleja_mas_rachi from '../../public/combinado_parrillas/molleja_mas_rachi.webp'
import alitas_bbq from '../../public/combinado_parrillas/alitas_bbq.webp'
import nuggets from '../../public/combinado_parrillas/nuggets.webp'

// A la Carta
import tallarin_saltado_con_carne from '../../public/a_la_carta/tallarin_saltado_con_carne.webp'
import tallarin_saltado_con_pollo from '../../public/a_la_carta/tallarin_saltado_con_pollo.webp'
import bistec_con_papas from '../../public/a_la_carta/bistec_con_papas.webp'
import bistec_a_lo_pobre from '../../public/a_la_carta/bistec_a_lo_pobre.webp'
import churrasco_con_papas from '../../public/a_la_carta/churrasco_con_papas.webp'
import churrasco_a_lo_pobre from '../../public/a_la_carta/churrasco_a_lo_pobre.webp'
import lomo_saltado_con_carne from '../../public/a_la_carta/lomo_saltado.webp'
import lomo_saltado_con_pollo from '../../public/a_la_carta/lomo_saltado_de_pollo.webp'
import lomo_al_jugo from '../../public/a_la_carta/lomo_al_jugo.webp'
import pollo_broaster from '../../public/a_la_carta/pollo_broaster.webp'
import aeropuerto_carne from '../../public/a_la_carta/aeropuerto_carne.webp'
import aeropuerto_pollo from '../../public/a_la_carta/aeropuerto_pollo.webp'

// Chifa
import chaufa_con_carne from '../../public/chifa/chuafa con carne.jpg'
import chaufa_con_pollo from '../../public/chifa/chaufa con pollo.jpg'
import aeropuerto_mixto from '../../public/chifa/aeropuerto mixto.jpg'
import combinado_de_carne from '../../public/chifa/combinado con carne.jpg'
import combinado_de_pollo from '../../public/chifa/combinado de pollo.png'
import pollo_chijaukay from '../../public/chifa/pollo_chijaukay.jpg'
import tortilla from '../../public/chifa/tortilla.jpeg'
import salvaje from '../../public/chifa/salvaje.jpg'
import pollo_con_verduras from '../../public/chifa/pollo_con_verduras.jpg'
import aeropuerto_de_carne from '../../public/chifa/aeropuerto_de_carne.jpg'
import aeropuerto_de_pollo from '../../public/chifa/aeropuerto_de_pollo.jpg'
import sopa_wantan from '../../public/chifa/sopa_wantan.jpg'

// Bebidas
import gordita from '../../public/bebidas/gordita.webp'
import mediana from '../../public/bebidas/mediana.webp'
import litro1 from '../../public/bebidas/1litro.webp'
import litroymedio from '../../public/bebidas/littroymedio.webp'
import agua_mineral from '../../public/bebidas/agua mineral.webp'
import cerveza_cristal from '../../public/bebidas/cerveza_cristal.webp'
import pilsen from '../../public/bebidas/pilsen.webp'
import cusqueña_blanca from '../../public/bebidas/cusqueña_blanca.webp'
import cusqueña_negra from '../../public/bebidas/cusqueña_negra.webp'
import jarra_chicha_morada from '../../public/bebidas/jarra_chicha_morada.jpeg'
import chicha_medio from '../../public/bebidas/chicha_medio.webp'

// Guardiciones
import porcion_de_papas from '../../public/guardiciones/una_porcion_de_papas.webp'
import medio_porcion_de_papas from '../../public/guardiciones/media_porcion_papas.webp'
import porcion_ensalada from '../../public/guardiciones/porcion_ensalada.webp'
import media_porcion_ensalada from '../../public/guardiciones/media_porcion_ensalada.webp'
import porcion_chorizo from '../../public/guardiciones/porcion_chorizo.webp'
import media_porcion_chorizo from '../../public/guardiciones/media_porcion_chorizo.webp'
import porcion_arroz_chaufa from '../../public/guardiciones/porcion_arroz_chaufa.webp'
import porcion_arroz from '../../public/guardiciones/porcion_arroz.webp'

export type info = {
  img: string,
  title: string,
  items?: string[],
  price: string,
}

export const chickenPromos:info[] = [
  {
    img: pollo_mega.src,
    title: 'Pollo MEGA:',
    items: ['1 Pollo', '1/4 de Pollo', 'Porción de papas', 'Gaseosa 1/2L', 'Ensalada Mixta'],
    price: '68'
  },
  {
    img: pollo_oferta.src,
    title: 'Pollo OFERTA:',
    items: ['Porción de papas', 'Cremas', 'Ensalada Mixta', 'Gaseosa 1/2L'],
    price: '58'
  },
  {
    img: pollo_entero.src,
    title: 'Pollo ENTERO:',
    items: ['Porción de papas', 'Cremas', 'Ensalada Mixta'],
    price: '50'
  },
  {
    img: pollo_medio.src,
    title: '1/2 Pollo:',
    items: ['Porción de papas', 'Cremas', 'Ensalada Mixta'],
    price: '30'
  },
  {
    img: pollo_cuarto.src,
    title: '1/4 Pollo:',
    items: ['Porción de papas', 'Cremas', 'Ensalada Mixta'],
    price: '16'
  }
] as const

export const parrillasPromos: info[] = [
  {
    img: parrillas_familiar.src,
    title: 'Familiar',
    items: ['1/2 Pollo', '2 Palos de anticucho', '2 Churrascos + Mollejita', '2 Chuletas + Chorizo', 'Hot Dog + Papas'],
    price: '100'
  },{
    img: parrilla_personal.src,
    title: 'Personal',
    items: ['1/4 Pollo', '1 Palo de Anticucho', '1 Churrasco + Chuleta', 'Mollejita + Chorizo', 'Hotdog + Papas'],
    price: '60'
  },{
    img: mollejitas.src,
    title: 'Mollejitas',
    items: ['mollejitas'],
    price: '30'
  },{
    img: lomo_fino.src,
    title: 'Lomo Fino',
    items: ['Arroz', 'Ensalada', 'Porción de Papas'],
    price: '20'
  },{
    img: pollo.src,
    title: 'Pollo a la Parrilla',
    items: ['Ensalada', 'Porción de Papas'],
    price: '30'
  },{
    img: bistec.src,
    title: 'Bistec a la Parrilla',
    items: ['Ensalada', 'Porción de Papas'],
    price: '30'
  },{
    img: chuleta_al_chancho.src,
    title: 'Chuleta al Chancho',
    items: ['Ensalada', 'Porción de Papas'],
    price: '30'
  },{
    img: anticucho.src,
    title: 'Anticuchos',
    items: ['Anticucho', 'Cremas'],
    price: '30'
  },{
    img: rachi.src,
    title: 'Rachi',
    items: ['Porción de Papas', 'Ensalada', 'Cremas'],
    price: '30'
  },{
    img: salchi_papa.src,
    title: 'Salchipapa',
    items: ['Papas Fritas', 'Hot Dog', 'Ensalada'],
    price: '10'
  }
] as const

export const combinedParrillas: info[] = [
  {
    img: mollejita_mas_anticucho.src,
    title: 'Mollejita + Antichuco',
    items: ['Rachi', 'Papas Fritas', 'Ensalada'],
    price: '35'
  },{
    img: anticucho_mas_rachi.src,
    title: 'Antichuco + Rachi',
    items: ['Papas Fritas', 'Ensalada'],
    price: '35'
  },{
    img: molleja_mas_rachi.src,
    title: 'Mollejita + Rachi',
    items: ['Papas Fritas', 'Ensalada'],
    price: '35'
  },{
    img: alitas_bbq.src,
    title: 'Alias a La BBQ',
    items: ['Papas Fritas', 'Ensalada'],
    price: '30'
  },{
    img: nuggets.src,
    title: 'Pollo Nuggets',
    items: ['Papas Fritas', 'Ensalada'],
    price: '15'
  },
] as const

export const dishes: info[] = [
  {
    img: tallarin_saltado_con_carne.src,
    title: 'Tallarin Saltado c/ Carne',
    items: ['Papas', 'Tallarin', 'Ensalada'],
    price: '18'
  },
  {
    img: tallarin_saltado_con_pollo.src,
    title: 'Tallarin Saltado c/ Pollo',
    items: ['Papas', 'Pollo', 'Ensalada'],
    price: '16'
  },
  {
    img: bistec_con_papas.src,
    title: 'Bistec c/ Papas',
    items: ['Arroz', 'Ensalada', 'Cremas'],
    price: '20'
  },
  {
    img: bistec_a_lo_pobre.src,
    title: 'Bistec a lo Pobre',
    items: ['Arroz', 'Ensalada', 'Plátano Frito', 'Huevo Frito'],
    price: '25'
  },
  {
    img: churrasco_con_papas.src,
    title: 'Churrasco c/ Papa',
    items: ['Arroz', 'Ensalada', 'Cremas'],
    price: '20'
  },
  {
    img: churrasco_a_lo_pobre.src,
    title: 'Churrasco a lo Pobre',
    items: ['Arroz', 'Ensalada', 'Cremas'],
    price: '25'
  },{
    img: lomo_saltado_con_carne.src,
    title: 'Lomo Saltado de Carne',
    items: ['Papas', 'Arroz', 'Ensalada'],
    price: '22'
  },{
    img: lomo_saltado_con_pollo.src,
    title: 'Lomo Saltado de Pollo',
    items: ['Papas', 'Arroz', 'Ensalada'],
    price: '19'
  },{
    img: lomo_al_jugo.src,
    title: 'Lomo al Jugo',
    items: ['Arroz', 'Papas', 'Ensalada'],
    price: '25'
  },{
    img: pollo_broaster.src,
    title: 'Pollo Broaster',
    items: ['Arroz', 'Papas', 'Ensalada'],
    price: '20'
  },{
    img: aeropuerto_carne.src,
    title: 'Aeropuerto de Carne',
    items: ['Arroz', 'Papas', 'Ensalada'],
    price: '16'
  }, {
    img: aeropuerto_pollo.src,
    title: 'Aeropuerto de Pollo',
    items: ['Arroz', 'Papas', 'Ensalada'],
    price: '14'
  },
] as const

export const chifas: info[] = [
  {
    img: chaufa_con_carne.src,
    title: 'Chaufa c/ Carne',
    items: ['Carne', 'Arroz Chaufa', 'Ensalada'],
    price: '13'
  },{
    img: chaufa_con_pollo.src,
    title: 'Chaufa c/ Pollo',
    items: ['Pollo', 'Arroz Chaufa', 'Ensalada'],
    price: '12'
  },{
    img: aeropuerto_mixto.src,
    title: 'Aeropuerto Mixto',
    items: ['Huevo', 'Arroz Chaufa', 'Ensalada'],
    price: '15'
  },{
    img: combinado_de_carne.src,
    title: 'Combinado de Carne',
    items: ['Fideos', 'Arroz Chaufa', 'Carne'],
    price: '15'
  },{
    img: combinado_de_pollo.src,
    title: 'Combinado de Pollo',
    items: ['Fideos', 'Arroz Chaufa', 'Pollo'],
    price: '14'
  },{
    img: pollo_chijaukay.src,
    title: 'Pollo Chijaukay',
    items: ['Pollo', 'Arroz Chaufa', 'Ensalada'],
    price: '16'
  },{
    img: tortilla.src,
    title: 'Tortilla c/ Pollo y Verduras',
    items: ['Pollo', 'Verduras'],
    price: '15'
  },{
    img: salvaje.src,
    title: 'Salvaje',
    items: ['Pollo', 'Verduras', 'Cebolla China'],
    price: '14'
  },{
    img: pollo_con_verduras.src,
    title: 'Pollo c/ Verduras',
    items: ['Pollo', 'Verduras', 'Arroz Chaufa'],
    price: '15'
  },{
    img: aeropuerto_de_carne.src,
    title: 'Aeropuerto de Carne',
    items: ['Carne', 'Verduras', 'Arroz Chaufa'],
    price: '14'
  },{
    img: aeropuerto_de_pollo.src,
    title: 'Aeropuerto de Pollo',
    items: ['Pollo', 'Verduras', 'Arroz Chaufa'],
    price: '13'
  },{
    img: sopa_wantan.src,
    title: 'Sopa Wantan',
    items: ['Pollo', 'Verduras', 'Fideos'],
    price: '10'
  },
] as const

export const drinks: info[] = [
  {
    img: gordita.src,
    title: 'Gaseosa Gordita',
    items: [],
    price: '5'
  },
  {
    img: mediana.src,
    items: [],
    title: 'Gaseosa Mediana',
    price: '3'
  },{
    img: litro1.src,
    title: 'Gaseosa 1L',
    items: [],
    price: '8'
  },{
    img: litroymedio.src,
    title: 'Gaseosa 1 1/2L',
    items: [],
    price: '10'
  },{
    img: agua_mineral.src,
    title: 'Agua Mineral',
    items: [],
    price: '3'
  },{
    img: cerveza_cristal.src,
    title: 'Cerveza Cristal',
    items: [],
    price: '10'
  },{
    img: pilsen.src,
    title: 'Cerveza Pilsen',
    items: [],
    price: '10'
  },{
    img: cusqueña_blanca.src,
    title: 'Cerveza Cusqueña Blanca',
    items: [],
    price: '10'
  },{
    img: cusqueña_negra.src,
    title: 'Cerveza Cusqueña Negra',
    items: [],
    price: '10'
  },{
    img: jarra_chicha_morada.src,
    title: 'Jarra Chicha Morada 1L',
    items: [],
    price: '10'
  },{
    img: chicha_medio.src,
    title: 'Jarra Chicha Morada 1/2L',
    items: [],
    price: '6'
  }
] as const

export const fittings: info[] = [
  {
    img: porcion_de_papas.src,
    title: '1 Porción de Papas Fritas',
    items: [],
    price: '10'
  },{
    img: medio_porcion_de_papas.src,
    title: '1/2 Porción de Papas Fritas',
    items: [],
    price: '7'
  },{
    img: porcion_ensalada.src,
    title: '1 Porción de Ensalada',
    items: [],
    price: '7'
  },{
    img: media_porcion_ensalada.src,
    title: '1/2 Porción de Ensalada',
    items: [],
    price: '5'
  },{
    img: porcion_chorizo.src,
    title: '1 Porción de Chorizo',
    items: [],
    price: '7'
  },{
    img: media_porcion_chorizo.src,
    title: '1/2 Porción de Chorizo',
    items: [],
    price: '5'
  },{
    img: porcion_arroz_chaufa.src,
    title: 'Porción de Arroz Chaufa',
    items: [],
    price: '8'
  },{
    img: porcion_arroz.src,
    title: 'Porción de Arroz',
    items: [],
    price: '4'
  },
] as const
