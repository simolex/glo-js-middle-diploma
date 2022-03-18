(() => {
  "use strict";
  console.log("Звонок заказан"),
    ((e, t = !1) => {
      const n = document.querySelectorAll(".count_1 span"),
        o = document.querySelectorAll(".count_2 span"),
        l = document.querySelectorAll(".count_3 span"),
        s = document.querySelectorAll(".count_4 span"),
        c = new Date(e).getTime();
      let r;
      const a = (e) => (e < 10 ? "0" + e : "" + e);
      r = setInterval(() => {
        const e = (() => {
          const e = new Date().getTime(),
            n = (c - e) / 1e3,
            o = Math.floor(n / 3600 / 24);
          let l = Math.floor(n / 3600);
          l = t ? l % 24 : l;
          const s = Math.floor(n / 60) % 60,
            r = Math.floor(n) % 60;
          return { timeRemaining: n, days: a(o), hours: a(l), minutes: a(s), seconds: a(r) };
        })();
        if (e.timeRemaining <= 0) clearInterval(r);
        else
          for (let t = 0; t < 2; t++)
            (n[t].textContent = e.days),
              (o[t].textContent = e.hours),
              (l[t].textContent = e.minutes),
              (s[t].textContent = e.seconds);
      }, 1e3);
    })("23 march 2022", !0);
})();
