export class Ticket {
  constructor(vehiculo, placa) {
    this.vehiculo  = vehiculo;
    this.placa     = placa;
    this.extras    = [];
    this.fechaHora = new Date();
  }

  agregarExtra(servicioExtra) {
    this.extras.push(servicioExtra);
  }

  calcularTotal() {
    const sumExtras = this.extras.reduce((acc, e) => acc + e.precioFijo, 0);
    return this.vehiculo.precioBase + sumExtras;
  }

  async guardarEnSupabase(supabase) {
    const total = this.calcularTotal();

    const { data: ticket, error } = await supabase
      .from('tickets_venta')
      .insert({ placa: this.placa, total_final: total })
      .select()
      .single();

    if (error) throw error;

    if (this.extras.length > 0) {
      const detalles = this.extras.map(e => ({
        folio_ticket:    ticket.folio,
        id_extra:        e.idExtra,
        precio_aplicado: e.precioFijo
      }));
      await supabase.from('detalle_extras_ticket').insert(detalles);
    }

    return ticket;
  }
}