export function Mascara(event) {
  const val = event.target.value
    .replace(/\D/g, '')
    .replace(/^0*/, '')
    .padStart(3, '0')
    
  event.target.value = 'R$ ' + val.slice(0, -2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ',' + val.slice(-2)
}
