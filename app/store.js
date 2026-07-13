/* =========================================================
   PeluStore · "backend" del demo, 100% en el navegador.
   ---------------------------------------------------------
   - Datos en localStorage (namespace por negocio + versión).
   - Seed automático con historia realista relativa a HOY.
   - API pública basada en Promises con latencia simulada,
     para que la UI muestre estados de carga como si hubiera
     un servidor real. NO es un backend: es la demo visual.
   ---------------------------------------------------------
   REGLA DE FECHAS: siempre strings locales "YYYY-MM-DD" y
   "HH:MM". Date solo vía constructor local new Date(y,m,d).
   Nunca new Date("YYYY-MM-DD") ni toISOString() (UTC-3 =>
   corrimiento de un día).
   ========================================================= */
(function () {
  "use strict";

  var CFG = window.PELU_CONFIG || {};
  var SCHEMA_VERSION = 1;
  var RESEED_AFTER_DAYS = 3; // demo vieja => se regenera sola para verse "viva"
  var STORE_KEY = "pelu:" + (CFG.slug || "demo") + ":v" + SCHEMA_VERSION;

  /* =========================================
     Helpers de fecha (todo hora local)
     ========================================= */
  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  function dateToStr(d) {
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }

  function parseDate(str) { // "YYYY-MM-DD" -> Date local a medianoche
    var p = str.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function todayStr() { return dateToStr(new Date()); }

  function addDays(str, n) {
    var d = parseDate(str);
    d.setDate(d.getDate() + n); // el ctor local maneja bordes de mes/año
    return dateToStr(d);
  }

  function weekday(str) { return parseDate(str).getDay(); } // 0=domingo

  function timeToMin(t) { // "10:30" -> 630
    var p = t.split(":");
    return +p[0] * 60 + +p[1];
  }

  function minToTime(m) { return pad2(Math.floor(m / 60)) + ":" + pad2(m % 60); }

  function nowMinutes() {
    var n = new Date();
    return n.getHours() * 60 + n.getMinutes();
  }

  function diffDays(aStr, bStr) { // b - a en días
    return Math.round((parseDate(bStr) - parseDate(aStr)) / 86400000);
  }

  function fmtDateLong(str) {
    var f = new Intl.DateTimeFormat((CFG.pos && CFG.pos.locale) || "es-AR", {
      weekday: "long", day: "numeric", month: "long",
    });
    return f.format(parseDate(str));
  }

  function fmtDateShort(str) {
    var f = new Intl.DateTimeFormat((CFG.pos && CFG.pos.locale) || "es-AR", {
      weekday: "short", day: "numeric", month: "short",
    });
    return f.format(parseDate(str));
  }

  var moneyFmt = new Intl.NumberFormat((CFG.pos && CFG.pos.locale) || "es-AR", {
    style: "currency",
    currency: (CFG.pos && CFG.pos.currency) || "ARS",
    maximumFractionDigits: 0,
  });
  function fmtMoney(n) { return moneyFmt.format(n); }

  /* =========================================
     IDs y PRNG determinístico (seed estable)
     ========================================= */
  var uidCounter = 0;
  function uid() {
    uidCounter += 1;
    return Date.now().toString(36) + "-" + uidCounter.toString(36) + "-" + Math.random().toString(36).slice(2, 7);
  }

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* =========================================
     Storage con fallback en memoria
     ========================================= */
  var memoryDb = null; // si localStorage falla (Safari privado, etc.)

  function loadRaw() {
    if (memoryDb) return memoryDb;
    try {
      var raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return memoryDb;
    }
  }

  function saveRaw(db) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(db));
      memoryDb = null;
    } catch (e) {
      memoryDb = db; // la demo sigue andando, sin persistir entre recargas
    }
  }

  /* =========================================
     Seed: historia realista relativa a hoy
     ========================================= */
  var FIRST_NAMES = ["Jorge", "Marta", "Carlos", "Susana", "Roberto", "Graciela", "Daniel", "Silvia",
    "Eduardo", "Norma", "Gustavo", "Patricia", "Alejandro", "Mónica", "Fernando", "Liliana",
    "Ricardo", "Claudia", "Sergio", "Adriana", "Pablo", "Verónica", "Martín", "Laura",
    "Nicolás", "Carina", "Federico", "Sandra", "Diego", "Valeria"];
  var LAST_NAMES = ["Etcheverry", "Bianchi", "Fernández", "Rodríguez", "López", "Martínez", "Pereyra",
    "Sosa", "Romero", "Álvarez", "Torres", "Ruiz", "Ramírez", "Flores", "Acosta", "Benítez",
    "Medina", "Herrera", "Aguirre", "Giménez", "Molina", "Castro", "Ortiz", "Silva",
    "Núñez", "Luna", "Cabrera", "Ríos", "Ferrari", "Morales"];
  var CLIENT_NOTES = ["Prefiere que lo atienda el mismo peluquero", "Canas cada 5 semanas",
    "Viene con el hijo los sábados", "Pide poco de arriba", "Cliente de hace años", ""];

  function hashStr(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    return h;
  }

  function pick(rnd, arr) { return arr[Math.floor(rnd() * arr.length)]; }

  function weightedService(rnd, services) {
    // corte caballero pesa más; el resto se reparte
    var weights = services.map(function (s, i) { return i === 0 ? 4 : 1.2; });
    var total = weights.reduce(function (a, b) { return a + b; }, 0);
    var r = rnd() * total;
    for (var i = 0; i < services.length; i++) {
      r -= weights[i];
      if (r <= 0) return services[i];
    }
    return services[0];
  }

  function dayRanges(dateStr) {
    var h = (CFG.hours || {})[weekday(dateStr)];
    return h && h.length ? h : null;
  }

  function seedDb() {
    var rnd = mulberry32(hashStr(CFG.slug || "demo"));
    var services = CFG.services || [];
    var staff = CFG.staff || [];
    var slotMin = (CFG.booking && CFG.booking.slotMinutes) || 30;
    var windowDays = (CFG.booking && CFG.booking.windowDays) || 14;
    var methods = (CFG.pos && CFG.pos.paymentMethods) || [{ id: "efectivo" }];
    var today = todayStr();

    var db = {
      schemaVersion: SCHEMA_VERSION,
      seededAt: today,
      clients: [],
      bookings: [],
      sales: [],
    };

    // ---- Clientes ----
    var usedNames = {};
    for (var c = 0; c < 30; c++) {
      var name;
      do { name = pick(rnd, FIRST_NAMES) + " " + pick(rnd, LAST_NAMES); } while (usedNames[name]);
      usedNames[name] = true;
      var phone = "11 " + (4000 + Math.floor(rnd() * 5999)) + "-" + (1000 + Math.floor(rnd() * 8999));
      db.clients.push({
        id: uid(),
        name: name,
        phone: phone,
        phoneKey: phone.replace(/\D/g, ""),
        notes: rnd() < 0.25 ? pick(rnd, CLIENT_NOTES) : "",
        createdAt: addDays(today, -Math.floor(rnd() * 200) - 20),
      });
    }

    function pickMethod() {
      var r = rnd();
      if (methods.length < 3) return methods[0].id;
      return r < 0.45 ? methods[0].id : r < 0.8 ? methods[1].id : methods[2].id;
    }

    // Reserva + (si corresponde) venta
    function addBooking(dateStr, timeMin, staffId, status, source, svc) {
      var client = pick(rnd, db.clients);
      var booking = {
        id: uid(),
        clientId: client.id,
        staffId: staffId,
        serviceId: svc.id,
        date: dateStr,
        time: minToTime(timeMin),
        duration: svc.duration,
        price: svc.price, // snapshot: si cambia el config, la historia no se rompe
        status: status,
        source: source,
        createdAt: addDays(dateStr, -1 - Math.floor(rnd() * 6)),
      };
      db.bookings.push(booking);
      if (status === "completado") {
        db.sales.push({
          id: uid(),
          bookingId: booking.id,
          clientId: client.id,
          staffId: staffId,
          items: [{ serviceId: svc.id, name: svc.name, price: svc.price }],
          total: svc.price,
          paymentMethodId: pickMethod(),
          date: dateStr,
          time: minToTime(timeMin + svc.duration),
          createdAt: dateStr,
        });
      }
      return booking.duration;
    }

    var maxDuration = services.reduce(function (acc, s) { return Math.max(acc, s.duration); }, slotMin);

    // Llena un día para un staff con cierta ocupación aproximada
    function fillDay(dateStr, staffMember, occupancy, futureMode) {
      var ranges = dayRanges(dateStr);
      if (!ranges) return;
      if ((staffMember.daysOff || []).indexOf(weekday(dateStr)) !== -1) return;

      ranges.forEach(function (range) {
        var start = timeToMin(range[0]);
        var end = timeToMin(range[1]);
        var t = start;
        var freeLeft = Math.max(3, Math.round(((end - start) / slotMin) * (1 - occupancy)));
        var slotsLeft = Math.ceil((end - t) / slotMin);

        // En días futuros se protege una ventana contigua del largo del
        // servicio más largo: siempre hay lugar bookeable en un pitch.
        var protStart = -1, protEnd = -1;
        if (futureMode && end - start >= maxDuration) {
          var positions = Math.floor((end - start - maxDuration) / slotMin) + 1;
          protStart = start + Math.floor(rnd() * positions) * slotMin;
          protEnd = protStart + maxDuration;
        }

        while (t + slotMin <= end) {
          // garantiza >= 3 slots libres por staff en días futuros (pitch-safe)
          var mustStayFree = futureMode && freeLeft >= slotsLeft;
          var svc = weightedService(rnd, services);
          // el servicio elegido tiene que entrar antes del cierre y no pisar la ventana protegida
          var fits = t + svc.duration <= end &&
            !(protStart !== -1 && t < protEnd && t + svc.duration > protStart);
          if (!fits) svc = services.find(function (s) {
            return t + s.duration <= end && !(protStart !== -1 && t < protEnd && t + s.duration > protStart);
          });

          if (!mustStayFree && svc && rnd() < occupancy) {
            var status, isPastSlot = dateStr < todayStr() ||
              (dateStr === todayStr() && t + slotMin <= nowMinutes());
            if (isPastSlot) {
              var r = rnd();
              status = r < 0.88 ? "completado" : r < 0.95 ? "cancelado" : "no-show";
            } else {
              status = rnd() < 0.6 ? "confirmado" : "pendiente";
            }
            var dur = addBooking(dateStr, t, staffMember.id, status, "seed", svc);
            t += Math.max(dur, slotMin);
          } else {
            if (!mustStayFree) freeLeft -= 1;
            t += slotMin;
          }
          slotsLeft = Math.ceil((end - t) / slotMin);
        }
      });
    }

    // ---- 21 días de pasado (ocupación 60-75%) ----
    for (var d = 21; d >= 1; d--) {
      var pastDate = addDays(today, -d);
      staff.forEach(function (m) { fillDay(pastDate, m, 0.6 + rnd() * 0.15, false); });
    }

    // ---- Hoy: mañana ocupada (cobrada), resto mezclado ----
    staff.forEach(function (m) { fillDay(today, m, 0.65, false); });

    // ---- Futuro: ocupación decreciente, siempre con lugar ----
    for (var f = 1; f <= windowDays; f++) {
      var futDate = addDays(today, f);
      var occ = Math.max(0.15, 0.6 - (f * 0.03));
      staff.forEach(function (m) { fillDay(futDate, m, occ, true); });
    }

    saveRaw(db);
    return db;
  }

  function getDb() {
    var db = loadRaw();
    var needsReseed = !db ||
      db.schemaVersion !== SCHEMA_VERSION ||
      !db.seededAt ||
      diffDays(db.seededAt, todayStr()) >= RESEED_AFTER_DAYS;
    if (needsReseed) db = seedDb();
    return db;
  }

  /* =========================================
     Lógica de disponibilidad
     ========================================= */
  function overlaps(startA, endA, startB, endB) { return startA < endB && startB < endA; }

  var BLOCKING = { pendiente: true, confirmado: true, completado: true };

  function availabilityFor(db, serviceId, staffId, dateStr) {
    var svc = (CFG.services || []).find(function (s) { return s.id === serviceId; });
    var member = (CFG.staff || []).find(function (m) { return m.id === staffId; });
    if (!svc || !member) return [];

    var ranges = dayRanges(dateStr);
    if (!ranges) return [];
    if ((member.daysOff || []).indexOf(weekday(dateStr)) !== -1) return [];

    var today = todayStr();
    if (dateStr < today) return [];
    var lead = (CFG.booking && CFG.booking.leadTimeMinutes) || 0;
    var minStart = dateStr === today ? nowMinutes() + lead : -1;

    var slotMin = (CFG.booking && CFG.booking.slotMinutes) || 30;
    var taken = db.bookings.filter(function (b) {
      return b.staffId === staffId && b.date === dateStr && BLOCKING[b.status];
    }).map(function (b) {
      var s = timeToMin(b.time);
      return [s, s + b.duration];
    });

    var out = [];
    ranges.forEach(function (range) {
      var start = timeToMin(range[0]);
      var end = timeToMin(range[1]);
      for (var t = start; t + svc.duration <= end; t += slotMin) {
        if (t < minStart) continue;
        var busy = taken.some(function (iv) { return overlaps(t, t + svc.duration, iv[0], iv[1]); });
        if (!busy) out.push(minToTime(t));
      }
    });
    return out;
  }

  /* =========================================
     API pública (Promises + latencia simulada)
     ========================================= */
  function api(fn) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        try { resolve(fn()); } catch (e) { reject(e); }
      }, 150 + Math.random() * 250);
    });
  }

  function findService(id) { return (CFG.services || []).find(function (s) { return s.id === id; }); }
  function findStaff(id) { return (CFG.staff || []).find(function (m) { return m.id === id; }); }

  function expandBooking(db, b) {
    var svc = findService(b.serviceId);
    var member = findStaff(b.staffId);
    var client = db.clients.find(function (c) { return c.id === b.clientId; });
    var sale = db.sales.find(function (s) { return s.bookingId === b.id; });
    return {
      id: b.id, date: b.date, time: b.time, duration: b.duration,
      price: b.price, status: b.status, source: b.source,
      serviceId: b.serviceId, serviceName: svc ? svc.name : b.serviceId,
      staffId: b.staffId, staffName: member ? member.name : b.staffId,
      clientId: b.clientId,
      clientName: client ? client.name : "—",
      clientPhone: client ? client.phone : "",
      paid: !!sale,
    };
  }

  window.PeluStore = {
    /* ---- consultas ---- */
    getAvailability: function (params) {
      return api(function () {
        var db = getDb();
        return availabilityFor(db, params.serviceId, params.staffId, params.date);
      });
    },

    /* Disponibilidad de varios staff a la vez (para "cualquiera") */
    getAvailabilityAll: function (params) {
      return api(function () {
        var db = getDb();
        var result = {};
        (CFG.staff || []).forEach(function (m) {
          result[m.id] = availabilityFor(db, params.serviceId, m.id, params.date);
        });
        return result;
      });
    },

    listBookings: function (filters) {
      filters = filters || {};
      return api(function () {
        var db = getDb();
        return db.bookings.filter(function (b) {
          if (filters.date && b.date !== filters.date) return false;
          if (filters.staffId && b.staffId !== filters.staffId) return false;
          if (filters.status && b.status !== filters.status) return false;
          if (filters.from && b.date < filters.from) return false;
          if (filters.to && b.date > filters.to) return false;
          return true;
        }).map(function (b) { return expandBooking(db, b); })
          .sort(function (a, b2) { return (a.date + a.time) < (b2.date + b2.time) ? -1 : 1; });
      });
    },

    listClients: function (query) {
      return api(function () {
        var db = getDb();
        var q = (query || "").trim().toLowerCase();
        return db.clients.filter(function (c) {
          return !q || c.name.toLowerCase().indexOf(q) !== -1 || c.phoneKey.indexOf(q.replace(/\D/g, "") || " ") !== -1;
        }).map(function (c) {
          var visits = db.bookings.filter(function (b) { return b.clientId === c.id && b.status === "completado"; });
          var spent = db.sales.filter(function (s) { return s.clientId === c.id; })
            .reduce(function (acc, s) { return acc + s.total; }, 0);
          var last = visits.reduce(function (acc, b) { return b.date > acc ? b.date : acc; }, "");
          return {
            id: c.id, name: c.name, phone: c.phone, notes: c.notes,
            visits: visits.length, totalSpent: spent, lastVisit: last || null,
          };
        }).sort(function (a, b) { return b.visits - a.visits; });
      });
    },

    getClientHistory: function (clientId) {
      return api(function () {
        var db = getDb();
        return db.bookings.filter(function (b) { return b.clientId === clientId; })
          .map(function (b) { return expandBooking(db, b); })
          .sort(function (a, b) { return (a.date + a.time) > (b.date + b.time) ? -1 : 1; });
      });
    },

    getDailySummary: function (dateStr) {
      return api(function () {
        var db = getDb();
        var sales = db.sales.filter(function (s) { return s.date === dateStr; });
        var total = sales.reduce(function (acc, s) { return acc + s.total; }, 0);
        var byMethod = {};
        var byStaff = {};
        sales.forEach(function (s) {
          byMethod[s.paymentMethodId] = (byMethod[s.paymentMethodId] || 0) + s.total;
          byStaff[s.staffId] = (byStaff[s.staffId] || 0) + s.total;
        });
        return {
          date: dateStr,
          count: sales.length,
          total: total,
          avgTicket: sales.length ? Math.round(total / sales.length) : 0,
          byMethod: byMethod,
          byStaff: byStaff,
          sales: sales.slice().sort(function (a, b) { return a.time < b.time ? 1 : -1; }),
        };
      });
    },

    /* ---- mutaciones ---- */
    createBooking: function (params) {
      return api(function () {
        var db = getDb();
        var svc = findService(params.serviceId);
        if (!svc) throw new Error("Servicio inválido");

        // re-chequeo de disponibilidad (por si otro tab reservó el mismo slot)
        var free = availabilityFor(db, params.serviceId, params.staffId, params.date);
        if (free.indexOf(params.time) === -1) {
          var err = new Error("El horario ya no está disponible");
          err.code = "SLOT_TAKEN";
          throw err;
        }

        var phoneKey = (params.phone || "").replace(/\D/g, "");
        var client = db.clients.find(function (c) { return c.phoneKey && c.phoneKey === phoneKey; });
        if (!client) {
          client = {
            id: uid(), name: params.name, phone: params.phone,
            phoneKey: phoneKey, notes: "", createdAt: todayStr(),
          };
          db.clients.push(client);
        }

        var booking = {
          id: uid(),
          clientId: client.id,
          staffId: params.staffId,
          serviceId: params.serviceId,
          date: params.date,
          time: params.time,
          duration: svc.duration,
          price: svc.price,
          status: "pendiente",
          source: params.source || "web",
          createdAt: todayStr(),
        };
        db.bookings.push(booking);
        saveRaw(db);
        return expandBooking(db, booking);
      });
    },

    updateBookingStatus: function (id, status) {
      return api(function () {
        var db = getDb();
        var b = db.bookings.find(function (x) { return x.id === id; });
        if (!b) throw new Error("Reserva no encontrada");
        b.status = status;
        saveRaw(db);
        return expandBooking(db, b);
      });
    },

    chargeBooking: function (params) {
      return api(function () {
        var db = getDb();
        var b = db.bookings.find(function (x) { return x.id === params.bookingId; });
        if (!b) throw new Error("Reserva no encontrada");
        if (db.sales.some(function (s) { return s.bookingId === b.id; })) {
          throw new Error("Esta reserva ya fue cobrada");
        }
        var svc = findService(b.serviceId);
        b.status = "completado";
        // la venta se registra en el día del turno: la caja de ese día
        // refleja el cobro al instante (coherente en la vista del panel)
        var sale = {
          id: uid(),
          bookingId: b.id,
          clientId: b.clientId,
          staffId: b.staffId,
          items: [{ serviceId: b.serviceId, name: svc ? svc.name : b.serviceId, price: b.price }],
          total: b.price,
          paymentMethodId: params.paymentMethodId,
          date: b.date,
          time: minToTime(Math.min(timeToMin(b.time) + b.duration, 1439)),
          createdAt: todayStr(),
        };
        db.sales.push(sale);
        saveRaw(db);
        return sale;
      });
    },

    resetDemo: function () {
      return api(function () {
        try { localStorage.removeItem(STORE_KEY); } catch (e) { /* fallback en memoria */ }
        memoryDb = null;
        seedDb();
        return true;
      });
    },

    /* ---- helpers sincrónicos compartidos por booking/admin ---- */
    helpers: {
      todayStr: todayStr,
      addDays: addDays,
      weekday: weekday,
      dayRanges: dayRanges,
      fmtDateLong: fmtDateLong,
      fmtDateShort: fmtDateShort,
      fmtMoney: fmtMoney,
      timeToMin: timeToMin,
      minToTime: minToTime,
      storeKey: STORE_KEY,
    },
  };

  // Seed al cargar, así el primer fetch ya encuentra datos
  getDb();
})();
